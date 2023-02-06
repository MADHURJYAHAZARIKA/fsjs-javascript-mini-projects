const choices = document.querySelectorAll('.choice')
const userScore = document.querySelector('#userScoreVal')
const compScore = document.querySelector('#compScoreVal')
const resultUser=document.querySelector('#result-user-stat')
const resultComp=document.querySelector('#result-comp-stat')
const finalComp=document.querySelector('#result-final-stat')
let score=5;
let userScoreValue=0;
let compScoreValue=0;



const SELECTIONS = [{
    name: "rock",
    beats: "scissors"
}, {
    name: "paper",
    beats: "rock"
}, {
    name: "scissors",
    beats: "paper"

}]


choices.forEach((e) => {

    e.addEventListener("click", () => {
        const selectionName = e.firstElementChild.getAttribute("alt")
        const selectionMade = (SELECTIONS.find(selection=> selection.name === selectionName))
        const selection=selectionMade.name
        makeSelections(selection);
    });
});

function makeSelections(selection) {
     const computer=randomSelection()
     const computerSelection=computer.name
     console.log(computerSelection)
    //  const yourWinner = isWinner(selection,computerSelection)
    //  console.log(selection.name)
    //  console.log(computerSelection.name)
    //  const computerWinner=isWinner(computerSelection,selection)
     resultUser.textContent = "User" + " "+ selection;
     resultComp.textContent =  "Computer" +" " + computerSelection;
     
      
    // if(userScoreValue===score){
    //     finalComp.textContent="Winner : You";
    //     userScoreValue=0
    //     compScoreValue=0
        
    //     }
    //  if(compScoreValue===score){
    //         finalComp.textContent="Winner : Comp";
    //         compScoreValue=0
    //         userScoreValue=0
        
    //   }
    
     
     if((selection == "rock" && computerSelection == "scissors") ||
     (selection == "paper" && computerSelection == "rock") ||
     (selection == "scissors" && computerSelection == "paper"))
     {  console.log("hello user")
        userScoreValue=userScoreValue+1
        // score=score+1
        userScore.textContent=userScoreValue
        if(userScoreValue===score){
            finalComp.textContent="Winner : You";
            userScoreValue=0
            compScoreValue=0
            
            }
        
        
     }
     else if((selection == "scissors" && computerSelection == "rock") ||
     (selection == "rock" && computerSelection == "paper") ||
     (selection == "paper" && computerSelection == "scissors")){
        console.log("hello computer")
        compScoreValue=compScoreValue+1;
        // score=score+1;
        compScore.textContent=compScoreValue;
        if(compScoreValue===score){
            finalComp.textContent="Winner : Comp";
            compScoreValue=0
            userScoreValue=0
            
        
      }
    
        
     }
     
     
    }
   


// function addSelectionResult(selection,winner) {
    
// }
// function isWinner(selection,opponentSelection) {

//    if(selection.beats === opponentSelection.beats)
//    {
//     return selection === true;
//    }
//    else if(opponentSelection.beats === selection.beats)
//    {
//     return opponentSelection ===true;
//    }
// }
function randomSelection() {
     randomIndex=Math.floor(Math.random()*SELECTIONS.length)
     return SELECTIONS[randomIndex];
}