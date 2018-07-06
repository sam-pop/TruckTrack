$(document).ready(function() {
  var signUpForm = $("form.signup");
  var nameInput = $("input#inputName");
  var emailInput = $("input#inputEmail");
  var passwordInput = $("input#inputPassword");

  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    console.log(userData);

    if (!userData.email || !userData.password) {
      return;
    }
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
    nameInput.val("");
  });

  function signUpUser(email, password) {
    $.post("/signup", {
      name: name,
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
