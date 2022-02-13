class Custompoint {
  constructor(x, y, z) {
    this.purex = this.x = x;
    this.purey = this.y = y;
    this.purez = this.z = z;
  }
  seekpos(x, y, z) {
    this.purex = x;
    this.purey = y;
    this.purez = z;
  }
  display() {
    // monapple.circle(this.x, this.y, 14);
    // monapple.push() ; 
    // monapple.translate(this.x,this.y,this.z) ; 
    monapple.circle(this.x, this.y, 14);
    // monapple.pop() ; 
  }
  work() {
    this.x = monapple.lerp(this.x, this.purex, Lerpspeed);
    this.y = monapple.lerp(this.y, this.purey, Lerpspeed);
    this.z = monapple.lerp(this.z, this.purez, Lerpspeed);
  }
}
let Lerpspeed = 0.7;
class Customhand {
  constructor(handpoints) {
    this.points = [];
    this.avgpoint = new Custompoint(0, 0);
    let i = 0;
    for (; i < handpoints.length; ++i) {
      this.addpoint(
        handpoints[i].x * monapple.width,
        handpoints[i].y * monapple.height,
        -handpoints[i].z * monapple.width
      );
      this.avgpoint.x += this.points[i].x;
      this.avgpoint.y += this.points[i].y;
      this.avgpoint.z += this.points[i].z;
    }
    this.avgpoint.x /= i;
    this.avgpoint.y /= i;
    this.avgpoint.z /= i;
  }
  seekhands(handpoints) {
    let i = 0;
    for (; i < handpoints.length; ++i) {
      this.points[i].seekpos(
        handpoints[i].x * monapple.width,
        handpoints[i].y * monapple.height,
        -handpoints[i].z * monapple.width
      );
      this.avgpoint.x += this.points[i].x;
      this.avgpoint.y += this.points[i].y;
      this.avgpoint.z += this.points[i].z;
    }
    this.avgpoint.x /= i;
    this.avgpoint.y /= i;
    this.avgpoint.z /= i;
  }
  addpoint(x, y, z) {
    this.points.push(new Custompoint(x, y, z));
  }
  display_skeleton() {
    this.drawLines([0, 5, 9, 13, 17, 0]); //palm
    this.drawLines([0, 1, 2, 3, 4]); //thumb
    this.drawLines([5, 6, 7, 8]); //index finger
    this.drawLines([9, 10, 11, 12]); //middle finger
    this.drawLines([13, 14, 15, 16]); //ring finger
    this.drawLines([17, 18, 19, 20]); //pinky
  }
  drawLines(index) {
    for (let j = 0; j < index.length - 1; j++) {
      let x = this.points[index[j]].x;
      let y = this.points[index[j]].y;
      // let z = this.points[index[j]].z;

      let _x = this.points[index[j + 1]].x;
      let _y = this.points[index[j + 1]].y;
      // let _z = this.points[index[j+1]].z;
      // monapple.line(x, y,z, _x, _y,_z);
      monapple.line(x, y, _x, _y);

    }
  }
  work() {
    for (let i = this.points.length - 1; i > -1; --i) {
      this.points[i].work();
    }
    if (show_markers) {
      monapple.stroke(255);
      monapple.strokeWeight(3);
      this.display_skeleton();
      // monapple.strokeWeight(2);
      monapple.fill(255, 0, 69);
      monapple.noStroke();
      for (let i = this.points.length - 1; i > -1; --i) {
        // monapple.stroke(255);

        this.points[i].display();
        // monapple.fill(79, 255, 114);
        // monapple.stroke(79, 255, 114);
        // monapple.text(i, this.points[i].x, this.points[i].y);
      }
    }
    if (
      monapple.dist(
        this.avgpoint.x,
        this.avgpoint.y,
        // this.avgpoint.z,
        this.points[0].x,
        this.points[0].y,
        // this.points[0].z
      ) <
      curl_thrushold*monapple.dist(
        this.points[0].x,
        this.points[0].y,
        // this.points[0].z,
        this.points[17].x,
        this.points[17].y,
        // this.points[17].z
      )
    ){
      
    }
    // monapple.stroke(0, 0, 255);
    // this.avgpoint.display();
  }
}
