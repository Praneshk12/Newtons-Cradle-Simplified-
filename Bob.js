class Bob {
	constructor(x,y,r) {
		var options = {
			isStatic:false,
			restitution:1,
			friction:0,
			density:7.8
		
	}
		this.x = x;
		this.y = y;
		this.r = r
		this.image=loadImage("paper.png");
		this.body = Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world,this.body);

	}
	display() {
			
		var pos=this.body.position;		
		push()
		translate(pos.x, pos.y);
        rotate (this.body.angle)
        fill("black");

        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r)
        pop ()
			
	}

}