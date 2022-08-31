const form=document.querySelector("form");
const username=document.querySelector("input[type=text]");
const password=document.querySelector("input[type=password]");


form.addEventListener("submit",onSubmit);

function onSubmit(){
    if(username.value===""||password.value===""){
        alert("please fill the form");
        return false;
    }
}
