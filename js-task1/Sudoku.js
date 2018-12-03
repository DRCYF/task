function Shuffle(a) {
    var len = a.length;
    for(var i = len - 1, rand;i >= 0; i--){
        rand = Math .floor(Math.random()*(i+1))
        var p = a[i];
        a[i] = a[rand];
        a[rand] = p;
    }
}
//洗牌算法
a = [0,1,2,3,4,5,6,7,8];
//指明盒子
Shuffle(a);
function hue(){
    var red,blue,yellow;
    red = Math.floor(Math.random() * 256); //以颜色为基准随机生成其余颜色
    do {
        yellow = Math.floor(Math.random() * 256);
    } 
    while (yellow == red);
    do {
        blue = Math.floor(Math.random() * 256);
    }
    while(blue == red);
    return("rgb(" + red + "," + yellow + "," + blue + ")");
}
/*Math.random() 是得到一个0-1之间随机数.
Math.floor(i) 是得到一个数的整数部分
Math.random()*4的值是[0-4)之间的随机数
tmp就是指随机出来的一个整数0,1,2,3其中的一个
while循环
return返回*/
function clear(){
    var blend = document.getElementsByClassName("sudoku");
    for(var i = 0; i < blend.length;i++){//for循环，i等于0
        blend[i].style.backgroundColor = "#ffa600";
    }
    blend[a.slice(0,3)[0]].style.background = hue();
    blend[a.slice(0,3)[1]].style.background = hue();
    blend[a.slice(0,3)[2]].style.background = hue();
    console.log(a.slice(1,3)[2],a.slice(1,3)[1],a.slice(1,3)[0]);
}
//指定元素变换的规律
function Timer() {
    Shuffle(a);
    clear();
    t = setTimeout("Timer()",1000);
}
//定时器 setTimeout是本轮事件结束下轮事件开始时运行
function go() {
    if (status == 0){
        Timer();
        status = 1;
    }
}
function gg() {
    clearTimeout(t);
    status = 0;
    blend = document.getElementsByClassName("sudoku");
    for (i = 0;i < blend.length;i++){
        blend[i].style.backgroundColor = "#ffa600";
    }
}