const errormsg1 = "The `input` field is empty";
const errormsg2 = "The email address is not formatted correctly";
const submitmsg = "Thank you for subscribe us!";
const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
var emailaddress = document.querySelector('[name="inputbox"]');

const button = document.querySelector('.form__button');
button.addEventListener('click', EmailSubmitCheck);

function IsEmailAddressVerified() {
    var val = emailaddress.value;
    if (val.match(emailformat)) {
        return 1;
    } else {
        return 0;
    }
}

function EmailSubmitCheck() {
    var val = emailaddress.value;
    if (val == "") {
        EmailAddressError(1);
    } else if (val != "" & IsEmailAddressVerified() == 0) {
        EmailAddressError(2);
    } else {
        EmailAddressSubmit();
    }
}

function EmailAddressError(self) {
    var errorbox = document.querySelector('.form__errorbox');
    var erroricon = document.querySelector('.form__erroricon');
    errorbox.style.visibility = "visible";
    erroricon.style.visibility = "visible";

    document.querySelector('[name="inputbox"]').style.border = "2px solid hsl(0, 93%, 68%)";
    
    if (self == 1) {
        errorbox.textContent = errormsg1;
    } else if (self == 2) {
        errorbox.textContent = errormsg2;
    }
}

function EmailAddressSubmit() {
    var errorbox = document.querySelector('.form__errorbox');
    var erroricon = document.querySelector('.form__erroricon');
    errorbox.style.visibility = "hidden";
    erroricon.style.visibility = "hidden";

    document.querySelector('[name="inputbox"]').style.border = "2px solid hsl(0, 36%, 70%)";
}