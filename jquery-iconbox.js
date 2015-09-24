/**
 * Created by rodick on 15-6-2.
 */

!function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(root.jQuery);
    }
}(this, function($) {
    'use strict';

    // Default options
    var defaults = {

    };

    // Constructor, initialise everything you need here
    var Plugin = function(element, options) {
        this.element = element;
        this.options = options;
    };

    // Plugin methods and shared properties
    Plugin.prototype = {
        // Reset constructor - http://goo.gl/EcWdiy
        constructor: Plugin,

        someMethod: function() {

        }
    };

    $.fn.iconbox = function( options ) {
        var settings = $.extend({
            asize: "48",                        //box size
            acolumn: "3",                       //box column
            abgcolor: "rgba(0, 0, 0, .1)",      //box bg color
            popbgcolor: "rgba(0, 0, 0, .9)",    //pop bg color
            popheight: "300",                   //pop max height
            popiconsize: "48",                  //pop icon size
            popcolumn: "3",                     //pop column
            popupcontainer: ".popup-container"  //pop container class or id
        }, options );

        /*set the box style*/
        $(this).css({
            'display': 'block',
            'width': settings.asize + 'px',
            'height': settings.asize + 'px',
            'background-color': settings.abgcolor,
            'border-radius': '6px',
            'overflow': 'hidden'
        });

        $('img', this).css({
            'width': settings.asize / settings.acolumn + 'px',
            'height': settings.asize / settings.acolumn + 'px',
            'float': 'left',
            'padding': '2px',
            'box-sizing': 'border-box',
            'border-radius': '6px'
        });

        /*generate container dom block*/
        var classOrId = settings.popupcontainer.charAt(0);
        var theRest = settings.popupcontainer.slice(-(settings.popupcontainer.length - 1));
        var popupContainer;
        if(classOrId === '.') {
            popupContainer =
                "<div class='" + theRest + "'>" +
                "<div class='popup-icon-container'>" +
                "<div class='folder-title'></div>" +
                "<ul class='popup-app-list'></ul>" +
                "</div>" +
                "</div>";
        }else if(classOrId === '#') {
            popupContainer =
                "<div id='" + theRest + "'>" +
                "<div class='popup-icon-container'>" +
                "<div class='folder-title'></div>" +
                "<ul class='popup-app-list'></ul>" +
                "</div>" +
                "</div>";
        }

        $("body").append(popupContainer);

        /*set the container style*/
        var popupEl = $(settings.popupcontainer);
        $(popupEl).css({
            'position': 'absolute',
            'width': '100%',
            'height': '100%',
            'top': 0, 'right': 0, 'bottom': 0, 'left': 0,
            'margin': 'auto',
            'background-color': settings.popbgcolor,
            'color': '#fff',
            'display': 'none'
        });
        $(".popup-icon-container", popupEl).css({
            'position': 'absolute',
            'height': settings.popheight,
            'top': 0, 'right': 0, 'bottom': 0, 'left': 0,
            'margin': 'auto',
            'overflow': 'auto'
        });

        /*handle the click event*/
        $(this).click(function(e) {
            e.preventDefault();
            var iconBox = $(this);
            var folderName = $(iconBox).attr("data-folder-name");
            showPopUp(popupEl, iconBox, folderName, settings);
        });

        /*handle the blur event*/
        $(popupEl).click(function() {
            $(popupEl).hide();
        });

        /*return this for chaining*/
        return this;
    };

    var showPopUp = function(popupContainer, iconBox, folderName, settings) {
        $('.popup-app-list', popupContainer).empty().css({
            'list-style': 'none',
            'padding': '0'
        });
        var iconList = $('img', iconBox);
        $('.folder-title', popupContainer).text(folderName).css({
            'font-size': '20px',
            'text-align': 'center',
            'margin-bottom': '20px'
        });
        for(var i = 0; i < iconList.length; i++) {
            var imgSrc = $(iconList[i]).attr('src');
            var href = $(iconList[i]).attr('data-href');
            var title = $(iconList[i]).attr('data-caption');
            var li = "<li>" +
                "<a href='" +
                href +
                "'>" +
                "<img src='" +
                imgSrc +
                "'/>" +
                "</a>" +
                "<div class='caption-center'>" +
                title +
                "</div>" +
                "</li>";
            $('.popup-app-list', popupContainer).append(li);
        }
        var pLi = $('.popup-app-list li', popupContainer);
        $(pLi).css({
            'float': 'left',
            'text-align': 'center',
            'margin-bottom': '20px',
            "width": 100 * (1 / settings.popcolumn) + "%"
        });
        $('a', pLi).css({
            'width': settings.popiconsize + "px",
            'height': settings.popiconsize + "px",
            'display': 'block',
            'margin': '0 auto 8px auto',
            'color': '#fff',
            'text-decoration': 'none'
        });
        $("a img", pLi).css({
            'width': '100%',
            'height': '100%',
            'border-radius': '6px'
        });
        $(popupContainer).show();
    };

    // Expose defaults and Constructor (allowing overriding of prototype methods for example)
    $.fn.iconbox.defaults = defaults;
    $.fn.iconbox.Plugin = Plugin;
});