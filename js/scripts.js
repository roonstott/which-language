//User Interface Logic

window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  preReveal();
  form.addEventListener("submit", handleSubmit);
});

//Function Library

function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("rustCard").style.backgroundColor = "green";
  postReveal();
}

function preReveal() {
  let hideFirst = document.getElementById("hiddenFirst");
  let hideSecond = document.getElementById("hiddenSecond");
  hideFirst.setAttribute("class" , "hidden");
  hideSecond.setAttribute("class" , "");
}

function postReveal() {
  let hideFirst = document.getElementById("hiddenFirst");
  let hideSecond = document.getElementById("hiddenSecond");
  hideFirst.setAttribute("class" , "");
  hideSecond.setAttribute("class" , "hidden");
}


//Business Logic