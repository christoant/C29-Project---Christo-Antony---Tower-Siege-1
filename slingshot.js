class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    attach(body){
        this.slingshot.bodyA = body;
    }
    
    fly(){
        this.slingshot.bodyA = null;
    }

    display(){
        if(this.slingshot.bodyA){
            var bodyA_pos = this.slingshot.bodyA.position;
        var pointB = this.pointB
        line(bodyA_pos.x,bodyA_pos.y,pointB.x,pointB.y);
        }
        
    }
    
}