!function(t,o,i){"use strict";o.behaviors.Isotope={attach:function(o,i){var e=t("#block-curious-content").isotope({itemSelector:".views-row",layoutMode:"fitRows"});t(".filter-button-group").on("click","button",function(){var o=t(this).attr("data-filter");e.isotope({filter:o})})}},o.behaviors.magnificPopup={attach:function(o,i){t("#block-curious-content").magnificPopup({delegate:".views-row a",type:"image",gallery:{enabled:!0}}),t(".block-views-blockvideo-gallery-block-1").magnificPopup({delegate:".views-row a",type:"iframe"})}},o.behaviors.scrollTo={attach:function(o,i){t("a").on("click",function(o){if(""!==this.hash){o.preventDefault();var i=this.hash;t("html, body").animate({scrollTop:t(i).offset().top},800,function(){window.location.hash=i})}})}}}(jQuery,Drupal,drupalSettings);