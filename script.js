var buttons = document.querySelectorAll("button");
var buttonValue = 0;
var submit = document.getElementById("btn_sbmt");
var rating = document.getElementById("rating");
var thanks = document.getElementById("thanks");
// Attach event listeners to each button

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    // Retrieve the value of the clicked button
    if (event.target.value !== "submit") {
      buttonValue = event.target.value;
    }
    event.target.style.backgroundColor = "hsl(217, 12%, 63%)";
    event.target.style.color = "white";

    // Reset color of other buttons
    buttons.forEach(function (btn) {
      if (btn !== event.target) {
        btn.style.backgroundColor = "hsl(216, 19%, 16%)";
        submit.style.backgroundColor = "hsl(25, 97%, 53%)";
        submit.style.color = "white";
      }
    });
    console.log(buttonValue);
  });
});

buttons.forEach(function (button) {
  button.addEventListener("mouseover", function () {
    button.style.backgroundColor = "hsl(25, 97%, 53%)";
  });

  button.addEventListener("mouseout", function (event) {
    
    if (event.target.value !== buttonValue) {

      button.style.backgroundColor = "hsl(216, 19%, 16%)";
      submit.style.backgroundColor = "hsl(25, 97%, 53%)";
      submit.style.color = "white";
    }
  });
});
submit.addEventListener("mouseover", function () {
  submit.style.backgroundColor = "white";
  submit.style.color = "hsl(25, 97%, 53%)";
});

submit.addEventListener("click", function () {
  rating.style.display = "none";
  thanks.style.display = "flex";
  var message = "You selected " + buttonValue + " out of 5";
  document.getElementById("show_rating").innerHTML = message;
  console.log(message);
});
