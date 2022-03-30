class Rectangle{
    constructor(height,width,disX,disY,speedX,speedY,dom){
        this.height = height 
        this.width = width 
        this.disX = disX;
        this.disY = disY;
        this.speedX = speedX;
        this.speedY = speedY;
        this.dom  = dom;
    }

    render(){
        // console.log(this.dom)
        this.dom.style.height = this.height;
        this.dom.style.width =this.width;
        // console.log(this.dom.style.left)
        this.dom.style.left = parseInt(this.disX) + 'px';
        this.dom.style.top = parseInt(this.disY) + 'px';
    }
    go(duration){
        
        this.disX += this.speedX * duration 
        this.disY += this.speedY * duration 
        // console.log(this.disX)
        this.render()
    }
    
}