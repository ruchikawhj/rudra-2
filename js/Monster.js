class Monster {
  constructor(x, y, width, height, monsterPos) {
  

    this.speed = 0.05;
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;

    this.monsterPosition = monsterPos;
    this.isBroken = false;
    var x=Math.round(random(0,1));
    if(x==0){
    this.animation=loadImage("assets/fly1.png")
    }
    if(x==1){
      this.animation=loadImage("assets/walk1.png")
      }

    World.add(world, this.body);
  }


  remove(index) {
  
    this.isBroken = true;
    setTimeout(() => {
      Matter.World.remove(world, monsters[index].body);
      delete monsters[index];
    }, 2000);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
   

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation, 0, this.monsterPosition, this.width, this.height);
    pop();
  }
}
