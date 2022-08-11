songIndex = 0;
let audioElement = document.getElementById('music');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let songitem = document.getElementsByClassName('songitem');
let songitemplay = document.getElementsByClassName('songitemplay');

 


btn = "off";
 
function runMusic() {
    if (btn == "off") {
        audioElement.play();
        btn = "on";
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    } else if (btn == "on") {
        audioElement.pause();
        btn = "off";
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
}

audioElement.addEventListener('timeupdate', () => {
    progress = ((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress
})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `song/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 6) {
        songIndex = 0;
        
    } else {
        songIndex += 1;
    }
    
    audioElement.src = `song/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('prev').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})