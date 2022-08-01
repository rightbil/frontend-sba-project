//  variable to hold the user eamil and password from the local storage
let currentUserProfile = JSON.parse(localStorage.getItem("userProfile"));
const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const currentEmail = document.getElementById("email").value.trim();
  const currentPassword = document.getElementById("password").value.trim();
  if (currentUserProfile != null) {
    if (currentEmail != "" && currentPassword != "") {
      if (
        currentEmail != currentUserProfile.userEmail ||
        currentPassword != currentUserProfile.userPassword
      ) {
        alert("Email or password is incorrect, try again");
        currentEmail.value = "";
        currentPassword = "";
        return;
      } else {
        window.open("home.html", "_top");
      }
    } else {
      alert("Either email or password is empty");
      currentEmail.value = "";
      currentPassword = "";
      return;
    }
  } else {
    result = confirm("You didn't registered with us, you want to registre now?");
    if (result) {
      window.open("register.html", "_top");
    }
    return;
  }
});
