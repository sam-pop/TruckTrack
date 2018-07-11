var locUpdated;
var locDate = "";
var lastLoc = {
  id: $("#truckID").data("id")
};

$(function () {
  lastLocation(lastLoc);

  $('#backArrow').on('click', function (e) {
    $('#mainDiv').addClass('animated zoomOut');
    window.location.replace('/');
  });
});

function lastLocation(truckId, cb) {
  $.post("/profile/truck/lastLocation", truckId, function (data) {
    locDate = data.updatedAt;
    cb(textUpdate());
  });
}

function textUpdate() {
  $("#locUpdate").text("Location last updated at " + locDate);
}