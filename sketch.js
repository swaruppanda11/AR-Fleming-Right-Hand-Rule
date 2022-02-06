let canvas ; 
let sketch = function ( p) { 
    p.setup = function () {
        canvas = p.createCanvas(640, 480 ) ; 
    }
    p.draw = function () { 
        p.clear();
        p.text("hello", 100,100) ; 
    }
}

let monapple = new p5(sketch);
