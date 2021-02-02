class Pig{
    constructor(x,y){
      var options={
          restitution:0.6,
          density:1.0,
          friction:0.4

      }
      this.body=Bodies.rectangle(x,y,50,50,options)
      this.width=50;
      this.height=50;

      World.add(world,this.body);
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        rectMode(CENTER);
        strokeWeight(4);
        stroke("white");
        fill("green");
        rect(0,0,this.width,this.height);
    }
}