$("h1").css("color", "red");
$("h1").css("font-size", "5rem");
$("h1").addClass(".diftitle");

$("button").text("rush me");

$("button").html("<em>rush me</em>");

$("a").attr("href", "http/www.yahoo.com");

$("h1").click(function(){
  $("h1").css("color", "blue");
});

$("input").keypress(function() {
   alert(event.key);
});

$("h1").on("click", function(){
  $("h1").toggle();
});
