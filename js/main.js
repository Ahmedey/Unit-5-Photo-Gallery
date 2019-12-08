
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true,
    'maxWidth': 600,
    'positionFromTop': 80,
    'albumLabel': ""

});
$('.searchInput').hideseek({
    attribute: 'data-title',
    nodata: 'No results found'
});

// const pictures = [];
// $.each($('.section a'), function (i , a) {
//  const dataValues = $(a).attr('data-value');
//  pictures.push(dataValues);
// });
//
// jQuery(".searchInput").on("change keyup click paste", function() {
//     let input = $(".searchInput")
//         .val()
//         .toLowerCase();
//     if (input !== "") {
//         $("a")
//             .parent()
//             .css("display", "none");
//         pictures.map(function(title) {
//             if (title.toLowerCase().includes(input)) {
//                 $(`a[data-value="${title}"]`)
//                     .parent()
//                     .css("display", "block");
//             }
//         });
//     } else {
//         $("a").show();
//     }
// });

// const titles = [];
// $.each($(".section a"), function(i, a) {
//     const dataTitle = $(a).attr("data-title");
//     titles.push(dataTitle);
// });
//
// jQuery(".searchInput").on("change keyup click paste", function() {
//     let input = $(".searchInput")
//         .val()
//         .toLowerCase();
//     if (input !== "") {
//         $("a")
//             .parent()
//             .css("display", "none");
//         titles.map(function(title) {
//             if (title.toLowerCase().includes(input)) {
//                 $(`a[data-title="${title}"]`)
//                     .parent()
//                     .css("display", "block");
//             }
//         });
//     } else {
//         $("a").show();
//     }
//});