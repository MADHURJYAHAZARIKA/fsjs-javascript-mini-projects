const container=document.querySelector('.container');
const error=document.querySelector('.error');
let date =document.querySelector('.container input')
let sub = document.querySelector('#dob')
sub.addEventListener('change',getAge)


function getAge(){
displayAge();
}

function calcAge(){ 
    
    let currentDate = new Date();
    console.log(currentDate)
    let newDate = new Date(date.value)
    // console.log(newDate)
    let diffTime = currentDate - newDate
    let diffDays = Math.ceil(diffTime/(1000 * 60 * 60 * 24))
    // console.log(diffDays)
    diffDays =  Math.abs(diffDays/365)
    return diffDays;
}

function displayAge(){
    // console.log("inside displayAge")
    let currentDate = new Date();

    let newDate = new Date(date.value)
    let age = document.querySelector('.desc')
    age.textContent = `Your Age is:` + calcAge()
    let ageYears= document.querySelector('#years')
    let monthAge = document.querySelector('#months')
    let daysAge = document.querySelector('#days')

    ageYears.textContent = currentDate.getFullYear() - newDate.getFullYear()
    monthAge.textContent=(currentDate.getFullYear() - newDate.getFullYear()) * 12 + currentDate.getMonth() - newDate.getMonth()
    daysAge.textContent =Math.round((currentDate - newDate)/(3600*24))

}

// const diffTime = Math.abs(date2 - date1);
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));