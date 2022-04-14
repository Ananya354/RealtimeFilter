nose_X=0;
nose_y=0;

function preload() {
    Lipstick_lip = loadImage("Makeup face.png");
}

function setup() {
    canvas = createCanvas(450, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 350);
    video.hide();
    PoseNet = ml5.poseNet(video, modelloaded);
    PoseNet.on("pose", gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose X ="+results[0].pose.nose.x); 
        console.log("nose Y ="+results[0].pose.nose.y);
        nose_X=results[0].pose.nose.x-25;
        nose_y=results[0].pose.nose.y+15;
    }
}

function modelloaded() {
    console.log("Model is initialized");
}

function draw() {
    image(video, 0, 0, 450, 350);
    image(Lipstick_lip,nose_X,nose_y,55, 30);
}

function takeSnapshot(){
save("Lipstick_Image.png");
}