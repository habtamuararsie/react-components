import $ from 'jquery'
$(document).ready(function (){
if ($(window).width() <= 768) {
    $('.footer-links-wrapper').addClass("someClass");
}
else {
    $('.footer-links-wrapper').removeClass("someClass");
}
$(window).on('resize', function (event) {
    if ($(window).width() <= 768) {
        $('.footer-links-wrapper').addClass("someClass");
    }
    else {
        $('.footer-links-wrapper').removeClass("someClass");
        $('.footer-links-wrapper ul').show();
    } 
});
// footer collapse functionality
$(document).on("click", ".someClass h3", function () {
    $(this).next('ul').slideToggle();
    $(this).toggleClass("expanded");
});

// search bar
$('.search-link').click(function (event) {
   event.preventDefualt(); 
   $(".navbar-collapse.collaps").removeClass("show");
   $(".searchbox").slideToggle();
});
});