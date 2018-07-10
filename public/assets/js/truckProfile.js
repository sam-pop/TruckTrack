var locUpdated;
var locDate = '';
var lastLoc = {
    id: $('#truckID').data('id')
};
$(function () {
    lastLocation(lastLoc);
    getGeoLocaion();
    $("#locationBtn").on("click", function (event) {
        if ($("#locationBtn").attr('class').indexOf('disabled btn-outline-info') == -1) {
            $('#locationBtn').removeClass('btn-info');
            $('#locationBtn').addClass('disabled btn-outline-info');
            $('#locationBtn').text('Updating...');
            setTimeout(function () {
                updateLocation(locUpdated);
                lastLocation(lastLoc);
                $('#locationBtn').removeClass('disabled btn-outline-info');
                $('#locationBtn').addClass('btn-info');
                $('#locationBtn').text('Update your location again');
            }, 5000);
        }
    });
});

function getGeoLocaion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(myLocation);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function myLocation(position) {
    var myLat = position.coords.latitude;
    var myLon = position.coords.longitude;
    locUpdated = {
        lat: myLat,
        lon: myLon
    };
}

function updateLocation(latlon) {
    $.post("/profile/truck/setLocation", latlon, function (data) {
        if (data.lat && data.lon) {
            alert("Location Updated!");
        } else {
            alert("Location not found! try again...");
        }
    });
}

function lastLocation(truckId, cb) {
    $.post("/profile/truck/lastLocation", truckId, function (data) {
        locDate = data.updatedAt;
        cb(textUpdate());
    });
}

function textUpdate() {
    $('#locUpdate').text('Location last updated at ' + locDate);
}