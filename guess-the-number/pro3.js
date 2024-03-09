let random=parseInt(Math.random()*50+1);
// const submit=document.querySelector('#submit');
const form = document.querySelector('.form')
const userinput=document.querySelector('#gnum');
const pre=document.querySelector('.preguess');
const rem=document.querySelector('.remguess');
const loworhigh=document.querySelector('.loworhigh');
const startover=document.querySelector('.resultdiv');
const p= document.createElement('p')
let prevguess=[]
let numguess=0
let playgame=true

if(playgame){
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        const guess=parseInt(userinput.value)
        validateguess(guess)
    })
}

function validateguess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<1){
        alert('please enter a number greater than 1')
    }
    else if(guess>50){
        alert('please enter a number less than 50')
    }
    else{
        prevguess.push(guess)
        if(numguess===10){
            displayguess(guess)
            displaymsg(`Game over! Random number was ${random}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)

        }
    }
}
function checkguess(guess){
    if(guess=== random){
        displaymsg(`you guessed it right`)
        endgame()
    }
    else if(guess< random){
        displaymsg(`the numner is TOO LOW`)
    }
     else if(guess> random){
        displaymsg(`the numner is TOO HIGH`)
    }
}
function displayguess(guess){
    userinput.value=''
    pre.innerHTML+= `${guess},`
    numguess++
    rem.innerHTML=`${10-numguess}`
}
function displaymsg(message){
    loworhigh.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame">Start new game</h2>`
    startover.appendChild(p)
    playgame=false
    newgame()
}
function newgame(){
    const newgamebutt=document.querySelector('#newgame')
    newgamebutt.addEventListener('click',function(e){
     random=parseInt(Math.random()*50+1);
     prevguess=[]
     numguess=0
     pre.innerHTML=''
     rem.innerHTML=`${10-numguess}`
     userinput.removeAttribute('disabled')
     startover.remove(p)
     playgame=true
    }) 
}
