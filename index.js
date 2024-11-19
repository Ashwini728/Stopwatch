const clock = document.getElementById("clock");
let timer=null;
let starttime=0;
let elaps=0;
let isrunning=false;
function start(){
     if(!isrunning){
        starttime=Date.now()-elaps;
        timer=setInterval(update,10);
        isrunning=true;
     }
}
function stop(){
    if(isrunning){
        clearInterval(timer);
        elaps=Date.now()-starttime;
        isrunning=false;
     }
}
function reset(){
    clearInterval(timer);
    starttime=0;
        elaps=0;
        isrunning=false;
        clock.textContent="00:00:00:00";
}
function update(){
    const currenttime=Date.now();
    elaps=currenttime-starttime;
    let hours=Math.floor(elaps/(1000*60*60));
    let minutes=Math.floor(elaps/(1000*60)%60);
    let seconds=Math.floor(elaps/1000%60);
    let milisec=Math.floor(elaps%1000/10);

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milisec=String(milisec).padStart(2,"0");

    clock.textContent=`${hours}:${minutes}:${seconds}:${milisec}`;
}