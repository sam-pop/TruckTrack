$(document).ready(function () {
  var signUpForm = $("form.signup");
  var nameInput = $("input#inputName");
  var emailInput = $("input#inputEmail");
  var passwordInput = $("input#inputPassword");

  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    signUpUser(userData.email, userData.password, userData.name);
    emailInput.val("");
    passwordInput.val("");
    nameInput.val("");
  });

  function signUpUser(uEmail, uPassword, uName) {
    $.post("/signup", {
      name: uName,
      email: uEmail,
      password: uPassword
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    alert("login Error");
  }
});