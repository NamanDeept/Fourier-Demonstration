var freqSlider,amplitudeSlider,nSlider;

function setup(){
  createCanvas(1000,400);
  textSize(16);
  freqSlider = createSlider(0,255,169);
  freqSlider.position(30,250);
  
  amplitudeSlider = createSlider(0,255,175);
  amplitudeSlider.position(80+freqSlider.width,250);
  nSlider = createSlider(0,255,0);
  nSlider.position(100+freqSlider.width+amplitudeSlider.width,250);
  
}
var time =0;
var points = [];
function draw(){
  background(155,0,0);
  strokeWeight(1);
  text("Frequency Control",30,freqSlider.y+40);
  text("Amplitude Control",freqSlider.x+freqSlider.width+50,amplitudeSlider.y+40);
  text("N control",freqSlider.x+freqSlider.width+amplitudeSlider.width+80,nSlider.y+40);
 
  fill(155,0,0);  
  stroke(255,255,255);
  strokeWeight(2);
  var x=0;
  var y=0;
  for (let i =0 ; i < nSlider.value()/20+1; i++) {
    var prevx=x;
    var prevy=y;
    var n = 2*i+1;
    var radius = (4/(PI * n)*amplitudeSlider.value()*0.35);
    stroke(255,100,100);
    noFill();
    x+= radius * cos(n * time);
    y+= radius * sin(n * time);
    ellipse(150 + prevx,120 + prevy,2*radius);
    stroke(255);
    line(150+prevx,120+prevy,150+x,120+y);
    console.log(n+"\t"+radius);
  }
  line(150+x,120+y,300,120+y);
  points.unshift(y);
  beginShape();
  noFill();
  for(var i=0;i<points.length;i++){
    vertex(300+i,120+points[i]);
  }
  endShape();
  time+=freqSlider.value()*.0008; 
}