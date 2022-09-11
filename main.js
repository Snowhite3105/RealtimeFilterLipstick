function setup(){
    Canvas = createCanvas(350,350);
    Canvas.center();
  video = createCapture(VIDEO);
  video.size(350, 350);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 350, 350 );
}
function saveimage(){
    save("FIltered_image.png");
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("lipstick_x = " + results[0].pose.nose.x);
        console.log("lipstick_y = " + results[0].pose.nose.y);
    }
}
