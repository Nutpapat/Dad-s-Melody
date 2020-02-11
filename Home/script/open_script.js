$(window).on('mousemove', function(e) {
    var w = $(window).width();
    var h = $(window).height();
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;
    console.log(offsetX);
    
  
    $(".parallax").each(function(i, el) {
      var offset = parseInt($(el).data('offset'));
      var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)  rotateX( " +  Math.round(offsetY * offset) + "deg )  perspective(100px)";
  //rotateX( " +  Math.round(offsetY * offset) + "deg )
     
      var origin = "50% 50% ";
      
      $(el).css({
      '-webkit-transform': translate,
      'transform': translate,
      'moz-transform': translate,
       'transform-origin': origin
       
      });
    });
  });