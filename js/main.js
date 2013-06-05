$(function(){
	var height = $( window ).height();

	$( ".main-content, .heart-container" )
		.css( "min-height",  height * 0.7 )
		.css( "margin-top", height * 0.1 );

	$( ".video-elem" ).on( "ended", function(){
		this.play();
	});
});
