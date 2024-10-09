function togglePlay(x) {
    var audioT = document.getElementById("bg-music");
    x = document.getElementById("audioIcon");
    if (audioT.paused) {
        audioT.play();
        x.classList.add('fa-volume-high');
        x.classList.remove('fa-volume-xmark');
    }
    else if (!audioT.paused){
        audioT.pause();
        audioT.currentTime = 0;
        x.classList.remove('fa-volume-high');
        x.classList.add('fa-volume-xmark');
    }
};