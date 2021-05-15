if (document.body.clientWidth <= 700) {
  document.getElementById("box").src =
    "images/illustration-woman-online-mobile.svg";
} else {
  document.getElementById("box").src = "images/illustration-box-desktop.svg";
}

const questions = document.querySelectorAll(".item .question");
questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("main", e.target);
    console.log(e);
    let question;
    if (e.srcElement.localName === "img") {
      console.log(e.target.parentElement.parentElement);
      question = e.target.parentElement.parentElement;
    } else {
      question = e.target;
    }
    const button = e.target.nextSibling.previousElementSibling.lastElementChild;
    const answer = e.target.nextElementSibling;

    if (question.classList.contains("question-selected")) {
      question.classList.remove("question-selected");
      answer.classList.remove("show-answer");
      button.classList.remove("selected");
    } else {
      question.classList.add("question-selected");
      answer.classList.add("show-answer");
      button.classList.add("selected");
    }
  });
});
