const sound=new Audio();
let id;
let change=0;
let temp;
let navigation="next";
let counter=0;
let songs=['demons','hotel_california','boulevard','teenage_dreams'];
let status=[false,false,false,false];
let names=['Demons','Hotel California','Boulevard of Broken Dreams','Teenage Dreams'];
sound.src='audio/'+songs[counter]+'.mp3';

function myFunction(){
    
    
    if(status[counter]===false){
        status[counter]=true; sound.play();document.querySelector(".play").src="pause.png";
        let x=document.getElementById("bar");
        
        id=setInterval(frames,10);
        function frames(){
        
        if(change===1){change=0;sound.currentTime=(sound.duration*x.value)/100;}
        let width=(sound.currentTime*100)/sound.duration;
        if(Math.floor(sound.currentTime)%60>=10){document.getElementById("runtime").innerHTML=Math.floor((Math.floor(sound.currentTime)/60))+":"+(Math.floor(sound.currentTime)%60);}
        else{document.getElementById("runtime").innerHTML=Math.floor((Math.floor(sound.currentTime)/60))+":0"+(Math.floor(sound.currentTime)%60);}
        if(Math.floor(sound.duration)%60>=10){document.getElementById("time").innerHTML=Math.floor((Math.floor(sound.duration)/60))+":"+(Math.floor(sound.duration)%60);}
        else{document.getElementById("time").innerHTML=Math.floor((Math.floor(sound.duration)/60))+":0"+(Math.floor(sound.duration)%60);}
        if(sound.duration<=sound.currentTime){width=0;x.value=width;clearInterval(id);document.querySelector(".play").src="play.png";}
        else{x.value=width;}
        
        }
      
     
          
        
    }
    else{status[counter]=false;sound.pause();document.querySelector(".play").src="play.png";clearInterval(id);}
    if(sound.ended===true){status[counter]=false;
        
        if(navigation==="loop"){myFunction();}
        else{next();}
    }
}
function next(){
    change=0;
    if(counter===songs.length-1){counter=0;}
    else{counter=counter+1;}
    status[counter]=false;
    sound.src='audio/'+songs[counter]+'.mp3';
    
    myFunction();
}
function prev(){
    change=0;
    if(counter===0){counter=songs.length-1;}
    else{counter=counter-1;}
    status[counter]=false;
    sound.src='audio/'+songs[counter]+'.mp3';
    document.getElementById("songtitle").innerHTML=names[counter];
    myFunction();
}
function loop(){
     if(navigation==="loop"){navigation="next";}
     else{navigation="loop";}
}
function update(){
  change=1;
  temp=document.getElementById("bar").value;
}
