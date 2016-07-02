
/* ===== BOOTSTRAP ===== */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

//= _partials/bootstrap/transition.js

//= _partials/bootstrap/alert.js

//= _partials/bootstrap/button.js

//= _partials/bootstrap/carousel.js

//= _partials/bootstrap/collapse.js

//= _partials/bootstrap/dropdown.js

//= _partials/bootstrap/modal.js

//= _partials/bootstrap/tooltip.js

//= _partials/bootstrap/popover.js

//= _partials/bootstrap/scrollspy.js

//= _partials/bootstrap/tab.js

//= _partials/bootstrap/affix.js
