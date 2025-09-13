let gameSequence = [];
let userSequence = [];

let btns = ["yellow", "red", "purple", "green"];
let started = false;

let level = 0;

let h2 = document.querySelector('h2');


document.addEventListener('keypress', function(){

    if(started == false){
        console.log('game started');
        started = true;

    }
    levelUp();
    
});  


function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250);
}

function userFlash(btn){
    btn.classList.add('user-flash');
    setTimeout(function(){
        btn.classList.remove("user-flash")
    }, 250);
}

function levelUp(){
    userSequence = [];
    level++;
    h2.innerText = `Level ${level}`;


    let ranIdx = Math.floor(Math.random() * 3);
    let randColor = btns[ranIdx];
    let randbtn = document.querySelector(`.${randColor}`)
    gameSequence.push(randColor)
    console.log(gameSequence);
    // console.log(ranIdx); 
    // console.log(randColor);
    // console.log(randbtn);
    gameFlash(randbtn);

}

function checkAns(index) {

    console.log(`Current Level ${level}`)

    

    if(userSequence[index] === gameSequence[index]){
        if(userSequence.length == gameSequence.length){
            setTimeout(levelUp, 1000);
            // levelUp();
        }
        // console.log('Same value');
    }
    else{
        
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = "grey";
        }, 150);
        reset();
    }

}

function reset(){
    started = false;
    gameSequence = [];
    userSequence = [];
    level = 0;

}

function btnPress() {
    console.log(this)
    let btn = this;
    userFlash(this)

    userColor = btn.getAttribute('id');
    userSequence.push(userColor);
    console.log(userColor);

    checkAns(userSequence.length-1);
}


let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click', btnPress)
}