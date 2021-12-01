class Iron{
	constructor(x,y,r)
	{
        var options = {
            'restitution':0.8,
            'friction':3,
            'density':30
            }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			rect(0, 0, this.width, this.heigh);
			pop()
	}

}