$(document).ready(function () {
  checkForLogout();
  hideLogo();
  hideAndShow();
});

function hideAndShow () {
  $('#loginForm').hide().delay(3000).show(1500);
}

function hideLogo () {
  $('#deadDropLogo').delay(2000).hide(1500);
}

function checkForLogout () {
  if($('.logoutMessage').text()) {
    $('#deadDropLogo').hide();
    $('.logoutMessage').delay(2000).hide(1500);
    $('#loginForm').hide().delay(3000).show(1500);
  }
}