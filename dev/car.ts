class Paddle {
        
    private speed : number = 0;
    private xPos : number = 0;
    private yPos : number = 0;
    private paddle : HTMLElement
   
       constructor() {
        this.paddle = document.createElement("paddle")
        this.paddle.style.left = 0.5 * innerWidth+"px"
        this.paddle.style.top = 0.9 * innerHeight+"px"
        document.body.appendChild(this.paddle)

        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e))

        this.update()
    }

    public onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case 37: // LEFT ARROW KEY
        case 65: // 'A' KEY
            this.speed = -20
            break
        case 39: // RIGHT ARROW KEY
        case 68: // 'D' KEY
            this.speed = 20
            break
        }
    }
    
    public onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
        case 37:// LEFT ARROW KEY
        case 65: // 'A' KEY
            this.speed = 0
            break
        case 39: // RIGHT ARROW KEY
        case 68: // 'D' KEY
            this.speed = 0
            break
        }
    }

    public update() {
        this.xPos += this.speed 
        
        this.paddle.style.transform = `translate(${this.xPos}px, ${this.yPos}px)`
    }

}