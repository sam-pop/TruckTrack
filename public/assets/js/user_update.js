$(document).ready(function() {
  var userUpdateForm = $("form.userUpdate");
  var nameInput = $("input#inputName");
  var emailInput = $("input#inputEmail");

  getUserData();
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
    // getUserData();
    updateUser(userData);
    // emailInput.val("");
    // nameInput.val("");
  });

  function getUserData() {
    $(document).ready(function() {
      $.get("/api/user_data").then(function(data) {
        console.log("data from api", data);
        nameInput.val(data.name);
        emailInput.val(data.email);
      });
    });
  }

  function updateUser(userData) {
    $.ajax({
      method: "PUT",
      url: "/userProfileUpdate",
      data: userData
    });
  }
});
