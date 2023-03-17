imageUrls = [
    "./images/nature (1).jpg",
    "./images/nature (2).jpg",
    "./images/nature (3).jpg",
    "./images/nature (4).jpg",
    "./images/nature (5).jpg"
]

let i = 0;
setInterval(function () {
    if (i === 5){
        i = 0;
    }
    const img = document.getElementById('img')
    img.setAttribute('src', imageUrls[i])
    i++;
}, 2000)

const time = document.getElementById('time');
    setInterval(function() {
      var now = new Date();
    //   console.log(now.toLocaleTimeString());
        time.innerHTML = now.toLocaleTimeString()
    }, 1000);
  
let stopTimer = 10;

const stopWatch = () => {
    const intervelId = setInterval(function(){
    console.log(stopTimer);
    document.getElementById('timer').innerHTML = stopTimer;
    stopTimer--;
    if (stopTimer < 0){
        console.log('finished')
        document.getElementById('timer').innerText = 'Finished';
        clearInterval(intervelId);
    }
}, 1000)}




