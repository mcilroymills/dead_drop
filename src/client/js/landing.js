$(document).ready(function () {
  hideLogo();
  hideAndShow();
});

function hideAndShow () {
  $('#loginForm').hide().delay(3000).show(1500);
}

function hideLogo () {
  $('#deadDropLogo').delay(2000).hide(1500);
}