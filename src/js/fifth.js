// Wait for the browser to finish loading resources and rendering before executing custom Javascript
document.addEventListener("DOMContentLoaded", function(e) {
  getFirstElementOfClassNameAndAssignClickHandler("button", function() {
    console.log("HIII")
  })
}

function getFirstElementOfClassNameAndAssignClickHandler(className, onClickHandler) {
  /*
    className :: String
    onClickHandler :: function(event) -> void
  */

  // Get the element
  const element = document.getElementsByClassName(className)[0]
  // Assign the onClick handler
  element.addEventListener("click", onClickHandler)
}

