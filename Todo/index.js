let input_text=document.querySelector('.input');
let add_Button=document.querySelector('.addButton')
let container =document.querySelector('.container')
// console.log(container)

add_Button.addEventListener("click",addTask)
function addTask() {
    // console.log("hello")
    const divItem = document.createElement("div")
    divItem.className="item"

    let classItem = container.appendChild(divItem)
    let  itemInput= document.createElement("p")
    itemInput.className="item_input"
    itemInput.textContent = input_text.value;
    classItem.appendChild(itemInput);
    let editBtn = document.createElement("button");
    editBtn.className="editButton";
    editBtn.textContent ="edit"
    classItem.appendChild(editBtn);
    let deleteBtn = document.createElement("button");
    deleteBtn.className="deleteButton";
    deleteBtn.textContent ="delete"
    classItem.appendChild(deleteBtn);
    // console.log(classItem)
    deleteBtn.addEventListener('click',deleteFunc)

   function deleteFunc() {
    divItem.remove();
   }
   editBtn.addEventListener('click',editFunc)
   function editFunc() {
    itemInput.setAttribute('contentEditable','true')
    console.log(divItem)
   }

}


// !-- <div class="item">
//             <p class="item_input">Add task</p>
//             <button class="editButton">+</button>
//             <button class="deleteButton">-</button> --><
//         </div>