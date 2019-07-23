// Track JavaScript errors in Google Analytics
export default function () {
  function link (href) {
    const a = window.document.createElement('a')
    a.href = href
    return a
  }

  window.onerror = function (message, file, line, column) {
    const host = link(file).hostname
    ga('send', {
      'hitType': 'event',
      'eventCategory': (host == window.location.hostname || host == undefined || host == '' ? '' : 'external ') + 'error',  // eslint-disable-line
      'eventAction': message,
      'eventLabel': (file + ' LINE: ' + line + (column ? ' COLUMN: ' + column : '')).trim(),
      'nonInteraction': 1
    })
  }
}
