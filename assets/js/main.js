// $(document).ready(function($){
// 	"use strict";
// 	new WOW().init();
//     $(".owl").owlCarousel();
//  $('#youtube-video').magnificPopup({
//  	type:'iframe',
//  	iframe: {
//   patterns: {
//     youtube: {
//       index: 'youtube.com/', 
//       id: 'v=', 
//       src: '//www.youtube.com/embed/%id%?autoplay=1' 
//     },
//   },
//   srcAction: 'iframe_src', 
// }
//  });
//  $('.skillbar').skillBars({
//   // options here
// });

//  $('.counter-number').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });


//  var mixer = mixitup('.fortfolio-content');

//  $('.image-link').magnificPopup({type:'image'});



//  $('.owl-carousel-team').owlCarousel({
//     loop:true,
//     margin:20,
//     nav:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
// });

//  $('.owl-carousel-testimonial').owlCarousel({
//     loop:true,
//     margin:20,
//     nav:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// });
//  $('.main-menu').slicknav();
// }(jQuery));
document.addEventListener('DOMContentLoaded',function(){
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;


    if(wrapper.className.indexOf('skewed') !=-1){
    skew =1000;
}
wrapper.addEventListener('mousemove',function(e){
    delta =(e.clientX - window.innerWidth / 2) * 0.5;
    handle.style.left = e.clientX +delta +'px';

    topLayer.style.width=e.clientX + skew + delta + 'px';
  });
});

