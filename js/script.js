$(function(){
   $('.multiple-items').slick({
	infinite: true,
	// რამდენი სურათი გამოჩნდეს
	slidesToShow: 3,
	// სლაიდის დროს რამდენი ელემნტით გადავიდეს 
	slidesToScroll: 1,
	// რომ გამოჩნდეს ღილაკები
	arrows: true,
	// რომ გამოჩნდეს ბურთულები
	dots:true,
	// responsiv-ის კოდი
	responsive: [
		{
			breakpoint: 1082,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1
			}
		  },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
    ]
  });    
});

$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
    $("#nav-id").toggleClass("open-nav-id");
	$("#header-id").toggleClass("open-header-id");
	$("#logo").toggleClass("open-logo");
	$("#signin").toggleClass("open-signin");
  })