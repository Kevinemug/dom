const count =document.querySelector('.count');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase=document.querySelector('.increase');

decrease.addEventListener('click', () =>{
let current= count.innerHTML
decrease.classList.add('active');
increase.classList.remove('active');
reset.classList.remove('active');
current--;
count.innerHTML=current
current<0? count.style.color="red" : count.style.color="#008000"

})
increase.addEventListener('click', () =>{
    let current= count.innerHTML
    current++;
    count.innerHTML=current
    increase.classList.add('active');
    decrease.classList.remove('active');
    reset.classList.remove('active');
    current<0? count.style.color="red" : count.style.color="#008000"


});
reset.addEventListener('click', () =>{
    count.innerHTML=0
    decrease.classList.add('active');
    reset.classList.add('active');
    increase.classList.remove('active');
    decrease.classList.remove('active');
    current<0? count.style.color="red" : count.style.color="#008000"


});