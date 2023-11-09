
const execSync=require("child_process").execSync;

const calculateSizeD=(itemFullPath)=>{
    const cleanedPath=itemFullPath.replace(/\s/g,'\ ');
    const output=execSync(`du -sh "${cleanedPath}"`).toString();
    // console.log(output);
    let fileSize=output.replace(/\s/g,'');
    fileSize=fileSize.split('/');
    fileSize=fileSize[0];
    const fileUnit=fileSize.replace(/\d|\./g,"");
    const fileNumber=fileSize.replace(/[a-z]/i,"");
    // console.log(fileNumber);
    const units="BKMGT";

    const fileSizeBytes=fileNumber*Math.pow(1000,units.indexOf(fileUnit.toUpperCase()));
    // console.log(fileSizeBytes);
    return [fileSize,fileSizeBytes];
}  

module.exports=calculateSizeD;