$(function () {
    getGeoLocaion();
    getLocation();
    $('#locationBtn').on('click', function (event) {
        setTimeout(function () {
            updateLocation(myLoc);
            alert('location updated!');
        }, 5000);

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
    $.post('/profile/truck/setLocation', latlon, function (data) {
        console.log(data);
    });
}

function getLocation() {
    $.get('/profile/truck/getLocation', function (data) {
        console.log(data);
    });
}