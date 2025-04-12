// Declare variables
const footerOptions = document.querySelector(".footer-options-list");

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

        return menu;
    }

// Main

    footerOptions.innerHTML = createMenuOptions().map((item) => item.toLink()).join("");