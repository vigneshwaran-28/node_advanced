/*

If the length of the string execeeds the len then it should be trucated and "..." suffix should be 
added , if it is less then actual string is returned 

*/

function getTruncateSentence(str,len){

    let b=false;

    if(str.length<len){
        for(let i=0;i<len;i++)
           str+='.';
        b=true;
    }

    return (b)?str:str.slice(0,len);

}


let str="What I'd like";

let len=4;

console.log(getTruncateSentence( str , len ));

