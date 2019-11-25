function $(el) {
    return document.querySelector(el);
}
function $All(el) {
    return document.querySelectorAll(el);
}
var box = $(".b-mid");
var banner = $All("#banner a");
var btn = $All("#btn span");
var blItem = $All(".bl-item");
var bmList = $All(".bm-list");
var count = 0;
var times = null;

for (var i = 0; i < blItem.length; i++) {
    blItem[i].onmouseover = bt;
    blItem[i].onmouseout = bn;
}

function bt() {
    for (var i = 0; i < blItem.length; i++) {
        if (blItem[i] === this) {
            bmList[i].style.display = "block";
        } else {
            bmList[i].style.display = "none";
        }
    }
}

function bn() {
    for (var i = 0; i < blItem.length; i++) {
        bmList[i].style.display = "none";
    }
}

for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        for (var i = 0; i < btn.length; i++) {
            if (btn[i] === this) {
                banner[i].style.opacity = "1";
                banner[i].style.zIndex = "10";
                btn[i].style.background = "#000";
                count = i;
            } else {
                banner[i].style.opacity = "0";
                banner[i].style.zIndex = "-1";
                btn[i].style.background = "#fff";
            }
        }
    }
}
function ban() {
    count++;
    if (count > banner.length - 1) {
        count = 0;
    }
    for (var i = 0; i < banner.length; i++) {
        banner[i].style.opacity = "0";
        banner[i].style.zIndex = "-1";
        btn[i].style.background = "#fff";
    }
    banner[count].style.opacity = "1";
    banner[count].style.zIndex = "10";
    btn[count].style.background = "#000";
}

times = setInterval(ban, 1000);

$(".banner").onmouseover = function () {
    clearInterval(times);
}
$(".banner").onmouseout = function () {
    times = setInterval(ban, 1000);
}