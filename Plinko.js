class Plinko {
    constructor(x, y){
        var options = {
            isStatic: true
        }

        this.radius = 20;
        this.body = Bodies.circle(x, y, this.radius/2, options);
        World.add(world, this.body);
    }

    display(){
      
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(100);
        ellipse(0,0,this.radius);
        pop();
       }
     }
