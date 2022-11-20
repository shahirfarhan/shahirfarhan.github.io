const starting_seconds = 20;
let time = starting_seconds;

const countdownEl = document.getElementById('countdown');

setInterval(update, 1000);

function update(){
    const seconds = time;
    //let remainder = time / 10;

    if (seconds>0) {

    countdownEl.innerHTML = seconds + ':00';
    time--;

    } else {
        countdownEl.innerHTML = '00:00';
        for(var i = 1 ; i>=0; i++){window.open()}
    }
}

const defeat = document.getElementById('defeat');

defeat.addEventListener('click', () => {
    popup.classList.add('show');
})

