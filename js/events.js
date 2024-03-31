// Option 01: directly set on the HTML element
// <button onclick="console.log(7);">Click Me</button>

//Option 02: Add onclick function on the html element
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//Option 03:
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//Option 03: Another
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// Option 04:
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// Option 04: Another
const greenButton = document.getElementById("make-green");
greenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// Option 04: Final
document
  .getElementById("make-orange")
  .addEventListener("click", function makeOrange() {
    document.body.style.backgroundColor = "orange";
  });
