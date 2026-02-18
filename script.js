// Mobile Menu
function toggleMenu(){
    document.querySelector('.navbar').classList.toggle('open');
}

// Typing Effect
const text = ["Software Engineering Student", "Web Developer", "Problem Solver"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 120);
})();

// Skill Animation on Scroll
window.addEventListener("scroll", function(){
    document.querySelectorAll(".progress-bar").forEach(bar=>{
        bar.style.width = bar.getAttribute("data-width");
    });
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message Sent Successfully!");
});


