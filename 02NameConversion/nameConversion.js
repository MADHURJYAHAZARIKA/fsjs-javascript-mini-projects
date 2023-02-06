let textArea= document.querySelector('.naming_conversion #text');
let btn = document.querySelector('#convert-btn')

btn.addEventListener('click',display);
function display() {
    let pascalCase = (textArea.value).split(" ").map(a=>a[0].toUpperCase()+a.substring(1)).join("")
    // console.log((textArea.value).split(" ").map(a=>a.trim()))
    document.querySelector('.case_div #pascal-case').textContent = pascalCase;
    let camelCase = textArea.value.toLowerCase();
    let toCamelCase = camelCase.split(" ").reduce((acc,curr)=>(acc+(curr.charAt(0).toUpperCase() + curr.slice(1))))
    document.querySelector('.case_div #camel-case').textContent = toCamelCase;
    let snake_Case= textArea.value.toLowerCase();
    let to_snake_case= snake_Case.split(" ").join('_')
    document.querySelector('.case_div #snake-case').textContent = to_snake_case;
    let screaming_snake_case = textArea.value.toUpperCase();
    let to_screaming_snake= screaming_snake_case.split(" ").join('_') 
    document.querySelector('.case_div #screaming-snake-case').textContent = to_screaming_snake;
    let kebab_case = textArea.value.toLowerCase();
    let to_kebab_case= kebab_case.split(" ").join('-') 
    document.querySelector('.case_div #kebab-case').textContent = to_kebab_case;
    let screaming_kebab_case = textArea.value.toUpperCase();
    let to_scraming_kebab= screaming_kebab_case.split(" ").join('-') 
    document.querySelector('.case_div #screaming-kebab-case').textContent = to_scraming_kebab;
    
}
