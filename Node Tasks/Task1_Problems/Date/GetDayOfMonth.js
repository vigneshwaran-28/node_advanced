
const readline=require("readline-sync");

function getDayOfMonth ( date ) {
   
    let day=new Date(date).getDay();

    let map=new Map();

    map.set(0,"Sunday");
    map.set(1,"Monday");
    map.set(2,"Tuesday");
    map.set(3,"Wednesday");
    map.set(4,"Thursday");
    map.set(5,"Friday");
    map.set(6,"Saturday");

    return map.get(day);

}

let date=readline.question("Enter the data format to find the day : ");

console.log("The day for the particular date is : "+getDayOfMonth ( date ) );

