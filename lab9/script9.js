name = prompt('Ваше ім`я');
document.getElementById('text1').innerHTML=name;
let game = 0;
let user = 0;
let computer = 0;

function func(){
    user = 0;
    computer = 0;
    game = 0;
    document.getElementById('rectangl1').innerHTML=0;
    document.getElementById('rectangl2').innerHTML=0;   
}

let map = new Map;
map.set("url('img/0.png')", 6);
map.set("url('img/1.png')", 7);
map.set("url('img/2.png')",8);
map.set("url('img/3.png')",9);
map.set("url('img/4.png')",10);
map.set("url('img/5.png')",2);
map.set("url('img/6.png')",3);
map.set("url('img/7.png')",4);
map.set("url('img/8.png')",11);

document.getElementById('button').onclick = function(){
    game++;
    let otvet = "url('img/"+Math.floor(Math.random() * map.size) +".png')";
    let answer = map.get(otvet);
    document.querySelector(".cart1").style.backgroundImage = otvet;
    let otvet2 = "url('img/"+Math.floor(Math.random() * map.size) +".png')";
    let answer2 = map.get(otvet2);
    document.querySelector(".cart2").style.backgroundImage = otvet2;
    user += answer;
    computer += answer2;
    document.getElementById('rectangl1').innerHTML=user;
    document.getElementById('rectangl2').innerHTML=computer;
    if (game==3){
        if(user > computer){
        alert("You win");
        }
        else if(computer > user){
        alert("Computer win");
        }
        else{
        alert("Friendship won");
        }
        func();
    }
};
