const oSky = document.getElementsByClassName('sky')[0];


// console.log(getComputedStyle(oSky)[width])
class Sky extends Rectangle{
    constructor(height,width,disX,disY,speedX,speedY,dom){
        console.log(height,width,disX,disY,speedX,speedY,dom)
        super(height,width,disX,disY,speedX,speedY,dom)
        // this.height = height;
        // this.width = width;
        // this.timer = null

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
// const sky = new Sky('100%','200%',0,0,-3,0,oSky)
// sky.render()

// setInterval(function(){
//     sky.go(0.3)
  
// },16)