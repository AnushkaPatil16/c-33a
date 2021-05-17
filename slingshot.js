class SLINGSHOT{
    constructor(a,b){
         var options = {
            bodyA:a ,
            pointB:b,
            stiffness:0.2,
            length:20
         }

        this.sling = Constraint.create(options);
        this.pointb = b
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        World.add(world,this.sling) ;
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(abc){
        this.sling.bodyA = abc
    }

    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
        
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointb;
            push() 
            stroke(48,22,8);
            strokeWeight(5);
            if(posA.x < 220){
                line(posA.x-25,posA.y,posB.x-25,posB.y) 
                line(posA.x-25,posA.y,posB.x+25,posB.y)  
                image(this.sling3,posA.x-30,posA.y-10,15,30);  
            }
            else{
                line(posA.x+25,posA.y,posB.x-25,posB.y) 
                line(posA.x+25,posA.y,posB.x+25,posB.y)  
                image(this.sling3,posA.x+25,posA.y-10,15,30);
            }
            pop()
        }
        
    }
}