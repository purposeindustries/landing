function setContentSize(){
	var height = $( window ).height();
	var newHeight = height * 0.7;
	if( newHeight < 300 ){
		newHeight = 300;
	}
	$( ".main-content, .heart-container" )
		.css( "min-height",  newHeight )
		.css( "margin-top", height * 0.1 );
}
$(function(){
	setTimeout(function(){
		window.scrollTo(0, 1);
	}, 0);
	$( window ).on( "resize", setContentSize );
	setContentSize();

	var videoElem = $( ".video-elem" );
	if( Modernizr.touch ){
		$( ".video-container" )
			.css( "bottom", "0" )
			.addClass( "touch-device" );
		videoElem.find( "source" ).remove();
	}
	else{
		videoElem.on( "ended", function(){
			this.play();
		});
	}
});

$( window ).on( "load", function(){
	
});