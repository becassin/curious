(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.customJS = {
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

})(jQuery, Drupal, drupalSettings);