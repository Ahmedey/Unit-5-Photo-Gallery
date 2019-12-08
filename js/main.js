
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true,
    'maxWidth': 600,
    'positionFromTop': 80,
    'albumLabel': ""

});
const searchImage = [];
$.each($(".section a"), function(i, a) {
    const dataTitle = $(a).attr("data-title");
    searchImage.push(dataTitle);
});

$(".searchInput").on("keyup", function() {
    let input = $(".searchInput")
        .val()
        .toLowerCase();
    if (input !== "") {
        $("a")
            .parent()
            .css("display", "none");
        searchImage.map(function(title) {
            if (title.toLowerCase().includes(input)) {
                $(`a[data-title="${title}"]`)
                    .parent()
                    .css("display", "block");
            }
        });
    } else {
        $("a").show();
    }
});





