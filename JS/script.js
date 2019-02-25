window.onload = function () {
    $('.ui.dropdown')
        .dropdown();

    // create sidebar and attach to menu open
    $('.ui.sidebar')
        .sidebar('attach events', '.toc.item');

    // scroll to creatorPos
    $(function () {
        $('#jumpToCreator').on('click', function () {
            var creatorPos = $($(this).attr("href")).offset().top;
            $('html,body').animate({
                scrollTop: creatorPos
            }, 800);
            return false;
        });
    });
}