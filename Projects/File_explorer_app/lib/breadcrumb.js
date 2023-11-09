const path=require("path");
const buildBreadCrumb=pathname=>{
    const pathChunks=pathname.split("/").filter(ele=>ele!=='');
    // console.log("bread ",pathChunks);

    let breadCrumb='<li class="breadcrumb-item"><a href="/">Home</a></li>'
    let link="/";
    pathChunks.forEach((item,index)=> {
        if(index!=pathChunks.length-1){ 
            link=path.join(link,item);
            breadCrumb+=`<li class="breadcrumb-item"><a href="${link}">${item}</a></li>`;    
        }
        else{
            breadCrumb+=`<li class="breadcrumb-item active" aria-current="page">${item}</li>`;
        }
   });
    return breadCrumb;
};


module.exports=buildBreadCrumb;
 