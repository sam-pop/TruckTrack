$(document).ready(function() {
  var loginForm = $("form.loginForm");
  var emailInput = $("input#inputEmail");
  var passwordInput = $("input#inputPassword");

  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  function loginUser(lEmail, lPassword) {
    $.post("/login", {
      email: lEmail,
      password: lPassword
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  }

});