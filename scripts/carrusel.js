$(document).ready(function(){
	// Activate the Carousel, but pause it from the start
	$("#myCarousel").carousel("pause");
		  
	// Enable Carousel Indicators
	$(".item1").click(function(){
	  $("#myCarousel").carousel(0);
	});
	$(".item2").click(function(){
	  $("#myCarousel").carousel(1);
	});
	$(".item3").click(function(){
	  $("#myCarousel").carousel(2);
	});
	  
	// Enable Carousel Controls
	$(".carousel-control-prev").click(function(){
	  $("#myCarousel").carousel("prev");
	});
	$(".carousel-control-next").click(function(){
	  $("#myCarousel").carousel("next");
	});
  });