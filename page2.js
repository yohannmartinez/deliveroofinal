jQuery(document).ready(function () {
    $(window).scroll(function () {
            if ($(window).scrollTop() >= 1 && $(window).width() >= 769) {
                $('.topbar').css({"background":"white"});
                $('.logo1').css({ "display": "none" });
                $('.logobleu').css({ "display": "inherit" });
            } else {
                $('.logo1').css({ "display": "inherit" });
                $('.logobleu').css({ "display": "none" });
                $('.topbar').css({"background":"transparent"});
            }

        
    });

    $('.searchbuttonheader').click(function () {
        if ($(".searchbarheader").val().length >= 1) {
            alert('recherche en cous ...');
        } else {
            $('.errormsg').css({"display":"block"});
        }
    });

    $('.searchbarheader').click(function(){
        $('.errormsg').css({"display":"none"});
    });

    $('.logobleu,.logo1').click(function(){
        $(window).scrollTop(0);
    })
});