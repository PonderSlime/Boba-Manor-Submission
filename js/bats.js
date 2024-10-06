const vectorAngle = (xx, yy) =>
  Math.acos(
    xx.reduce((acc, n, i) => acc + n * yy[i], 0) /
      (Math.hypot(...xx) * Math.hypot(...yy))
  );
function calcAngleDegrees(xx, yy) {
  return (Math.atan2(yy, xx) * 180) / Math.PI;
}
const radians_to_degrees = rad => (rad * 180.0) / Math.PI;
/* 
function clickme() {
  // click event listener
  $('button').on('click', function(e) {
    explode(e.pageX, e.pageY);
    })
    

} */


// explosion construction
$.fn.explode = function(e) {

  var btn = $(this)
  var particles = 200,
      // explosion container and its reference to be able to delete it on animation end
      explosion = $('<div class="explosion"></div>');

  // put the explosion container into the body to be able to get it's size
  $('body').append(explosion);

  // position the container to be centered on click
  explosion.css('left', btn.offset().left);
  explosion.css('top', btn.offset().top);
  for (var i = 0; i < particles; i++) {
      // positioning x,y of the particle
      var x = (100) + rand(80, 10000) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
      y = (100) + rand(80, 10000) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10)),
      color = rand(0, 255) + ', ' + rand(0, 255) + ', ' + rand(0, 255), // randomize the color rgb
      angle = calcAngleDegrees(x,y) + 90;
          // particle element creation (could be anything other than div)
      elm = $('<img class="particle" src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" style="width: 10%; height: auto;align:middle; top: ' + y + 'px;left: ' + x + 'px; transform:translate(-50%,-50%) rotate(' + angle + 'deg)">');/* '<div class="particle" style=""' + */

      if (i == 0) { // no need to add the listener on all generated elements
      // css3 animation end detection
      elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
          explosion.remove(); // remove this explosion container when animation ended
      });
      }
      explosion.append(elm);
  }
  }

  // get random number between min and max value
  function rand(min, max) {
  return Math.floor(Math.random() * (max + 1)) + min;
  }

function clickme() {
	$(document).on('click', '.btn', function(e) {
		$(this).explode(e);
	});
}
