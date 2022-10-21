//User Interface Logic

window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  preReveal();
  form.addEventListener("submit", handleSubmit);
  const reset = document.getElementById("resetButton");
  reset.addEventListener("click", resetFn);
});

    //UI Function Library

function handleSubmit(event) {
  event.preventDefault();
  postReveal();
  setColors();
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

function resetFn() {
  preReveal();
  document.getElementById("rubyCard").style.backgroundColor = "aquamarine";
  document.getElementById("c#Card").style.backgroundColor = "aquamarine";
  document.getElementById("pythonCard").style.backgroundColor = "aquamarine";
  document.getElementById("javascriptCard").style.backgroundColor = "aquamarine";
  document.getElementById("rustCard").style.backgroundColor = "aquamarine";
  document.getElementById("goCard").style.backgroundColor = "aquamarine";
}

function setColors(){
  document.getElementById("rustCard").style.backgroundColor = "green"; //placeholder, complete after busienss logic and branching. 
}

//Business Logic

function makeSuggestion() {
  let q1Ans = document.getElementById("q1").value;
  let q2Ans = document.getElementById("q2").value;
  let q3Ans = document.getElementById("q3").value;
  let q4Ans = document.querySelector("input[name='radA']:checked").value;
  let q5Ans = document.querySelector("input[name='radB']:checked").value;
  let q6Ans = document.querySelector("input[name='radC']:checked").value;
}