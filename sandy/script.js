// Page load message
window.onload = function(){
console.log("Sandhya Portfolio Loaded Successfully");
};


// GitHub Button Function
function openGithub(){
window.open("https://github.com/sandhyarani", "_blank");
}


// LinkedIn Button Function
function openLinkedin(){
window.open("https://linkedin.com/in/sandhyarani", "_blank");
}


// Smooth scrolling for sections (future navigation links ki useful)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e){
e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});
});


// Small hover animation for project box
let project = document.querySelector(".project");

if(project){
project.addEventListener("mouseover", function(){
project.style.transform = "scale(1.03)";
project.style.transition = "0.3s";
});

project.addEventListener("mouseout", function(){
project.style.transform = "scale(1)";
});
}