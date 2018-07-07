$(document).ready(function() {
  var signUpForm = $("form.signup");
  var nameInput = $("input#inputName");
  var emailInput = $("input#inputEmail");
  var passwordInput = $("input#inputPassword");

  var truckDesc = $("textarea#truckDesc");
  var foodCategory = $("input#foodCategory");
  var facebookID = $("input#facebookID");
  var twitterHandle = $("input#twitterHandle");
  var instagramHandle = $("input#instagramHandle");

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
    signUpUser(userData.email, userData.password, userData.name);

    var truckData = {
      name: userData.name.val().trim(),
      desc: truckDesc.val().trim(),
      foodCategory: foodCategory.val().trim(),
      facebookID: facebookID.val().trim(),
      twitterHandle: twitterHandle.val().trim(),
      instagramHandle: instagramHandle.val().trim()
    };

    truckSignup(
      truckData.name,
      truckData.desc,
      truckData.foodCategory,
      truckData.facebookID,
      truckData.twitterHandle,
      truckData.instagramHandle
    );

    emailInput.val("");
    passwordInput.val("");
    nameInput.val("");
    foodCategory.val("");
    facebookID.val("");
    twitterHandle.val("");
    instagramHandle.val("");
  });

  function signUpUser(uEmail, uPassword, uName) {
    $.post("/signup", {
      name: uName,
      email: uEmail,
      password: uPassword
    })
      .then(function(data) {
        window.location.replace(data);
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr() {
    alert("login Error");
  }

  function truckSignup(
    uName,
    tDesc,
    tFoodCategory,
    tFacebookID,
    tTwitterHandle,
    tInstagramHandle
  ) {
    $.post("/truckSignup", {
      truckName: uName,
      desc: tDesc,
      category: tFoodCategory,
      facebook: tFacebookID,
      twitter: tTwitterHandle,
      instagram: tInstagramHandle
    }).then(function(data) {
      window.location.replace(data);
    });
  }
});
