const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selectedRating = "";
ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click",(event)=>{
        removeActive();
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active")
        selectedRating = event.target.innerText|| event.target.parentNode.innerText;
   })

})
btnEl.addEventListener("click",()=>{
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong> Thank You! </strong><br>
        <strong> Feedback: ${selectedRating} </strong><br>
        <strong> your feedback helps us to improve our product better </strong>`;


    }
})
function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active")
    })
}