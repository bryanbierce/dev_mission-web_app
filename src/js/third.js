/*
  This application lets the user enter a hex color into an input box and submit it
  with a button. When the button is clicked the color string is added to an array of colors
  so that we have the users history of choices. The background of the page should be the
  most recently added color.

  When the application loads it will check to see if we have any previously stored colors
  and set the background of the page to the last one
*/

// Create a constant variable of the LocalStorage key we will use for our background colors
// This is good practice instead of writing the string each time.
// It prevents you from making typos and makes it easier to change later (only change it in one spot)
// Always remember "Don't repeat yourself"
const BACKGROUND_COLORS_KEY = "background-colors"

document.addEventListener("DOMContentLoaded", function(e) {
  // Get the background colors array as the String value stored in LocalStorage
  const colorArrayString = getBackgroundColors()
  // Check and see if anything was stored.
  if (colorArrayString === null) {
    // Set initial value of color history in case this is the first time the user visited
    // and it didn't exist yet. Make it an emptry array. This way the "background-colors",
    // key will always return an Array.
    setBackgroundColors([])
  } else {
    // If this isn't the first visit we will have a stringified array.
    // Parse the string back into an Array
    const colorArray = JSON.parse(colorArrayString)

    // If there are colors stored in the Array
    if (colorArray.length > 0) {
      // Loop over each color in the array
      colorArray.forEach((color) => {
        // For each color, create a div and append it to the page
        createColorDivAndAppendToPage(color)
      })
    }
    // If there is no color history then we don't need to change the background
  }

  // Find the button and capture it in a variable
  var button = document.getElementsByClassName("new-button")[0]

  // Tell the browser to listen for when the button is clicked
  // Give it a function to run when it hears a click
  button.addEventListener("click", function(e) {
    // Find the input box and capture it in a variable
    var inputBox = document.getElementsByClassName("new-input")[0]

    // Get the color from the input box
    const color = inputBox.value

    createColorDivAndAppendToPage(color)

    // Get the array of colors as a string from LocalStorage
    // Pass the stringified array to JSON.parse to turn back into an Array
    const colorArray = JSON.parse( getBackgroundColors() )

    // Add the new color to the array
    colorArray.push(color)

    // Turn the array back into a string and store in LocalStorage
    setBackgroundColors(colorArray)
  })

})

function createColorDivAndAppendToPage(color) {
  // Create a div element
  const newColorDiv = document.createElement("div")
  // Create a text element
  const colorText = document.createTextNode(`The color is ${color}`)
  // Put the text element in the div
  newColorDiv.appendChild(colorText)
  // Set div styles
  newColorDiv.style.width = "400px"
  newColorDiv.style.color = color
  newColorDiv.style.border = `1px solid ${color}`

  // Put the div at the end of the 'app' container
  const app = document.getElementsByClassName("app")[0]
  app.appendChild(newColorDiv)
}

function setBackgroundColor(color) {
  // Assign the color as the CSS 'background' value directly on the <body>
  document.body.style.background = color
}

function getBackgroundColors() {
  // From the LocalStorage object, get the background-colors
  // Notice I use the constant variable instead of typing the string here
  // this is the same as 'return localStorage.getItem("background-colors")
  return localStorage.getItem(BACKGROUND_COLORS_KEY)
}

function setBackgroundColors(array) {
  // Turn the Array of colors into a string
  const colorArrayString = JSON.stringify(array)

  // Set the stringified Array in LocalStorage
  // Again notice the use of hte constant variable instead of the string
  // This is the same as localStorage.setItem("background-colors", colorArrayString)
  localStorage.setItem(BACKGROUND_COLORS_KEY, colorArrayString)
}
