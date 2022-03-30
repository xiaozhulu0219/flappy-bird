const oBird = document.getElementsByClassName('bird')[0];
const safeHight = 488

// 小鸟是上下动的
class Bird extends Rectangle{
    constructor(height,width,disX,disY,speedX,speedY,dom,safeHight){
        super(height,width,disX,disY,speedX,speedY,dom)
        this.a =0.7
        this.i = 1;
        this.newCla = 'swing';
        this.timer = null;
        this.safeHight = safeHight - parseInt(this.height)
    }
    //重写render方法 因为要振翅
    render(){
        super.render()
        
        
    }
    go(duration){
        //重写go方法,需要给一个重力加速度每次下落的时候越来越快
        this.speedY +=this.a;
        this.disY += this.speedY * duration 
        //小鸟的活动范围,即disY的最小值为0 ,最大值为容器的高度减去大地的高度再减去自身的高度
        // console.log(this.safeHight,this.disY)
        if(this.disY<0){
            this.disY =0
        }
        if(this.disY>this.safeHight){
            this.disY = this.safeHight;
            
        }
        // if(this.disY)
        this.flap()
        this.render()


        //
    }
    //振翅的方法
    flap(){
        if(this.timer){
            return;
        }else{
            this.timer = setInterval(()=>{
                    this.i++;
                    this.i = this.i%3 +1 ;
                    
                    this.newCla = this.newCla + this.i
                    
                    this.dom.classList = 'bird'+ " " + this.newCla;
                    // console.log(this.dom.classList)
                    this.newCla= 'swing'
            },300)
        }
    }

    // 跳的方法
    jump(){
        this.speedY = -20;
    }
    stop(){
        clearInterval(this.timer)
        this.timer = null;
    }
}

// const bird = new Bird('26px','33px',150,150,0,1,oBird,488)
// bird.render()

// setInterval(function(){
//     bird.go(0.3)
  
// },16)

// document.onkeydown = function(event){
//     if(event.key == ' '){
//         bird.jump()

//     }
// }

