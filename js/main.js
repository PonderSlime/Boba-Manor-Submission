var isBackground = true;
var bg = document.getElementById('bg-music');
let x = document.getElementById("audioIcon");
let mute = true;
let isPlayingHM = false
let isPlayingSSS = false
let isPlayingT = false
let isPlayingBTTF = false
let isPlayingQ = false
let isPlayingET = false
function toggleMute() {
    mute = !mute;
    checkAudioState();
}

mySounds = [ 'quote1', 'quote2', 'quote3', 'quote4', 'quote5', 'quote6', 'quote7', 'quote8', 'quote9', 'quote10', 'quote11', 'quote12' ]
function randomQuote() {
    var index = Math.floor(Math.random() * 1000) % mySounds.length;
    var id  = mySounds[index];
    var audioElement = document.getElementById(id);
    audioElement.play();
}

function playBgMusicFn() {
    togglePlay(document.getElementById('bg-music'));
    checkAudioState();
}
function hauntedMansionFn() {
    togglePlay(document.getElementById('haunted-mansion-theme'));
    popup(document.getElementById('hauntedMansionPopup'));
    isPlayingHM = !isPlayingHM;
    checkAudioState();
}
function spookyScarySkeletonFn() {
    togglePlay(document.getElementById('spooky-scary-skeletons-remix'));
    popup(document.getElementById('skeletonMeme'));
    isPlayingSSS = !isPlayingSSS;
    checkAudioState();
}
function thrillerFn() {
    togglePlay(document.getElementById('thriller'));
    popup(document.getElementById('thrillerPopup'));
    isPlayingT = !isPlayingT
    checkAudioState();
}
function backToTheFutureFn() {
    togglePlay(document.getElementById('back-to-the-future'));
    popup(document.getElementById('backToTheFuturePopup'));
    isPlayingBTTF = !isPlayingBTTF
    checkAudioState();
}
function eTFn() {
    togglePlay(document.getElementById('e-t'));
    popup(document.getElementById('eTPopup'));
    isPlayingET = !isPlayingET
    checkAudioState();
}

function memeryBookFn() {
    popup(document.getElementById('memeryBook'));
    isPlayingQ = !isPlayingQ;
    checkAudioState();
}

function muteIcons() {
    x.classList.remove('fa-volume-high');
    x.classList.add('fa-volume-xmark');
}
function unmuteIcons() {
    x.classList.add('fa-volume-high');
    x.classList.remove('fa-volume-xmark');
}

function checkAudioState() {
    if (mute==false) {
        unmutePage();
        if (isPlayingHM == true || isPlayingSSS == true || isPlayingT == true || isPlayingBTTF == true || isPlayingQ == true || isPlayingET == true) {
            bg.muted = true;
        }
        else if (isPlayingHM == false || isPlayingSSS == false || isPlayingT == false || isPlayingBTTF == false || isPlayingQ == false || isPlayingET == false) {
            bg.muted = false;
            bg.play()
        }

    }
    else if (mute==true) {
        mutePage();
    }
    
}
