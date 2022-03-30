class Game {
    constructor(){
        this.time1 = null;
        this.state = 0;
        this.dead = 0;
        
    }
    init(){
        this.sky = new Sky('100%','200%',0,0,-3,0,oSky)
        this.sky.render()
        this.land = new Land('112px','200%',0,488,-3,0,oLand)
        this.land.render()
        this.bird = new Bird('26px','33px',150,150,0,1,oBird,488)
        this.bird.render()
        this.maker = new makeZhuPair()
        
        
    }//初始化

    //游戏开始
    start(){
        this.state = 1;//游戏开始状态
        if(this.time1){
            return;
        }else{
            this.time1 = setInterval(() => {
                this.sky.go(0.3)
                this.land.go(0.3)
                this.bird.go(0.3)
                this.isdead(this.bird.disY,this.bird.safeHight,this.bird,this.maker.arr)
                
            }, 16);
            this.maker.make()

        }
    }
    isdead(h1,h2,o1,o2){
        if(h1==h2){
            this.stop()
            this.dead = 1;
            console.log(this.dead)
            window.alert("臭屁猪!你撞墙了!!!!嘻嘻嘻,重来吧")

        }
        //碰撞检测
        // this.isHited(o1,o2)
        if(this.isHited(o1,o2)=='撞到了'){
            
            this.stop()
            this.dead = 1;
            console.log(this.dead)
            window.alert("臭屁猪!你撞墙了!!!!嘻嘻嘻,重来吧")

        }
        // o2.forEach(function(item){
        //     this.isHited(item,o1)
        // })
        // console.log(o1,o2)
        
    }
    //obj1是小鸟,obj2是柱子对
    isHited(obj1,obj2){
        console.log(obj1,obj2)
        for(let i =0 ;i< obj2.length;i++){
            if((this.isCross(obj1,obj2[i].down)) || (this.isCross(obj1,obj2[i].up))){
                return "撞到了"
                   
            }
        }
        // obj2.forEach((item)=>{
        //     //分别判断和上下两个柱子

        //     if((this.isCross(obj1,item.down)) || (this.isCross(obj1,item.up))){
        //         return true;
                   
        //     }
            
        // })
    }
    isCross(a1,a2){
        //a1的横向中心点坐标为:
        const core1X = a1.disX + 0.5*parseInt(a1.width) ;
        const core1Y = a1.disY + 0.5*parseInt(a1.height) ;
        const core2X = a2.disX + 0.5*parseInt(a2.width);
        const core2Y = a2.disY + 0.5*parseInt(a2.height);
        const xDiffer =Math.abs(core1X - core2X);
        const yDiffer =Math.abs(core1Y  - core2Y) ;
        const sumWidth = (parseInt(a1.width) + parseInt(a2.width))/2
        const sumHight  = (parseInt(a1.height) + parseInt(a2.height))/2
        console.log(xDiffer,yDiffer,sumWidth,sumHight )
        
        if((xDiffer < sumWidth)&&(yDiffer<sumHight)){
            console.log('jj')
            return true;
        }
        else{
            return false;
        }

    }
    stop(){
        this.state = 0
        clearInterval(this.time1)
        this.time1 = null;
        this.bird.stop();
        this.maker.stop();
    }
}

const game = new Game()
game.init()
//注册键盘事件 
document.onkeydown = function(event){
    if(event.keyCode == 13){
        // console.log(game.state)
        if(game.dead == 0){
            if(game.state == 0){
            
                game.start()
            }
           else if(game.state == 1){
               game.stop()
    
           }
        }else {

            document.location.reload()
        }
       
    }
    if(event.keyCode ==32){
        //首先确定游戏是不是开始的状态
        if(game.state == 0){
            console.log("请先开始游戏")
        }
        else if( game.state ==1){
            game.bird.jump()
        }
    }

}

