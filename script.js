let rand = parseInt((Math.random()*10)+1)

let submit = document.querySelector('#subt')
let userInput = document.querySelector('.guessField')
let guessSlot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')
let startOver = document.querySelector('.resultParas')


const p = document.createElement('p')
let prevGuess = []
let numGuess = 0

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validGuess(guess)
    })
}


function validGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
    else if(guess < 1){
        alert("Please enter number greater than 0")
    }
    else if(guess > 100){
        alert("Please enter number smaller then 100")
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 9){
            displayGuess(guess)
            displayMsg(`Game over random number was ${rand}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(rand === guess){
        displayMsg("Your guess was right")
        endGame()
    }
    else if(rand > guess){
        displayMsg("Guessed number is too less")
    }
    else if(rand < guess){
        displayMsg("Guessed number is too large")
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess+" "}`
    numGuess++
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMsg(Message){
    lowOrHi.innerHTML = `<h2>${Message}</h2>`
}


function endGame(){
    p.classList.add('.button')
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.innerHTML = `<h2 id="newGame" style="cursor:pointer">Start new Game</h2>`

    startOver.append(p)
    playGame = false
    newGame()
}

function newGame(){
    const startNewGame = document.querySelector('#newGame')
    startNewGame.addEventListener('click',function(e){
        rand = parseInt((Math.random()*10)+1)
        prevGuess=[]
        numGuess=0
        remaining.innerHTML = `${10-numGuess}`
        guessSlot.innerHTML=''
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}