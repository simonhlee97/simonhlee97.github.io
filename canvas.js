var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c = context
var c = canvas.getContext('2d');


// Rectangles:  c.fillRect(x, y, width, height);
// c.fillStyle = 'rgba(255, 0,0,0.2)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(25, 25, 25, 0.2)';
// c.fillRect(400, 200, 100, 100);
// c.fillStyle = 'rgba(2, 0, 250, 0.7)';
// c.fillRect(400, 300, 100, 100);

// Draw Lines
// c.beginPath();
// c.moveTo(350, 300);
// c.lineTo(28, 475);
// c.lineTo(708, 475);
// c.strokeStyle = "red";
// c.stroke();

// draw Arcs, Circles
// c.arc(x: Int, y:Int, radius: Int, startAngle(radians): Float, endAngle: Float, drawCounterClockwise: Boolean);
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 1.5, false);
// c.strokeStyle = 'blue';
// c.stroke();


// for (var i = 0; i < 5; i++) {
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	var randomColor = Math.floor(Math.random()*16777215).toString(16);
// 	c.beginPath();
// 	c.arc(x, y, 90, 0, Math.PI * 2, false);
// 	c.strokeStyle = randomColor;
// 	c.stroke();
// 	console.log(c.strokeStyle);
// }

var mouse = {
	x: undefined,
	y: undefined
}

var maxRadius = 40;
// var minRadius = 3;

var colorArray = [
	'#002A73',
	'#15468B',
	'#608CC1',
	'#EFC649',
	'#F5E39C',
];

window.addEventListener('mousemove', function(event){
	mouse.x = event.x;
	mouse.y = event.y;
})

// respond to window size changing
window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
})

function Circle(x, y, dx, dy, radius){

	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		c.fillStyle = this.color;
		c.fill();
	}
	this.update = function(){
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
			this.dy = -this.dy;
		}
		// velocity
		this.x += this.dx;
		this.y += this.dy;

		// interactivity with mousemove event
		if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
			if (this.radius < maxRadius) {
				this.radius += 1;
			}
		} else if (this.radius > this.minRadius) {
			this.radius -= 1;
		}




		this.draw();
	}
}




var circleArray = [];
function init () {

	circleArray = [];

	for (var i = 0; i < 75; i++){
		var radius = Math.random() * 3 + 1;
		var x = Math.random() * (innerWidth - radius * 2) + radius;
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dx = (Math.random() - 0.5);
		var dy = (Math.random() - 0.5);
		circleArray.push(new Circle(x, y, dx, dy, radius));
		
	}
}

function animate() {
	requestAnimationFrame(animate);
	// to clear the canvas
	c.clearRect(0, 0, innerWidth, innerHeight);

	for(var i=0; i < circleArray.length; i++ ){
		circleArray[i].update();
	}
}

init();
animate();

console.log(canvas);

// Canvas OBJECTS:
// 1. Rectangles
// 2. Lines
// 3. Arcs & Circles
// 4. Bezier Curves
// 5. Images
// 6. Text
