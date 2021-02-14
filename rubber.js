class Rubber {
    constructor(){
    var options = {
        isStatic:true,
        restitution:0.8
    }
    this.body = Bodies.Rectangle(x,y,options);
    World.add(world,this.body);
  }
  display(){
      push();
      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill("red");
      circle()
      pop(); 
  }
}