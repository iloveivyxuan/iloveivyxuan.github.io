var arrowDisplay, arrowIn, arrowOut;

$('#arrow').fadeOut(0);

arrowIn = function() {
  return $('#arrow').fadeIn(300);
};

arrowOut = function() {
  return $('#arrow').fadeOut(300);
};

arrowDisplay = function() {
  window.setInterval("arrowIn()", 2000);
  return window.setInterval("arrowOut()", 1000);
};

window.onload = arrowDisplay;
