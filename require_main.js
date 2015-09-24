require.config({
    paths: {
        "jquery": "jquery-2.1.1.min",
        "iconbox": "jquery-iconbox"
    }
});

require(['iconbox'], function() {
    $('.test').iconbox({
        asize: "60",                        //box size
        acolumn: "3",                       //box column
        abgcolor: "rgba(0, 0, 0, .1)",      //box bg color
        popbgcolor: "rgba(0, 0, 0, .9)",    //pop bg color
        popheight: "300",                   //pop max height
        popiconsize: "48",                  //pop icon size
        popcolumn: "3",                     //pop column
        popupcontainer: ".popup-container"  //pop container class or id
    });

});