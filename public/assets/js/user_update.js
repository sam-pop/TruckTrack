var userUpdateForm = $("form.userUpdate")
var nameInput = $("input#inputName");
var emailInput = $("input#inputEmail");

userUpdateForm.on("submit", function(event) {
  event.preventDefault();
  var userData = {
    name: nameInput.val().trim(),
    email: emailInput.val().trim()
  };
  console.log(userData);

  if (!userData.email || !userData.name) {
    return;
  }
  updateUser(userData);
  emailInput.val("");
  nameInput.val("");
});

function updateUser(userData) {
  $.ajax({
    method: "PUT",
    url: "/userProfileUpdate",
    data: userData
  })
}

