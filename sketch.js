let p5jscanvas;
let capture;
let ready = false;
let setting_size = true;
let a;
let godhands = [];
let zoomscale = 2;
let videopointer;
let slider_resolution;
let show_markers = false;
let animation_working = true;
let videoface = "environment";
let curl_thrushold = 0.4; 
let sketch = function (p) {
    p.setup = function () {
        p5jscanvas = p.createCanvas(0,0,p.WEBGL);
        p.pixelDensity(1);
        p.fill(255, 0, 69);
        p.stroke(255, 0, 69);

        p.textSize(50);
        p.frameRate(155);
    }
    p.draw = function () {
        p.clear();
        p.translate(-p.width/2,-p.height/2);
        if (detections != undefined) {
            if (detections.multiHandLandmarks != undefined) {
                if (detections.multiHandLandmarks.length < godhands.length)
                    godhands = [];

                for (let i = 0; i < detections.multiHandLandmarks.length; i++) {
                    if (!godhands[i])
                        godhands.push(new Customhand(detections.multiHandLandmarks[i]));
                    else godhands[i].seekhands(detections.multiHandLandmarks[i]);
                }
            }
        }
        for (let i = godhands.length - 1; i > -1; --i) {
            godhands[i].work();
        }
        if (show_markers) {
            // p.textAlign(p.BOTTOM, p.RIGHT);
            // p.text("Marker Display ON", 0 , p.height - 5);
        }
    }

}


let monapple = new p5(sketch);