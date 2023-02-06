let  num1 = document.getElementById('binary');
let buttn =document.querySelector('.btn');
let output = document.querySelector('.result');
buttn.addEventListener('click',()=>{
    event.preventDefault()
    let binary = num1.value
    let convertBinary = parseInt(binary,2)
    output.textContent=convertBinary;
}
)


  