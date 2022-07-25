$(document).ready(function () {
  let text = "";

  $("#btn").click(function () {
    $("#text").select();
    document.execCommand("copy");
    text = $("#text").val();
  });

  $(".paste-btn").click(function () {
    $("#paste").val(text);
  });
});
