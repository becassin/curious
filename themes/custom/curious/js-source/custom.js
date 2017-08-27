(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.Isotope = {
    attach: function (context, settings) {
      
      // init Isotope
      var $grid = $('#block-curious-content').isotope({
        // options
        //         
        itemSelector: '.views-row',
        layoutMode: 'fitRows'
      });
      // filter items on button click
      $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
      
    }
  };

  Drupal.behaviors.magnificPopup = {
    attach: function (context, settings) {
      
      $('#block-curious-content').magnificPopup({
        delegate: '.views-row a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery:{
          enabled:true
        }
      });
      
      $('.block-views-blockvideo-gallery-block-1').magnificPopup({
        delegate: '.views-row a', // child items selector, by clicking on it popup will open
        type: 'iframe',
        // other options
      });
      
    }
  };

  Drupal.behaviors.scrollTo = {
    attach: function (context, settings) {
      
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {

          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
         
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          } // End if
        });
      
    }
  };

})(jQuery, Drupal, drupalSettings);