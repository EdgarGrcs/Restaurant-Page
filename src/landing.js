function createNavBar() {

    const navDiv = document.createElement("div");
    navDiv.classList.add("topnav");

    const aHome = document.createElement("div");
    aHome.classList.add("nav-text");
    aHome.textContent = "Home";

    navDiv.appendChild(aHome);




    //navDiv ready to append to content



    return navDiv;
}


function backgroundImage() {

    let backgroundImageDiv = document.createElement("div");
    backgroundImageDiv.classList.add("background-image");


    return backgroundImageDiv;
}




function initWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createNavBar());
    content.appendChild(backgroundImage());
}

export default initWebsite;