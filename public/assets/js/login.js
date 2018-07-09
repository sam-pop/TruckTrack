$(document).ready(function () {
  var signUpForm = $("form.login");
  var emailInput = $("input#inputEmail");
  var passwordInput = $("input#inputPassword");

  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log('​userData', userData);

    if (!userData.email || !userData.password) {
      return;
    }
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  function loginUser(uEmail, uPassword) {
    $.post("/login", {
      email: uEmail,
      password: uPassword
    }, function () {
      location.reload();
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    alert("login Error");
  }
});