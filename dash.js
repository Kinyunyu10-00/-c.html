'use strict'


const button = document.getElementById('button');button.addEventListener('click',function(){
    alert('student added');
});




var x= document.getElementById("mybtn");
x.addEventListener("mouseover",myfunction);
x.addEventListener("click",mysecondFunction);
x.addEventListener("mouseout", myThirdFunction);


function myfunction(){
    document.getElementById("demo").innerHTML += "clicked! <dr>";
};

 function changetext(id){
    id.innerHTML ="student canceled!";
 }

 function displaydate() {
    document.getElementById("demo").innerHTML = Date();
 }
 