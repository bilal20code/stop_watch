

var minDisplay=document.getElementById('min');
var sec=document.getElementById('sec');
var mSec=document.getElementById('msec');
 
var minutes=0;
var seconds=0;
var MilliSeconds=0;
var interval;
var startBtn=document.getElementById('startBtn');


function Timer(){
    MilliSeconds+=10;
    if(MilliSeconds==100){
        seconds++;
        MilliSeconds=0;
    }
    else if(seconds==60){
        seconds=0;
        minutes++;
    }
    minDisplay.innerHTML=minutes;
    sec.innerHTML=seconds;
    mSec.innerHTML=MilliSeconds;
}
function start(){
    interval=setInterval(function(){
        Timer();
    },100)
}

function pause(){
    clearInterval(interval);
}

function reset(){
    clearInterval(interval);
    minutes=0;
    seconds=0;
    MilliSeconds=0;
   
    minDisplay.innerHTML=minutes;
    sec.innerHTML=seconds;
    mSec.innerHTML=MilliSeconds;
}