// let counter = 0;

// const counterDisplay = document.getElementById('counter');
// const incrementBtn = document.getElementById('increment');
// const decrementBtn = document.getElementById('decrement');
// const resetBtn = document.getElementById('reset');


// incrementBtn.addEventListener('click', () =>{
//     counter++;
//     counterDisplay.textContent = counter;
// });

// decrementBtn.addEventListener('click', () => {
//     counter--;
//     counterDisplay.textContent = counter
// });

// resetBtn.addEventListener('click', () => {
//     counter = 0;
//     counterDisplay.textContent = counter
// })


// const colorCode = document.getElementById('color-code');
// const colorBtn = document.getElementById('color-btn');

// colorBtn.addEventListener('click', () => {
//     const randomColor = generateRandomColor();
//     document.body.style.backgroundColor = randomColor;
//      colorCode.textContent = randomColor
// });

// function generateRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }






// const colorCode = document.getElementById('color-code');
// const colorBtn = document.getElementById('color-btn');

// colorBtn.addEventListener('click', () => {
//   const randomColor = generateRandomColor();
//   document.body.style.backgroundColor = randomColor;
//   colorCode.textContent = randomColor;
// });


// function generateRandomColor(){
//   const letter = "0123456789ABCDEF";
//   let color = "#";
//   for(let i = 0; i < 6; i++){
//     color += letter[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }









function updateClock(){
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${second}`
}
setInterval(updateClock, 1000);
updateClock()





// const display = document.getElementById('display');
// const clickBtn = document.getElementById('click');
// const randomImages = document.getElementById('random-images')


// const jokes = [
//     "Why don't scientists trust atoms? Because they make up everything!",
//     "Why did the scarecrow win an award? Because he was outstanding in his field!",
//     "Why don't skeletons fight each other? They don't have the guts.",
//     "What do you call cheese that's not yours? Nacho cheese!",
//     "Why did the math book look sad? Because it had too many problems."
// ]



// const jokes = [
//     "images/imoge2.png",
//     "images/imoge3.png",
//     "images/imoge4.png",
//     "images/imoge5.png"
// ]

// clickBtn.addEventListener('click', () => {
//   const randomJokes =  Math.floor(Math.random() * jokes.length);
//    randomImages.src = jokes[randomJokes]
// })








// function updateClock(){
//   const now = new Date();
//   const hours = String(now.getHours() % 12).padStart(2, "0");
//   const Minute = String(now.getMinutes()).padStart(2, "0");
//   const Second = String(now.getSeconds()).padStart(2, "0");
//   document.getElementById('clock').textContent = `${hours}:${Minute} ${Second}`;
  
// }
//  setInterval(updateClock, 1000)
// updateClock()

// const Name = document.getElementById('name').value;
//   const Email = document.getElementById('email').value;

// document.getElementById('fill').addEventListener("click", (event) => {
// event.preventDefault()
//   if(Name === "" || Email === ""){
//     alert('Please fill out all fields!')
//   }else{
//     alert(`Thank you ${Name}! your email is ${Email}.`)
//   }
// });


