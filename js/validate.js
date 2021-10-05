const form = document.querySelector("#contactForm");
const userName = document.querySelector("#userName");
const userNameError = document.querySelector("#userNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const formOkMessage = document.querySelector("#message");
const formOkError = document.querySelector("#messageError");
const infoContainer = document.getElementById("info");

function validateForm(event) {
    var formError = false;
    event.preventDefault();

    if (checkLength(userName.value, 5) === true) {
        userNameError.style.display = "none";
    } else {
        userNameError.style.display = "block";
        formError = true;
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        formError = true;
    }

    if (checkLength(message.value, 15) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        formError = true;
    }

    if (formError == false) {
        formOk.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}