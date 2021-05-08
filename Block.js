class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("block.png");
      this.width = width;
      this.height = height;
      this.visibilty = 255;
      
      World.add(world, this.body);

    }
    display(){
      var pos= this.body.position;
     if(this.body.speed < 3){
     
       imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width, this.height);
     }

     else{
       World.remove(world,this.body);
       push();
       this.visibilty = this.visibilty-5;
       tint(255,this.visibilty);
       image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
       pop();
     }
       
    }
}