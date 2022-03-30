const oLand = document.getElementsByClassName('land')[0];


class Land extends Rectangle{
    constructor(height,width,disX,disY,speedX,speedY,dom){
        super(height,width,disX,disY,speedX,speedY,dom)
        
    }

     //重写go方法
     go(duration){
        super.go(duration)
        //判断left的值是否超过2倍的宽度
        // console.log(this.disX)
        // console.log(-this.dom.offsetWidth/2)
        if(this.disX < -parseFloat(this.dom.offsetWidth/2)){
            this.disX = 0
        }
    }
    
}
// const land = new Land('112px','200%',0,488,-3,0,oLand)
// land.render()

// setInterval(function(){
//     land.go(0.3)
  
// },16)