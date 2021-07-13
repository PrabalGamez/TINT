function preload(){
    
}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
    video_tint="";
}

function draw(){
    image(video,0,0,640,420);
    tint(video_tint);
}

function tint_2(){
    video_tint=document.getElementById("color").value;
}
function take_snapshot(){
    save("Tinted image.jpeg");
}