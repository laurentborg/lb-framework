/**
 * lb-framework.js
 */


//lb dropdown

$('.lb.menu > .dropdown').hover(function(){
  $(this).find('ul').slideToggle(100);
});


//lb sticky
var $sticky = $('.lb.sticky'),
    stickyOffset = $sticky.data('sticky-offset');
$sticky.each(function(){
  var $this = $(this),
      offsetTop = $this.offset().top;
  
  $(window).scroll(function () {
    if($(window).scrollTop() > offsetTop - stickyOffset) {
      $this.css({'position':'fixed','top': stickyOffset +'px'});
    } else {
      $this.css({'position':'relative','top':'initial'});
    }
  });
});


//lb scrollspy

var $element = $('[id]'); // éléments à espionner
var container = window; // élément scrollé
var offset = $('.lb.scrollspy').data('scrollspy-offset'); // décalage du déclanchement par rapport au haut du 'container' en 'px'.

$element.each(function(){
    var $this = $(this);
    var the_id = $this.attr('id');

    $(window).scroll(function () {
      var p_elem = $this.offset();
      if ($(container).scrollTop() > (p_elem.top-offset)) { 
        $('.active').removeClass('active');
        $('.lb.scrollspy').find('a[href="#'+the_id+'"]').addClass('active');
      }
    });
});


//lb parallax

var $parallax = $('.lb.parallax');
$parallax.append('<div class="inner-parallax"></div>');

var coef = 0.3;

$parallax.each(function(){ 
    var $this = $(this),
        $bg = $this.find('.inner-parallax'),
        h_bg = $this.data('parallax')*100;
  
    $bg.css('height',h_bg+'%');
    
    function parallax() {
      var h_screen = $(window).height(),
          scroll = $(this).scrollTop(),
          start = scroll+h_screen,
          top = $this.offset().top,
          fx = (scroll+h_screen-top)*-coef;  
      if(start > top) {
        $bg.css('bottom',fx);  
      }
    }

    parallax();

    $(window).scroll(function () {
      parallax(); 
    });
});


//lb ratio

var $ratio = $('.lb.ratio'),
    the_ratio;

$ratio.each(function(){
  var $this = $(this);
  if($this.is('.square')){
    $this.append('<svg viewBox="0 0 1 1"/>');
  }
  else if($this.is('.wide')){
    $this.append('<svg viewBox="0 0 16 9"/>');
  }
  else {
    the_ratio = $(this).data('ratio');
    $(this).append('<svg viewBox="0 0 '+ the_ratio +'"/>');
  }
});


//lb fluidbox

$.fn.fluidbox = function(){

    var $selector = this;
    $selector.addClass('fluidbox');
    $('<div class="fluid_dimmer"></div>').appendTo('body');

    $selector.each(function(){
      var src = $(this).find('img').attr('src');

      $(this).after(
        '<div class="fluid_ghost"  style="background-image:url('+src+')">'+
          '<div style="width:100%;height:100%"></div>'+
          '<div class="fluid_prev"></div>'+
          '<div class="fluid_next"></div>'+
        '</div>'
      );
    });

    function setState(el){
      var the_position = el.find('img').offset(),
                scroll = $(window).scrollTop(),
             the_width = el.find('img').innerWidth(),
            the_height = el.find('img').innerHeight();
      el.next().css({
        'top':the_position.top-scroll,
        'left':the_position.left,
        'width':the_width,
        'height':the_height,
      });
    }

    $selector.mouseover(function(){
      setState($(this));
    });

    $selector.mousemove(function(){
      var t = $(this);
      $(window).scroll(function(){
        setState(t);
      });
    });

    $selector.click(function(){
      $(this).next().addClass('fluid_active');
      $('.fluid_dimmer').fadeIn();
      $('body').css({'overflow':'hidden'});
      return false;
    });

    function fluid_nav(elem,him) {
      if (elem.length){
        elem.addClass('fluid_active');
        him.parent().removeClass('fluid_active');
      }
    }

    $('.fluid_prev').click(function(){
      var $imgPrev = $(this).parent().prevUntil('.fluid_ghost').prev('.fluid_ghost');
      fluid_nav($imgPrev,$(this));
    });

    $('.fluid_next').click(function(){
      var $imgNext = $(this).parent().nextUntil('.fluid_ghost').next('.fluid_ghost');
      fluid_nav($imgNext,$(this));
    });

    $('.fluid_ghost div:not(".fluid_prev"):not(".fluid_next")').click(function(){
      $(this).parent().removeClass('fluid_active');
      $('.fluid_dimmer').fadeOut();
      $('body').css({'overflow':'visible'});
    }); 
 
}
