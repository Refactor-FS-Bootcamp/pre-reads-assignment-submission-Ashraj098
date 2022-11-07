// Function to show elements from localStorage
function showReservations() {
    let reservations = localStorage.getItem("reservations");
    if (reservations == null) {
        resObj = [];
    } else {
        resObj = JSON.parse(reservations);
    }
    let html = "";
    resObj.forEach(function (element, index) {
        html += `
        <div class="book">
            <h1 class="counter">No.${index + 1}</h1>
            <div>
                <h3 class="full-name"> Name:- ${element.FirstName} ${element.LastName} </h3>
                <h4 class="note-text"> Table No:-${element.TableNumber}</h4>
                <p class="persons"> Total Person:- ${element.Persons}</p>
                <p class="phone-no"> Phone No:-${element.PhoneNumber}</p>
                <p class="time">${element.DateTime}</p>
            </div>
            <button id="${index}" onclick="deleteRes(this.id)" class="btn dlt-btn">Delete</button>
        </div>
            `;
    });
    let resElm = document.getElementById("reservations");
    if (resObj.length != 0) {
        resElm.innerHTML = html;
    } else {
        resElm.innerHTML = `No Reservation Yet!.`;
    }
}

// Function to delete a note
function deleteRes(index) {
    let confirmDel = confirm("Delete this note?");
    if (confirmDel == true) {
        let reservations = localStorage.getItem("reservations");
        if (reservations == null) {
            resObj = [];
        } else {
            resObj = JSON.parse(reservations);
        }

        resObj.splice(index, 1);
        localStorage.setItem("reservations", JSON.stringify(resObj));
        showReservations();
    }
}

showReservations();
