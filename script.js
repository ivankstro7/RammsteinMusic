function elementos(){
    main-container-progress = document.getElementById('main-container-progress');
    progress = document.getElementById('progress');
    icon-play = document.getElementById('iconPlay');
    repeat-icon = document.getElementsByClassName('repeat-icon')[0];
    song = document.getElementsByTagName('audio')[0];
    start = document.getElementsByClassName('start')[0];
    end = document.getElementsByClassName('end')[0];

    iconPlay.addEventListener('click', play, false);
}

function play(){
    if((pista.paused==false) && (pista.ended==false)){
        pista.paused();
        icon-play.className="pause-icon play-icon";
    }
}









window.addEventListener('load',elementos,false);