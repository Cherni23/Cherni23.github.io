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


game++;
    let otvet = "url('img/"+Math.floor(Math.random() * map.size) +".png')";
    let answer1 = map.get(otvet);
    document.querySelector(".cart1").style.backgroundImage = otvet;

    let otvet2 = "url('img/"+Math.floor(Math.random() * map.size) +".png')";
    let answer2 = map.get(otvet2);
    document.querySelector(".cart2").style.backgroundImage = otvet2;

    let otvetcomp1 = "url('img/"+Math.floor(Math.random() * map.size) +".png')";
    let answercomp1 = map.get(otvetcomp1);
    document.querySelector(".cart3").style.backgroundImage = otvetcomp1;

    let otvetcomp2 = "url('img/"+Math.floor(Math.random() * map.size) +".png')";
    let answercomp2 = map.get(otvetcomp2);
    document.querySelector(".cart4").style.backgroundImage = otvetcomp2;

    user += answer1+answer2;
    computer +=answercomp1+answercomp2;
    document.getElementById('rectangl1').innerHTML=user;
    document.getElementById('rectangl2').innerHTML=computer;

  
document.getElementById('button1').onclick = function(){
    game++;

    let otvet3 = "url('img/"+Math.floor(Math.random() * map.size) +".png')";
    let answer3 = map.get(otvet3);
    document.querySelector(".cart5").style.backgroundImage = otvet3;

    let otvetcomp3 = "url('img/"+Math.floor(Math.random() * map.size) +".png')";
    let answercomp3 = map.get(otvetcomp3);
    document.querySelector(".cart6").style.backgroundImage = otvetcomp3;

    user +=answer3;
    computer +=answercomp3;
    document.getElementById('rectangl1').innerHTML=user;
    document.getElementById('rectangl2').innerHTML=computer;
    if (game==3){
        if(user == 21){
        alert("You win");
        }
        else if(computer == 21){
        alert("Computer win");
        }
        else if(computer > 21&&user<21){
            alert("You win");
            }
        else if (user > 21){ 
            alert("You lose");
            }
            else if (computer>21&&user>21){ 
                alert("Nobody won");
                }    
        else if (computer = user){ 
        alert("Friendship won");
        }
        func();
        alert("Зіграти ще раз?");location.reload()
    }
};