$(document).ready(function() {
  var signUpForm = $("form.signup");
  var emailInput = $("input#inputEmail");
  var passwordInput = $("input#inputPassword");

  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    // console.log(userData);

    if (!userData.email || !userData.password) {
      return;
    }
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  function signUpUser(email, password) {
    $.post("/signup", {
      email: email,
      password: password
    })
      .then(function(data) {
        window.location.replace(data);
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    alert('login Error');
  }
});
