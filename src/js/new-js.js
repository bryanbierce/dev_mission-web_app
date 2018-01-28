document.addEventListener("DOMContentLoaded", function(e) {
  const colorArrayString = getBackgroundColors()
  if (colorArrayString === null) {
    // Set initial value of color history
    setBackgroundColors([])
  } else {
    const colorArray = JSON.parse(colorArrayString)

    setBackgroundColor(colorArray[colorArray.length - 1])
  }

  var button = document.getElementsByClassName("new-button")[0]

  button.addEventListener("click", function(e) {
    var inputBox = document.getElementsByClassName("new-input")[0]

    // get the color from the input box
    const color = inputBox.value
    // set the color as the background
    setBackgroundColor(color)

    // get the array of colors, unstringify it
    const colorArray = parseColorsFromString(getBackgroundColors())
    // add the new color to the array
    colorArray.push(color)
    // turn the array back into a string and store in localStorage
    setBackgroundColors(colorArray)
  })

})

function setBackgroundColor(color) {
  document.body.style.background = color
}

function getBackgroundColors() {
  return localStorage.getItem("background-colors")
}

function setBackgroundColors(array) {
  localStorage.setItem(JSON.stringify(array))
}

function parseColorsFromString(colorString) {
  return JSON.parse(colorString)
}