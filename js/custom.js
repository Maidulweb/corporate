$('.menu_responsive').on('click', function(){
  $('.ok').toggleClass('open');
});
   window.onscroll = function() {myFunction()};

var corporate_sticky = document.getElementById("corporate_sticky");
var sticky = corporate_sticky.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    corporate_sticky.classList.add("sticky")
  } else {
    corporate_sticky.classList.remove("sticky");
  }
}
/*menu active*/

  $('.menu ul li').on('click',function(all){
  $('.menu ul li').removeClass('menu_current');
  $(this).addClass('menu_current');
});

/*corporate carouser*/

$('#carouselCorporate').carousel({
 
  interval: 15000,
  pause: "null",
})

/*testimonial_slider*/


$('#carouselE').carousel({
 
  interval: 6000,
  pause: "null",
})


/*team slider*/
$('#carouselTeam').carousel({
 
  interval: 6000,
  pause: "null",
})
/*portfolio*/

$('.portfolio_button').click(function(){
  var value = $(this).attr('data-filter');
  if(value == 'all'){
    $('.portfolio_filter').show('1000');
  }else{
         $('.portfolio_filter').not("."+value).hide('1000');
         $('.portfolio_filter').filter("."+value).show('1000');
  }
});

/*portfolio active*/
  $('.portfolio ul li').on('click',function(all){
  $('.portfolio ul li').removeClass('portfolio_current');
  $(this).addClass('portfolio_current');
});

$('.timer').countTo();

