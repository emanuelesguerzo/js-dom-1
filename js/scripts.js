const btnElem = document.querySelector(".switch-btn");
const lightImg = document.querySelector(".light");

btnElem.addEventListener("click", function() {
    
    if (lightImg.src.includes("yellow")) {
        btnElem.innerHTML = "Accendi";
        lightImg.src = "./img/white_lamp.png"
    } else {
        btnElem.innerHTML = "Spegni";
        lightImg.src = "./img/yellow_lamp.png"
    }
});