function playPause () {
    const timer = document.getElementById('timer');
    let time = parseInt(timer.innerText);

    const abc = setInterval(() => {
        document.getElementById('timer').innerText = time
        time++;
    }, 1000);

    document.getElementById('btn-stop').addEventListener('click', function(a){
        clearInterval(abc)
    })
}

document.getElementById('btn-reset').addEventListener('click', function(){
    document.getElementById('timer').innerText = 0;
})

