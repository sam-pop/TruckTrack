$.get("/auth").then(function(isAuth) {
  if (isAuth) {
    $("#userLogin").html('<a class="nav-link" href="/profile">Profile</a>');
    $("#logout").html('<a class="nav-link" href="/logout">Logout</a>');
  }
});
