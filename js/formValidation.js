const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const submit = document.querySelector("#submit");
const nameParagraph = document.getElementById("#namep");
const emailParagraph = document.getElementById("#emailp");
const subjectParagraph = document.getElementById("#subjectp");
const messageParagraph = document.getElementById("#messagep");


function validateEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    let isValid = true;

    if (name.value.length < 3) {
        nameParagraph.innerHTML = "Please enter your full name";
        isValid = false;
    } else {
        nameParagraph.innerHTML = "";
    }

    if (!validateEmail(email.value)) {
        emailParagraph.innerHTML = "Please enter a valid email";
        isValid = false;
    } else {
        emailParagraph.innerHTML = "";
    }

    if (subject.value.length < 15) {
        subjectParagraph.innerHTML = "The subject field has to contain at least 10 characters";
        isValid = false;
    } else {
        subjectParagraph.innerHTML = "";
    }

    if (message.value.length < 26) {
        messageParagraph.innerHTML = "The message field has to contain at least 25 characters";
        isValid = false;
    } else {
        messageParagraph.innerHTML = "";
    }
   
    return isValid;
    
}

submit.addEventListener('click', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert("Thank You! we have recived your email"); 
    }
});