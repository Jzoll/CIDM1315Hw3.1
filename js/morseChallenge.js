//Compare user input to correct and wrong answers
function morseChallenge() {
  let userMorse = document.getElementById("morseCode").value;
  let compareMorse = document.getElementById("framework");
  let chosenVal = compareMorse.value;
  let secretImg = document.getElementById("secretImg");
  let secretTex = document.getElementById("secretTxt");

  //remove whitespace from user input
  userMorse = userMorse.replace(/\s/g, "");

  // ensures code only includes "-", ".", and " "
  var regexMorse = /^[- .]+$/g;
  var checkReg = userMorse.match(regexMorse);

  console.log(chosenVal);

  //correct
  if (userMorse == chosenVal) {
    alert("Great Job!");
    //secret code
  } else if (userMorse == "....-.-..-..-") {
    alert("You found the secret");
    secretImg.classList.remove("secret");
    secretImg.classList.add("center");
    secretTxt.classList.remove("secret");
    secretTxt.classList.add("center");
    //wrong combination of "-", ".", and " "
  } else if (userMorse != chosenVal && checkReg != null) {
    alert("Sorry try again");
    //user response includes invalid characters
  } else if (userMorse != chosenVal && checkReg == null) {
    alert('You did not enter "." and "/" ');
  }
}
