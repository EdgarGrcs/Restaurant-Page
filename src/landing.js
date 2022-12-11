function createNavBar() {

    const navDiv = document.createElement("div");
    navDiv.classList.add("topnav");

    const aHome = document.createElement("div");
    aHome.classList.add("nav-text");
    aHome.textContent = "Home";
    const navRight = document.createElement("div");
    navRight.classList.add("nav-right");
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("nav-text");
    menuDiv.textContent = "Menu";
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("nav-text");
    aboutDiv.textContent = "About";

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("nav-text");
    contactDiv.textContent = "Content";

    navRight.appendChild(menuDiv);
    navRight.appendChild(aboutDiv);
    navRight.appendChild(contactDiv);

    navDiv.appendChild(aHome);
    navDiv.appendChild(navRight);


    //navDiv ready to append to content
    return navDiv;
}

function backgroundImage() {
    let backgroundImageDiv = document.createElement("div");
    backgroundImageDiv.classList.add("background-image");
    const bText = document.createElement("div");
    bText.classList.add("background-text");
    bText.textContent = "Dorsia";
    backgroundImageDiv.appendChild(bText);
    return backgroundImageDiv;
}


function initWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createNavBar());
    content.appendChild(backgroundImage());
}

export default initWebsite;