// Declare constants
const header = document.querySelector(".header");
const title = document.querySelector(".body-title");
const body = document.querySelector(".body");
const footer = document.querySelector(".footer");

const footerButton = document.querySelector(".footer-button");

const cursorGlow = document.getElementById("cursor-glow");

// Declare variables
var lightMode = localStorage.getItem("lightMode") === "false" ? false : true;
var mouseGlow = localStorage.getItem("mouseGlow") === "false" ? false : true;

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
    }
    else
    {
        header.style.setProperty("background-color", "#444444");
        title.style.setProperty("background-color", "#777777");
        body.style.setProperty("background-color", "#AAAAAA");
        footer.style.setProperty("background-color", "#888888");
    }

    if(mouseGlow === true)
    {
        document.querySelector("body").style.cursor = "none";
        document.getElementById("cursor-glow").style.display = "block";
        if(lightMode === true)
        {
            cursorGlow.style.backgroundColor = "#00000088";
            cursorGlow.style.boxShadow = "0 0 10px #00000088";  
        }
        else
        {
            cursorGlow.style.backgroundColor = "#00ffff88";
            cursorGlow.style.boxShadow = "0 0 10px #00ffff88";
        }
    }
    else
    {
        document.querySelector("body").style.cursor = "auto";
        document.getElementById("cursor-glow").style.display = "none";
    }
}

footerButton.addEventListener("click", () => {
    window.scrollTo({top: 0});
})

document.addEventListener("mousemove", (e) => {
    // Get the mouse type
    const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
    const isInteractive = hoveredElement && (
        hoveredElement.tagName === "BUTTON" ||
        hoveredElement.tagName === "A" ||
        hoveredElement.tagName === "IMG"
    );

    // Change glow based on pointer status
    if (isInteractive === true)
    {
        if(mouseGlow === true)
        {
            cursorGlow.style.backgroundColor = "#00ff00";
            cursorGlow.style.boxShadow = "0 0 10px #00ff00";
            hoveredElement.style.cursor = "none";
        }
        else
        {
            hoveredElement.style.cursor = "pointer";
        }
    } 
    else 
    {
        if(mouseGlow === true)
        {
            if (lightMode) 
            {
                cursorGlow.style.backgroundColor = "#00000088";
                cursorGlow.style.boxShadow = "0 0 10px #00000088";
            } 
            else 
            {
                cursorGlow.style.backgroundColor = "#00ffff88";
                cursorGlow.style.boxShadow = "0 0 10px #00ffff88";
            }
        }
        else
        {
            hoveredElement.style.cursor = "auto";
        }
    }
    
    // Move the glow
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});