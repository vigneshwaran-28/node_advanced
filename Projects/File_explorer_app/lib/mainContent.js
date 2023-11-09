
const fs=require("fs");
const path=require("path");
const calculateSizeD=require("./calculateSizeD.js");
const calculateSizeF=require("./calculateSizeF.js");
const buildMainContent=(fullStaticPath,pathname)=>{
    let mainContent="";
    let items;
    try {
         items= fs.readdirSync(fullStaticPath);
        console.log(items);
    } catch (error) {
        console.log("error : ",error);
        return `<div class="alert alert-danger">Internal Server Error</div>`
        // return "Internal ";
    }  
       
    items.forEach(item => {
       let link=path.join(pathname,item);
       const itemFullPath=path.join(fullStaticPath,item);
       let itemDetails={};
    //    let status;
    itemDetails.name=item;
       try {
        itemDetails.status=fs.statSync(itemFullPath);

       } catch (error) {
            console.log("error ",error);
            mainContent=`<div class="alert alert-danger">Internal Server Error</div>`
       }
    //    let icon,itemSize,itemSizeBytes;
       if(itemDetails.status.isDirectory()){
        itemDetails.icon="<ion-icon name='folder'></ion-icon>";
      [itemDetails.itemSize,itemDetails.itemSizeBytes]=calculateSizeD(itemFullPath);
    }else if(itemDetails.status.isFile()){
        itemDetails.icon="<ion-icon name='document'></ion-icon>";
        [itemDetails.itemSize,itemDetails.itemSizeBytes]=calculateSizeF(itemDetails.status); 
    }  

    itemDetails.timeStamp=parseInt(itemDetails.status.mtimeMs);

    itemDetails.date=new Date(itemDetails.timeStamp);
    itemDetails.date=itemDetails.date.toLocaleString(); 
    console.log(itemDetails.date); 
    
    mainContent+= `
       <tr data-name="${itemDetails.name}" data-size="${itemDetails.itemSizeBytes}" data-time="${itemDetails.timeStamp}">  
        <td>${itemDetails.icon}<a href="${link}">${item}</a></td> 
        <td>${itemDetails.itemSize}</td> 
        <td>${itemDetails.date}</td>
       </tr>`;   
    });       
      
     
    return mainContent; 
};

module.exports=buildMainContent;


