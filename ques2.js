const fs = require('fs');

console.log('-----------------Sync-----------------');
const data = fs.readFileSync(__dirname + '/file1.txt', 'utf8')
console.log(data);
console.log('log1');

console.log('-----------------ASync-----------------');
fs.readFile('file1.txt', 'utf8', (err, data)=> {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:', data);
  });
  console.log('2');