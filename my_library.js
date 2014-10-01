
$(document).ready(function(){
	alert('click to start the show...');
})






/* I've tried other elements of my html, and for some reason only javascript on body works. How can I change it?*/
$("div").fadeOut(1000)
$("body").show(1000)
$("body").fadeOut(3000)
$("body").fadeIn(2000)
$("body").slideDown(2000)
$("body").slideUp(2000)
$("body").fadeIn(4000)
$("body").animate( {
	opacity: 0.15,
	width: "70%"
} , 2000 ) ;

$("body").click(function() {
  $(this).slideUp();
});
