const editorText = document.getElementById("editor");
const savebutton = document.getElementById("saveBtn");
const deletebutton = document.getElementById("deleteBtn");
const newbutton = document.getElementById("newBtn");
const exportbutton = document.getElementById("exportBtn");
const IdleStatus = document.getElementById("status");
const editbutton = document.getElementById("editBtn");
const preview = document.getElementById("preview");
const formatbutton = document.querySelector(".toolbar");

// parse the value of text each
function parsemardowns(text) {
  return text
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
    .replace(/`(.*?)`/gim, "<code>$1</code>")
    .replace(/\n/g, "<br>");
}

editorText.addEventListener("input", () => {
  preview.innerHTML = parsemardowns(editorText.value);
});

preview.innerHTML = parsemardowns(editorText.value || "");

// savenotes
// Json.stringfy - object and array convert into the json formate
// setitem - read the data
function saveNotes() {
  const text = editorText.value;

  const data = {
    content: text,
    updatedAt: Date.now(),
  };
  console.log("saving", data);
  localStorage.setItem("notes_v1", JSON.stringify(data));
}
savebutton.addEventListener("click", saveNotes);

// load the previous data in window context
//getitem-read the files 
function load() {
  const raw = localStorage.getItem("notes_v1");
  if (!raw) return;

  try {
    const data = JSON.parse(raw);
    editorText.value = data.content || "";

    preview.innerHTML = parsemardowns(editorText.value);
  } catch (e) {
    console.log("corrupt data");
  }
}
load();

//removeitem-delete the data 
deletebutton.addEventListener("click", function () {
  localStorage.removeItem("notes_v1");
  editorText.value = "";
  preview.innerHTML = "";
});

let isediting = false;
function editsbutton() {
  isediting = !isediting;

  // IdleStatus - is typically a dom reference which are displace the current state (editing ,saving)
  // textContent-is dom property used to get and set plain text of html

  // focus -cursor can direct from the input
  if (isediting) {
    editorText.focus();
    IdleStatus.textContent = "Editing Markdown";
    editbutton.textContent = "lock";
  } else {
    IdleStatus.textContent = "view mode";
    editbutton.textContent = "edit";

    // autosave
    saveNotes();
  }
}
editbutton.addEventListener("click", editsbutton);

function autoSave() {
  saveNotes();
  document.getElementById("status").innerText = "Saved...";
}
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    saveNotes();
  }
});

//blob(binary large object)-it is represent raw immutable data used to create download files

function exportNote() {
  const blob = new Blob([editorText.value], { type: "text/" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "note.md";
  link.click()

}

exportbutton.addEventListener("click",exportNote)




exportNote();
function applyFormat(type) {
  const start = editorText.selectionStart;
  const end = editorText.selectionEnd;
  const text = editorText.value;

  let before = text.substring(0, start);
  let selected = text.substring(start, end);
  let after = text.substring(end);

  // if nothing selected → use current word/line
  if (!selected) selected = "";

  switch (type) {
    case "h1":
      selected = "# " + selected;
      break;
    case "h2":
      selected = "## " + selected;
      break;
    case "bold":
      selected = `**${selected}**`;
      break;
    case "italic":
      selected = `*${selected}*`;
      break;
    case "code":
      selected = `\`${selected}\``;
      break;
  }

  editorText.value = before + selected + after;

  // move cursor
  const cursor = start + selected.length;
  editorText.setSelectionRange(cursor, cursor);

  // update preview instantly
  preview.innerHTML = parsemardowns(editorText.value);

  // keep focus
  editorText.focus();
}