class Paper {
   constructor(x, y,radius ) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.radius=radius
      this.body = Bodies.circle(x, y, radius, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(8);
      stroke("yellow");
      fill("purple");
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop();
    }
  };
