function username(){
    let name = prompt('Enter your name', 'User');
    document.getElementById('user_name').innerHTML = name;}
    
let userscore=0;
let compscore=0;

function generate(){    
    let userpoint = Math.floor(Math.random()*11);
    document.getElementById('user_point').innerHTML = userpoint;
    
    let comppoint = Math.floor(Math.random()*11);
    document.getElementById('comp_point').innerHTML = comppoint;
    
    if (userpoint==comppoint)
    {
        document.getElementById('user_score').innerHTML = ++userscore;
        document.getElementById('comp_score').innerHTML = ++compscore;}
        
     if (userpoint>comppoint){
        document.getElementById('user_score').innerHTML = ++userscore;}
     else {
        document.getElementById('comp_score').innerHTML = ++compscore;}
            
     if(userscore==3 || compscore==3){
        if(userscore>compscore){
            setTimeout(() => confirm("You win")?document.location.reload() : undefined, 300);}              
        else{
            setTimeout(() => confirm("Computer win")?document.location.reload() : undefined, 300);}
    }
}
