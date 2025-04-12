// Declare variables
const darkModeButton = document.querySelector("#dark-mode");

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