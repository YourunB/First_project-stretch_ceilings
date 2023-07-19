
var image = document.getElementsByClassName('parallaxU');
new simpleParallax(image, {
   delay: 1,
   orientation: 'up',
   scale: 1.30,
   transition: 'linear'
});

var image = document.getElementsByClassName('parallaxD');
new simpleParallax(image, {
   delay: 1,
   orientation: 'down',
   scale: 1.30,
   transition: 'linear'
});
