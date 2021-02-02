class Bird{
    constructor(x,y){
        var options={
            restitution:0.6,
            density:1.0,
            friction:0.5
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body)
        this.w=50
        this.h=50
    }
    display(){
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill ("red")
        rect(0,0,this.w,this.h)
        pop();

    }
}