const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody=document.querySelector(".accordion_body");
const faq1= document.querySelector('.faq #one')
const faq2= document.querySelector('.faq #two')
const faq3= document.querySelector('.faq #three')
const faq_h1=document.querySelector('.faq .p_one')
const faq_h2=document.querySelector('.faq .p_two')
const faq_h3=document.querySelector('.faq .p_three')
const show_btn=document.querySelector(".show-btn")
const show_btn2=document.querySelector(".show-btn-two")
const show_btn3=document.querySelector(".show-btn-three")
show_btn.addEventListener('click',createFaq)
show_btn2.addEventListener('click',createFaq2)
show_btn3.addEventListener('click',createFaq3)

let count=0;
let count1=0;
let count2=0

const faqs = [];


function showFaq() {
  faq1.innerText=faqData[0].question
  faq2.innerText=faqData[1].question
  faq3.innerText=faqData[2].question

}

function createFaq() {
 faq_h1.innerText=faqData[0].answer
  faq_h2.innerText=faqData[1].answer
  faq_h3.innerText=faqData[2].answer
  if(count===0)
  {
    faq_h1.style.display="initial"
    count=1;
  }
  else{
    faq_h1.style.display="none"
    count=0;
  }

  
  
}
function createFaq2() {
  faq_h1.innerText=faqData[0].answer
   faq_h2.innerText=faqData[1].answer
   faq_h3.innerText=faqData[2].answer
   if(count1===0)
   {
     faq_h2.style.display="initial"
     count1=1;
   }
   else{
     faq_h2.style.display="none"
     count1=0;
   }
   
   
   
 }
 function createFaq3() {
  faq_h1.innerText=faqData[0].answer
   faq_h2.innerText=faqData[1].answer
   faq_h3.innerText=faqData[2].answer
   if(count2===0)
   {
     faq_h3.style.display="initial"
     count2=1;
   }
   else{
     faq_h3.style.display="none"
     count2=0;
   }
   
   
   
 }

function btnStatusUpdate() {
  showFaq()
  
}
btnStatusUpdate()



