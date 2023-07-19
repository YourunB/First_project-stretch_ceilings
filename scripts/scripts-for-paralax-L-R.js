var image = document.getElementsByClassName('parallaxR');
new simpleParallax(image, {
   delay: 1,
   orientation: 'right',
   scale: 1.30,
   transition: 'linear',
   //customWrapper: '.wrapper', сохраняет пользоваьельский стиль
});

var image = document.getElementsByClassName('parallaxL');
new simpleParallax(image, {
   delay: 1,
   orientation: 'left',
   scale: 1.3,
   transition: 'linear',
});
