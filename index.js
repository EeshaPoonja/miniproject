var g=document.querySelector(".btn");
g.addEventListener("click",myfunc);
function myfunc(){
    g.classList.add("pressed"); 
     setTimeout(() => g.classList.remove("pressed"),2);
      
}
