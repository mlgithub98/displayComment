<template>
    <div class="box">
        <transition name="fade" v-for="(item,index) in picLis">
            <div class="pic-lis" v-if="lisIf.indexOf(index)>-1" v-show="lisShow.indexOf(index)>-1">
                <img class="display-img" :src="item.imgSrc">
                <div class="comment-text">{{item.comment}}</div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return{
            picLis:[
                {
                    imgSrc:"../../static/images/324551.jpg",
                    comment:"评论这张图片"
                },
                {
                    imgSrc:"../../static/images/324958.jpg",
                    comment:"猜猜这张图片"
                },
                {
                    imgSrc:"../../static/images/325032.jpg",
                    comment:"海纳百川，有容乃大"
                },
                {
                    imgSrc:"../../static/images/1000343.jpg",
                    comment:"不是所有的牛奶都叫特仑苏"
                },
                {
                    imgSrc:"../../static/images/1001667.jpg",
                    comment:"留得青山在，不怕没柴烧"
                },
                {
                    imgSrc:"../../static/images/pic.jpg",
                    comment:"绿油油的葫芦贝尔大草原"
                },
                {
                    imgSrc:"../../static/images/1001229.jpg",
                    comment:"大漠孤烟直，长河落日圆"
                },
                {
                    imgSrc:"../../static/images/1001268.jpg",
                    comment:"全省的白菜心，也是中国历史的白菜心"
                },
                {
                    imgSrc:"../../static/images/1001400.jpg",
                    comment:"云雾缭绕的蔚蓝色山峦"
                },
                {
                    imgSrc:"../../static/images/1001420.jpg",
                    comment:"大自然的风光看成五彩的画图"
                },
                {
                    imgSrc:"../../static/images/1001546.jpg",
                    comment:"八百里秦川尘土飞扬"
                },
                {
                    imgSrc:"../../static/images/1001583.jpg",
                    comment:"五百万懒汉齐唱秦腔"
                },
            ],
            screenW:document.body.clientWidth,
            screenH:document.body.clientHeight,
            lisIf:[],
            lisShow:[],
        }
    },
    mounted(){
        this.picLisSort()
        setTimeout(()=>{
            this.moveStart()
            this.picAppear()
        },100)
    },
    methods:{
        picLisSort(){
            for(let i = 0; i < this.picLis.length; i++){
                this.lisIf.push(i)
                this.lisShow.push(i)
            }
        },
        moveStart(){
            for(let i = 1; i <= this.picLis.length; i++){
                if((i-1)%4 == 0){
                    this.move.goLeft(document.getElementsByClassName("pic-lis")[i-1],this.screenW-i*30-350,i*30+50)
                }else if((i-2)%4 == 0){
                    this.move.goRight(document.getElementsByClassName("pic-lis")[i-1],i*30+100,this.screenH-i*30-50)
                }else if((i-3)%4 == 0){
                    this.move.goTop(document.getElementsByClassName("pic-lis")[i-1],this.screenW/2-i*20+100,this.screenH-i*30-50)
                }else if((i-4)%4 == 0){
                    this.move.goDown(document.getElementsByClassName("pic-lis")[i-1],i*30+150,i*30+50)
                }
            }
        },
        picAppear(){
            var n = 0
            setInterval(()=>{
                // 出现
                n++
                this.picLis.push({
                    imgSrc:"../../static/images/324551.jpg",
                    comment:"出现第"+n+"张" 
                })
                this.lisIf.push(this.picLis.length-1)
                var ln = this.picLis.length
                setTimeout(()=>{
                    if((ln-1)%4 == 0){
                        this.move.goLeft(document.getElementsByClassName("pic-lis")[ln-1],this.screenW-ln*30-350,ln*30+50)
                    }else if((ln-2)%4 == 0){
                        this.move.goRight(document.getElementsByClassName("pic-lis")[ln-1],ln*30+100,this.screenH-ln*30-50)
                    }else if((ln-3)%4 == 0){
                        this.move.goTop(document.getElementsByClassName("pic-lis")[ln-1],this.screenW/2-ln*20+100,this.screenH-ln*30-50)
                    }else if((ln-4)%4 == 0){
                        this.move.goDown(document.getElementsByClassName("pic-lis")[ln-1],ln*30+150,ln*30+50)
                    }
                },10)
                setTimeout(()=>{
                    this.lisShow.push(this.picLis.length-1)
                    document.getElementsByClassName("pic-lis")[ln-1].style.opacity = 0
                    var opacitiyN = 0
                    var opaTime = setInterval(()=>{
                        opacitiyN += .08
                        document.getElementsByClassName("pic-lis")[ln-1].style.opacity = opacitiyN
                        if(opacitiyN >= 1){
                            window.clearInterval(opaTime)
                        }
                    },10)
                },20)
                
                //消失
                setTimeout(()=>{
                    this.lisShow.splice(0,1)
                },30)
                // setTimeout(()=>{
                //     this.picLis.splice(0,1)
                //     console.log(this.lisIf.length+"/"+this.picLis.length)
                // },530)
            },4000)
        }
    }
}
</script>

<style>
.box{
    width:100%;
    height:100%;
    background:gray;
    position:relative;
}
.pic-lis{
    background:#fff;
    position:absolute;
    padding:10px;
    opacity:.6;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
.fade-enter-active, .fade-leave-active{
    transition: opacity .5s linear;
}
.pic-lis:nth-last-child(1){
    opacity:1;
}
.pic-lis:nth-last-child(2){
    opacity:1;
}
.pic-lis:nth-last-child(3){
    opacity:1;
}
.pic-lis:nth-last-child(4){
    opacity:1;
}
.display-img{
    width:250px;
    height:150px;
}
</style>