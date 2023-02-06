let clickBtn = document.querySelector(".container .btn")
let jokeText =document.querySelector(".container #joke")
document.querySelector('DomContentLoaded',getJoke())
clickBtn.addEventListener('click',getJoke)

function getJoke(){
fetch('https://icanhazdadjoke.com/',{
  headers: {'Accept': 'application/json'
}
}).then(data=>data.json()).then(
    data => jokeText.innerHTML = data.joke
    
)
}