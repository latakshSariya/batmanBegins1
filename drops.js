class drop{
    constructor(x,y){
        var options = {
            restitution : 0.1,
            friction:0.01
        }
        this.body = Bodies.rectangle(x,y,10,10,options);
        this.width = 10;
        this.height = 10;
        World.add(world , this.body);
    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body , {x:random(0,400) , y:random(0,400)})

        }
    }
    display(){
        var pos = this.body.position;
        fill("blue");
        ellipse(pos.x , pos.y , this.width , this.height);
    }
}