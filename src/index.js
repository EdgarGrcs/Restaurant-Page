import initWebsite from "./landing";
import initAboutPage from "./aboutPage";
import initMenuPage from "./menuPage";
import initContactPage from "./contactPage";

//Implement method that removes active class from buttons

const content = document.getElementById("content");


/**
 * This function sets the button on the navbar to active, meaning that the button will be 
 * underlined.
 * Clicking on an other button will remove the underline from the current button, and underline the
 * button that you have clicked on.
 *  */
function setActiveClass(button) {
    const navButtons = document.querySelectorAll(".nav-text");

    navButtons.forEach((navButton) => {
        if (navButton != this) {
            navButton.classList.remove("active");
        }
    });
    button.classList.add("active");
}

/**
 * This function is used to switch between different tabs
 * When a button on the navbar is clicked, the content inside the "content" element is removed and
 * replaced with the elements of the tab that you clicked on
 */
function createNavBar() {

    const navDiv = document.createElement("div");
    navDiv.classList.add("topnav");

    const aHome = document.createElement("button");
    aHome.classList.add("nav-text");
    aHome.textContent = "Home";
    aHome.addEventListener("click", (e) => {
        if (aHome.classList.contains("active"))
            return;
        setActiveClass(aHome);
        initWebsite();
    })

    const navRight = document.createElement("div");
    navRight.classList.add("nav-right");
    const menuDiv = document.createElement("button");
    menuDiv.classList.add("nav-text");
    menuDiv.textContent = "Menu";
    menuDiv.addEventListener("click", (e) => {
        if (menuDiv.classList.contains("active"))
            return;
        setActiveClass(menuDiv);
        initMenuPage();
    })
    const aboutDiv = document.createElement("button");
    aboutDiv.classList.add("nav-text");
    aboutDiv.textContent = "About";
    aboutDiv.addEventListener("click", (e) => {
        if (aboutDiv.classList.contains("active"))
            return;
        setActiveClass(aboutDiv);
        initAboutPage();
    })

    const contactDiv = document.createElement("button");
    contactDiv.classList.add("nav-text");
    contactDiv.textContent = "Contact";
    contactDiv.addEventListener("click", (e) => {
        if (contactDiv.classList.contains("active"))
            return;
        setActiveClass(contactDiv);
        initContactPage();
    })

    navRight.appendChild(menuDiv);
    navRight.appendChild(aboutDiv);
    navRight.appendChild(contactDiv);

    navDiv.appendChild(aHome);
    navDiv.appendChild(navRight);


    return navDiv;
}


function initNavBar() {
    const main = document.getElementById("main");
    main.appendChild(createNavBar());
}

initNavBar();
initWebsite();