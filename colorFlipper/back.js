const button = document.getElementById('button');
let colors = ["red", "green", "blue"];
const container = document.querySelector('.container');
const color= document.querySelector('.span');
button.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  container.style.backgroundColor = randomColor;
  button.style.backgroundColor = randomColor;
  color.innerHTML=randomColor;
  
});
