/********************* navigation assistant ********************/
/* when burger is clicked
   -> if closed: add .open to containers and navbar
   -> if open: add .closed to containers and navbar
*/
$('.burger').on('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  if ($('.container').hasClass('opened')) {
    $('.container').removeClass('opened').addClass('closed');
    $('#navvie').removeClass('opened').addClass('closed');
    $('nav').removeClass('opened').addClass('closed');
    $('footer').removeClass('opened').addClass('closed');
  } else {
    $('.container').removeClass('closed').addClass('opened');
    $('#navvie').removeClass('closed').addClass('opened');
    $('nav').removeClass('closed').addClass('opened');
    $('footer').removeClass('closed').addClass('opened');
  }
});

/********************* navigation height adjuster ********************/
/* if in browser mode (no burger)
   -> if at page top, navbar bigger
   -> if scrolled, navbar smaller
   
   if in mobile mode
   -> if at page top, burger bigger, navbar regular
   -> if scrolled, burger smaller, navbar regular
   
   if in browser going to mobile mode
   -> if navbar already opened, navbar regular
   -> if navbar closed, navbar regular
*/
var targetHeight = 5; // 

function navAdjust (x) {
  // top of the page
  if (x >= 0){
    // if burger is not displayed
    var tall = '100px';
    var medium = '70px';
    var logotall = '200px';
    var logomedium = '145px';
    var setHeight, setlogoHeight;
    if ($('.burger').css('display') != 'block') {
      $('#navvie').css('top', '40px');
      setHeight = tall;
      setlogoHeight = logotall;
    }
    else {
      $('#navvie').css('top', '0px');
      setHeight = medium;
      setlogoHeight = logomedium;
    }    
    $('.homenav').css('height', setHeight);
    $('.homenav').css('border-top', '7px solid #125925');
    $('.navbar img').css('width', setlogoHeight);
    $('.container').css('margin-top', setHeight);
    if (window.matchMedia('(min-width: 769px)').matches)
      $('#navvie .dropdown-toggle').css('padding-bottom', '22px');
  }
  // scrolled
  else {
    $('.homenav').css('height', '50px');
    $('#navvie').css('top', '0px');
    $('.navbar img').css('width', '130px');
    $('.homenav').css('border-top', '0px');
    $('.container').css('margin-top', '50px');
    if (window.matchMedia('(min-width: 769px)').matches)
      $('#navvie .dropdown-toggle').css('padding-bottom', '20px');
  }
}

$(document).ready(function(){
  // TODO: check page before running function
    navAdjust(targetHeight);
    google.maps.event.addDomListener(window, 'load', init_map);
    google.maps.event.addDomListener(window, 'load', init_map2);
});

$(window).resize(function(){
  var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
  navAdjust(scrollPercent);
});

$(document).scroll(function(e){
  var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
  navAdjust(scrollPercent);
});

$('.container').click(function() {
  if ($('.container').hasClass('opened')) {
    $('.container').removeClass('opened').addClass('closed');
    $('#navvie').removeClass('opened').addClass('closed');
    $('nav').removeClass('opened').addClass('closed');
  }
})

function init_map() {
  var myOptions = {zoom: 14, center: new google.maps.LatLng(37.6082651,-122.0829269), mapTypeId: google.maps.MapTypeId.ROADMAP};
  map = new google.maps.Map(document.getElementById("hqmap"), myOptions);
  marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(37.6082651,-122.0829269)});
}

function init_map2() {
  var myOptions = {zoom: 14, center: new google.maps.LatLng(37.6082651,-122.0829269), mapTypeId: google.maps.MapTypeId.ROADMAP};
  map = new google.maps.Map(document.getElementById("twmap"), myOptions);
  marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(37.6082651,-122.0829269)});
}

/* TODO: animated scroll */
$('a[href^="#"]').on('click', function() { 
  window.scrollTo(window.scrollX, window.scrollY - 300);
});