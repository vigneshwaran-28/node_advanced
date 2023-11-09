
async function names(resolve,reject){
    await setTimeout(()=>{
        console.log(1000);
    },3000);
};
// pr().then(()=>console.log(res));

names();

console.log("result !");

