/*----轮播图------*/
var container = document.getElementById("banner-container");
var imgContainer = container.getElementsByTagName("div")[0];
var aDiv = imgContainer.getElementsByTagName("div");
var aImg = imgContainer.getElementsByTagName("img");
var oUl = container.getElementsByTagName("ul")[0];
var aLi = container.getElementsByTagName("li");
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var autoTimer = null;
var interval = 3000;
var step = 0;
utils.css(aDiv[0], "zIndex", 1);
zhufengAnimate(aDiv[0], {"opacity": 1}, 600);
autoTimer = setInterval(autoMove, interval);
function autoMove() {
    if (step >= aDiv.length - 1) {
        step = -1;
    }
    step++;
    setBanner();
}
function setBanner() {
    for (var i = 0; i < aDiv.length; i++) {
        var curDiv = aDiv[i];
        if (i === step) {
            utils.css(curDiv, "zIndex", 1);
            zhufengAnimate(curDiv, {"opacity": 1}, 600, function () {
                var siblings = utils.siblings(this);
                for (var i = 0; i < siblings.length; i++) {
                    utils.css(siblings[i], "opacity", 0)
                }
            });
            continue;
        }
        utils.css(curDiv, "zIndex", 0)
    }
    bannerTip();
}

bannerTip();
function bannerTip() {
    for (var i = 0; i < aLi.length; i++) {
        i === step ? utils.addClass(aLi[i], "bg") : utils.removeClass(aLi[i], "bg");
        /* i===step?aLi[i].className="bg":aLi[i].className="";*/
    }
}

stopStart();
function stopStart() {
    imgContainer.onmouseover = function () {
        clearInterval(autoTimer);
    };
    btnLeft.onmouseover = function () {
        clearInterval(autoTimer);
    };
    btnRight.onmouseover = function () {
        clearInterval(autoTimer);
    };
    imgContainer.onmouseout = function () {
        autoTimer = setInterval(autoMove, interval);

    }
}

handleChange();
function handleChange() {
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onclick = function () {
            step = this.index;
            setBanner();
        }
    }
}

btnRight.onclick = autoMove;
btnLeft.onclick = function () {
    if (step <= 0) {
        step = aDiv.length
    }
    step--;
    setBanner();
};
//-------点击焦点切换----------------------------------
var first = document.getElementById("first");
var bigBox = document.getElementById("bigBox");
var conFocus = document.getElementById("conFocus");
var aUl = conFocus.getElementsByTagName("ul")[0];
var oLi = aUl.getElementsByTagName("li");
var oSpan = aUl.getElementsByTagName("span");
var preL = document.getElementById("preL");
var preR = document.getElementById("preR");

var step2 = null;

buttonHide(first, preL, preR);
function buttonHide(First, prL, prR) {
    First.onmouseover = function () {
        prL.style.display = "block";
        prR.style.display = "block";
    };
    First.onmouseout = function () {
        prL.style.display = "none";
        prR.style.display = "none";
    };
}

menuChange(preL, preR, bigBox, oSpan);
function menuChange(prL, prR, box, span) {
    var step1 = 0;
    prR.onclick = function () {
        if (step1 >= 3) {
            animate(box, {"left": -step1 * 296}, 500);
            return;
        }
        step1++;
        console.log(step1);
        animate(box, {"left": -step1 * 296}, 500);
        for (var i = 0; i < span.length; i++) {
            if (step1 == i) {
                span[i].className = "bg"
            } else {
                span[i].className = ""
            }
        }

    };

    prL.onclick = function () {
        if (step1 <= 0) {
            animate(box, {"left": -step1 * 296}, 500);
            return;
        }
        step1--;
        animate(box, {"left": -step1 * 296}, 500);

        for (var i = 0; i < span.length; i++) {
            if (step1 == i) {
                span[i].className = "bg"
            } else {
                span[i].className = ""
            }
        }

    };
}

focusChange(oLi, bigBox, oSpan);
function focusChange(li, box, span) {
    for (var i = 0; i < li.length; i++) {
        li[i].onclick = function () {
            for (var i = 0; i < li.length; i++) {
                li[i].index = i;
                step2 = this.index;
                animate(box, {"left": -step2 * 296}, 500);
                if (step2 == i) {
                    span[i].className = "bg"
                } else {
                    span[i].className = ""
                }
            }
        }
    }
}

colorChange(oSpan);
function colorChange(span) {
    for (var i = 0; i < span.length; i++) {
        span[i].onmouseover = function () {
            if (this.className == "bg") {
                return;
            }
            this.style.background = "#ff6700";
        };
        span[i].onmouseout = function () {
            this.style.background = "";
        }
    }
}

var second = document.getElementById("second");
var bigBox2 = document.getElementById("bigBox2");
var conFocus2 = document.getElementById("conFocus2");
var aUl2 = conFocus2.getElementsByTagName("ul")[0];
var oLi2 = aUl2.getElementsByTagName("li");
var oSpan2 = aUl2.getElementsByTagName("span");
var preL2 = document.getElementById("preL2");
var preR2 = document.getElementById("preR2");
buttonHide(second, preL2, preR2);
menuChange(preL2, preR2, bigBox2, oSpan2);
focusChange(oLi2, bigBox2, oSpan2);
colorChange(oSpan2);

var third = document.getElementById("third");
var bigBox3 = document.getElementById("bigBox3");
var conFocus3 = document.getElementById("conFocus3");
var aUl3 = conFocus3.getElementsByTagName("ul")[0];
var oLi3 = aUl3.getElementsByTagName("li");
var oSpan3 = aUl3.getElementsByTagName("span");
var preL3 = document.getElementById("preL3");
var preR3 = document.getElementById("preR3");
buttonHide(third, preL3, preR3);
menuChange(preL3, preR3, bigBox3, oSpan3);
focusChange(oLi3, bigBox3, oSpan3);
colorChange(oSpan3);

var four = document.getElementById("four");
var bigBox4 = document.getElementById("bigBox4");
var conFocus4 = document.getElementById("conFocus4");
var aUl4 = conFocus4.getElementsByTagName("ul")[0];
var oLi4 = aUl4.getElementsByTagName("li");
var oSpan4 = aUl4.getElementsByTagName("span");
var preL4 = document.getElementById("preL4");
var preR4 = document.getElementById("preR4");
buttonHide(four, preL4, preR4);
menuChange(preL4, preR4, bigBox4, oSpan4);
focusChange(oLi4, bigBox4, oSpan4);
colorChange(oSpan4);












