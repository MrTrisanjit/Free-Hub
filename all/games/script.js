// wait until page loads
document.addEventListener("DOMContentLoaded",()=>{

// open links when card clicked
document.querySelectorAll(".card").forEach(card=>{
card.addEventListener("click",()=>{

const link = card.dataset.link

if(link && link.trim() !== ""){
window.location.href = link   // better than window.open for mobile
}

})
})


// back button
window.goBack = function(){

// if there is page history
if(window.history.length > 1){
window.history.back()
}
else{
// fallback if opened directly
window.location.href = "../../index.html"
}

}

})