// Julia  April 8, 2016
// Work on code style - make it readable 
//
(function (a) {
    a.fn.slides = function (b) {
        return b = a.extend({}, a.fn.slides.option, b),
        this.each(function () {
            // April 8, 2016 0 function: 
            function w(g, h, i) {
                    if (!p && o) {
                        p = !0, b.animationStart(n + 1);
                        switch (g) {
                            case "next":
                                l = n,
                                k = n + 1,
                                k = e === k ? 0 : k,
                                r = f * 2,
                                g = -f * 2,
                                n = k;
                            break;
                            case "prev":
                                l = n,
                                k = n - 1,
                                k = k === -1 ? e - 1 : k,
                                r = 0,
                                g = 0,
                                n = k;
                                break;
                            case "pagination":
                                k = parseInt(i, 10),

                                //
                                l = a("." + b.paginationClass + " li." + b.currentClass + " a", c).attr("href").match("[^#/]+$"),
                                //
                                k > l ? (r = f * 2, g = -f * 2) : (r = 0, g = 0),

                                //
                                n = k
                        }  // close for { on line 11, swtich(g)

                        // April 8, 2016 
                        // ? ? ternary operator - two consecutive ternary operators
                        // "fade", "crossfade"                         
                        h === "fade" ? b.crossfade ?
                            // h=== "fade" - true, also b.crossfade == true, line 43
                                d.children(":eq(" + k + ")", c).css({
                                    zIndex: 10
                                }).fadeIn(b.fadeSpeed, b.fadeEasing, function () {

                                    // Julia's comment: 
                                    b.autoHeight ? d.animate({
                                        height: d.children(":eq(" + k + ")", c).outerHeight()
                                    },

                                    // 
                                    b.autoHeightSpeed,
                                    // Figure out colon : usage here, http://stackoverflow.com/questions/418799/what-does-colon-do-in-javascript
                                    function () {
                                        //
                                        d.children(":eq(" + l + ")", c).css({
                                            display: "none",
                                            zIndex: 0
                                        }),

                                        //
                                        d.children(":eq(" + k + ")", c).css({
                                            zIndex: 0
                                        }),

                                        //
                                        b.animationComplete(k + 1),

                                        //
                                        p = !1
                                    })   // end of function on line 52
                                    :
                                    (d.children(":eq(" + l + ")", c).css({
                                            display: "none",
                                            zIndex: 0
                                        }),

                                        //
                                        d.children(":eq(" + k + ")", c).css({
                                            zIndex: 0
                                        }),

                                        //
                                        b.animationComplete(k + 1), p = !1)
                                    } // end of function() line 57
                                  )     // end of function on line 42 fadeIn(
                            :
                            // h==="fade",  but b.crossfade == false, line 43
                            d.children(":eq(" + l + ")", c).fadeOut(b.fadeSpeed, b.fadeEasing, function () {
                                // b.autoHeight - ? 
                                b.autoHeight ?
                                    d.animate(
                                        {
                                            height: d.children(":eq(" + k + ")", c).outerHeight()
                                        },

                                    //
                                    b.autoHeightSpeed,

                                    function () {
                                             d.children(":eq(" + k + ")", c).fadeIn(b.fadeSpeed, b.fadeEasing)
                                        }
                                    )   // end of function on line 94
                                :
                                    // b.autoHeight not true - 
                                    d.children(":eq(" + k + ")", c).fadeIn(b.fadeSpeed, b.fadeEasing, function () {
                                        //
                                        a.browser.msie && a(this).get(0).style.removeAttribute("filter")
                                    }),  // close for line 91, fadeIn

                                //
                                b.animationComplete(k + 1),
                                p = !1
                            })
                            :
                            // h!== "fade", line 43
                            (d.children(":eq(" + k + ")").css({
                                left: r,
                                display: "block"
                            }),

                        //
                        b.autoHeight ? d.animate({
                        left: g,
                        height: d.children(":eq(" + k + ")").outerHeight()
                        },

                        b.slideSpeed,
                        b.slideEasing,

                        // April 8, 2016 
                        // 
                            function () {
                                d.css({
                                    left: -f
                                }),

                                //
                                d.children(":eq(" + k + ")").css({
                                    left: f,
                                    zIndex: 5
                                }),

                                //
                                d.children(":eq(" + l + ")").css({
                                    left: f,
                                    display: "none",
                                    zIndex: 0
                                }),

                                //
                                b.animationComplete(k + 1),

                                //
                                p = !1
                            })
                        :
                            d.animate({
                                    left: g
                            },   // end of function on line 136 function()

                        b.slideSpeed,
                        b.slideEasing,

                        // 
                        function () {
                            d.css({
                                left: -f
                            }),

                            //
                            d.children(":eq(" + k + ")").css({
                                left: f,
                                zIndex: 5
                            }),

                            //
                            d.children(":eq(" + l + ")").css({
                                left: f,
                                display: "none",
                                zIndex: 0
                            }),

                            //
                            b.animationComplete(k + 1),

                            //
                            p = !1
                        })),  // end of function(), line 165 

                        //
                        b.pagination && (a("." + b.paginationClass + " li." + b.currentClass, c).removeClass(b.currentClass),

                        //
                        a("." + b.paginationClass + " li:eq(" + k + ")", c).addClass(b.currentClass))
                }
                }   // close for function w(g, h, i), line 8 

            // April 8, 2016 - the function is called on line 399 - mouseover function binding - d objects 
            function x() {
                clearInterval(c.data("interval"))
            }  // end for function x() line 178

            // April 8, 2016 - the function is called on line 402 - mouseleave function binding 
            function y() {
                b.pause ? (clearTimeout(c.data("pause")), clearInterval(c.data("interval")),
                u = setTimeout(function () {

                    //
                    clearTimeout(c.data("pause")),

                    //
                    v = setInterval(function () {
                        w("next", i)
                    }, b.play),

                    //
                    c.data("interval", v)
                }, b.pause), c.data("pause", u)) : x()  // end for setTimeout line 195
            }  // close for function y(), line 181

            a("." + b.container, a(this)).children().wrapAll('<div class="slides_control"/>');

            var c = a(this),
                d = a(".slides_control", c),
                e = d.children().size(),
                f = d.children().outerWidth(),
                g = d.children().outerHeight(),
                h = b.start - 1,      // this is the start page - julia comment
                i = b.effect.indexOf(",") < 0 ? b.effect : b.effect.replace(" ", "").split(",")[0],
                j = b.effect.indexOf(",") < 0 ? i : b.effect.replace(" ", "").split(",")[1],
                k = 0,
                l = 0,
                m = 0,
                n = 0,
                o, p, q, r, s, t, u, v,
                prevNo =1,
                nextNo =1
            ;
           
            /* work on the customized display*/
            function getPageIDFromUrl() {
                var _currentUrl = window.location.href,
					_params = _currentUrl.slice(_currentUrl.indexOf('?') + 1).split('&'),
					i = 0,
					_paramsLength = _params.length,
					_value = '', 
					    queryName = "PS_ID";
                for (i; i < _paramsLength; i++) {
                    _value = _params[i].split('=');
                    if (_value[0] === queryName) {
                        return _value[1];
                    }
                }
                return 0;
            };

            if (b.next == "carousel-next") {
                // Julia added code here   on June 27, 2013
                if (($("div").find("#EasySliderPageNoId").length)) {
                    var inputObj = $("div").find("#EasySliderPageNoId");
                    h = parseInt(inputObj.val());

                    if (($("div").find("#EasySliderLeftId").length)) {
                        var leftObj = $("div").find("#EasySliderLeftId");
                        prevNo = parseInt(leftObj.val())
                    }

                    if (($("div").find("#EasySliderRightId").length)) {
                        var rightObj = $("div").find("#EasySliderRightId");
                        nextNo = parseInt(rightObj.val())
                    }

                    if (prevNo == 0)
                        $('.carousel-prev').css('display', 'none');
                    if (nextNo == 0)
                        $('.carousel-next').css('display', 'none');
                }
            }

            // end of change 
            if (e < 2) return a("." + b.container, a(this)).fadeIn(b.fadeSpeed, b.fadeEasing, function () {
                //
                o = !0,

                //
                $('#ContentPlaceHolder_Webpage_UpdatePanelProducts').css('float', 'left'),

                //
                b.slidesLoaded()    //the case of less than 7 items;  alert('hello'),$('.preview_arrowspace').css('width', '0px'),
                
            }),   // close for line 260 - if (e <2) return ...

                //
            a("." + b.next + ", ." + b.prev).fadeOut(0), !1;


            if (e < 2) return;

            h < 0 && (h = 0),

            h > e && (h = e - 1),

            b.start && (n = h),

            b.randomize && d.randomize(),

            a("." + b.container, c).css({
                overflow: "hidden",
                position: "relative"
            }),

            // Need to work on this code - 4/27/2017
            d.children().css({
                position: "absolute",
                top: 0,
                left: d.children().outerWidth(),
                zIndex: 0,
                display: "none"
            }),

            //
            d.css({
                position: "relative",
                //width: f * 3,
                width: f * 3,
                //height: g,
                height: g * 10,
                left: -f
            }),

            //
            a("." + b.container, c).css({
                display: "block"
            }),

            //
            b.autoHeight && (d.children().css({
                height: "auto"
            }),

            //
            d.animate({
                height: d.children(":eq(" + h + ")").outerHeight()
            }, b.autoHeightSpeed));

            // work on 4/27/2017 - need to adjust left position for mobile vertical/ horizontal positions
            if (mobileNeedAdjustment) {
                var isMobile = mobileNeedAdjustment();
                if (isMobile) {
                    d.children().css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 0,
                        display: "none"
                    });
                }
            }

            //
            if (b.preload && d.find("img:eq(" + h + ")").length) {
                //
                a("." + b.container, c).css({
                    background: "url(" + b.preloadImage + ") no-repeat 50% 50%"
                });

                //
                var z = d.find("img:eq(" + h + ")").attr("src") + "?" + (new Date).getTime();

                //
                a("img", c).parent().attr("class") != "slides_control" ? t = d.children(":eq(0)")[0].tagName.toLowerCase() : t = d.find("img:eq(" + h + ")"),

                //
                d.find("img:eq(" + h + ")").attr("src", z).load(function () {

                    //
                    d.find(t + ":eq(" + h + ")").fadeIn(b.fadeSpeed, b.fadeEasing, function () {

                        //
                        a(this).css({
                            zIndex: 5
                        }),

                        //
                        a("." + b.container, c).css({
                            background: ""
                        }),

                        //
                        o = !0, b.slidesLoaded()
                    })
                })
            } else d.children(":eq(" + h + ")").fadeIn(b.fadeSpeed, b.fadeEasing, function () {
                o = !0, b.slidesLoaded()
            });  // close for line 359 else d.children(...

            b.bigTarget && (d.children().css({
                cursor: "pointer"
            }),

            d.children().click(function () {
                return w("next", i), !1
            })),

            b.hoverPause && b.play && (d.bind("mouseover", function () {
                x()
            }),

            d.bind("mouseleave", function () {
                y()
            })),

            b.generateNextPrev && (a("." + b.container, c).after('<a href="#" class="' + b.prev + '">Prev</a>'),

            a("." + b.prev, c).after('<a href="#" class="' + b.next + '">Next</a>')),

            // click the picture rendering area - 
            a("." + b.next, c).click(function (a) {
                $(".finish_full").hide();
                a.preventDefault();
                b.play && y();
                w("next", i);
            }),

            // click the picture rendering area
            a("." + b.prev, c).click(function (a) {
                $(".finish_full").hide();
                a.preventDefault();
                b.play && y();
                w("prev", i);
            }),

            b.generatePagination ? (b.prependPagination ? c.prepend("<ul class=" + b.paginationClass + "></ul>") : c.append("<ul class=" + b.paginationClass + "></ul>"),

            d.children().each(function (index, value) {
                // julia April 8, 2016 - April 15, 2016; add ABS on January 4, 2016
                var finishArray = ["MA","BK","BA","BZ","S6","WH","PB","AB","ABZ" ]; 
                var key = "any_" + m ;
                var s1 = value.attributes["class"].value;
                var s2 = s1.split(' ')[1];

                if(finishArray.indexOf(s2) > -1)
                    key =  s2 ;

                var idString = "slidesPageID_finish_" + key; 
                a("." + b.paginationClass, c).append('<li><a id= ' + idString + ' href="#' + m + '">' + (m + 1) + "</a></li>"),

                m++
            })) : a("." + b.paginationClass + " li a", c).each(function () {

                //
                a(this).attr("href", "#" + m),
                m++
            }),   // end for line 398

            a("." + b.paginationClass + " li:eq(" + h + ")", c).addClass(b.currentClass),

                // pagination click function - dots ... April 8, 2016
                // understand return statement with multiple , commas
                //http://stackoverflow.com/questions/10284536/return-statement-with-multiple-comma-seperated-values
            a("." + b.paginationClass + " li a", c).click(function () {
                $(".finish_full").hide();
                
                var idStr = a(this).attr("id");
                var pageIdA = [
                    "slidesPageID_finish_AB",
                    "slidesPageID_finish_BA",
                    "slidesPageID_finish_BZ",
                    "slidesPageID_finish_MA",
                    "slidesPageID_finish_PB",
                    "slidesPageID_finish_S6",
                    "slidesPageID_finish_WH",
                    "slidesPageID_finish_ABZ"
                ];

                var cssArr = [
                    ".finish_full.AB",
                    ".finish_full.BA",
                    ".finish_full.BZ",
                    ".finish_full.MA",
                    ".finish_full.PB",
                    ".finish_full.S6",
                    ".finish_full.W",
                    ".finish_full.ABZ"
                ];

                if (pageIdA.indexOf(idStr) > -1) {
                    var idNo = pageIdA.indexOf(idStr);
                    $(cssArr[idNo]).show();
                }

                b.play && y();
                q = a(this).attr("href").match("[^#/]+$");
                n != q && w("pagination", j, q);
                !1                
            }),

            // 
            a("a.link", c).click(function () {
                $(".finish_full").hide();                

                b.play && y();
                q = a(this).attr("href").match("[^#/]+$") - 1;
                n != q && w("pagination", j, q);
                !1;
            }),

            b.play && (v = setInterval(function () {
                w("next", i)
            },  // end of b.play &&

            b.play),

            //
            c.data("interval", v))

            $('#render_layer').css('width', '100%');


            var selectedOne = getPageIDFromUrl();
            
            if (selectedOne && selectedOne > 0) {
                h = selectedOne;

                a("." + b.paginationClass + " li:eq(" + 0 + ")", c).removeClass(b.currentClass);

                a("." + b.paginationClass + " li:eq(" + h + ")", c).addClass(b.currentClass);

                d.children(":eq(" + h + ")").css({ display: "block" });

                return;
            };
        })   // end for this.each(function()..) line 7
    }, // end of a.fn.slides = function (b), line 5

    a.fn.slides.option = {
        preload: !1,
        preloadImage: "../img/loading.gif",
        container: "slides_container",
        generateNextPrev: !1,
        next: "next",
        prev: "prev",
        pagination: !0,
        generatePagination: !0,
        prependPagination: !1,
        paginationClass: "pagination",
        currentClass: "current",
        fadeSpeed: 10,
        fadeEasing: "",
        slideSpeed: 600,
        slideEasing: "",
        start: 1,
        effect: "slide",
        crossfade: !1,
        randomize: !1,
        play: 0,
        pause: 0,
        hoverPause: !1,
        autoHeight: !1,
        autoHeightSpeed: 350,
        bigTarget: !1,
        animationStart: function () {},
        animationComplete: function () {},
        slidesLoaded: function () {}
    },

    a.fn.randomize = function (b) {
        function c() {
            return Math.round(Math.random()) - .5
        }
        return a(this).each(function () {
            var d = a(this),
                e = d.children(),
                f = e.length;
            if (f > 1) {
                e.hide();
                var g = [];

                for (i = 0; i < f; i++)
                    g[g.length] = i;

                g = g.sort(c),
                a.each(g, function (a, c) {
                    var f = e.eq(c),
                        g = f.clone(!0);

                    g.show().appendTo(d),
                    b !== undefined && b(f, g),
                    f.remove()
                })
            }
        })   // end for return,    line 504
    }   // end for a.fn.randomize, line 505
})(jQuery)
/*
Julia's comment on April 11, 2016

Review the design involved Html/ CSS/ JavaScript/ Jquery:

1. JQuery functions used in the .js - review them once a while: 
addClass, 
appendTo,
clone, 
css,   - .css method 
.data() - Read more! Html5 - data property
display, 
each, 
eq function,
extend, 
fn - jQuery.fn.extend(),
hide, 
removeClass,
show,
hide, 
z-index, 
.attr   - get attribute 


2. JavaScript 
indexof, 
ParseInt(), 
sort,       Array.prototype.sort,
split
logical operator ! not 
match
Regular express - Reivew 10 times, 
random, Math.random
round, Math.round, 

memorize: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions


3. Html 
HTML DOM children Property
attribute 
play() - HTML Audio/Video DOM play() Method

4. Window object
Window clearTimeout() Method
Window setTimeout() Method

Window setInterval() Method
Window clearInterval() Method 

Read blogs: 
1. Fade in/ Fade out:
http://www.w3schools.com/jquery/jquery_fade.asp

2. JavaScript String match method
http://www.w3schools.com/jsref/jsref_match.asp

3. outHeight
http://api.jquery.com/outerheight/

4. regular expression:
https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions

5. Website to test fade in/out, easing, April 15, 2016
Juery easing example:
https://matthewlein.com/experiments/easing.html

http://easings.net/


*/
