let mute = true;
let 
function togglePlay(audioT, isMuteButton) {
    var bg = document.getElementById("bg-music");
    //var audioT = document.getElementById("bg-music");
    if (isMuteButton == 1) {
        mute = !mute;
    }
    else if (isMuteButton == 0) {
        bg.currentTime = 0;
        bg.paused ? bg.play() : bg.pause();
    }
    x = document.getElementById("audioIcon");
    if (audioT.paused&&mute==false) {
        audioT.play();
        if (mute==false) {
            x.classList.add('fa-volume-high');
            x.classList.remove('fa-volume-xmark');
        }
    }
    else if (!audioT.paused||mute==true){
        audioT.pause();
        audioT.currentTime = 0;
        if (mute==true) {
            x.classList.remove('fa-volume-high');
            x.classList.add('fa-volume-xmark');
            mutePage();
        }
    }
};
function mutePage() {
    document.querySelectorAll("audio").forEach((elem) => muteMe(elem));
}
function muteMe(elem) {
    elem.pause();
    elem.currentTime = 0;
}
