var main = function() {
    
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggleClass('opened');
  });

  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide'),
        nextSlide = currentSlide.next(),
        currentDot = $('.active-dot'),
        nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.removeClass('active-slide');
    nextSlide.addClass('active-slide');
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
      
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide'),
        prevSlide = currentSlide.prev(),
        currentDot = $('.active-dot'),
        prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.removeClass('active-slide');
    prevSlide.addClass('active-slide');
    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
      
  });

}


$(document).ready(main);