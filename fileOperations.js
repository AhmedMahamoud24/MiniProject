const fs = require('fs');


// Write
const Data = 'Hello World!';
fs.writeFile('example.txt', Data, err => {
  if (err) {
    console.error(err);
  }
  
});




// Read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:', data);
});

// Delete a file 

fs.unlink('example.txt',function(err){
    if(err) return console.log(err);
    console.log('file deleted successfully');
});  