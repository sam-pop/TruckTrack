$.get('/auth').then(function (data) {
    if (data) {
        $('#userLogin').html('<a class="nav-link" href="/profile">Profile</a>');
        $('#logout').html('<a class="nav-link" href="/logout">Logout</a>');
    }
});