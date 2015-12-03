var FastClick = require('fastclick');
require('./track-js-errors');

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

(function ($) {
  'use strict';
  // do shit
} (jQuery));
