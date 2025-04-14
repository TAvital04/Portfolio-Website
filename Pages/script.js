// Declare constants
const header = document.querySelector(".header");
const title = document.querySelector(".body-title");
const body = document.querySelector(".body");
const footer = document.querySelector(".footer");

const footerButton = document.querySelector(".footer-button");

const cursorGlow = document.getElementById("cursor-glow");

// Declare variables
var lightMode = localStorage.getItem("lightMode") === "false" ? false : true;

// Main
render();

// Functions
function render()
{
    // Set the color
    if(lightMode === true)
    {
        header.style.setProperty("background-color", "#999999");
        title.style.setProperty("background-color", "#CCCCCC");
        body.style.setProperty("background-color", "#FFFFFF");
        footer.style.setProperty("background-color", "#BBBBBB");

        cursorGlow.style.backgroundColor = "#00000088";
        cursorGlow.style.boxShadow = "0 0 10px #00000088";    
    }
    else
    {
        header.style.setProperty("background-color", "#444444");
        title.style.setProperty("background-color", "#777777");
        body.style.setProperty("background-color", "#AAAAAA");
        footer.style.setProperty("background-color", "#888888");

        cursorGlow.style.backgroundColor = "#00ffff88";
        cursorGlow.style.boxShadow = "0 0 10px #00ffff88";
        
    }
}

footerButton.addEventListener("click", () => {
    window.scrollTo({top: 0});
})

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});