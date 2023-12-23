// form
let formLogin = document.querySelector(".form-login");
let formSignUp = document.querySelector(".form-sign-up");
let formSignUpTwo = document.querySelector(".form-sign-up-two");
let formSignUpTree = document.querySelector(".form-sign-up-tree");

// btn submit
let btnSubmitLogin = document.querySelector(".btn-submit-login");
let btnSubmitSignUp = document.querySelector(".btn-submit-sign-up");

// text
let textFormSigUp = document.querySelector(".text-form-sig-up");
let textFormLogin = document.querySelectorAll(".text-form-login");

// btn next submit sign up
let btnNextSubmitSignUpTwo = document.querySelector(
  ".btn-next-submit-sign-up-two"
);
let btnNextSubmitSignUpTree = document.querySelector(
  ".btn-next-submit-sign-up-tree"
);

// input

// input and select sign up
let inputEmailSignUp = document.querySelector(".input-email-sign-up");
let inputUserNameSignUp = document.querySelector(".input-user-name-sign-up");
let inputPasswordSignUp = document.querySelector(".input-password-sign-up");
let inputNumberSignUp = document.querySelector(".input-number-sign-up");
let inputNameSignUp = document.querySelector(".input-name-sign-up");
let inputLastNameSignUp = document.querySelector(".input-last-name-sign-up");
let inputAgeSignUp = document.querySelector(".input-age-sign-up");
let inputCitySignUp = document.querySelector(".input-city-sign-up");
let selectFieldOfStudy = document.querySelector(".select-field-of-study");
let selectGrade = document.querySelector(".select-grade");
let inputPreviousEntranceExamRankSignUp = document.querySelector(
  ".input-previous-entrance-exam-rank-sign-up"
);

// input login
let inputUserNameLogin = document.querySelector(".input-user-name-login");
let inputPasswordLogin = document.querySelector(".input-password-login");

// student

let student = [];

// text addEventListener

textFormLogin.forEach(function (event) {
  event.addEventListener("click", formLoginShow);
});

function formLoginShow() {
  formSignUp.setAttribute("style", "display: none;");
  formLogin.setAttribute("style", "display: block; opacity: 1;");
}

function formSignUpShow() {
  formLogin.setAttribute("style", "display: none;");
  formSignUp.setAttribute("style", "display: block; opacity: 1;");
}

function formSignUpTwoShow() {
  formSignUp.setAttribute("style", "display: none;");
  formSignUpTwo.setAttribute("style", "display: block; opacity: 1;");
}

function formSignUpTreeShow() {
  formSignUpTwo.setAttribute("style", "display: none;");
  formSignUpTree.setAttribute("style", "display: block; opacity: 1;");
}

function sendInformationLocalStorage(informationStudent) {
  localStorage.setItem("studentSite", JSON.stringify(informationStudent));
}

function signUp() {
  let newStudent = {
    id: 1,
    email: inputEmailSignUp.value,
    userName: inputUserNameSignUp.value,
    password: inputPasswordSignUp.value,
    number: inputNumberSignUp.value,
    name: inputNameSignUp.value,
    lastName: inputLastNameSignUp.value,
    age: inputAgeSignUp.value,
    City: inputCitySignUp.value,
    fieldOfStudy: selectFieldOfStudy.value,
    grade: selectGrade.value,
    previousEntranceExamRank: inputPreviousEntranceExamRankSignUp.value,
  };
  student.push(newStudent);
  sendInformationLocalStorage(student);
}

textFormSigUp.addEventListener("click", formSignUpShow);
btnNextSubmitSignUpTwo.addEventListener("click", formSignUpTwoShow);
btnNextSubmitSignUpTree.addEventListener("click", formSignUpTreeShow);
btnSubmitSignUp.addEventListener("click", signUp);
