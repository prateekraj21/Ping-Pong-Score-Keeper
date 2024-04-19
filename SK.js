

const b1 = document.querySelector('#p1btn');
const b2 = document.querySelector('#p2btn');
const b3 = document.querySelector('#rstbtn');
const p1display = document.querySelector('#p1Score');
const p2display = document.querySelector('#p2Score');
const endGame = document.querySelector('#playto');
let p1Score=0;
let p2Score=0;
let isGameOver = false;
let winningScore = 3;
let res = document.getElementById("result")

endGame.addEventListener('change', function(){
    winningScore = parseInt(this.value);
})

b1.addEventListener('click', function() {
    if(!isGameOver)
    {
        p1Score+=1;
        if(p1Score===winningScore)
        {
            res.innerText = "PLAYER 1 WON!!"
            isGameOver=true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');
            b1.disabled = true;
            b2.disabled = true;
        }
        p1display.textContent=p1Score;
    }
});

b2.addEventListener('click', function() {
    if(!isGameOver)
    {
        p2Score+=1;
        if(p2Score===winningScore)
        {
            res.innerText = "PLAYER 2 WON!!"
            isGameOver=true;
            p2display.classList.add('winner');
            p1display.classList.add('loser');
            b1.disabled = true;
            b2.disabled = true;
        }
        p2display.textContent=p2Score;
    }
});

b3.addEventListener('click', function(){
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    res.innerText = " ";
    p1display.textContent=p1Score;
    p2display.textContent=p2Score;
    p1display.classList.remove('winner','loser');
    p2display.classList.remove('winner','loser');
    b1.disabled = false;
    b2.disabled = false;
})