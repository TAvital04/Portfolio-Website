// Declare variables
const darkModeButton = document.querySelector("#dark-mode");
const mouseGlowButton = document.querySelector("#mouse-glow");

// Functions

    // EventListener for the dark mode button
    darkModeButton.addEventListener('click', () => {
        // Save the button toggle
        lightMode = !lightMode;
        localStorage.setItem("lightMode", lightMode);
        render();

        // Change the button contents
        if(lightMode === true)
        {
            darkModeButton.innerText = "Dark Mode";
        }
        else
        {
            darkModeButton.innerHTML = "Light Mode";
        }
    });

    // EventListener for the mouse glow button
    mouseGlowButton.addEventListener("click", () => {
        mouseGlow = !mouseGlow;
        localStorage.setItem("mouseGlow", mouseGlow);
        render();
    })
