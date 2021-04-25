let canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.fillStyle = 'black'
let isMouseDown = false
let cords = []
ctx.fillStyle = "red"
ctx.strokeStyle = "red"
canvas.addEventListener('mousedown',function (){
    isMouseDown = true
})
canvas.addEventListener('mouseup',function (){
    isMouseDown = false
})

ctx.lineWidth = 10*2

canvas.addEventListener("mousemove",function (e){
    if(isMouseDown){
        cords.push([e.clientX,e.clientY])
        ctx.lineTo(e.clientX,e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(e.clientX,e.clientY,10,0,Math.PI *2);
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(e.clientX,e.clientY)

    }



})

const save= () =>{
    localStorage.setItem("cords", JSON.stringify(cords))
}

const replay = () =>{
    let timer = setInterval(function (){
        if(!cords.length){
            clearInterval(timer)
            ctx.beginPath()
            return
        }
        let crd = cords.shift()
       let el = {
            clientX:  crd["0"],
            clientY:  crd["1"]
        }
        ctx.lineTo(el.clientX,el.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(el.clientX,el.clientY,10,0,Math.PI *2);
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(el.clientX,el.clientY)
    },30)
}

let clear = () =>{
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,canvas.width,canvas.height)

    ctx.beginPath()
    ctx.fillStyle = "black"
}
document.addEventListener("keydown",function (e){
    if(e.keyCode == 83){
        save()
        alert("saved")
    }
    if(e.keyCode == 82){
        cords = JSON.parse(localStorage.getItem(cords))
        clear()
        replay()
        alert("replaying")
    }
    if(e.keyCode == 67){
        //clear
        clear()
        alert("cleared")

    }
})



















// ctx.arc(canvas.width /2 , canvas.height / 2 , 100,0,Math.PI,false)
// ctx.fill()
// ctx.strokeStyle = "gold"
// ctx.lineWidth = 5


// ctx.scale(2,2)
// ctx.rotate(5 * Math.PI / 180)
// ctx.beginPath()
// ctx.moveTo(50,50)
// ctx.lineTo(25,100)
// ctx.lineTo(25,100)
// ctx.lineTo(75,100)
// ctx.closePath()
// ctx.stroke()

//
// ctx.font = "50px Georgia"
//     ctx.textAlign = "center"
// const grad  = ctx.createLinearGradient(0,0,500,0)
// grad.addColorStop(0,'red')
// grad.addColorStop(.50,'black')
// grad.addColorStop(1,'blue')
// ctx.fillStyle = grad
// ctx.fillText("hello Asima",canvas.width/2,canvas.height/2)



// ctx.lineWidth = 20
// ctx.strokeRect(x,30,300,200)


// setInterval(()=>{
//     ctx.fillStyle= 'white'
//     ctx.fillRect(0,0 ,canvas.width ,canvas.height)
//     ctx.fillStyle = 'aqua'
//     ctx.fillRect(x++,30,300,200)
// },10)