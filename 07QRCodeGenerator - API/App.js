const data = document.querySelector('.main .data');
const btn = document.querySelector('.main .submit')
function display() {
    
    if(data.value.length>0){
        document.getElementById('img').style.display = "block"
        let textvalue= document.querySelector('.main .data').value;
        document.getElementById('img').src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textvalue}`
    }
    
}

btn.addEventListener('click',display)


