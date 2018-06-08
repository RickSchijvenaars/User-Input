class Game {

    private paddle : Paddle

    constructor(){

        this.paddle = new Paddle()

        this.gameLoop()
    }

    private gameLoop():void{
        this.paddle.update()      
        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Game())