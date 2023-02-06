const btn = document.getElementById("button")


btn.addEventListener("click",()=>{
    if(document.getElementById("canvas").style.backgroundColor="red")
    {
    document.getElementById("canvas").style.backgroundColor="purple"
    }
   else
   {
        document.getElementById("canvas").style.backgroundColor="red" 
    }
})