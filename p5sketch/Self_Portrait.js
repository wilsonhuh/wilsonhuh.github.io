var img;
function preload() {
img = loadImage("images/chicken.png")
}

function setup() {
createCanvas(500, 500);
strokeWeight(0);
}
function draw() {
background(30, 0, 0); // blk


fill(250, 215, 148); // necc color
rect(200, 300, 100, 500); // necc
fill(250, 215, 148); // necc circle color
ellipse(250, 390, 100, 70); // necc circle
fill(255, 230, 179); // Face color
ellipse(250, 250, 200, 250); // Face
ellipse(250, 410, 20, 40); // Adam's Apple


fill(50, 50, 50); // hair color
triangle(180, 225, 180, 240, 235, 240); // left eyebrow
triangle(320, 225, 320, 240, 265, 240); // right eyebrow
arc(250, 220, 200, 195, PI, TWO_PI); // Hair
triangle(260, 130, 320, 165, 345, 133); // Hair Spike 1
triangle(240, 130, 180, 165, 180, 120); // Hair Spike 2
triangle(240, 140, 180, 190, 150, 160); // Hair Spike 3


fill(255, 255, 255); // eye color
ellipse(204, 249, 50, 10); // left eye
ellipse(296, 249, 50, 10); // right eye
fill(60, 40, 0); // pupil color
ellipse(204, 249, 15, 10); // left eye pupil
ellipse(296, 249, 15, 10); // right eye pupil
fill(255, 255, 255); // pupil light
ellipse(207, 247, 5, 5); // left eye pupil
ellipse(299, 247, 5, 5); // right eye pupil


fill(250, 215, 148); // nose color
triangle(250, 250, 240, 285, 260, 285); // Nose base
ellipse(250, 285, 10, 5); // nose tip
ellipse(242, 280, 8, 10); // left nostril
ellipse(258, 280, 8, 10); // right nostril

fill(120, 8, 28); // mouth color
arc(250, 320, 120, 25, PI, TWO_PI); // mouth
fill(190, 0, 35); // tongue color
arc(250, 320, 50, 15, PI, TWO_PI); // tongue


fill(255, 230, 179); // left ear color
triangle(157, 226, 128, 178, 157, 290); //left ear
fill(255, 230, 179); // right ear color
triangle(343, 226, 372, 178, 343, 290); //right ear

fill(50, 50, 50); // hair color
triangle(150, 215, 150, 265, 170, 215); // Left Sideburn
triangle(350, 215, 350, 265, 330, 215); // Right Sideburn
fill(255, 230, 179); // Face color
triangle(170, 222, 230, 222, 200, 210); //thing 1
triangle(220, 222, 280, 222, 250, 210); //thing 2
triangle(270, 222, 330, 222, 305, 210); //thing 3

image(img, 0, 0); //chicken

}
