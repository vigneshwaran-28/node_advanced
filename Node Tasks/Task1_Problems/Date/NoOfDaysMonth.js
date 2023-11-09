const readline=require("readline-sync");


function getNumberOfDays( year , month ){

    return new Date(year,month,0).getDate();

    // switch(month){
    //     case "1":
    //         return 31
    //     case "2":
    //         return ( (year%4==0) && (year%100!=0) || (year%400==0) )? 29: 28;
    //     case "3":
    //         return 31;
    //     case "4":
    //         return 30;
    //     case "5":
    //         return 31;
    //     case "6":
    //         return 30;
    //     case "7":
    //     case "8":
    //         return 31;
    //     case "9":
    //         return 30;
    //     case "10":
    //         return 31;
    //     case "11":
    //         return 30;
    //     case "12":
    //         return 31;
    // }
}


let year=readline.question("Enter the Year : ");

let month=readline.question("Enter the Month : ");


console.log(`No of days in a Month ${month} is `+getNumberOfDays(year,month));


