let mute = true;
function togglePlay(audioT, isMuteButton) {
    var bg = document.getElementById("bg-music");
    x = document.getElementById("audioIcon");

    if (isMuteButton == 1) {
        mute = !mute;
    }
/* 
    else if (isMuteButton == 0) {
        bg.currentTime = 0;
        bg.paused ? bg.play() : bg.pause();
        bg.muted = true;
    } */

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


};

function mutePage() {
    document.querySelectorAll("audio").forEach((elem) => muteMe(elem));
}

function unmutePage() {
    document.querySelectorAll("audio").forEach((elem) => unmuteMe(elem));
}

function muteMe(elem) {
    elem.muted=true;
    elem.currentTime = 0;
}

function unmuteMe(elem) {
    elem.muted=false;
    elem.currentTime = 0;
}
