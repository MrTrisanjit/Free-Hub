// open links when card clicked
document.querySelectorAll(".card").forEach(card=>{
card.addEventListener("click",()=>{
const link = card.getAttribute("data-link");

if(link && link.trim() !== ""){
window.open(link,"_blank");
}
});
});


// back button
function goBack(){
history.back();
}