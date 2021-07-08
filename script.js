function elementos(){
    main-container-progress = document.getElementById('main-container-progress');
    progress = document.getElementById('progress');
    icon-play = document.getElementById('iconPlay');
    status = document.getElementsByClassName('play-icon')[0];
    repeat-icon = document.getElementsByClassName('repeat-icon')[0];
    song = document.getElementsByTagName('audio')[0];
    start = document.getElementsByClassName('start')[0];
    end = document.getElementsByClassName('end')[0];

    iconPlay.addEventListener('click', play, false);
}

function play(){
    if((pista.paused==false) && (pista.ended==false)){
        pista.paused();
        icon-play.className="play-icon";
    } else {
        pista.play();
        icon-play.className="play-icon";

        load = setInterval(rep, 1)
    }
}









window.addEventListener('load',elementos,false);