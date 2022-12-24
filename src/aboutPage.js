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
    loremIpsumText.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

    rightDiv.appendChild(introText);
    rightDiv.appendChild(loremIpsumText);

    introductionDiv.appendChild(leftDiv);
    introductionDiv.appendChild(rightDiv);

    return introductionDiv;
}


function createChefSection() {

    const chefAboutSection = document.createElement("div");
    chefAboutSection.classList.add("chefAboutSection");

    const title = document.createElement("div");
    title.classList.add("chefSectionTitle")
    title.textContent = "Our world class chefs:";




    const chefSection = document.createElement("div");
    chefSection.classList.add("chef-section");



    const chefDiv1 = document.createElement("div");
    chefDiv1.classList.add("chef-div");
    const chefImg1 = document.createElement("img");
    chefImg1.classList.add("chef-img");
    chefImg1.setAttribute("src", "./Images/Chefs-Images/benson.jpg");
    const chefName1 = document.createElement("div");
    chefName1.textContent = "Benson";
    const chefQuote1 = document.createElement("div");
    chefQuote1.classList.add("quotes");
    chefQuote1.textContent = "\"GET BACK TO WORK OR YOU 'RE FIRED!\"";

    chefDiv1.appendChild(chefImg1);
    chefDiv1.appendChild(chefName1);
    chefDiv1.appendChild(chefQuote1);

    const chefDiv2 = document.createElement("div");
    chefDiv2.classList.add("chef-div");
    const chefImg2 = document.createElement("img");
    chefImg2.classList.add("chef-img");
    chefImg2.setAttribute("src", "./Images/Chefs-Images/bobs-burgers-1632818603.jpg");
    const chefName2 = document.createElement("div");
    chefName2.textContent = "Bob Belcher";
    const chefQuote2 = document.createElement("div");
    chefQuote2.classList.add("quotes");
    chefQuote2.textContent = "\"Linda, Torpedo Jones said he liked my burger! I want that on my tombstone. Seriously, I do .\"";

    chefDiv2.appendChild(chefImg2);
    chefDiv2.appendChild(chefName2);
    chefDiv2.appendChild(chefQuote2);

    const chefDiv3 = document.createElement("div");
    chefDiv3.classList.add("chef-div");
    const chefImg3 = document.createElement("img");
    chefImg3.classList.add("chef-img");
    chefImg3.setAttribute("src", "./Images/Chefs-Images/chef-mullet.jpg");
    const chefName3 = document.createElement("div");
    chefName3.textContent = "Sensai";
    const chefQuote3 = document.createElement("div");
    chefQuote3.classList.add("quotes");
    chefQuote3.textContent = "\"NOOOOO!\"";

    chefDiv3.appendChild(chefImg3);
    chefDiv3.appendChild(chefName3);
    chefDiv3.appendChild(chefQuote3);

    const chefDiv4 = document.createElement("div");
    chefDiv4.classList.add("chef-div");
    const chefImg4 = document.createElement("img");
    chefImg4.classList.add("chef-img");
    chefImg4.setAttribute("src", "./Images/Chefs-Images/chowder.jpg");
    const chefName4 = document.createElement("div");
    chefName4.textContent = "Mung Daal";
    const chefQuote4 = document.createElement("div");
    chefQuote4.classList.add("quotes");
    chefQuote4.textContent = "\"You don't know what you're missing...\"";

    chefDiv4.appendChild(chefImg4);
    chefDiv4.appendChild(chefName4);
    chefDiv4.appendChild(chefQuote4);




    chefSection.appendChild(title);
    chefSection.appendChild(chefDiv1);
    chefSection.appendChild(chefDiv2);
    chefSection.appendChild(chefDiv3);
    chefSection.appendChild(chefDiv4);

    chefAboutSection.appendChild(title);
    chefAboutSection.appendChild(chefSection);


    return chefAboutSection;
}



function initAboutPage() {
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(createAboutPage());
    content.appendChild(createChefSection());
}

export default initAboutPage;