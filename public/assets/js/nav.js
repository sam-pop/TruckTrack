$('#separator').hide();
$.get("/auth").then(function (isAuth) {
  if (isAuth) {
    $("#userLogin").html('<a class="nav-link" href="/profile">Profile</a>');
    $('#separator').show();
    $("#logout").html('<a class="nav-link" href="/logout">Logout</a>');
  }
});