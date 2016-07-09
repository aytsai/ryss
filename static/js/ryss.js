/********************* navigation assistant ********************/
/* when burger is clicked
   -> if closed: add .open to containers and navbar
   -> if open: add .closed to containers and navbar
*/
$('.burger').on('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  if ($('.container2').hasClass('opened')) {
    $('.container2').removeClass('opened').addClass('closed');
    $('nav').removeClass('opened').addClass('closed');
    $('footer').removeClass('opened').addClass('closed');
  } else {
    $('.container2').removeClass('closed').addClass('opened');
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
var targetHeight = 28; // 

function navAdjust (x) {
  // top of the page
  if (x >= 0){
    // if burger is not displayed
    var tall = '108px';
    var medium = '80px';
    var logotall = '200px';
    var logomedium = '130px';
    var setHeight, setlogoHeight;
    if ($('.burger').css('display') != 'block') { // not in mobile
      setHeight = tall;
      setlogoHeight = logotall;
      $('.container2').css('margin-top', '108px');
      $('.carousel-text-right').css('padding-top', '108px');
      $('.carousel-text-left').css('padding-top', '108px');
      $('.navbar-brand').css('line-height', '50px');
      $('.navbar-brand').css('padding-top', '20px');
      $('.navbar-brand').css('padding-bottom', '20px');
      $('.navbar-brand').css('height', '80px');
      $('.navbar-nav li .dropdown-toggle').css('line-height', '50px');
      if (window.matchMedia('(max-width: 773px)').matches) {
        $('.carousel-text-right').css('padding-top', '58px');
        $('.carousel-text-left').css('padding-top', '58px');
      }
    }
    else {
      $('.navbar-right').css('top', '0px');
      $('.navbar-right').css('margin-top', '0px');
      $('.navbar-right .dropdown').css('padding-top', '0px');
      setHeight = medium;
      setlogoHeight = logomedium;
      $('.container2').css('margin-top', '58px');
      $('.carousel-text-right').css('padding-top', '58px');
      $('.carousel-text-left').css('padding-top', '58px');
      $('.navbar-brand').css('padding-top', '10px');
      $('.navbar-brand').css('padding-bottom', '10px');
      $('.navbar-brand').css('line-height', '25px');
      $('.navbar-brand').css('height', '53px');
    $('.navbar-nav li .dropdown-toggle').css('line-height', '22px');
    }    
    $('#secondary-menu').css('background-color', 'rgba(0, 0, 0, 0.6)'); //'rgba(0, 102, 41, 0.5)');
    $('.navvie').css('background-color', 'rgba(255, 255, 255, 0.95)');
    $('.homenav').css('height', setHeight);
  }
  // scrolled
  else {
    $('.homenav').css('height', '80px');
    $('.navbar-brand').css('height', '53px');
    $('.navbar-brand').css('padding-top', '10px');
    $('.navbar-brand').css('padding-bottom', '10px');
    if ($('.burger').css('display') != 'block') // not on mobile
      $('#navvie').css('top', '28px');
    $('.navbar-brand').css('line-height', '25px');
    $('.container2').css('margin-top', '58px');
    $('.carousel-text-right').css('padding-top', '58px');
    $('.carousel-text-left').css('padding-top', '58px');
    $('#secondary-menu').css('background-color', '#1F542F');
    $('.navbar-nav li .dropdown-toggle').css('line-height', '22px');
    $('.navvie').css('background-color', 'rgba(255, 255, 255, 1)');
    if (window.matchMedia('(min-width: 769px)').matches) {
      $('.navbar-right').css('top', '');
      $('.navbar-right').css('margin-top', '');
    }
  }
}

$(document).ready(function(){
  navAdjust(targetHeight);
  if ($('#hqmap').length)
    google.maps.event.addDomListener(window, 'load', init_mapm);
  if ($('#taiwan').length) {
    google.maps.event.addDomListener(window, 'load', init_map);
    google.maps.event.addDomListener(window, 'load', init_map2);
  }
  if ($(window.location.hash).length) {
    var scrollOff;
    if ($('.burger').css('display') == 'none')
      scrollOff = 100;
    else
      scrollOff = 70;
    $('html,body').animate({
      scrollTop: $(window.location.hash).offset().top - scrollOff
    }, 700);
  }
});

$(window).resize(function(){
  var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
  navAdjust(scrollPercent);
});

$(document).scroll(function(e){
  var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
  navAdjust(scrollPercent);
});

$('.container2').click(function() {
  if ($('.container2').hasClass('opened')) {
    $('.container2').removeClass('opened').addClass('closed');
    $('nav').removeClass('opened').addClass('closed');
    $('footer').removeClass('opened').addClass('closed');
  }
});

$('#home-button').click(function() {
  if ($('.container2').hasClass('opened')) {
    $('.container2').removeClass('opened').addClass('closed');
    $('nav').removeClass('opened').addClass('closed');
    $('footer').removeClass('opened').addClass('closed');
  }
});

function init_map() {
  var myOptions = {zoom: 14, center: new google.maps.LatLng(37.6082651,-122.0829269), mapTypeId: google.maps.MapTypeId.ROADMAP};
  map = new google.maps.Map(document.getElementById("hqmap"), myOptions);
  marker = new google.maps.Marker({map: map,
                                   position: new google.maps.LatLng(37.6082651,-122.0829269),
                                   icon: '../static/img/marker.png'});
}

function init_mapm() {
  var myOptions = {zoom: 14, center: new google.maps.LatLng(37.6082651,-122.0829269), mapTypeId: google.maps.MapTypeId.ROADMAP};
  map = new google.maps.Map(document.getElementById("hqmap"), myOptions);
  marker = new google.maps.Marker({map: map,
                                   position: new google.maps.LatLng(37.6082651,-122.0829269),
                                   icon: './static/img/marker.png'});
}

function init_map2() {
  var myOptions = {zoom: 14, center: new google.maps.LatLng(25.0295289,121.4128502), mapTypeId: google.maps.MapTypeId.ROADMAP};
  map = new google.maps.Map(document.getElementById("twmap"), myOptions);
  marker = new google.maps.Marker({map: map,
                                   position: new google.maps.LatLng(25.0295289,121.4128502),
                                   icon: '../static/img/marker.png'});
}

/* animated scroll */
$('a[href*="#"]:not([href="#"]):not([href="#intro"]').click(function() {
  /* close the navbar if mobile */
  if ($('.burger').css('display') == 'block' && $('.container2').hasClass('opened')) {
    $('.container2').removeClass('opened').addClass('closed');
    $('nav').removeClass('opened').addClass('closed');
    $('footer').removeClass('opened').addClass('closed');
  }
  
  /* begin scroll */
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

    var scrollOff;
    if (target.length) {
      console.log(target);
      if (target == "#about" || target == "#overview")
        scrollOff = 0;
      else if ($(window).scrollTop() <= 5) {
        if ($('.burger').css('display') == 'none')
          scrollOff = 100;
        else
          scrollOff = 70;
      }
      else {
        scrollOff = 50;
      }
      $('html, body').animate({
        scrollTop: target.offset().top - scrollOff
      }, 700);
    }
  }
});