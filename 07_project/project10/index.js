const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const status = document.getElementById("status");
const themeToggle = document.getElementById("themeToggle");

const btn = {
  save: document.getElementById("saveBtn"),
  del: document.getElementById("deleteBtn"),
  new: document.getElementById("newBtn"),
  export: document.getElementById("exportBtn"),
  edit: document.getElementById("editBtn"),
};

const toolbar = document.querySelector(".toolbar");
const shareBtn = document.getElementById("shareBtn");
const shareMenu = document.getElementById("shareMenu");

// THEME TOGGLE
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("dark-mode", savedTheme === "dark");
  updateThemeButton(savedTheme);
}

function updateThemeButton(theme) {
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  const theme = isDark ? "dark" : "light";
  localStorage.setItem("theme", theme);
  updateThemeButton(theme);
});

initTheme();

// MARKDOWN PARSER
function parseMarkdown(text) {
  return (
    text
      // Blockquotes
      .replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>")
      // Checkboxes
      .replace(
        /^\- \[ \] (.*$)/gim,
        '<label class="checkbox"><input type="checkbox"> $1</label>',
      )
      .replace(
        /^\- \[x\] (.*$)/gim,
        '<label class="checkbox"><input type="checkbox" checked> $1</label>',
      )
      // Images
      .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1">')
      // Links
      .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank">$1</a>')
      // Headings
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      // Bold & Italic
      .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/gim, "<em>$1</em>")
      // Code
      .replace(/`(.*?)`/gim, "<code>$1</code>")
      // Line breaks
      .replace(/\n/g, "<br>")
  );
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
  const hasSelection = start !== end;

  let before = editor.value.substring(0, start);
  let selected = editor.value.substring(start, end);
  let after = editor.value.substring(end);
  let cursorOffset = 0;

  switch (type) {
    case "h1":
      selected = "# " + selected;
      cursorOffset = selected.length;
      break;
    case "h2":
      selected = "## " + selected;
      cursorOffset = selected.length;
      break;
    case "bold":
      selected = `**${selected}**`;
      cursorOffset = hasSelection ? selected.length : 2;
      break;
    case "italic":
      selected = `*${selected.trim()}*`;
      cursorOffset = hasSelection ? selected.length : 1;
      break;
    case "code":
      selected = `\`${selected.trim()}\``;
      cursorOffset = hasSelection ? selected.length : 1;
      break;
    case "blockquote":
      selected = "> " + selected;
      cursorOffset = selected.length;
      break;
    case "checkbox":
      selected = "- [ ] " + selected;
      cursorOffset = selected.length;
      break;
    case "link":
      if (hasSelection) {
        selected = `[${selected}](url)`;
        cursorOffset = selected.length - 5;
      } else {
        selected = "[text](url)";
        cursorOffset = 1;
      }
      break;
    case "image":
      if (hasSelection) {
        selected = `![${selected}](image-url)`;
        cursorOffset = selected.length - 12;
      } else {
        selected = "![alt](image-url)";
        cursorOffset = 2;
      }
      break;
  }

  editor.value = before + selected + after;

  editor.setSelectionRange(start + cursorOffset, start + cursorOffset);

  editor.focus();

  preview.innerHTML = parseMarkdown(editor.value);
}

// SHARE DROPDOWN BEHAVIOR
if (shareBtn && shareMenu) {
  const openMenu = () => {
    shareMenu.classList.add("open");
    shareBtn.setAttribute("aria-expanded", "true");
    shareMenu.setAttribute("aria-hidden", "false");
  };

  const closeMenu = () => {
    shareMenu.classList.remove("open");
    shareBtn.setAttribute("aria-expanded", "false");
    shareMenu.setAttribute("aria-hidden", "true");
  };

  shareBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (shareMenu.classList.contains("open")) closeMenu();
    else openMenu();
  });

  // Click outside to close
  document.addEventListener("click", (e) => {
    if (!shareMenu.contains(e.target) && e.target !== shareBtn) closeMenu();
  });

  // Handle menu actions
  shareMenu.addEventListener("click", (e) => {
    const item = e.target.closest(".share-item");
    if (!item) return;
    const action = item.dataset.action;
    const text = encodeURIComponent(editor.value || "");
    const pageUrl = encodeURIComponent(window.location.href);

    const actions = {
      whatsapp: () => window.open(`https://wa.me/?text=${text}`),
      facebook: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&quote=${text}`,
        ),
      twitter: () =>
        window.open(`https://twitter.com/intent/tweet?text=${text}`),
      linkedin: () =>
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
        ),
      email: () => (window.location.href = `mailto:?body=${text}`),
      copy: async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          status.textContent = "Link copied to clipboard";
          setTimeout(() => (status.textContent = "Idle"), 2000);
        } catch (err) {
          status.textContent = "Copy failed";
          setTimeout(() => (status.textContent = "Idle"), 2000);
        }
      },
    };

    actions[action]?.();
    closeMenu();
  });
}
