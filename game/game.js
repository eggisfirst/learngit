
//点击开始游戏的时候隐藏，左上图标出现，开始游戏界面隐藏
//苹果随机出现在content的范围里，蛇一开始三节从左上角直线运动

var content = document.getElementsByClassName('content')[0];
var gamestart = document.getElementsByClassName('gamestart')[0];
var leftside = document.getElementsByClassName('leftside')[0];
var snackMove;
var speed = 200;
var scoreBox = document.getElementById('score');
var gameover = document.getElementsByClassName('gameover')[0];
var overscore = document.getElementsByClassName('overscore')[0];
var begin = document.getElementById('begin');
var stop = document.getElementById('stop')
var close = document.getElementsByClassName('close')[0];
var key = false;

init();
gamestart.onclick = function () {
  gamestart.style.display = 'none';
  gameStart();
  smile.style.display = 'block'
}

close.onclick = function () {
  gameover.style.display = 'none';
  stop.style.display = 'none';
  begin.style.display = 'block';
}
begin.onclick = function () {
  if (key) {
    gameStart();
    begin.style.display = 'none';
    key = false
  } else {
    snackMove = setInterval(function () {
      move();
    }, speed);
    begin.style.display = 'none';
    stop.style.display = 'block'
  }
}
stop.onclick = function () {
  clearInterval(snackMove)
  begin.style.display = 'block';
  stop.style.display = 'none';
}


//初始化数据
function init() {
  this.contentW = parseInt(getComputedStyle(content).width) - 20;
  this.contentH = parseInt(getComputedStyle(content).height) - 20;
  this.foodX = 0;
  this.foodY = 0;
  this.foodW = 20;
  this.foodH = 20;
  this.snackW = 20;
  this.snackH = 20;
  this.snackbody = [[2, 0, 'head'], [1, 0, 'body'], [0, 0, 'body']];
  this.direct = 'right';
  this.right = false;
  this.left = false;
  this.up = true;
  this.down = true;
  this.score = 0;
}

//点击开始游戏
function gameStart() {
  stop.style.display = 'block'
  food();
  snack();
  snackMove = setInterval(function () {
    move();
  }, speed)
  pressBtn();
}

//获取食物
function food() {
  var food = document.createElement('div');
  food.style.position = 'absolute';
  food.style.width = this.foodW + 'px';
  food.style.height = this.foodH + 'px';
  this.foodX = Math.floor(Math.random() * (this.contentW / 20));
  this.foodY = Math.floor(Math.random() * (this.contentH / 20));
  food.style.left = this.foodX * 20 + 'px';
  food.style.top = this.foodY * 20 + 'px';
  this.content.appendChild(food).setAttribute('class', 'food')
}

//获取初始化的蛇
function snack() {
  for (var i = 0; i < snackbody.length; i++) {
    var snack = document.createElement('div');
    snack.style.width = snackW + 'px';
    snack.style.height = snackH + 'px';
    snack.style.position = 'absolute';
    snack.style.left = this.snackbody[i][0] * 20 + 'px';
    snack.style.top = this.snackbody[i][1] * 20 + 'px';
    snack.classList.add(this.snackbody[i][2]);
    this.content.appendChild(snack).classList.add('snack');
    //改变蛇头的方向
    switch (this.direct) {
      case 'right':
        break;
      case 'down':
        snack.style.transform = 'rotate(90deg)';
        break;
      case 'left':
        snack.style.transform = 'rotate(180deg)';
        break;
      case 'up':
        snack.style.transform = 'rotate(270deg)';
        break;
      default:
        break;
    }
  }
}

//蛇运动
function move() {
  for (var i = snackbody.length - 1; i > 0; i--) {
    this.snackbody[i][0] = this.snackbody[i - 1][0];
    this.snackbody[i][1] = this.snackbody[i - 1][1];
  }
  //运动的坐标变化
  switch (this.direct) {
    case 'right':
      this.snackbody[0][0] += 1;
      break;
    case 'down':
      this.snackbody[0][1] += 1;
      break;
    case 'left':
      this.snackbody[0][0] -= 1;
      break;
    case 'up':
      this.snackbody[0][1] -= 1;
      break;
    default:
      break;
  }
  //重新渲染蛇
  removeClass('snack');
  snack();
  //判断吃到食物
  if (this.snackbody[0][0] == this.foodX && this.snackbody[0][1] == this.foodY) {
    var snackEndX = this.snackbody[snackbody.length - 1][0];
    var snackEndY = this.snackbody[snackbody.length - 1][1];
    //吃到食物时蛇运动方向决定最后一位的X/Y值等于前一位
    switch (this.direct) {
      case 'right':
        this.snackbody.push([snackEndX + 1, snackEndY, 'body'])
        break;
      case 'down':
        this.snackbody.push([snackEndX, snackEndY + 1, 'body'])
        break;
      case 'left':
        this.snackbody.push([snackEndX - 1, snackEndY, 'body'])
        break;
      case 'up':
        this.snackbody.push([snackEndX, snackEndY - 1, 'body'])
        break;
      default:
        break;
    }
    this.score += 1;
    scoreBox.innerText = this.score;
    removeClass('food');
    food();
  }
  //判断撞到墙

  if (this.snackbody[0][0] < 0 || this.snackbody[0][0] >= this.contentW / 20) {
    reLoadGame();
  } else if (this.snackbody[0][1] < 0 || this.snackbody[0][1] >= this.contentH / 20) {
    reLoadGame();
  }
  for (var i = 1; i < this.snackbody.length; i++) {
    var snackHX = this.snackbody[0][0];
    var snackHY = this.snackbody[0][1];
    if (snackHX == this.snackbody[i][0] && snackHY == this.snackbody[i][1]) {
      reLoadGame();
    }
  }
}
//重新加载游戏
function reLoadGame() {
  removeClass('snack');
  removeClass('food');
  clearInterval(snackMove);
  overscore.innerText = '得分：' + this.score;
  gameover.style.display = 'block';
  this.snackbody = [[3, 1, 'head'], [2, 1, 'body'], [1, 1, 'body']];
  this.direct = 'right';
  this.right = false;
  this.left = false;
  this.up = true;
  this.down = true;
  this.score = 0;
  scoreBox.innerText = '';
  key = true;
}

function removeClass(className) {
  var ele = document.getElementsByClassName(className);
  while (ele.length > 0) {
    ele[0].remove()
  }
}

//获得按键的ASII码
function pressBtn() {
  document.onkeydown = function (e) {
    var event = e || window.event;
    var code = event.keyCode;
    setBtn(code)
  }
}

//判断蛇可以运动的方向
function setBtn(code) {
  switch (code) {
    case 37:
      if (this.left) {
        this.direct = 'left';
        this.right = false;
        this.up = true;
        this.down = true;
        this.left = false;
      }
      break;
    case 38:
      if (this.up) {
        this.direct = 'up';
        this.right = true;
        this.up = false;
        this.down = false;
        this.left = true;
      }
      break;
    case 39:
      if (this.right) {
        this.direct = 'right';
        this.right = false;
        this.up = true;
        this.down = true;
        this.left = false;
      }
      break;
    case 40:
      if (this.down) {
        this.direct = 'down';
        this.right = true;
        this.up = false;
        this.down = false;
        this.left = true;
      }
      break;
    default:
      break;
  }
}