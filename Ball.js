class Ball  {
    constructor(x,y,width,height,angle)   {
        var options = {
            density: 1.2,
            frictionAir: 0.005,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width
    this.height = height
        World.add(world,this.body);

    }

        display()   {
            var angle = this.body.angle
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            rotate(angle);
            ellipse(0,0,this.width, this.height)
            pop();
        }

}