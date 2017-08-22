(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.customJS = {
    attach: function (context, settings) {
      
      console.log(32);

      
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
      
      $('#block-curious-content').magnificPopup({
        delegate: '.views-row a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery:{
          enabled:true
        }
      });
      
    }
  };

})(jQuery, Drupal, drupalSettings);