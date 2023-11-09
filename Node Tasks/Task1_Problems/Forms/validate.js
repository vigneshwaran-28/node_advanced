
let subForm = document.forms.form1;

let inputName=subForm.elements.inp1;

function getValidOrNot(){
    
    alert((inputName.value.length>3)?"valid data !":"Invalid data !");
   
}

console.log(inputName.value);



