function onScroll(event){
  var scrollPosition = $(document).scrollTop();
  $('#sidebar a').each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
      $('#sidebar a').removeClass("active");
      currentLink.addClass("active");
    }
    else{
      currentLink.removeClass("active");
    }
  });
}

$(document).ready(function() { 

  // smooth scroll
  $('#sidebar a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('#sidebar a').each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active');

    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 100
    }, 500, function () {
      $(document).on("scroll", onScroll);
    });
  });

  // toggle active class for menu
  $(document).on("scroll", onScroll);

  // button toggle
  $('ul.button-toggle button').click(function() {
    $(this).closest('ul').find('button').removeClass('active');
    $(this).addClass('active');
  });

  // allow select box styling
  $("select").selectbox();

});