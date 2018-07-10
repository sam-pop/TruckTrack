$(function () {
    getGeoLocaion();
    $("#locationBtn").on("click", function (event) {
        if ($("#locationBtn").attr('class').indexOf('disabled') == -1) {
            $('#locationBtn').addClass('disabled');
            setTimeout(function () {
                updateLocation(myLoc);
                $('#locationBtn').removeClass('disabled');
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
    myLoc = {
        lat: myLat,
        lon: myLon
    };
}

function updateLocation(latlon) {
    $.post("/profile/truck/setLocation", latlon, function (data) {
        if (data.lat && data.lon) alert("Location Updated!");
        else {
            alert("Location not found! try again...");
        }
    });
}