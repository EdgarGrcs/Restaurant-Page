function createLandingPage() {

    let content = document.getElementById("content");

    let navDiv = document.createElement("div");
    navDiv.classList.add("topnav");

    let aHome = document.createElement("a");
    aHome.classList.add("active");
    aHome.textContent = "Home";

    let divNavRight = document.createElement("div");
    divNavRight = classList.add("nav-right");

    let aMenu = createElement("a");
    aMenu.textContent = "Menu";
    let aAbout = createElement("a");
    aAbout.textContent = "About";
    let aContact = createElement("a");
    aContact.textContent = "Contact";

    divNavRight.appendChild(aMenu);
    divNavRight.appendChild(aAbout);
    divNavRight.appendChild(aContact);

    navDiv.appendChild(aHome);
    navDiv.appendChild(divNavRight);

    //navDiv ready to append to content
    content.appendChild(navDiv);

    let backgroundImageDiv = document.createElement("div");
    backgroundImageDiv.classList.add("background-image");

    let backgroundTextDiv = document.createElement("div");
    backgroundTextDiv.classList.add("background-text");
    backgroundTextDiv.textContent("Dorsia");

    backgroundImageDiv.appendChild(backgroundTextDiv);

    //background image ready to append to content
    content.appendChild(backgroundImageDiv);







    return content;
}



export default createLandingPage;