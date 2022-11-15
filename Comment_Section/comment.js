// Addd button functioning and addingg code to local Host
let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function (e) {
    let addTitle = document.getElementById("note-title");
    let addTxt = document.getElementById("note-text");

    if (addTitle.value == "" || addTxt.value == "") {
        return alert("Add Comment First")
    }

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        title: addTitle.value,
        text: addTxt.value,
    }

    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    showComments();
});

// Function to delete a note
function deleteNote(index) {
    console.log("inside delete");
    let confirmDel = confirm("Delete Comment?");
    if (confirmDel == true) {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }

        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showComments();
    }

}

// like comment
function likeComment(index) {
    let input1 = document.querySelector(".input1");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    input1.value = parseInt(input1.value) + 1;
}
// dislike Comment
function dislikeComment(index) {
    let input2 = document.querySelector(".input2");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    input2.value = parseInt(input2.value) + 1;
    notesObj.splice(index, );
}

// Function to show elements from localStorage
function showComments() {
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
            <div class="voting">
                        <button type="button" id="${index}" onclick="likeComment(this.id)" class="likebtn"><i class="fa fa-thumbs-up"></i> </button>
                        <input type="number" id="${index}" class="input1" value="0" name="">
                        <button type="button" id="${index}" onclick="dislikeComment(this.id)" class="dislikebtn"><i class="fa fa-thumbs-down"></i> </button>
                        <input type="number" id="${index}" class="input2" value="0" name="">
                        <button type="button" id="${index}" onclick="deleteNote(this.id)" class="dlt-btn"><i class="fa fa-trash"></i> </button>
            </div>
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



showComments();



