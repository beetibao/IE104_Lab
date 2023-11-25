const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
// Phạm Thiện Bảo_20521107 

for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", "images/pic" + i + ".jpg");
    thumbBar.appendChild(newImage);
    newImage.onclick = function (a) {
        displayedImage.src = a.target.src;
    };
}

// Phạm Thiện Bảo_20521107 
btn.onclick = function () {
    const btnclass = btn.getAttribute("class");

    // Phạm Thiện Bảo_20521107 
    if (btnclass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } 
    else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
};
    
/* Wiring up the Darken/Lighten button */
