class Obstacle{
    constructor(gameScreen){
        this.gameScreen = gameScreen

        //random position for the appearance of the obstacles
        this.left = Math.floor(Math.random()*300 + 100); //we only want obstacles appearing on 300px width and starting on pixel 70.

        //appear on top
        this.top = 0;
        this.width = 100;
        this.height = 150;

        //create the HTML element and default styling

        this.element = document.createElement("img");
        this.element.src = "./images/redCar.png";
        this.element.style.position = "absolute";
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;

        this.gameScreen.appendChild(this.element);

    }

    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }


    move(){
        //Drop the obstacle 3px to the bottom (you can chose the number of pixels)
        this.top += 3;
        this.updatePosition();
    }
    
}