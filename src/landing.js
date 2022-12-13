function backgroundImage() {
    let backgroundImageDiv = document.createElement("div");
    backgroundImageDiv.classList.add("background-image");
    const bText = document.createElement("div");
    bText.classList.add("background-text");
    bText.textContent = "Dorsia";
    backgroundImageDiv.appendChild(bText);
    return backgroundImageDiv;
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
    content.appendChild(backgroundImage());
    content.appendChild(creatorTag());
}

export default initWebsite;