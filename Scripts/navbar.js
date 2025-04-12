// Declare variables
const navbar = document.querySelector(".navbar");

const searchBox = document.querySelector(".navbar-search-bar");
const options = document.querySelector(".navbar-options-list");
    const optionsTop = document.querySelector(".navbar-top-options-list");
const button = document.querySelector(".navbar-menu-button");
    let buttonToggle = false;

const menuOptions = createMenuOptions();
let filteredMenuOptions = [];

// Functions
function createMenuOptions() {
    // Define return architecture
    let menu = [];

    // Create an option object
    function createOption(folder, file, name) {
        let option = {
            folder: folder,
            file: file,
            name: name,
    
            // Attributes are used to create an html line to access the page
            toLink()
            {
                return `<a class = "nav-link" href = "/Pages/${this.folder}/${this.file}.html">${this.name}</a>`
            }
        };

        return option;
    }

    // Manually append pages to the options list
    menu.push(createOption(
        "Home", "home", "Home"
    ));

    menu.push(createOption(
        "About_Me", "about_me", "About Me"
    ));

    menu.push(createOption(
        "Professional_Materials", "professional_materials", "Professional Materials"
    ));

    menu.push(createOption(
        "Projects", "projects", "Projects"
    ));

    menu.push(createOption(
        "Contact", "contact", "Contact Me"
    ));

    menu.push(createOption(
        "Settings", "settings", "Settings"
    ));

    return menu;
}

function renderNavbar() {
    const isMobile = window.innerWidth < 850;

    if (isMobile) {
        if (buttonToggle) {
            searchBox.style.display = "block";
            options.style.display = "flex";
            options.style.flexDirection = "column";
            options.style.gap = "10px";
            options.innerHTML = menuOptions.map((item) => item.toLink()).join("");
            document.querySelector(".navbar-options").style.marginTop = "5%";
        } else {
            searchBox.style.display = "none";
            options.style.display = "none";
            options.innerHTML = "";
            document.querySelector(".navbar-options").style.marginTop = "0";
        }

        button.style.display = "block";
        optionsTop.style.display = "none";
    } else {
        // Desktop layout — reset mobile-only elements
        searchBox.style.display = "none";
        button.style.display = "none";
        options.style.display = "none";
        options.innerHTML = "";

        optionsTop.style.display = "flex";
        optionsTop.style.justifyContent = "flex-end";
        optionsTop.style.gap = "20px";
        optionsTop.innerHTML = menuOptions.map((item) => item.toLink()).join("");
        document.querySelector(".navbar-options").style.marginTop = "0";

        // Only reset toggle when resizing to desktop
        buttonToggle = false;
    }
}


// Main
renderNavbar();

// EventListener for the searchbar
searchBox.addEventListener('input', () => {
    filtered = menuOptions.filter((option) => 
        option.name.toLowerCase().includes(searchBox.value.toLowerCase())
    );
    filteredMenuOptions = filtered;

    options.innerHTML = filteredMenuOptions.map((item) => item.toLink()).join("");
    optionsTop.innerHTML = filteredMenuOptions.map((item) => item.toLink()).join("");
})

// EventListener for the window size
window.addEventListener('resize', () => {
    renderNavbar();
})

// EventListener for the button
button.addEventListener('click', () => {
    buttonToggle = !buttonToggle;
    renderNavbar();
})