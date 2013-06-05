function setContentSize(){
	var height = $( window ).height();
	$( ".main-content, .heart-container" )
		.css( "min-height",  height * 0.7 )
		.css( "margin-top", height * 0.1 );
}
$(function(){
	

	$( window ).on( "resize", setContentSize );
	setContentSize();

	$( ".video-elem" ).on( "ended", function(){
		this.play();
	});
});
