// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


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