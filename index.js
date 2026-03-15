$(document).ready(function() {

  // Pill button navigation with smooth scroll
  $(".pill-btn").click(function(e) {
    e.preventDefault();
    var target = $(this).attr("href");
    
    if (!target) return;
    
    var targetElement = $(target);
    if (targetElement.length === 0) return;
    
    var offset = targetElement.offset().top;
    
    // Use CSS scroll behavior for better performance
    $("html, body").animate({
      scrollTop: offset
    }, 400);  // Reduced from 600ms to 400ms for faster transitions

    return false;
  });

  // Optimized scroll listener for active button highlighting
  var scrollTimeout;
  $(window).on('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      var scrollPosition = $(window).scrollTop();

      // Update active state based on scroll
      $("section[id]").each(function() {
        var target = $(this).attr("id");
        var offset = $(this).offset().top;
        var height = $(this).outerHeight();

        if (scrollPosition >= offset - 100 && scrollPosition < offset + height - 100) {
          $(".pill-btn").removeClass("active");
          $(".pill-btn[href='#" + target + "']").addClass("active");
        }
      });
    }, 10);
  });

});



  