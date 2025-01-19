let form= document.getElementById("form");

form.addEventListener("submit",(event)=>{
let a= document.getElementById("in1").value;
let b= document.getElementById("in2").value;
let c= document.getElementById("in3").value;
if(a==""||b==""||c==""){
         alert("empty fields");
    }
else if(!b.includes('@')){
        alert("wrong email");
    }
else if(c.length<7){
        alert("password is too short");
    }
else{
        alert("form submitted");
    }
});
