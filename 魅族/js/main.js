// 底部图标
var A1 = document.getElementById('a1');
var A2 = document.getElementById('a2');
var A3 = document.getElementById('a3');
A1.onmouseover = function () {
  A1.style.backgroundImage = 'url(./img/weibonew.png)';
}
A1.onmouseout = function () {
  A1.style.backgroundImage = 'url(./img/weibo.png)';
}
A2.onmouseover = function () {
  A2.style.backgroundImage = 'url(./img/wechatnew.png)';
}
A2.onmouseout = function () {
  A2.style.backgroundImage = 'url(./img/wechat.png)';
}
A3.onmouseover = function () {
  A3.style.backgroundImage = 'url(./img/qzonenew.png)';
}
A3.onmouseout = function () {
  A3.style.backgroundImage = 'url(./img/qzone.png)';
}


// banner
var Banner = document.getElementById('banner');
var timer;
var num = 0;
timer = setInterval(go,2500 );
function go() {
  num++;
  Banner.style.left = '-' + 1440*num + 'px';
  if (num >2) {
    Banner.style.left = 0;
    num = 0;
  };
}


// 导航栏
var MzmoBile = document.getElementById('MzmoBile');
var mzmobile = document.getElementById('mzmobile');
var MlmoBile = document.getElementById('MlmoBile');
var mlmobile = document.getElementById('mlmobile');
var Ai = document.getElementById('Ai');
var ai = document.getElementById('ai');
var Nav = document.getElementById('nav');
var time;
MzmoBile.onmouseover = function () {
  view(mzmobile)
};
MzmoBile.onmouseout = function () {
  none(mzmobile)
};
MlmoBile.onmouseover = function () {
  view(mlmobile)
};
MlmoBile.onmouseout = function () {
  none(mlmobile)
};
Ai.onmouseover = function () {
  view(ai)
};
Ai.onmouseout = function () {
  none(ai)
};

function view(a) {
  a.style.display= 'block';
  Nav.style.color = '#515151';
  for (var i = 0; i < 5; i++) {
    Nav.getElementsByClassName('a')[i].style.color = '#515151';
  }
}
function none(b) {
  Nav.style.color = '#fff';
  for (var i = 0; i < 5; i++) {
    Nav.getElementsByClassName('a')[i].style.color = '#fff';
  }
 time = setTimeout(function () {
    b.style.display = 'none';
  },200);
}
