/* let mute = true;
let isPlaying = false;
function togglePlay(audioT, isMuteButton) {
    var bg = document.getElementById("bg-music");
    x = document.getElementById("audioIcon");

    if (isMuteButton == 1) {
        mute = !mute;
    }
    else if (isMuteButton == 0) {
        isPlaying = !isPlaying;
        alert(isPlaying);
    }

    if (mute==false) {
        unmutePage()
        
        x.classList.add('fa-volume-high');
        x.classList.remove('fa-volume-xmark');
    }
    else if (mute==true) {
        mutePage();
        x.classList.remove('fa-volume-high');
        x.classList.add('fa-volume-xmark');
    }

    if (audioT.paused && mute==false) {
        mutePage();
        audioT.muted = false;
        audioT.play();
    }
    else if (!audioT.paused) {
        audioT.pause();
        audioT.currentTime = 0;
    }
    if (isPlaying == true) {
        bg.mute = true;
    }
};
*/

var bg = document.getElementById("bg-music");
function mutePage() {
    document.querySelectorAll("audio").forEach((elem) => muteMe(elem));
    muteIcons();
    
}


function unmutePage() {
    document.querySelectorAll("audio").forEach((elem) => unmuteMe(elem));
    unmuteIcons()
}

function muteMe(elem) {
    elem.muted=true;
    elem.currentTime = 0;
}

function unmuteMe(elem) {
    elem.muted=false;
    elem.currentTime = 0;
}


let isPlaying = false;
function togglePlay(audioT) {
    mutePage()
    if (audioT.paused) {
        audioT.muted = false;
        audioT.play();
    }
    else if (!audioT.paused) {
        audioT.pause();
        audioT.currentTime = 0;
    }
}