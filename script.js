'use strict';
document.querySelector('.message').textContent='start guessing...';
let secretnumber=Math.trunc(Math.random()*20+1);

let score=20;
let highscore=0;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
//when there is no input
    if(!guess){
    document.querySelector('.message').textContent='No number!';

}
else{
// when guess is correct
    if(guess===secretnumber){
        document.querySelector('.number').textContent=secretnumber;
        document.querySelector('.message').textContent='correct number!';
    document.querySelector('body').style.backgroundColor='#1ece30';
    document.querySelector('.number').style.width='30rem';
    if(score>highscore){
        highscore=score;
    }
    document.querySelector('.highscore').textContent=highscore;
    }

//when guess is too high
    else if(guess>secretnumber){
if(score>0){
    document.querySelector('.message').textContent='Too High';
    score--;
    document.querySelector('.score').textContent=score;
    }
    else{
        document.querySelector('.message').textContent='You lost the game';
  
    }
}
     //when guess is too low 
    else if(guess<secretnumber){
        if(score>0){
            document.querySelector('.message').textContent='Too low';
            score--;
            document.querySelector('.score').textContent=score;

        }
        else{
            document.querySelector('.message').textContent='You lost the game';

        }
    
    }

}
   

})
document.querySelector('.again').addEventListener('click',function(){
    secretnumber=Math.trunc(Math.random()*20+1);
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value="";
    document.querySelector('.message').textContent='start guessing..';
    document.querySelector('.score').textContent=20;
    document.querySelector('body').style.backgroundColor='BLACK';
    document.querySelector('.number').style.width='15rem';



})