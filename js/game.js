

class Game {
    constructor(create, draw){               // it would also work without constructor
        this.time = 0;
        this.player = null;
        this.obstacles= [];
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

            // move obstacles
            this.obstacles.forEach((obstacle) => {
            obstacle.moveDown();
            this.draw(obstacle)
            })

            
            // create and draw obstacles
            if(this.time % 30 === 0){         
            const newObstacle = new Obstacle();
            this.obstacles.push(newObstacle);
            newObstacle.domElement = this.create("obstacle")
            
            //this.draw(this.obstacle);
        
        }
        this.time++

        }, 50);



     
   
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



