let addBtn = document.getElementById("add-btn");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Addd button functioning and addingg code to local Host
addBtn.addEventListener("click", function (e) {
  let addTitle = document.getElementById("note-title");
  let addTxt = document.getElementById("note-text");

  if (addTitle.value == "" || addTxt.value == "") {
    return alert("Please add Title and Your Notes")
  }

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  // Adding time
  let noteTitle = addTitle.value;
  let noteDesc = addTxt.value;
  if (noteTitle || noteDesc) {
    var dateObj = new Date(),
      date = dateObj.getDate(),
      month = months[dateObj.getMonth()],
      year = dateObj.getFullYear(),
      hour = dateObj.getHours(),
      minute = dateObj.getMinutes();
  }

  let myObj = {
    title: addTitle.value,
    text: addTxt.value,
    date: `${month} ${date}, ${year} ${hour}:${minute}`
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  showNotes();
});


// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }


  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div id="note">
            <h3 class="note-title">${element.title}</h3>
            <p class="note-text">${element.text}</p>
            <p class="note-time">${element.date}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="dlt-btn ">Delete Note</button>
            <button id="${index}" onclick="editNote(this.id)" class="edit-btn ">Edit Note</button>
        </div>
        `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Empty Notes!.`;
  }
}

// Function to delete a note
function deleteNote(index) {
  ;
  let confirmDel = confirm("Delete this note?");
  if (confirmDel == true) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }

}

// Function to Edit the Note
function editNote(index) {
  let notes = localStorage.getItem("notes");
  let addTitle = document.getElementById("note-title");
  let addTxt = document.getElementById("note-text");

  if (addTitle.value !== "" || addTxt.value !== "") {
    return alert("Please clear the form before editing a note")
  }

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  console.log(notesObj);

  notesObj.findIndex((element, index) => {
    addTitle.value = element.title;
    addTxt.value = element.text;
  })
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


showNotes();