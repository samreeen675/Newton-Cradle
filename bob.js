class bob {

    constructor(x,y,radius) {
        var Options = {
            isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
        }
    this.body = Bodies.circle(x,y,radius/2,Options);
    this.radius = radius;

    World.add(world, this.body);
    }


    display(){
    // var angle =this.body.angle;

    push();
    translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER);
    // rotate(angle);
    fill(255,0,255);
    // ellipseMode(CENTER);
    ellipse(0,0,this.radius,this.radius);
    pop();

       
    }

   
}


