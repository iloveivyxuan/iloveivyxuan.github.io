$('#arrow').fadeOut(0)

arrowIn = () ->
	$('#arrow').fadeIn(300)
arrowOut = () ->
	$('#arrow').fadeOut(300)
arrowDisplay = () ->
	window.setInterval arrowIn, 2000 
	window.setInterval arrowOut, 1000 