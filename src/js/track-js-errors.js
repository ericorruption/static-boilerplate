// Track JavaScript errors in Google Analytics
/* global ga */
module.exports = function(){
  var undefined,
      link = function (href) {
        var a = window.document.createElement('a');
        a.href = href;
        return a;
      };

  window.onerror = function (message, file, line, column) {
    var host = link(file).hostname;
    ga('send', {
      'hitType': 'event',
      'eventCategory': (host == window.location.hostname || host == undefined || host == '' ? '' : 'external ') + 'error',
      'eventAction': message,
      'eventLabel': (file + ' LINE: ' + line + (column ? ' COLUMN: ' + column : '')).trim(),
      'nonInteraction': 1
    });
  };
};
