
var image = document.getElementsByClassName('parallaxR');
new simpleParallax(image, {
   delay: 1,
   orientation: 'right',
   transition: 'linear',
   overflow: true,
});

var image = document.getElementsByClassName('parallaxL');
new simpleParallax(image, {
   delay: 1,
   orientation: 'left',
   transition: 'linear', //плавно
   overflow: true, //позволяет выйти за рамки изображения и перемещаться изображению
});
