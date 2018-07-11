$(document).ready(function () {
  var truckUpdateForm = $("form.truckUpdate");
  var ownerNameInput = $("input#ownerName");
  var truckNameInput = $("input#truckName");
  var emailInput = $("input#inputEmail");

  var truckDesc = $("textarea#truckDesc");
  var licencePlateNum = $("input#license");
  var foodCategory = $("input#foodCategory");
  var pictureURLInput = $("input#pictureUrl");
  var menuURLInput = $("input#menuUrl");
  var facebookID = $("input#facebookID");
  var twitterHandle = $("input#twitterHandle");
  var instagramHandle = $("input#instagramHandle");

  getTruckUserData();
  getTruckData();
  truckUpdateForm.on("submit", function (event) {
    event.preventDefault();
    var truckUserData = {
      name: ownerNameInput.val().trim(),
      email: emailInput.val().trim()
    };

    var truckData = {
      truckName: truckNameInput.val().trim(),
      desc: truckDesc.val().trim(),
      category: foodCategory.val().trim(),
      licensePlate: licencePlateNum.val().trim(),
      pictureURL: pictureURLInput.val().trim(),
      menuURL: menuURLInput.val().trim()
    };

    if (!truckUserData.email || !truckUserData.name) {
      return;
    }

    updateTruckUserData(truckUserData);
    updateTruckData(truckData);
  });

  function getTruckData() {
    $.get("/api/truck").then(function (data) {
      truckDesc.val(data.truck.desc);
      truckNameInput.val(data.truck.truckName);
      licencePlateNum.val(data.truck.licensePlate);
      pictureURLInput.val(data.truck.pictureURL);
      foodCategory.val(data.truck.category);
      if (data.truck.menuURL) {
        menuURLInput.val(data.truck.menuURL);
      } else {
        menuURLInput.val("");
      }
    });
  }

  function updateTruckUserData(truckUserData) {
    $.ajax({
      method: "PUT",
      url: "/userProfileUpdate",
      data: truckUserData
    });
  }

  function getTruckUserData() {
    $.get("/api/user_data").then(function (data) {
      console.log("data from api", data);
      ownerNameInput.val(data.name);
      emailInput.val(data.email);
    });
  }

  function updateTruckData(truckData) {
    $.ajax({
      method: "PUT",
      url: "/truckProfileUpdate",
      data: truckData
    });
  }
});