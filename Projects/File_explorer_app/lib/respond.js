
const url=require("url");
const path=require("path");
const fs=require("fs");

const buildBreadCrumb=require("./breadcrumb.js");
const buildMainContent=require("./mainContent.js");
const getMimeType=require("./getMimeType.js");
const staticPath=path.join(__dirname,'..','static');
// console.log(__dirname,staticPath);
const respond=(request,response)=>{
   
    let pathname=url.parse(request.url).pathname;
    pathname=decodeURIComponent(pathname);
    let fullStaticPath=path.join(staticPath,pathname);
    if(!fs.existsSync(fullStaticPath)){
        console.log(`${fullStaticPath} doesn't exists!`);
        response.write("404 file not Found!");
        response.end();
        return false;
    } 
    let stat;
    try {
        stat=fs.lstatSync(fullStaticPath);
       
    } catch (error) {
        console.log("Error : ",error);
    }  

    if(stat.isDirectory()){
        // console.log(fullStaticPath);

        let pathElements=pathname.split("/").reverse();
        pathElements=pathElements.filter(e=>e!=='');
        // console.log(pathElements[pathElements.length-2]);
        let data=fs.readFileSync(path.join(staticPath,'project_files/index.html'),'utf-8');
        let folderName=pathElements[0];
        const breadCrumb=buildBreadCrumb(pathname);
        const mainContent=buildMainContent(fullStaticPath,pathname);
        data=data.replace("page_title",folderName)
        data=data.replace("pathname",breadCrumb);
        // console.log(mainContent," mai");
        data=data.replace("mainContent",mainContent);
        response.statusCode=200;
        response.write(data); 
        return response.end();
    } 

    if(!stat.isFile()){
        response.statusCode=401;
        response.write("401 : Access Denied !");
        return respond.end();
    }
    let fileDetails={};
   fileDetails.extName=path.extname(fullStaticPath);
console.log("ext : ",fileDetails.extName);


let statSize;
try {
statSize=fs.statSync(fullStaticPath);        
} catch (error) {
  console.log("error !");
}

fileDetails.size=statSize.size;

   getMimeType(fileDetails.extName)
   .then(mime=>{
      let head={};
      let options={};
      let statusCode=200;
    head["Content-Type"]=mime;
    if(fileDetails.extName==='.pdf'){
        head['Content-Disposition']='inline';
    }

    if(RegExp('audio').test(mime)|| RegExp('video').test(mime)){
        head["Accept-Ranges"]="bytes";
        const range=request.headers.range;
        console.log("range ",range);
        if(range){
            const start_end=range.replace(/bytes=/,"").split('-');
            const start=parseInt(start_end[0]);
            const end=start_end[1]?parseInt(start_end[1]):fileDetails.size-1;
           
              head["Content-Range"]=`bytes ${start}-${end}/${fileDetails.size}`;
              head["Content-Length"]=end-start+1;
              statusCode=206;
              options={start,end};
        }
       
    }
    // fs.promises.readFile(fullStaticPath,'utf-8')
    // .then((data)=>{
    //         response.writeHead(statusCode,head);
    //         response.write(data);
    //         return response.end();
        
    // })
    // .catch(err=>{
    //     response.write("Error ocuured ");
    //     return response.end(); 
    // })

    const fileStream=fs.createReadStream(fullStaticPath,options);
    response.writeHead(statusCode,head);
    fileStream.pipe(response);

    fileStream.on('close',()=>{
        return response.end();
    });
    fileStream.on('error',(error)=>{
        response.write("Error ocuured ");
        return response.end(); 
    });
     
})   
   .catch(err=>{
    response.statusCode=500;
    response.write('500 :Internal server error !');
    console.log(`Promise error : ${err}`);
    return response.end();
   })
}     

module.exports=respond;  

// /home/vigneshwaran/Documents/Node/Projects/my_project/static/Projects