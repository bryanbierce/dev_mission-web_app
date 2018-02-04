// Wait for the browser to finish loading resources and rendering before executing custom Javascript
document.addEventListener("DOMContentLoaded", function(e) {
  // Assign an onClick handler to the request button
  getFirstElementOfClassNameAndAssignClickHandler("request-button", function(e) {
    // TODO: REPLACE ME
    console.log("In request button handler")
  })

  // Assign an onClick handler to the timeout button
  getFirstElementOfClassNameAndAssignClickHandler("request-button", function(e) {
    // TODO: REPLACE ME
    console.log("In timeout button handler")
  })

  // Assign an onClick handler to the asynchronous request button
  getFirstElementOfClassNameAndAssignClickHandler("async-button", function(e) {
    // TODO: REPLACE ME
    console.log("In async request button handler")
  })
})


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

