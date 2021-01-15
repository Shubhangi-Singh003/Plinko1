class Plinko {
 constructor(x,y,radius){
     var options = {
         isStatic: true
     }
     this.body = Bodies.circle(x,y,radius, options);
     this.radius = 10;
     World.add(world, this.body)

 }
 display(){
     push();
     var pos = this.body.position;
      var angle = this.body.angle;
     push();
      translate(pos.x, pos.y);
      rotate();
      noStroke();
      fill(this.color);
     ellipseMode(CENTER);
     ellipse(0, 0, this.r, this.r)
     pop();
 }
 }