const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded());
app.use(express.json());
app.set('view engine', 'ejs')

app.use((req,res,next) =>{
console.log(`${req.method} request for ${req.url}`);
next()
})


const Fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Mango' },
    { id: 3, name: 'Pineapple' },
]

app.get('/', (req, res) =>{
    res.send(`<button >
    <a href="/api/Fruits""> Fruits </a> 
    </button> 
    <button >
    <a href="/api/Fruits/add""> Add Favorite Fruits </a> 
    </button> `)
})

app.get('/api/Fruits', (req,res) => {
    res.render ("Fruits.ejs",{Fruits});
})

app.get('/api/Fruits/add', (req,res) =>{
    res.render('FruitForm.ejs');
})


app.get('/api/Fruits/add/:id', (req,res) =>{
    res.render('updateFruitForm.ejs');
})

app.post('/api/Fruits', (req, res)=>{

    console.log(req.body.name);

    const newWorkout ={
    id:Fruits.length + 1,
    name: req.body.name
    };
 Fruits.push(newWorkout);
    res.redirect('/api/Fruits');

})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}/`);
})
