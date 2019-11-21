const moveFn = {
    goLeft : function(dom,left,top){
        dom.style.left = left+"px"
        dom.style.top = top+"px"
        var moveLeft = true
        setInterval(()=>{
            if(moveLeft){
                left -= 1
            }
            if(!moveLeft){
                left += 1
            }
            if(dom.offsetLeft <= 0){
                moveLeft = false
            }
            if(dom.offsetLeft >= (document.body.clientWidth-dom.clientWidth)){
                moveLeft = true
            }
            dom.style.left = left+"px"
        },20)
    },
    goRight : function(dom,left,top){
        dom.style.left = left+"px"
        dom.style.top = top+"px"
        var moveRight = true
        setInterval(()=>{
            if(moveRight){
                left += 1
            }
            if(!moveRight){
                left -= 1
            }
            if(dom.offsetLeft <= 0){
                moveRight = true
            }
            if(dom.offsetLeft >= (document.body.clientWidth-dom.clientWidth)){
                moveRight = false
            }
            dom.style.left = left+"px"
        },20)
    },
    goTop : function(dom,left,top){
        dom.style.left = left+"px"
        dom.style.top = top+"px"
        var moveTop = true
        setInterval(()=>{
            if(moveTop){
                top -= 1
            }
            if(!moveTop){
                top += 1 
            }
            if(dom.offsetTop <= 0){
                moveTop = false
            }
            if(dom.offsetTop >= (document.body.clientHeight-dom.clientHeight)){
                moveTop = true
            }
            dom.style.top = top+"px"
        },20)
    },
    goDown : function(dom,left,top){
        dom.style.left = left+"px"
        dom.style.top = top+"px"
        var moveDown = true
        setInterval(()=>{
            if(moveDown){
                top += 1
            }
            if(!moveDown){
                top -= 1 
            }
            if(dom.offsetTop <= 0){
                moveDown = true
            }
            if(dom.offsetTop >= (document.body.clientHeight-dom.clientHeight)){
                moveDown = false
            }
            dom.style.top = top+"px"
        },20)
    }
}
export default moveFn
