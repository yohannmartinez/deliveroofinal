jQuery(document).ready(function () {
    $('.connectbutton').click(function () {
        $('.fond').css({ "display": "inherit" });
    });
    $('.croix').click(function () {
        $('.fond').css({ "display": "none" });
    });

    $('.bloc,.blocalc').click(function(){
        $(window).scrollTop(0);
    });
});