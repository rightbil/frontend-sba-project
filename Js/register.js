// ======= variable, object and array declarations ==============

const spnMessage = document.getElementById("message-area");
const frmFocusin = document.getElementById("register");
const frmFocusout = document.getElementById("register");
const txtConfirmPassword = document.getElementById("confirmpassword");
const btnSubmit = document.getElementById("submit");

// a) capture user's email and password fromt he form

const userEmail = document.getElementById("email").value.trim();
const userPassword = document.getElementById("password").value.trim();

// b) Array of text, tel,email and password controls on register form
// excludes confirmpassword b/c its avlidation is against the password control

const listOfInputFields = document.querySelectorAll(
  "input[type=text], input[type=tel] , input[type=email], input[type=password]:not(#confirmpassword)"
);

// c) Key value pair of field name and regex
// Key values must be the 'name' of the input field in html

const regexPatterns = {
  firstname: /^([A-Za-z]{2,20})/,
  lastname: /^([a-zA-Z]{2,20})/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  telephone: /^\d{10,11}$/,
  password: /[\w@-]{4,8}$/,
};

// ========= Events ========================

// a) For each input field in the list of array
// for keyup event , it passes the target element and regexp
// the regexp value is accessed using the value of target element attribute name as a key

listOfInputFields.forEach((element) => {
  element.addEventListener("keyup", (e) => {
    validateByRegExp(e.target, regexPatterns[e.target.attributes.name.value]);
  });
});

// b) changes the backgroud color of the selected input field

frmFocusin.addEventListener(
  "focusin",
  (e) => (e.target.style.background = "yellow")
);

// c) removes the yellow backgroud color

frmFocusout.addEventListener("focusout", (e) => {
  e.target.style.background = "";
  spnMessage.innerText = "";
});

// d) confirms user password

txtConfirmPassword.addEventListener("keyup", (e) => {
  const currentpassword = document.getElementById("password").value;

  const passwordtoconfirm = document.getElementById("confirmpassword").value;

  if (String(currentpassword) != String(passwordtoconfirm)) {
    confirmPasswordError();
    return false;
  }

  confirmPasswordSuccess();
  return true;
});

// e) stores user profile to local Storage

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const userEmail = document.getElementById("email").value.trim();
  const userPassword = document.getElementById("password").value.trim();

  if (userEmail && userPassword) {

    // f) object to store email and password

    let profile = {
      userEmail: userEmail,
      userPassword: userPassword,
    };
    localStorage.setItem("userProfile", JSON.stringify(profile));
    window.open("home.html", "_top");
    return;
  }

});

// ========= Functions ======================
// Checks the input value against the regular exp
// Display message for the user

function validateByRegExp(selectedField, regex) {
  if (!regex.test(selectedField.value)) {
    validationErrorMessage(selectedField);
  } else validationSuccessMessages(selectedField);
}
// a) Input validation Message 

function validationErrorMessage(selectedField) {
  spnMessage.style.display = "block";
  spnMessage.style.color = "red";
  if (selectedField.name === "password") {
    spnMessage.innerText = " ***** is not a correct format of password";
  } else
    spnMessage.innerText =
      selectedField.value != ""
        ? selectedField.value +
        " is not a correct format of " +
        selectedField.name
        : ' "empty value"  is not a correct format of ' + selectedField.name;
}

// b) Input validation Message 

function validationSuccessMessages(selectedField) {
  spnMessage.style.display = "block";
  spnMessage.style.color = "black";
  if (selectedField.name === "password")
    spnMessage.innerText = "Password is correct format";
  else
    spnMessage.innerText =
      selectedField.value + " is correct format of " + selectedField.name;
}

// c) password mathcing fucntions

function confirmPasswordError() {
  spnMessage.style.display = "block";
  spnMessage.style.color = "red";
  spnMessage.innerText = "Password dont match , try again";
}

// d) password mathcing fucntions

function confirmPasswordSuccess() {
  spnMessage.style.display = "block";
  spnMessage.style.color = "black";
  spnMessage.innerText = "Password matched";
}


// TODO -- this is to be solved to disable the submit button till all fileds have value  

// (function(){
// const controlSubmit = document.querySelectorAll("input");
// let empty = false;
// controlSubmit.forEach(element => {

//   element.addEventListener('keyup', e => {

//    // console.log("before test : " + element.value);
//     if (e.target.value == "") {
//       console.log(e.target.value + " & " + element.value);
//       //console.log(document.getElementById('submit').disabled);
//       empty = true;
//     }
//   });

//   if (empty) {
//     document.getElementById('submit').disabled = true;
//     console.log(document.getElementById('submit').disabled);
//   } else {
//     document.getElementById('submit').disabled = false;
//     console.log("Enabled: " + document.getElementById('submit').disabled);
//   }
// });
// })();
