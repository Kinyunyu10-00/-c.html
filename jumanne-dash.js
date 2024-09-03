// 'use strict';
//  document.getElementById("botton").addEventListener('click', function(){
//     alert("book added");
//  });



document.getElementById("hh").addEventListener('click', myFunction);
function myFunction() {
  alert ("canceled succesfuly!");
}

  document.querySelector("#hh").style.backgroundColor = "red";

  document.querySelector("#button").addEventListener("click", myJembe);
  function myJembe(){
    alert('book saved');
  }
//   <button onclick="myFunction()">Try it</button>

// <script>
// function myFunction() {
//   var x = document.querySelector("div > p");
//   x.style.backgroundColor = "red";
// }
// </script>


//to link the location
function newDoc() {
    window.location.assign("https://www.w3schools.com")
  }
  function submitted()
  {
     var a = document.getElementById("name").value.trim();
     document.getElementById("new").innerHTML=
       a===""?"":"Thank you, " + a + ". " + "Click here to continue.";
  }
