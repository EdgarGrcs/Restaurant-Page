function createContactPage() {

    const contactPage = document.createElement("div");
    contactPage.classList.add("contactPage");

    const contactLeftSide = document.createElement("div");
    contactLeftSide.classList.add("contactLeftSide");

    const contactUs = document.createElement("div");
    contactUs.classList.add("contactUs");
    contactUs.textContent = "Contact Us:"


    /*Form Section*/

    const reservationDiv = document.createElement("div");
    reservationDiv.classList.add("reservation");

    const form = document.createElement("form");

    const fnameLabel = document.createElement("label");
    fnameLabel.textContent = "First Name";
    const fnameInput = document.createElement("input");
    fnameInput.setAttribute("type", "text");

    const lnameLabel = document.createElement("label");
    lnameLabel.textContent = "Last Name";
    const lnameInput = document.createElement("input");
    lnameInput.setAttribute("type", "text");

    const brForm = document.createElement("br");

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");

    const telLabel = document.createElement("label");
    telLabel.textContent = "Telephone Nr.";
    const telInput = document.createElement("input");
    telInput.setAttribute("type", "tel");

    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Date";
    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");

    const timeLabel = document.createElement("label");
    timeLabel.textContent = "Time";
    const timeInput = document.createElement("input");
    timeInput.setAttribute("type", "time");

    const labelGuests = document.createElement("label");
    labelGuests.textContent = "Nr. of guests";
    const guestsInput = document.createElement("input");
    guestsInput.setAttribute("type", "number");

    const requestLabel = document.createElement("label");
    requestLabel.textContent = "Requests:";
    const requestTextArea = document.createElement("textarea");
    requestTextArea.setAttribute("cols", "50");
    requestTextArea.setAttribute("rows", "5");

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.classList.add("submitButton");


    form.appendChild(fnameLabel);
    form.appendChild(fnameInput);
    form.appendChild(lnameLabel);
    form.appendChild(lnameInput);
    form.appendChild(brForm);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(telLabel);
    form.appendChild(telInput);
    form.appendChild(dateLabel);
    form.appendChild(dateInput);
    form.appendChild(timeLabel);
    form.appendChild(timeInput);
    form.appendChild(labelGuests);
    form.appendChild(guestsInput);
    form.appendChild(requestLabel);
    form.appendChild(requestTextArea);
    form.appendChild(submitButton);

    reservationDiv.appendChild(form);






    const contactRightSide = document.createElement("div");
    contactRightSide.classList.add("contactRightSide");

    const contactRightSideTop = document.createElement("div");
    contactRightSideTop.classList.add("contactRightSideTop");

    const contactRightSideBottom = document.createElement("div");
    contactRightSideBottom.classList.add("contactRightSideBottom");

    const googleLocationDiv = document.createElement("div");
    googleLocationDiv.classList.add("rightSideDiv");

    const googleLocation = document.createElement("iframe");
    googleLocation.classList.add("location");
    googleLocation.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.362957290711!2d-74.00987792797766!3d40.705129511144975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0407d8a01f%3A0x2559d7178ce8effd!2sDorsia!5e0!3m2!1sde!2sde!4v1671830792593!5m2!1sde!2sde");

    const openingHours = document.createElement("div");
    openingHours.classList.add("openingHours");
    openingHours.textContent = "Opening Hours:"

    const datesDiv = document.createElement("div");
    datesDiv.classList.add("dates");

    const monday = document.createElement("div");
    monday.classList.add("days");

    const mondayText = document.createElement("div");
    mondayText.textContent = "Monday:"
    mondayText.classList.add("dayText");

    const mondayTime = document.createElement("div");
    mondayTime.textContent = "9:00";

    const mondayTime2 = document.createElement("div");
    mondayTime2.textContent = "-";

    const mondayTime3 = document.createElement("div");
    mondayTime3.textContent = "18:00";

    mondayText.appendChild(mondayTime);
    mondayText.appendChild(mondayTime2);
    mondayText.appendChild(mondayTime3);

    monday.appendChild(mondayText);

    const tuesday = document.createElement("div");
    tuesday.classList.add("days");

    const tuesdayText = document.createElement("div");
    tuesdayText.textContent = "Tuesday:"
    tuesdayText.classList.add("dayText");

    const tuesdayTime = document.createElement("div");
    tuesdayTime.textContent = "9:00";
    const tuesdayTime2 = document.createElement("div");
    tuesdayTime2.textContent = "-";
    const tuesdayTime3 = document.createElement("div");
    tuesdayTime3.textContent = "18:00";


    tuesdayText.appendChild(tuesdayTime);
    tuesdayText.appendChild(tuesdayTime2);
    tuesdayText.appendChild(tuesdayTime3);

    tuesday.appendChild(tuesdayText);



    const wednesday = document.createElement("div");
    wednesday.classList.add("days");

    const wednesdayText = document.createElement("div");
    wednesdayText.textContent = "Wednesday:"
    wednesdayText.classList.add("dayText");

    const wednesdayTime = document.createElement("div");
    wednesdayTime.textContent = "9:00";
    const wednesdayTime2 = document.createElement("div");
    wednesdayTime2.textContent = "-";
    const wednesdayTime3 = document.createElement("div");
    wednesdayTime3.textContent = "18:00";


    wednesdayText.appendChild(wednesdayTime);
    wednesdayText.appendChild(wednesdayTime2);
    wednesdayText.appendChild(wednesdayTime3);

    wednesday.appendChild(wednesdayText);

    const thursday = document.createElement("div");
    thursday.classList.add("days");

    const thursdayText = document.createElement("div");
    thursdayText.textContent = "Thursday:"
    thursdayText.classList.add("dayText");

    const thursdayTime = document.createElement("div");
    thursdayTime.textContent = "9:00";
    const thursdayTime2 = document.createElement("div");
    thursdayTime2.textContent = "-";
    const thursdayTime3 = document.createElement("div");
    thursdayTime3.textContent = "18:00";


    thursdayText.appendChild(thursdayTime);
    thursdayText.appendChild(thursdayTime2);
    thursdayText.appendChild(thursdayTime3);

    thursday.appendChild(thursdayText);

    const friday = document.createElement("div");
    friday.classList.add("days");

    const fridayText = document.createElement("div");
    fridayText.textContent = "Friday:"
    fridayText.classList.add("dayText");

    const fridayTime = document.createElement("div");
    fridayTime.textContent = "9:00";
    const fridayTime2 = document.createElement("div");
    fridayTime2.textContent = "-";
    const fridayTime3 = document.createElement("div");
    fridayTime3.textContent = "18:00";


    fridayText.appendChild(fridayTime);
    fridayText.appendChild(fridayTime2);
    fridayText.appendChild(fridayTime3);

    friday.appendChild(fridayText);

    const saturday = document.createElement("div");
    saturday.classList.add("days");

    const saturdayText = document.createElement("div");
    saturdayText.textContent = "Saturday:"
    saturdayText.classList.add("dayText");

    const saturdayTime = document.createElement("div");
    saturdayTime.textContent = "18:00";
    const saturdayTime2 = document.createElement("div");
    saturdayTime2.textContent = "-";
    const saturdayTime3 = document.createElement("div");
    saturdayTime3.textContent = "22:00";


    saturdayText.appendChild(saturdayTime);
    saturdayText.appendChild(saturdayTime2);
    saturdayText.appendChild(saturdayTime3);

    saturday.appendChild(saturdayText);

    const sunday = document.createElement("div");
    sunday.classList.add("days");

    const sundayText = document.createElement("div");
    sundayText.textContent = "Sunday:"
    sundayText.classList.add("dayText");

    const sundayTime = document.createElement("div");
    sundayTime.textContent = "18:00";
    const sundayTime2 = document.createElement("div");
    sundayTime2.textContent = "-";
    const sundayTime3 = document.createElement("div");
    sundayTime3.textContent = "22:00";


    sundayText.appendChild(sundayTime);
    sundayText.appendChild(sundayTime2);
    sundayText.appendChild(sundayTime3);

    sunday.appendChild(sundayText);

    datesDiv.appendChild(monday);
    datesDiv.appendChild(tuesday);
    datesDiv.appendChild(wednesday);
    datesDiv.appendChild(thursday);
    datesDiv.appendChild(friday);
    datesDiv.appendChild(saturday);
    datesDiv.appendChild(sunday);


    googleLocationDiv.appendChild(googleLocation);
    contactRightSideTop.appendChild(googleLocationDiv);




    contactRightSideBottom.appendChild(openingHours);
    contactRightSideBottom.appendChild(datesDiv);

    contactRightSide.appendChild(contactRightSideTop);
    contactRightSide.appendChild(contactRightSideBottom);

    contactLeftSide.appendChild(contactUs);
    contactLeftSide.appendChild(reservationDiv);

    contactPage.appendChild(contactLeftSide);
    contactPage.appendChild(contactRightSide);


    return contactPage;
}





function initContactPage() {
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(createContactPage());
}


export default initContactPage;