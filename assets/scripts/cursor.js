$(document).ready(function () {

    var cursor = $(".cursor-default");

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(window)
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
        });

    $(".link")
        .mouseenter(function() {
            cursor.css({
                transform: "scale(4)"
            });
        })
        .mouseleave(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });

    $(".project-tile>a")
        .mouseenter(function() {
            cursor.addClass('cursor-view-project');
            // cursor.removeClass('cursor-default');
        })
        .mouseleave(function() {
            cursor.removeClass('cursor-view-project');
            // cursor.addClass('cursor-default');
        });   

    $(window)
        .mousedown(function() {
            cursor.css({
                transform: "scale(6)"
            });
        })
        .mouseup(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });
       
        
    });