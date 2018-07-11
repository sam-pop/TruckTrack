$("#separator").hide();
$.get("/auth").then(function(isAuth) {
  if (isAuth) {
    $("#userLogin").html(
      "<a class='nav-link' href='/profile'><i class='material-icons' style='font-size:0.8em'>lock_open</i>&nbsp;Profile</a>"
    );
    $("#separator").show();
    $("#logout").html(
      '<a class="nav-link" href="/logout" style="font-weight:bold;">Logout</a>'
    );
  }
});
