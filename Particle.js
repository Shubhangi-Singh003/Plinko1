class Particle {
    constructor(x,y,r){
        var options = {
            restitution:0.4
        }

        this.r=r;
        this.body = Bodies.circle(x,y,this.r, options);
        
        this.color = this.color(random(0, 225), random(0, 225), random(0, 225))
        World.add(world, this.body);
   
    }
    display(){
        var pos = this.body.position;
         var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        noStroke();
        fill(this.color)
        
        ellipseMode(CENTER)
        ellipse
       // cirlcle(pos.x, pos.y, this.radius);
        pop();
    }
    }