function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}




(function($) {

  $(window).scroll(function(){
    $('#MainNav').attr('style','opacity:0.9 !important');
    $('#MainNav').remove('classfix').addClass('');
  });




  // Menu filer
  $("#menu-flters li a").click(function() {
    $("#menu-flters li a").removeClass('active');
    $(this).addClass('active');

    var selectedFilter = $(this).data("filter");
    //  $("#menu-wrapper").fadeTo(100, 0);

    $(".menu-restaurant").fadeOut();

    setTimeout(function() {
      $(selectedFilter).slideDown();
      //$("#menu-wrapper").fadeTo(300, 1);
    }, 300);
  });

  $("#menu-flters li a.active").each(function(){
    var selectedFilter = $(this).data("filter");

    $(".menu-restaurant").hide();

    $(selectedFilter).show();
  });

 // $("#menu-wrapper").removeClass("hide");

  // Add smooth scrolling to all links in navbar + footer link
  $(".site-menu a").on('click', function(event) {
    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }

  });

  $(".sidenav a").on('click', function() {
		closeNav();
	});

})(jQuery);

window.onscroll = function() {
  growShrinkLogo()
};

// Shrink Logo with scrolling to Navbar 
function growShrinkLogo() {
  var Logo = document.getElementById("Logo")
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    Logo.style.width = '45px';
  } else {
    Logo.style.width = '45px';
  }
}


// Slideshow section

/* 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
*/