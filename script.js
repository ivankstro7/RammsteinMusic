var max;
var bar;
var progress;
var status;
var song;
var icon;
var duration;
var time;
var minutes = 0;
var seconds = 0;
var hours = 0;
var minutes2;
var seconds2;
var hours2;
var duration2;
var r = false;
var max = 346;
var f = false;
var seg = 0;


function elementos(){
    bar = document.getElementById('main-container-progress');
    progress = document.getElementById('progress');
    icon = document.getElementById('iconPlay');
    status = document.getElementsByClassName('play-icon')[0];
    song = document.getElementsByTagName('audio')[0];
    duration = document.getElementsByClassName('start')[0];
    time = document.getElementsByClassName('end')[0];

    icon.addEventListener('click', player, false);
}

function player(){
    console.log('player')
    if((song.paused==false) && (song.ended==false)){
        song.pause();
        icon.ClassName="play-icon";
    } else {
        console.log('prueba')
        song.play();
        icon.ClassName="play-icon";

        //load = setInterval(rep, 1);
    }
} 



window.addEventListener('load', elementos, false);