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
    contactDiv.textContent = "Contact";

    navRight.appendChild(menuDiv);
    navRight.appendChild(aboutDiv);
    navRight.appendChild(contactDiv);

    navDiv.appendChild(aHome);
    navDiv.appendChild(navRight);


    //navDiv ready to append to content
    return navDiv;
}


function initNavBar() {
    const content = document.getElementById("content");
    content.appendChild(createNavBar());
}

export default initNavBar;