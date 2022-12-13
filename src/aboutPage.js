function createAboutPage() {

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

function initAboutPage() {
    const content = document.getElementById("content");
    content.appendChild(createAboutPage());
}

export default initAboutPage;