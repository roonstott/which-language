//User Interface Logic

window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", handleSubmit);
  const reset = document.getElementById("resetButton");
  reset.addEventListener("click", resetFn);
});

    //UI Function Library

function handleSubmit(event) {
  event.preventDefault();
  postReveal();
  setColors();
  document.getElementById("languageResult").innerText = makeSuggestion();
}

function resetFn() { 
  preReveal();
  document.getElementById("rubyCard").style.backgroundColor = "antiquewhite";
  document.getElementById("c#Card").style.backgroundColor = "antiquewhite";
  document.getElementById("pythonCard").style.backgroundColor = "antiquewhite";
  document.getElementById("javascriptCard").style.backgroundColor = "antiquewhite";
  document.getElementById("rustCard").style.backgroundColor = "antiquewhite";
  document.getElementById("goCard").style.backgroundColor = "antiquewhite";
}

function preReveal() {
  const hideFirst = document.getElementById("hiddenFirst");
  const hideSecond = document.getElementById("hiddenSecond");
  hideFirst.setAttribute("class" , "hidden");
  hideSecond.setAttribute("class" , "");
}

function postReveal() {
  const hideFirst = document.getElementById("hiddenFirst");
  const hideSecond = document.getElementById("hiddenSecond");
  hideFirst.setAttribute("class" , "");
  hideSecond.setAttribute("class" , "hidden");
}

function setColors(){
  let color = colorCue();
  document.getElementById(color).style.backgroundColor = "rgb(178, 197, 57)";
}

//Business Logic

function makeSuggestion() {
  let q1Ans = parseInt(document.getElementById("q1").value);
  let q2Ans = parseInt(document.getElementById("q2").value);
  let q3Ans = parseInt(document.getElementById("q3").value);
  let q4Ans = parseInt(document.querySelector("input[name='radA']:checked").value);
  let q5Ans = parseInt(document.querySelector("input[name='radB']:checked").value);
  let q6Ans = parseInt(document.querySelector("input[name='radC']:checked").value);
  let topSum = q1Ans + q2Ans + q3Ans;
  let bottomSum = q4Ans + q5Ans + q6Ans;
  return branchMachine(topSum, bottomSum);
}

function branchMachine(top, bottom) {
  if (top <= 5 && bottom <= 5 ) {
    return "Ruby";
  } else if (top <= 5 && bottom > 5 && bottom < 10) {
    return "C#";
  } else if (top <= 5 && bottom >= 10) {
    return "Python";
  } else if (top > 5 && bottom <= 5) {
    return "Javascript";
  } else if (top > 5 && bottom > 5 && bottom < 10) {
    return "Rust";
  } else {
    return "Go";
  }
}

function colorCue() {
  let cue = makeSuggestion();
  if (cue === "Ruby") {
    return "rubyCard";
  } else if (cue === "C#") {
    return "c#Card";
  } else if (cue=== "Python") {
    return "pythonCard";
  } else if (cue === "Javascript") {
    return "javascriptCard";
  } else if (cue === "Rust") {
    return "rustCard";
  } else {
    return "goCard";
  }
}