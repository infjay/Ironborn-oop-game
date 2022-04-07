

function createDomElement(className){
    // step1: create the element --> createElement('h2');
    // step2: add content --> ex. innerHTML
    // step3: append to the dom --> parent.appendChild(elm)

    const board = document.getElementById("board");
    const newElm = document.createElement("div")
    newElm.className = className;
    board.appendChild(newElm);

    return newElm;
}

function drawDomElement(instance){

instance.domElement.style.left = instance.positionX + "%"
instance.domElement.style.bottom = instance.positionY + "%"
}

const game = new Game(createDomElement, drawDomElement);
game.start();

document.addEventListener("keydown",function(event){

    // ALTERNATIVE METHOD **
    // if(event.key === "ArrowRight"){
    //     console.log("we want to move to the right")
    // } else if (event.key === "ArrowLeft"){
    //     console.log("we want to move to the Left");
    // }

    switch(event.key){
        case "ArrowRight":
        game.movePlayer("right");
        break;
        case "ArrowLeft":
        game.movePlayer("left");
        break;
}} );