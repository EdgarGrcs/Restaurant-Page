function createMenuPage() {

    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");

    const menuLeftSide = document.createElement("div");
    menuLeftSide.classList.add("menu-left-side");

    const innerLeft = document.createElement("div");
    innerLeft.classList.add("inner-left");

    const menuText = document.createElement("div");
    menuText.classList.add("menu-text");
    menuText.textContent = "Our Specialties";

    const servings1 = document.createElement("div");
    servings1.classList.add("servings");
    servings1.textContent = "Hors d'oeuvre";
    const servingDescription1 = document.createElement("div");
    servingDescription1.classList.add("serving-description");
    servingDescription1.textContent = "Leek Confit and Goat Cheese Crostini, topped with Asian Pear and Smoked Paprika";

    const servings2 = document.createElement("div");
    servings2.classList.add("servings");
    servings2.textContent = "Soup";
    const servingDescription2 = document.createElement("div");
    servingDescription2.classList.add("serving-description");
    servingDescription2.textContent = "Cauliflower Soup With Seared Scallops, Lemon Oil, and Caviar";

    const servings3 = document.createElement("div");
    servings3.classList.add("servings");
    servings3.textContent = "Entrée";
    const servingDescription3 = document.createElement("div");
    servingDescription3.classList.add("serving-description");
    servingDescription3.textContent = "Boneless Lamb with Mushroom Crust and Leek Purée, paired with Sautéed Shiitake Mushrooms and Miniature Fingerling Potatoes";

    const servings4 = document.createElement("div");
    servings4.classList.add("servings");
    servings4.textContent = "Dessert";
    const servingDescription4 = document.createElement("div");
    servingDescription4.classList.add("serving-description");
    servingDescription4.textContent = "Meyer Lemon Semifreddo, with Candied Lemon Peel and Sugared Pistachios";

    const servings5 = document.createElement("div");
    servings5.classList.add("servings");
    servings5.textContent = "Sturgeon";
    const servingDescription5 = document.createElement("div");
    servingDescription5.classList.add("serving-description");
    servingDescription1.textContent = "Smoked Potato Salad, Trout Roe, Russian Cream, Dill";

    innerLeft.appendChild(menuText);
    innerLeft.appendChild(servings1);
    innerLeft.appendChild(servingDescription1);
    innerLeft.appendChild(servings2);
    innerLeft.appendChild(servingDescription2);
    innerLeft.appendChild(servings3);
    innerLeft.appendChild(servingDescription3);
    innerLeft.appendChild(servings4);
    innerLeft.appendChild(servingDescription4);
    innerLeft.appendChild(servings5);
    innerLeft.appendChild(servingDescription5);

    menuLeftSide.appendChild(innerLeft);

    const menuRightSide = document.createElement("div");
    menuRightSide.classList.add("menu-right-side");
    const menuImg = document.createElement("img");
    menuImg.classList.add("menu-dish");
    menuImg.setAttribute("src", "Images/luxury-dish.jpg");

    menuRightSide.appendChild(menuImg);

    menuSection.appendChild(menuLeftSide);
    menuSection.appendChild(menuRightSide);


    return menuSection;
}



function initMenuPage() {

    const content = document.getElementById("content");
    content.appendChild(createMenuPage());
}

export default initMenuPage;