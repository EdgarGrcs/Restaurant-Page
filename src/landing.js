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


function createIntroductionPage() {

    const introductionDiv = document.createElement("div");
    introductionDiv.classList.add("introduction");

    const leftDiv = document.createElement("div");
    leftDiv.classList.add("left-side");
    const introImg = document.createElement("img");
    introImg.classList.add("image-left-side");
    introImg.setAttribute("src", "Images/photo-1514933651103-005eec06c04b.jpg");

    leftDiv.appendChild(introImg);

    const rightDiv = document.createElement("div");
    rightDiv.classList.add("right-side");

    const introText = document.createElement("div");
    introText.classList.add("intro");
    introText.textContent = "About our establishment";

    const loremIpsumText = document.createElement("div");
    loremIpsumText.classList.add("lorem-text");
    loremIpsumText.textContent = "The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

    rightDiv.appendChild(introText);
    rightDiv.appendChild(loremIpsumText);

    introductionDiv.appendChild(leftDiv);
    introductionDiv.appendChild(rightDiv);

    return introductionDiv;
}


function creatorTag() {

    const cTag = document.createElement("div");
    cTag.classList.add("creator-tag");

    const footer = document.createElement("div");
    footer.classList.add("footer");

    const gitLink = document.createElement("a");
    gitLink.classList.add("github-link");
    gitLink.setAttribute("href", "https://github.com/EdgarGrcs");

    //check why img not rendering

    const gitImg = document.createElement("img");
    gitImg.classList.add("git-icon");
    gitImg.setAttribute("src", "./Images/github.png");

    gitLink.appendChild(gitImg);
    gitLink.textContent = "EdgarGrcs";

    footer.appendChild(gitLink);

    cTag.appendChild(footer);

    return cTag;
}


function initWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createNavBar());
    content.appendChild(backgroundImage());
    content.appendChild(createIntroductionPage());
    content.appendChild(creatorTag());
}

export default initWebsite;