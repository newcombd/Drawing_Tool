//Drawing Tool

let angle = 0

let pendown = false

let shape = 'brush'

let eraserShape = 'circle'

//brush
let brushSize = 50
let brushSlider = 60
let opacity = 250

let red = 220
let redSlider = 230
let green = 140
let greenSlider = 150
let blue = 60
let blueSlider = 70

let colorBank = 'one'
let colorBank1R = 100
let colorBank1G = 100
let colorBank1B = 100
let colorBank2R = 100
let colorBank2G = 100
let colorBank2B = 100
let colorBank3R = 100
let colorBank3G = 100
let colorBank3B = 100

function setup() {

let canvas = createCanvas(1300, 750) //canvas
canvas.parent("p5")

rect(0, 0, width, height)
fill (255, 0, 0, 100)

}

function draw() { //HERE IS THE DRAW FUNCTION -----------------------------------------------------------------------------------------------


//slidersetup
redSlider = red+10
greenSlider = green+10
blueSlider = blue+10
brushSlider = brushSize+10
opacitySlider = opacity/2.5


angle += .1

if (pendown == true && shape == 'pacman') {
	noStroke()
	arc(mouseX, mouseY, brushSize, brushSize, angle, angle+1)
	}

if (pendown == true && shape == 'brush') { 
	strokeWeight(brushSize/2)
	line(mouseX, mouseY, pmouseX, pmouseY)
	}

if (pendown == true && shape == 'dots') { 
	strokeWeight(brushSize/4)
	ellipse(mouseX, mouseY, 10, 10)
	}

if (pendown == true && shape == 'triangle') { 
	noFill()
	strokeWeight(brushSize/20)
	triangle(mouseX-brushSize/2, mouseY, mouseX, mouseY+brushSize/2, mouseX+brushSize/2, mouseY)
	}

if (pendown == true && shape == 'excess') { 
	strokeWeight(brushSize/20)
	line(mouseX-brushSize/2, mouseY-brushSize/2, mouseX+brushSize/2, mouseY+brushSize/2)
	line(mouseX-brushSize/2, mouseY+brushSize/2, mouseX+brushSize/2, mouseY-brushSize/2)
	}

if (pendown == true && shape == 'bubble') { 
	strokeWeight(brushSize/20)
	ellipse (mouseX+random(brushSize/2,-brushSize/2), mouseY+random(brushSize/2,-brushSize/2), brushSize/20, brushSize/20)
	}

if (pendown == true && shape == 'eraser' && eraserShape == 'quad') { 
	noStroke()
	fill(255, 255, 255, opacity)
	strokeWeight(brushSize/20)
	quad (mouseX-brushSize, mouseY-brushSize/2, mouseX-brushSize/2, mouseY+brushSize/2, mouseX+brushSize, mouseY+brushSize/2, mouseX+brushSize/2, mouseY-brushSize/2)
	}

if (pendown == true && shape == 'eraser' && eraserShape == 'circle') { 
	stroke(255, 255, 255, opacity)
	strokeWeight(brushSize/2)
	line(mouseX, mouseY, pmouseX, pmouseY)
	}
	

push() //sidebar
strokeWeight(1)
stroke(1)
fill (180)
rect (0, 0, 300, 750)
noStroke()
fill (200)
rect (0, 0, 290, 750)
fill (180)
rect (0, 280, 299, 10)
rect (0, 510, 299, 10)
rect (0, 650, 299, 10)
rect (0, 740, 299, 10)
stroke(1)

line (0, 290, 300, 290)
line (0, 520, 300, 520)
line (0, 660, 300, 660)


textSize(15) //Color Sliders ------------------------------------------

fill(10)
text('Colors:', 10, 20)

fill(255, 0, 0)
text('Red', 10, 40)
fill(red, 0, 0)
rect(10, 50, 255, 10, 10)
ellipse (redSlider, 55, 20, 20)

fill(0, 255, 0)
text('Green', 10, 80)
fill(0, green, 0)
rect(10, 90, 255, 10, 10)
ellipse (greenSlider, 95, 20, 20)

fill(0, 0, 255)
text('Blue', 10, 120)
fill(0, 0, blue)
rect(10, 130, 255, 10, 10)
ellipse (blueSlider, 135, 20, 20)


	fill(0, 0, 0)
	text('Opacity:', 10, 210)
	rect(10, 220, 100, 10, 10)
	fill(255)
	ellipse(opacitySlider, 225, 20, 20)

	fill(0, 0, 0)
	text('Size:', 10, 250)
	rect(10, 260, 100, 10, 10)
	fill(255)
	ellipse(brushSlider, 265, 20, 20)

	fill (red, green, blue, opacity)
	ellipse(200, 230, brushSize, brushSize)


fill (50)
text('Eraser:', 15, 540)
text('Circle', 35, 570)
fill(255)
square(15, 555, 15)
fill(50)
if (eraserShape == 'circle') {
	square(20, 560, 5)
}
text('Quadrilateral', 35, 620)
fill(255)
square(15, 605, 15)
fill(50)
if (eraserShape == 'quad') {
	square(20, 610, 5)
}


//color banks -----------------------------------------------------------------------------------------------------------------------------------

push()
noStroke()

if (colorBank == 'one') {
	fill(160)
	colorBank1R = red
	colorBank1G = green
	colorBank1B = blue
	red = colorBank1R
	green = colorBank1G
	blue = colorBank1B
}
else{
	fill (200)
}
rect(10, 150, 40, 40)
fill(colorBank1R, colorBank1G, colorBank1B)
rect(15, 155, 30, 30)

if (colorBank == 'two') {
	fill(160)
	colorBank2R = red
	colorBank2G = green
	colorBank2B = blue
	red = colorBank2R
	green = colorBank2G
	blue = colorBank2B
}
else{
	fill (200)
}
rect(60, 150, 40, 40)
fill(colorBank2R, colorBank2G, colorBank2B)
rect(65, 155, 30, 30)

if (colorBank == 'three') {
	fill(160)
	colorBank3R = red
	colorBank3G = green
	colorBank3B = blue
	red = colorBank3R
	green = colorBank3G
	blue = colorBank3B
}
else{
	fill (200)
}
rect(110, 150, 40, 40)
fill(colorBank3R, colorBank3G, colorBank3B)
rect(115, 155, 30, 30)

 strokeWeight(1)
pop()

if (shape == 'brush') { //brush-----------------------------
	fill(240, 100, 0)
}
else {
	fill(220)
}

rect(15, 310, 50, 50)
	strokeWeight(3)
	beginShape()
		curveVertex(15, 359)
		curveVertex(20, 349)
		curveVertex(32, 349)
		curveVertex(30, 332)
		curveVertex(46, 334)
		curveVertex(40, 317)
		curveVertex(59, 315)
		curveVertex(64, 311)
	endShape()
	strokeWeight(1)

if (shape == 'dots') { //dots-----------------------------
	fill(240, 100, 0)
}
else {
	fill(220)
}
rect(75, 310, 50, 50)
	strokeWeight(5)
	point(85, 319)
	point(91, 325)
	point(100, 336)
	point(109, 345)
	strokeWeight(1)

if (shape == 'pacman') { //pacman-----------------------------
	fill(240, 100, 0)
}
else {
	fill(220)
}
rect(135, 310, 50, 50)
	noStroke()
	fill(80)
	ellipse(160, 335, 30, 30)
	if (shape == 'pacman') {
	fill(240, 100, 0)
	}
	else {
		fill(220)
	}
	arc(160, 335, 30, 30, angle, angle+1)
	angle += .1
	stroke(1)

if (shape == 'triangle') { //triangle-----------------------------
	fill(240, 100, 0)
}
else {
	fill(220)
}
rect(195, 310, 50, 50)
	strokeWeight(2)
	triangle(229, 319, 201, 334, 229, 351)
	strokeWeight(1)

if (shape == 'excess') { //excess----------------------------------
	fill(240, 100, 0)
}
else {
	fill(220)
}
rect(15, 380, 50, 50)
	strokeWeight(2)
	line(25, 390, 55, 420)
	line(25, 420, 55, 390)
	strokeWeight(1)


if (shape == 'bubble') { //bubble-----------------------------
	fill(240, 100, 0)
}
else {
	fill(220)
}
rect(75, 380, 50, 50)
	strokeWeight(5)
	point (100+random(20,-20), 400+random(20,-20))
	strokeWeight(1)










if (shape == 'eraser') { //eraser-----------------------------
	fill(240, 100, 0)
}
else {
	fill(220)
}
rect(130, 550, 130, 80)
	fill(255, 255, 255, opacity)
	noStroke()

	if (eraserShape == 'quad') {
		quad(195-brushSize/1.5, 590-brushSize/3, 195-brushSize/3, 590+brushSize/3, 195+brushSize/1.5, 590+brushSize/3, 195+brushSize/3, 590-brushSize/3)
	}
	if (eraserShape == 'circle') {
		ellipse(195, 590, brushSize/1.5, brushSize/1.5)
	}
	
	strokeWeight(1)







textSize(20)

fill (100, 190, 255)
rect (20, 680, 100, 50, 10)
fill (0)
text ('Save', 45, height-35)

fill (255, 100, 100)
rect (170, 680, 100, 50, 10)
fill (0)
text ('Clear', 195, height-35)
pop()



}

//mouse Functions --------------------------------------------------------------------------------------------------------------------------

function mousePressed() {
	pendown = true

//Colors -----------------------------------------------------------------------------------------------------------------------------------
	fill (red, green, blue, opacity)
	stroke (red, green, blue, opacity)

	if (mouseX >= 10 && mouseX <= 265 && mouseY >= 50 && mouseY <= 60) { //Red
		red = mouseX-10
	}

	if (mouseX >= 10 && mouseX <= 265 && mouseY >= 90 && mouseY <= 100) { //Green
		green = mouseX-10
	}

	if (mouseX >= 10 && mouseX <= 265 && mouseY >= 130 && mouseY <= 140) { //Blue
		blue = mouseX-10
	}

	if (mouseX >= 15 && mouseX <= 45 && mouseY >= 155 && mouseY <= 185) { //color bank 1
		colorBank = 'one'
		red = colorBank1R
		green = colorBank1G
		blue = colorBank1B
	}

	if (mouseX >= 65 && mouseX <= 95 && mouseY >= 155 && mouseY <= 185) { //color bank 2
		colorBank = 'two'
		red = colorBank2R
		green = colorBank2G
		blue = colorBank2B
	}

	if (mouseX >= 115 && mouseX <= 145 && mouseY >= 155 && mouseY <= 185) { //color bank 3
		colorBank = 'three'
		red = colorBank3R
		green = colorBank3G
		blue = colorBank3B
	}

	if (mouseX >= 10 && mouseX <= 110 && mouseY >= 260 && mouseY <= 270) { //brushSize
		brushSize = mouseX-10
	}

	if (mouseX >= 10 && mouseX <= 110 && mouseY >= 220 && mouseY <= 230) { //brushOpacity
		opacity = mouseX*2.5-10
	}
}


function mouseReleased() {
	pendown = false
}

function mouseClicked() {

//Buttons ---------------------------------------------------------------------------------------------------------------------------------

print(int(mouseX), int(mouseY))


	if (mouseX > 15 && mouseX < 65 && mouseY > 310 && mouseY < 360) { //brush
		shape = 'brush'
	}

	if (mouseX > 75 && mouseX < 125 && mouseY > 310 && mouseY < 360) { //dots
		shape = 'dots'
	}

	if (mouseX > 135 && mouseX < 185 && mouseY > 310 && mouseY < 360) { //pacman
		shape = 'pacman'
	}

	if (mouseX > 195 && mouseX < 245 && mouseY > 310 && mouseY < 360) { //pacman
		shape = 'triangle'
	}

	if (mouseX > 15 && mouseX < 65 && mouseY > 380 && mouseY < 430) { //excess
		shape = 'excess'
	}

	if (mouseX > 75 && mouseX < 125 && mouseY > 380 && mouseY < 430) { //bubble
		shape = 'bubble'
	}

	if (mouseX > 130 && mouseX < 260 && mouseY > 550 && mouseY < 630) { //eraser
		shape = 'eraser'
	}

	if (mouseX >= 15 && mouseX <= 30 && mouseY >= 555 && mouseY <= 570) { //circle shaped eraser
		eraserShape = 'circle'
	}

	if (mouseX >= 15 && mouseX <= 30 && mouseY >= 605 && mouseY <= 620) { //quad shaped eraser
		eraserShape = 'quad'
	}



	if (mouseX > 20 && mouseX < 120 && mouseY > 680 && mouseY < 730) { //SAVE-------
		to_save = get(300, 0, 1000, 750); // Grab an image of a 1000x750 rectangle at (300,0).
		to_save.save("saved_canvas.png");
	}

	if (mouseX > 170 && mouseX < 270 && mouseY > 680 && mouseY < 730) { //CLEAR-------
		push()
		strokeWeight(1)
		stroke(1)
		fill(255)
		rect(300, 0, 1000, 750)
		pop()
	}

}



//https://discourse.processing.org/t/p5-js-save-only-part-of-the-canvas/7286 
//(to save)


