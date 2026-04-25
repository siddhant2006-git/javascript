
const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const status = document.getElementById("status");

const btn = {
  save: document.getElementById("saveBtn"),
  del: document.getElementById("deleteBtn"),
  new: document.getElementById("newBtn"),
  export: document.getElementById("exportBtn"),
  edit: document.getElementById("editBtn"),
};

const toolbar = document.querySelector(".toolbar");
const shareSelect = document.getElementById("shareSelect");

// MARKDOWN PARSER 
function parseMarkdown(text) {
  return text
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
    .replace(/`(.*?)`/gim, "<code>$1</code>")
    .replace(/\n/g, "<br>");
}

// LIVE PREVIEW 
editor.addEventListener("input", () => {
  preview.innerHTML = parseMarkdown(editor.value);
});

// NEW NOTE 
btn.new.addEventListener("click", () => {
  editor.value = "";
  preview.innerHTML = "";
});

// SAVE 
function saveNotes() {
  const data = {
    content: editor.value,
    updatedAt: Date.now(),
  };

  localStorage.setItem("notes_v1", JSON.stringify(data));
  status.textContent = "Saved";
}

btn.save.addEventListener("click", saveNotes);

// LOAD
function loadNotes() {
  const raw = localStorage.getItem("notes_v1");
  if (!raw) return;

  try {
    const data = JSON.parse(raw);
    editor.value = data.content || "";
    preview.innerHTML = parseMarkdown(editor.value);
  } catch {
    console.log("Corrupt data");
  }
}

loadNotes();

// DELETE - delete the text and element 
btn.del.addEventListener("click", () => {
  localStorage.removeItem("notes_v1");
  editor.value = "";
  preview.innerHTML = "";
  status.textContent = "Deleted";
});

// EDIT MODE-edit the text
let isEditing = false;

btn.edit.addEventListener("click", () => {
  isEditing = !isEditing;

  if (isEditing) {
    editor.focus();
    status.textContent = "Editing";
    btn.edit.textContent = "Lock";
  } else {
    status.textContent = "View Mode";
    btn.edit.textContent = "Edit";
    saveNotes();
  }
});

//SHORTCUT SAVE
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    saveNotes();
  }
});

// EXPORT
btn.export.addEventListener("click", () => {
  const blob = new Blob([editor.value], { type: "text/plain" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "note.md";
  link.click();
});

toolbar.addEventListener("click", (e) => {
  const type = e.target.dataset.format;
  if (!type) return;

  applyFormat(type);
});

function applyFormat(type) {
  const start = editor.selectionStart;
  const end = editor.selectionEnd;

  let before = editor.value.substring(0, start);
  let selected = editor.value.substring(start, end);
  let after = editor.value.substring(end);

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

  editor.value = before + selected + after;

  editor.setSelectionRange(start + selected.length, start + selected.length);
  editor.focus();

  preview.innerHTML = parseMarkdown(editor.value);
}

shareSelect.addEventListener("change", (e) => {
  const text = encodeURIComponent(editor.value);
  const value = e.target.value;

  const actions = {
    whatsapp: () => window.open(`https://wa.me/?text=${text}`),
    email: () => (window.location.href = `mailto:?body=${text}`),
    twitter: () => window.open(`https://twitter.com/intent/tweet?text=${text}`),
    instagram: () => 
       window.open(`https://instagram.com/?text=${text}`)
  
  }

  actions[value]?.();
});
