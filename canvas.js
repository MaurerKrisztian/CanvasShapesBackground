
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); //contact

var colors = ['blue', 'red', 'green', 'black'];


var circuitNumber = prompt("Please enter the circuits number", "50");


function Circle(x, y, dx, dy, radius) {

    this.dx = dx; //gyorsasag (rand 0-1)
    this.dy = dy;

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = colors[Math.round(Math.random()*colors.length)];

    this.draw = function(){
        c.beginPath(); 
        c.arc(this.x,this.y,this.radius,0,Math.PI*2, false);
        c.strokeStyle = this.color;
        c.stroke();
    }

    this.update = function(){
        
        if(this.x > innerWidth  -this.radius || this.x < 0 + this.radius){
            this.dx = -this.dx;
        }
        if(this.y > innerHeight - this.radius || this.y < 0 + this.radius){
            this.dy = -this.dy;
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        
        this.draw();
       
    }
}

var xx = new Circle();


function createRandomCircuit(maxSpeed){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var radius = 30;
    
    //start random direction and speed
    var dx = (Math.random() - 0.5) * maxSpeed; 
    var dy = (Math.random() - 0.5) * maxSpeed;   

    //if the circuit not fully in the browser
    if(x < 0 + radius){
        x=0 + radius ;
    }else if(x > innerWidth-radius){
        x = innerWidth-radius;
    }

    if(y < 0 + radius){
        y = 0 + radius;
    }else if(y > innerHeight - radius){
        y = innerHeight - radius;
    }

    return new Circle(x, y, dx,  dy, radius)
}


var allCircuit = [];
for(var i = 0; i<circuitNumber; i++){

    allCircuit[i] = createRandomCircuit(10);
}

 function animate(){
    requestAnimationFrame(animate); //infinite loop

    c.clearRect(0,0,innerWidth,innerHeight); 

    for(var i = 0; i < allCircuit.length; i++){
        allCircuit[i].update();
    }


}

animate();




