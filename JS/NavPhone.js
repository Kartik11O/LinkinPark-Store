var NavPhone = document.getElementById("NavPhone")
var Page6_Main = document.getElementById("Page6_Main")

function Open_Close(){

   if(NavPhone.style.display == "none"){
    NavPhone.style.display = "block"
   }

   else{
    NavPhone.style.display = "none"
    Page6_Main.style.display = "block"
   }

}

window.addEventListener("DOMContentLoaded" , ()=>{
   
   NavPhone.style.display = "none"


})