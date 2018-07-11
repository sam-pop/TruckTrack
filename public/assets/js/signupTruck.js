$(document).ready(function() {
  var signUpForm = $("form.truckSignup");
  var ownerNameInput = $("input#ownerName");
  var truckNameInput = $("input#truckName");
  var emailInput = $("input#inputEmail");
  var passwordInput = $("input#inputPassword");

  var truckDesc = $("textarea#truckDesc");
  var licencePlateNum = $("input#license");
  var foodCategory = $("input#foodCategory");
  var pictureURLInput = $("input#pictureURL");
  var menuURLInput = $("input#menuURL");
  var facebookID = $("input#facebookID");
  var twitterHandle = $("input#twitterHandle");
  var instagramHandle = $("input#instagramHandle");

  signUpForm.on("submit", function(event) {
    event.preventDefault();

    var truckData = {
      name: ownerNameInput.val().trim(),
      truckName: truckNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      desc: truckDesc.val().trim(),
      foodCategory: foodCategory.val().trim(),
      licensePlate: licencePlateNum.val().trim(),
      pictureURL: pictureURLInput.val().trim(),
      menuURL: menuURLInput.val().trim(),
      facebookID: facebookID.val().trim(),
      twitterHandle: twitterHandle.val().trim(),
      instagramHandle: instagramHandle.val().trim()
    };
    console.log(truckData);
    if (!truckData.email || !truckData.password) {
      return;
    }
    truckSignup(
      truckData.name,
      truckData.truckName,
      truckData.email,
      truckData.password,
      truckData.desc,
      truckData.foodCategory,
      truckData.licensePlate,
      truckData.pictureURL,
      truckData.menuURL,
      truckData.facebookID,
      truckData.twitterHandle,
      truckData.instagramHandle
    );

    emailInput.val("");
    passwordInput.val("");
    ownerNameInput.val("");
    truckNameInput.val("");
    licencePlateNum.val("");
    pictureURLInput.val("");
    menuURLInput.val("");
    foodCategory.val("");
    facebookID.val("");
    twitterHandle.val("");
    instagramHandle.val("");
    truckDesc.val("");
  });

  function truckSignup(
    uName,
    tName,
    tEmail,
    tPassword,
    tDesc,
    tFoodCategory,
    tLicensePlate,
    tpictureURL,
    tmenuURL,
    tFacebookID,
    tTwitterHandle,
    tInstagramHandle
  ) {
    $.post(
      "/truckSignup",
      {
        email: tEmail,
        password: tPassword,
        name: uName,
        truckName: tName,
        desc: tDesc,
        category: tFoodCategory,
        licensePlate: tLicensePlate,
        pictureURL: tpictureURL,
        menuURL: tmenuURL,
        twitter: tTwitterHandle,
        instagram: tInstagramHandle,
        facebook: tFacebookID
      },
      function() {
        window.location.reload();
      }
    ).catch(handleLoginErr);
  }

  function handleLoginErr() {
    alert("login Error");
  }
});
