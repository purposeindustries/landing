$(function(){
	setTimeout(function(){
		window.scrollTo(0, 1);
	}, 0);
	var videoElem = $( ".video-elem" );
	var inputEl = $( ".mail-input" );
	$( ".notify-me" ).on( "click", function onNotifyClick( e ){
		var mail = $.trim( inputEl.val() );
		if( mail ){
			$.ajax({
				url: "/add",
				type: "POST",
				data: {
					mail: mail
				},
				dataType: "json",
				success: function onPostSuccess( data ){
					$( ".hatespam, .notify-me" ).hide();
					inputEl.hide();
					$( ".heart-container" )
						.find( "h3" )
							.text( "You Love Porn" )
						.end()
						.find( "p" )
							.html( "Yes! We knew you do :)<br />Follow us." );
					$( ".navbar, .video-container" ).remove();
					$( document.body ).addClass( "thankyou" );
					$( "footer" ).appendTo( ".heart-container" ).removeClass( "pull-right" );
				},
				error: function( xhr ){
					if( xhr.status == 400 ){
						alert( "Wrong email address" );
					}
					else{
						alert( "Unkown error occured" );
					}
				}
			});
		}
	});
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
		var player = $( "video" );
		var mediaAspect = player.prop( "videoWidth" ) / player.prop( "videoHeight" );

		var setContentSize = function(){
			var windowW = $(window).width();
			var windowH = $(window).height();
			var windowAspect = windowW/windowH;
			if (windowAspect < mediaAspect) {
						player
							.width(windowH*mediaAspect)
							.height(windowH);
						player
							.css('top',0)
							.css('left',-(windowH*mediaAspect-windowW)/2)
							.css('height',windowH);
				} else {
						player
							.width(windowW)
							.height(windowW/mediaAspect);
						player
							.css('top',-(windowW/mediaAspect-windowH)/2)
							.css('left',0)
							.css('height',windowW/mediaAspect)
							.css('width','100%');
				}
			//$( ".main-content, .heart-container" )
			//	.css( "min-height",  newHeight )
			//	.css( "margin-top", height * 0.1 );
			//$( ".heart-inside" )
			//	.css( "margin-top", height * 0.1 )
		};
		$( window ).on( "resize", setContentSize );
		player.on( "loadedmetadata", function(){
			mediaAspect = this.videoWidth / this.videoHeight;
			setContentSize();
		});
		setContentSize();
	}
});
