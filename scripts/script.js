function klikaj(i) {
  document.getElementById(i).style.visibility='visible';
  var x = document.getElementById("trail");
  x.style.visibility="visible";
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   var toggleClass = document.getElementById("toggleIcon");
//   var cr = document.getElementById("cr");
 
//   if (x.style.display === "none") {
//     x.style.display = "flex";
//     x.style.flexDirection = "column";
//     toggleClass.style.visibility = "hidden";
//     cr.style.display = "block";
//   } else {
//     x.style.display = "none";
//     cr.style.display = "none";
//     toggleClass.style.visibility = "visible";
//   }
// }
function myFunction(){
  var head = document.getElementsByClassName("onScroll-nav");
  var headNav = document.getElementsByClassName("nav-header");
  headNav += " onScroll-nav";
}

const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll > 54) {
        $(".navbar").css("background" , "	#ff00ff");
      }
      else{
        $(".navbar").css("background","");
      }
  })
})
const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var slideIndex = 1;
var id;
var temp=10;

// Thumbnail image controls
function currentSlide(n) {
  temp = n;
  slideIndex = n;
  clearTimeout(id);
  showSlides();
  
}


showSlides();

function showSlides() {
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  slideIndex++;
  temp = slideIndex;
  id = setTimeout(showSlides, 5000);
  
}

var slideIndex1 = 1;
showDivs(slideIndex1);

function plusDivs(n) {  
  showDivs(slideIndex1 += n);
}

function showDivs(n) {
  var i,
      x = document.getElementsByClassName("video-slide"),
      y = document.getElementsByTagName("video");
  
  if (n > x.length) {
    slideIndex1 = 1
  }
  
  if (n < 1) {
    slideIndex1 = x.length
  }
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    y[i].pause();
  }
  
  x[slideIndex1-1].style.display = "block";
  
}

$(function(){
		
	$('#thumbnail li').click(function(){
		var thisIndex = $(this).index()
			
		if(thisIndex < $('#thumbnail li.active').index()){
			prevImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
		}else if(thisIndex > $('#thumbnail li.active').index()){
			nextImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
		}
			
		$('#thumbnail li.active').removeClass('active');
		$(this).addClass('active');

		});
	});

var width = $('#image-slider').width();

function nextImage(newIndex, parent){
	parent.find('li').eq(newIndex).addClass('next-img').css('left', width).animate({left: 0},600);
	parent.find('li.active-img').removeClass('active-img').css('left', '0').animate({left: -width},600);
	parent.find('li.next-img').attr('class', 'active-img');
}
function prevImage(newIndex, parent){
	parent.find('li').eq(newIndex).addClass('next-img').css('left', -width).animate({left: 0},600);
	parent.find('li.active-img').removeClass('active-img').css('left', '0').animate({left: width},600);
	parent.find('li.next-img').attr('class', 'active-img');
}

/* Thumbails */
var ThumbailsWidth = ($('#image-slider').width() - 18.5)/7;
$('#thumbnail li').find('img').css('width', ThumbailsWidth);

