var banners = ["img/destaque-home.png", "img/destaque-home-2.png", "img/banner.jpg", "img/bannerjeans.jpg", "img/banner50off.jpg"];
var bannerAtual = 0;

function trocaBanner(){
    bannerAtual = (bannerAtual + 1) % 5;
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];
}

var timer = setInterval(trocaBanner, 4000);
var controle = document.querySelector('.pause');

controle.onclick = function() {
    if (controle.className == 'pause') {
        clearInterval(timer);
        controle.className = 'play';
    } else {
        timer = setInterval(trocaBanner, 4000);
        controle.className = 'pause';
    }

    return false;
}