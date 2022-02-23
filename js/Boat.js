class Boat{

    constructor(x,y,width,height,boatPos,boatAnimation){

        this.animation = boatAnimation;
        this.speed = 0.05;

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height);

        this.boatPosition = boatPos;

        //this.image = loadImage("./assets/boat.png")

        World.add(world, this.body);

    }

    display(){

        var angle = this.body.angle;
        //var pos = this.body.position;

        var index = floor(this.speed % this.animation.length);


        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index],0,this.boatPosition,this.width,this.height);
        pop();
    }

    remove(index){

        //Body.setVelocity(this.body, {x:0, y:0});

        setTimeout(() =>{

            Matter.World.remove(world, boat[index].body);

            delete boat[index];


        },2000);

        
    }

    animate(){
        this.speed+=0.05;

    }
}