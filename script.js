// Simple way Dark mode
// darkBtn.addEventListener('click', ()=>{
// 	// check for event fire
//   console.log('Click event has fired!')
// 	// change h1 text
//   message.textContent = "This is dark mode"

// 	// change body background to black
//   body.style.background = "black"
// 	// change body text to chartreuse
//   message.style.color = "chartreuse"
//   // document.getElementByTagName('h1').style.color
//   // document.querySelector('h1').style.color based on the css tag
// })

// Alternative way for Dark Mode
const changeToDark = () =>{
	// check for event fire
  console.log('Click event has fired!')
	// change h1 text
  message.textContent = "This is dark mode"

	// change body background to black
  body.style.background = "black"
	// change body text to chartreuse
  message.style.color = "chartreuse"
  // document.getElementsByTagName('h1').style.color
  // document.querySelector('h1').style.color based on the css tag
}
darkBtn.addEventListener('click', changeToDark)


// // Simple way Light mode
// lightBtn.addEventListener('click', ()=>{
// 	// check for event fire
//   console.log('Click event has fired2!')
// 	// change h1 text
//   message.textContent = "This is light mode"

// 	// change body background to black
//   body.style.background = "white"
// 	// change body text to chartreuse
//   message.style.color = "Grey"
//   // document.getElementsByTagName('h1').style.color
//   // document.querySelector('h1').style.color based on the css tag
// })

// Simple way Light mode without using ID
lightBtn.addEventListener('click', ()=>{
	// check for event fire
  console.log('Click event has fired2!')
	// change h1 text
  document.getElementsByTagName('h1')[0].textContent = "This is light mode"

	// change body background to black
  body.style.background = "white"
	// change body text to chartreuse
  message.style.color = "Grey"
  // document.getElementsByTagName('h1').style.color
  // document.querySelector('h1').style.color based on the css tag
})

/* Taylor with this method you mentioned `document.getElementByTagName('h1').style.color`, is the h1 from style or from html?
Taylor 11:24 AM 
Oh you know what, I just realized I forgot a piece of that. When you select by tag name it expects that you will be selecting all of the tags with that name, so it gives you a collection. You need to select the first one by saying document.getElementsByTagName('h1’)[0].style.color I believe
*/