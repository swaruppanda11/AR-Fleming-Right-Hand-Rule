const videoElement = document.getElementsByClassName('input_video')[0];
// videoElement.addEventListener("loadedmetadata", function (e) {
//     this.width = this.videoWidth,
//     this.height = this.videoHeight;
// }, false);
// const canvasElement = document.getElementsByClassName('output_canvas')[0];
// const canvasCtx = canvasElement.getContext('2d');
let display_landmarks = false;
let first_time_setup = true;
let detections = [];
let videoWH = 1 ; 
let videoScale = 1;

function onResults(results) {
  if (first_time_setup) {
    first_time_setup = false;
    videoWH = videoElement.videoWidth / videoElement.videoHeight;
    videoElement.width = window.innerWidth;
    p5jscanvas.position(videoElement.offsetLeft - videoElement.offsetWidth / 2, videoElement.offsetTop - videoElement.offsetHeight / 2);
    monapple.resizeCanvas(videoElement.width, videoElement.videoHeight*videoElement.width/videoElement.videoWidth);    // mon
  }
  detections = results;
  // canvasCtx.save();
  // canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  // canvasCtx.drawImage(
  //   results.image, 0, 0, canvasElement.width, canvasElement.height);
  // if (results.multiHandLandmarks) {
  //   for (const landmarks of results.multiHandLandmarks) {
  //     if (display_landmarks) {
  //       drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
  //         { color: '#FFFFFF', lineWidth: 2 });
  //       drawLandmarks(canvasCtx, landmarks, { color: '#FF0040', lineWidth: 1 });
  //     }
  //   }
  // }
  // canvasCtx.restore();
}
const hands = new Hands({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  }
});
hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({ image: videoElement });
  },
  width: 1280,
  height: 720
});
camera.start();