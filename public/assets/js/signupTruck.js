$(document).ready(function() {
  var signUpForm = $("form.truckSignup");
  var ownerNameInput = $("input#ownerName");
  var truckNameInput = $("input#truckName");
  var emailInput = $("input#inputEmail");
  var passwordInput = $("input#inputPassword");

  var truckDesc = $("textarea#truckDesc");
  var licencePlateNum = $("input#license");
  var foodCategory = $("input#foodCategory");
  var pictureUrlInput = $("input#pictureUrl");
  var menuUrlInput = $("input#menuUrl");
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
      pictureUrl: pictureUrlInput.val().trim(),
      menuUrl: menuUrlInput.val().trim(),
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
        truckData.pictureUrl,
        truckData.menuUrl,
        truckData.facebookID,
        truckData.twitterHandle,
        truckData.instagramHandle
    );

    emailInput.val("");
    passwordInput.val("");
    ownerNameInput.val("");
    truckNameInput.val("");
    licencePlateNum.val("");
    pictureUrlInput.val("");
    menuUrlInput.val("");
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
      tPictureUrl,
      tMenuUrl,
      tFacebookID,
      tTwitterHandle,
      tInstagramHandle
  ) {
    $.post("/truckSignup", {
          truckName: tName,
          email: tEmail,
          password: tPassword,
          name: uName,
          desc: tDesc,
          category: tFoodCategory,
          menuUrl: tMenuUrl,
          pictureUrl: tPictureUrl,
          licensePlate: tLicensePlate,
          facebook: tFacebookID,
          twitter: tTwitterHandle,
          instagram: tInstagramHandle
        },function() {
          location.reload();
        }
    ).catch(handleLoginErr);
  }

  function handleLoginErr() {
    alert("login Error");
  }
});