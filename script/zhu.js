// const oZhu = document.getElementsByClassName('zhu')[0];
const oZhu = document.createElement('div')
// const zhuHeight= safeHight - 150;
const maxHeight = safeHight - 150 - 40;
const minHeight = 40
const oContainer = document.getElementsByClassName('container')[0];


// 单个的柱子类
class Zhu extends Rectangle {
    constructor(height,width,disX,disY,speedX,speedY,dom,className){
        super(height,width,disX,disY,speedX,speedY,dom)
        this.className = className;
        this.time = null;
    }
    render(){
        super.render()
        //将新建的柱子插入到页面上
        this.dom.classList.add('zhu')
        this.dom.classList.add(this.className)
        oContainer.appendChild(this.dom)
    }

    drop(){
        oContainer.removeChild(this.dom)
    }
}

class ZhuPair {
    constructor(max,min,safeHight){
         this.max = max;
         this.min = min;
         this.safeHight = safeHight;
         this.speed = -5;
         this.time = null;
    }
    random(ma,mi){
        return Math.floor(Math.random()*(ma - mi)+mi)

    }
    calHeight(){
        console.log(this.random(this.max,this.min))
        // 计算出其中一个柱子的高度
        this.heightUp = this.random(this.max,this.min)
        
        this.heightDown =  this.safeHight - 150 - this.heightUp
        console.log(this.heightUp,this.heightDown)
        this.makeZhu()
        this.go();
       
    }
    makeZhu(){
        this.up = new Zhu(this.heightUp + 'px','52px',800,488-this.heightUp,-9,0,document.createElement('div'),'up')

        this.up.render()

        this.down =  new Zhu(this.heightDown + 'px','52px',800,0,-9,0,document.createElement('div'),'down')
        this.down.render()
        // 将内部的柱子对保存出来
        this.domUp = this.up.dom;
        this.domDown = this.down.dom;
        this.left = this.down.disX;
    }
    go(){
        if(this.time){
            return
        }else {
            this.time = setInterval( ()=>{
                this.down.go(0.2)
                this.up.go(0.2)
        }
       ,16)
        }
        
        // this.up.go(0.3)
    }
    drop(){
        clearInterval(this.time)
        this.time = null;
        this.up.drop();
        this.down.drop()
    }
    stop(){
        clearInterval(this.time)
        this.time = null
    }
    
    
}

//制造一个个的柱子对
class makeZhuPair{
    constructor(){
        this.time = null;
        this.arr = [];

    }
    make(){
        //开定时器生产柱子对
        console.log(this)
        
        if(this.time){
            return;
        }else{
            if(this.arr){
                this.arr.forEach(function(item){
                    item.go()
                })
            }
            this.time = setInterval(()=>{
                // console.log('jj')
                //在这里循环this.arr判断每一项的left
                this.arr.forEach((item,index)=>{
                    if(item.down.disX < 0){
                        // 从数组中除名
                        //从dom中除名
                        this.arr.splice(index,1)
                        item.drop()
                        
                        console.log(this.arr)


                    }
                    // 从数组中也要除名
                    
                })
                console.log(this.arr)
                var test = new ZhuPair(maxHeight,minHeight,safeHight)
                test.calHeight()
                // console.log(test.left)
                this.arr.push(test)

            },1500)
           
        }
    }
    stop(){
        
        clearInterval(this.time)
        this.time = null
        this.arr.forEach(function(item){
            item.stop()
        })
    }
}

// const maker = new makeZhuPair()
// maker.make() 
// console.log(safeHight)
// const zhuPair = new ZhuPair(maxHeight,minHeight,safeHight)
// zhuPair.calHeight()
// zhuPair.drop()


// class A{
//     constructor(){
//         this.a = "ni";
//         this.b = "hao "
//     }
// }