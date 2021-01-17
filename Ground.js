class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      fill('red');
      rectMode(CENTER);
      rect(this.ground.position.x,this.ground.position.y,900,20);
    }
  };
