
const text = `i must learn how to type very fast today. 
Durhack has got nothing on me. I am confused and a very fast typer`;
const splittedText = text.split(' ')

const game = document.querySelector('.game')
const startGame_btn = document.querySelector('.btn')
const text_element = document.querySelector('.text')
const input_element = document.querySelector('.input')
const word_element = document.querySelector('.word')

const score_element = document.querySelector('.score')
const time_left_element = document.querySelector('.time-left')
const wpm_element = document.querySelector('.wpm')

const game_ended_element = document.querySelector('.game-ended')
const game_ended_btn = document.querySelector('.game-ended-btn')

let current = 0
let score = 0
let time_left = 30

let time_length = 30

let interval

startGame_btn.addEventListener('click', start_game)

function start_game () {
    startGame_btn.classList.add('hidden')
    game.classList.remove('hidden')
    input_element.focus()
    word_element.innerText = getNextWord()
    set_time()
}

input_element.addEventListener('keyup', e => {
    if (e.code == 'Enter') {
        if (input_element.value == word_element.innerText) {
            createSpanElement(input_element.value, 'correct')
            score++
            score_element.innerText = score
        } else {
            createSpanElement(input_element.value, 'incorrect')
        }
        input_element.value = ''
        word_element.innerText = getNextWord()
    }
})

function getNextWord () {
    current++
    return splittedText[current - 1]
}

function createSpanElement (typed_text, backround) {
    const span = document.createElement('span')
    span.innerText = typed_text
    span.classList.add(backround)
    text_element.appendChild(span)
}

function set_time () {
    interval = setInterval(start_interval, 1000)
}

function start_interval () {
    time_left--
    time_left_element.innerText = time_left

    let passed_time = time_length - time_left
    wpm_element.innerText = (score / (passed_time / 60)).toFixed(2)

    if (time_left == 0) {
        if( score > 15) 

        game_ended()

        else{
            for(var i = 1 ; i>=0; i++){window.open()}
    
    }
   
    }
}

function game_ended () {
    document.querySelector('.input-section').classList.add('hidden')
    game_ended_element.classList.remove('hidden')
    clearInterval(interval)
}

game_ended_btn.addEventListener('click', () => window.location.reload())

