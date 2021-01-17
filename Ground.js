class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(600,580,1200,20,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill('red');
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
