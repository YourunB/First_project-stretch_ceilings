
var image = document.getElementsByClassName('parallaxU');
new simpleParallax(image, {
   delay: 1,
   orientation: 'up',
   transition: 'linear',
   overflow: true,
});

var image = document.getElementsByClassName('parallaxD');
new simpleParallax(image, {
   delay: 1,
   orientation: 'down',
   transition: 'linear', //плавно
   overflow: true, //позволяет как бы выйти за рамки изображения и перемещаться изображению
});
