// $(function () {
//     $(window).resize(advantages);

//     function advantages() {
//         // элемент в начало блока
//         var class_begin = '.in-begin';
//         var childs = $(class_begin),
//             parents = $(class_begin).parent();
//         if ($(window).width() < 992) {
//             for (let i = 0; i < childs.length; i++) {
//                 parents[i].prepend(childs[i]);
//             }
//             $('#advantages-slider').addClass('advantages-slider');
//             $('.advantages-slider').slick(data);
//         } else {
//             for (let i = 0; i < childs.length; i++) {
//                 parents[i].append(childs[i]);
//             }
//             $('#advantages-slider').removeClass('advantages-slider');
//             $('.advantages-slider').slick(data);
//         }
//     }
//     advantages();
// });
// var data = {
//     slidesToShow: 3,
//     arrows: false,
//     responsive: [{
//         breakpoint: 992,
//         settings: {
//             slidesToShow: 1,
//             dots: true
//         }
//     }],
// };