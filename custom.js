// logo change when scroll
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--scrolling");
		}
		else{
			$header.removeClass("header--scrolling")
		}
	})

	// fancybox plugin options
	$('[data-fancybox="gallery"]').fancybox({
	// Options will go here
});
 $('[data-fancybox]').fancybox({
		loop : true
	});

	// stellar plugin initialize
	if(screen.width > 768){
		$(window).stellar();
	}

	$('[data-fancybox]').fancybox({
  buttons : ['share', 'close'],
  hash : false,
  share : {
    url : function( instance, item ) {
      if (item.type === 'inline' && item.contentType === 'video') {
        return item.$content.find('source:first').attr('src');
      }
      
      return item.src;
    }
  }
});

fullScreen: {
  autoStart: false
},

touch : {
  vertical : true,  // Allow to drag content vertically
  momentum : true   // Continuous movement when panning
},

// Hash value when initializing manually,
// set `false` to disable hash change
hash : null,

// Customize or add new media types
// Example:
/*
media : {
  youtube : {
    params : {
      autoplay : 0
    }
  }
}
*/
media : {},

slideShow : {
  autoStart : false,
  speed     : 4000
},

thumbs : {
  autoStart   : false,                  // Display thumbnails on opening
  hideOnClose : true,                   // Hide thumbnail grid when closing animation starts
  parentEl    : '.fancybox-container',  // Container is injected into this element
  axis        : 'y'                     // Vertical (y) or horizontal (x) scrolling
},

$('[data-fancybox]').fancybox({
  youtube : {
    controls : 0,
    showinfo : 0
  },
  vimeo : {
    color : 'f00'
  }
});

$.fancybox.open({
	src  : 'link-to-your-page.html',
	type : 'iframe',
	opts : {
		afterShow : function( instance, current ) {
			console.info( 'done!' );
		}
	}
});