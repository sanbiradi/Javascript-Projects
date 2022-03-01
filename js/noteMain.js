//catch the all doms
const i_note = document.querySelector("textarea");
const form = document.querySelector("#submit");
const noteList = document.querySelector("#noteList");

//localstorage
let listStore =
  localStorage.getItem("noteList") === null
    ? []
    : JSON.parse(localStorage.getItem("noteList"));

//load the all notes from localstorage
document.addEventListener("DOMContentLoaded", (e) => {
  listStore.forEach((note) => {
    loadNotes(note);
  });
});

let loadNotes = (note) => {
  let tnote = `<div class="card col-4 m-3">
    <div class="card-body">
      <button class="btn btn-outline-danger btn-sm float-end delete">X</button>
      <p class="card-text">${note}</p>
    </div>
</div>`;
  noteList.innerHTML += tnote;
};

//create note operations
form.addEventListener("click", (e) => {
  e.preventDefault();
  createNote();
});

let createNote = () => {
  let note = `<div class="card col-4 m-3">
    <div class="card-body">
      <button class="btn btn-outline-danger btn-sm float-end delete">X</button>
      <p class="card-text">${i_note.value}</p>
    </div>
</div>`;
  noteList.innerHTML += note;
  listStore.push(i_note.value);
  localStorage.setItem("noteList", JSON.stringify(listStore));
  i_note.value = "";
};

//delete operations
document.addEventListener("click", (e) => {
  deleteNote(e.target);
});

let deleteNote = (ele) => {
  if (ele.classList.contains("delete")) {
    let tele = ele.parentElement.lastChild.previousSibling.textContent;
    let index = listStore.indexOf(tele);
    listStore.splice(index, 1);
    ele.parentElement.parentElement.remove();
    localStorage.setItem("noteList",JSON.stringify(listStore));
  }
};
