

class Game {
    constructor(create, draw){               // it would also work without constructor
        this.player = null;
        this.create = create;
        this.draw = draw;
    }
    start(){
        // create and draw Player
        this.player = new Player();
        this.player.domElement = this.create("player"); //create a dom element
        this.draw(this.player);
        
        // create and draw Obstacle
        this.obstacle = new Obstacle();
        this.obstacle.domElement = this.create("obstacle");
        this.draw(this.obstacle);

        setInterval(() => {

            console.log("move obstacle");
             // move obstacle
            this.obstacle.moveDown();
            this.draw(this.obstacle); 
        }, 3000);


       
   
    }

    movePlayer(direction){
        if(direction === "left"){
            this.player.moveLeft();
    } else if (direction === "right"){
        this.player.moveRight();}
    this.draw(this.player);
    }
}


class Obstacle {
    constructor(){
        this.positionX = 50;
        this.positionY = 100;
        this.domElement = null;
}
    moveDown(){
            this.positionY--;   
    }
}


class Player {
    constructor(){
        this.positionX = 45;
        this.positionY = 0 ;
        this.domElement = null;
    }

    moveLeft(){
        this.positionX--;   
        console.log("moving left"); 

    }
    moveRight(){
        this.positionX++;
        console.log("moving right");

    }
}



