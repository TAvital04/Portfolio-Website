// Declare constants
const header = document.querySelector(".header");
const title = document.querySelector(".body-title");
const body = document.querySelector(".body");
const footer = document.querySelector(".footer");

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
    }
    else
    {
        header.style.setProperty("background-color", "#444444");
        title.style.setProperty("background-color", "#777777");
        body.style.setProperty("background-color", "#AAAAAA");
        footer.style.setProperty("background-color", "#888888");
    }
}