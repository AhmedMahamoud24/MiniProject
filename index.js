const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded());
app.use(express.json());
app.set('view engine', 'ejs')

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

const Fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Mango' },
    { id: 3, name: 'Pineapple' },
]

app.get('/', (req, res) => {
    res.send(`<button >
    <a href="/api/Fruits""> Fruits </a> 
    </button> 
    <button >
    <a href="/api/Fruits/add""> Add Favorite Fruits </a> 
    </button> `)
})

// Refactor the /api/Fruits route to use Promises and async/await
app.get('/api/Fruits', async (req, res) => {
    try {
        const fruits = await getFruits();
        res.render("Fruits.ejs", { Fruits: fruits });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching fruits");
    }
});

// Function to get Fruits using a Promise
function getFruits() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Fruits);
        }, 1000); 
    });
}

app.get('/api/Fruits/add', (req, res) => {
    res.render('FruitForm.ejs');
})

app.get('/api/Fruits/add/:id', (req, res) => {
    res.render('updateFruitForm.ejs');
})

// Refactor the /api/Fruits POST route to use Promises and async/await
app.post('/api/Fruits', async (req, res) => {
    try {
        const newFruit = {
            id: Fruits.length + 1,
            name: req.body.name
        };
        await addFruit(newFruit);
        res.redirect('/api/Fruits');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding fruit");
    }
});

// Function to add a new Fruit using a Promise
function addFruit(newFruit) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Fruits.push(newFruit);
            resolve();
        }, 1000); // Simulate an asynchronous operation
    });
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
