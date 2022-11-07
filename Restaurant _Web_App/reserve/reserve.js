let bookBtn = document.getElementById("book-btn");
bookBtn.addEventListener("click", function (e) {

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let phoneNumber = document.getElementById("phoneNumber");
    let tableNumber = document.getElementById("tableNumber");
    let numOfPerson = document.getElementById("numberOfPerson");
    let date = document.getElementById("date");

    if (firstName.value == "" || lastName.value == "" || phoneNumber.value == "" || tableNumber.value == "" || numOfPerson.value == "" || date.value == "") {
        return alert("Add All Details")
    }

    let reservations = localStorage.getItem("reservations");
    if (reservations == null) {
        resObj = [];
    } else {
        resObj = JSON.parse(reservations);
    }
    let myObj = {
        FirstName: firstName.value,
        LastName: lastName.value,
        PhoneNumber: phoneNumber.value,
        TableNumber: tableNumber.value,
        Persons: numOfPerson.value,
        DateTime: date.value

    }
    resObj.push(myObj);
    localStorage.setItem("reservations", JSON.stringify(resObj));
    firstName.value = "";
    lastName.value = "";
    phoneNumber.value = "";
    tableNumber.value = "";
    numOfPerson.value = "";
    date.value = "";
    showReservations();
});


