function createNavBar() {


    const navDiv = document.createElement("div");
    navDiv.classList.add("topnav");

    const aHome = document.createElement("a");
    aHome.classList.add("active");
    aHome.textContent = "Home";

    const divNavRight = document.createElement("div");
    divNavRight = classList.add("nav-right");

    const aMenu = createElement("a");
    aMenu.textContent = "Menu";
    const aAbout = createElement("a");
    aAbout.textContent = "About";
    const aContact = createElement("a");
    aContact.textContent = "Contact";

    divNavRight.appendChild(aMenu);
    divNavRight.appendChild(aAbout);
    divNavRight.appendChild(aContact);

    navDiv.appendChild(aHome);
    navDiv.appendChild(divNavRight);

    //navDiv ready to append to content


    return navDiv;
}




function backgroundImage() {

    let backgroundImageDiv = document.createElement("div");
    backgroundImageDiv.classList.add("background-image");

    let backgroundTextDiv = document.createElement("div");
    backgroundTextDiv.classList.add("background-text");
    backgroundTextDiv.textContent("Dorsia");
    backgroundImageDiv.appendChild(backgroundTextDiv);

    return backgroundImageDiv;
}









function initWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createNavBar());

    content.appendChild(backgroundImage());
}

export default initWebsite;