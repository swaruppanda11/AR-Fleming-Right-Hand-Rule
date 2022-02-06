let p5jscanvas ; 
let sketch = function (p) { 
    p.setup = function () {
        p5jscanvas = p.createCanvas(640, 480) ;
        p.fill(255,0,69) ;
        p.stroke(255,0,69) ;  

        p.textSize(50); 
    }
    p.draw = function () { 
        p.clear();
        p.text("hello",p.width/2 , p.height/2) ; 
        if(display_landmarks){
            let landmarks = detections.multilandmarks[0]; 
            for(let i = 0 ; i < landmarks.length ; i++){
                p.ellipse(landmarks[i].x * p.width , landmarks[i].y * p.height , 10 , 10) ; 
            }
        }
    }
}

let monapple = new p5(sketch);
