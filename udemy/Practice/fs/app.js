const fs=require("fs");

const mars="mars.txt";
const venus="venus.txt";
const jupiter="jupiter.txt";

console.log(fs.existsSync(mars));

let data=fs.readFileSync(mars,'utf-8');

console.log(data);

fs.writeFileSync(jupiter,"This is the file created using Code :");

fs.appendFileSync(jupiter,"\nHello Vignesh");

data=fs.readFileSync(jupiter,'utf-8');

console.log(data);



