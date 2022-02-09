const videoElement = document.getElementsByClassName('input_video')[0];
videoElement.addEventListener('loadedmetadata', (event) => {
  first_time_setup = false;
  videoWH = videoElement.videoWidth / videoElement.videoHeight;
  videoElement.width = window.innerWidth;
  p5jscanvas.position(videoElement.offsetLeft, videoElement.offsetTop);
  // monapple.resizeCanvas(videoElement.width, videoElement.videoHeight*videoElement.width/videoElement.videoWidth);    // mon
  monapple.resizeCanvas(videoElement.offsetWidth, videoElement.offsetHeight);
});
let display_landmarks = false;
let first_time_setup = true;

let videoWH = 1;
let videoScale = 1;

let camera_rotation = 0;
function flipCamera() {
    camera_rotation = (camera_rotation + 180) % 360;
    videoElement.style.transform = `rotateY(${camera_rotation}deg)`;
    videoElement.style.webkitTransform = `rotateY(${camera_rotation}deg)`;
    videoElement.style.mozTransform = `rotateY(${camera_rotation}deg)`;
    videoElement.style.msTransform = `rotateY(${camera_rotation}deg)`;
    videoElement.style.oTransform = `rotateY(${camera_rotation}deg)`;

    p5jscanvas.style("transform", `rotateY(${camera_rotation}deg)`);
    p5jscanvas.style("webkitTransform", `rotateY(${camera_rotation}deg)`);
    p5jscanvas.style("mozTransform", `rotateY(${camera_rotation}deg)`);
    p5jscanvas.style("msTransform", `rotateY(${camera_rotation}deg)`);
    p5jscanvas.style("oTransform", `rotateY(${camera_rotation}deg)`);
}
function toggleLandmarks(){
    show_markers=!show_markers;
    document.getElementById("button_togglelandmarks").innerHTML = show_markers ? "Hide Markers" : "Show Markers";
}
toggleLandmarks();
function toggleAnimation(){
    
} 

function sliderChangeCurl() { 

}
function sliderChangeRes() { 
  
}