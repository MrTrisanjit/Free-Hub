// OPEN LINKS
document.querySelectorAll(".card").forEach(card=>{
card.onclick=()=>window.open(card.dataset.link,"_blank")
})


// 3D TILT EFFECT
document.addEventListener("mousemove",e=>{
document.querySelectorAll(".card").forEach(card=>{
let rect=card.getBoundingClientRect()
let x=e.clientX-rect.left
let y=e.clientY-rect.top

let centerX=rect.width/2
let centerY=rect.height/2

let rotateX=(y-centerY)/15
let rotateY=(centerX-x)/15

card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
})
})

document.addEventListener("mouseleave",()=>{
document.querySelectorAll(".card").forEach(card=>{
card.style.transform="rotateX(0) rotateY(0)"
})
})


// PARTICLES BACKGROUND
const canvas=document.getElementById("particles")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<120;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-.5),
dy:(Math.random()-.5)
})
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{
p.x+=p.dx
p.y+=p.dy

if(p.x<0||p.x>canvas.width)p.dx*=-1
if(p.y<0||p.y>canvas.height)p.dy*=-1

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fillStyle="#00fff2"
ctx.fill()
})

requestAnimationFrame(animate)
}
animate()