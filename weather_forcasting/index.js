const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");
const fileInfo = document.getElementById("fileInfo");
const uploadBtn = document.getElementById("uploadBtn");
const progressBar = document.getElementById("progressBar");
const statusText = document.getElementById("status");

let selectedFile = null;

// Validate type
function validateType(file) {
  const types = ["image/jpeg", "image/png", "image/webp"];
  return types.includes(file.type);
}

// Validate size
function validateSize(file) {
  return file.size <= 2 * 1024 * 1024;
}

// Show preview
function showPreview(file) {
  const url = URL.createObjectURL(file);
  preview.src = url;
  preview.style.display = "block";

  preview.onload = () => URL.revokeObjectURL(url);
}

// Show file info
function showInfo(file) {
  const size = (file.size / 1024).toFixed(2);
  fileInfo.innerText = `${file.name} - ${size} KB`;
}

// Handle file select
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (!file) return;

  if (!validateType(file)) {
    alert("Only images allowed");
    return;
  }

  if (!validateSize(file)) {
    alert("Max size 2MB");
    return;
  }

  selectedFile = file;
  showPreview(file);
  showInfo(file);
});

// Upload file
uploadBtn.addEventListener("click", () => {
  if (!selectedFile) return alert("Select file first");

  const formData = new FormData();
  formData.append("file", selectedFile);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/upload");

  // Progress
  xhr.upload.onprogress = (e) => {
    const percent = (e.loaded / e.total) * 100;
    progressBar.style.width = percent + "%";
  };

  xhr.onload = () => {
    if (xhr.status === 200) {
      const res = JSON.parse(xhr.responseText);
      statusText.innerText = "Upload Success";
      console.log(res.filePath);
    } else {
      statusText.innerText = "Upload Failed";
    }
  };

  xhr.send(formData);
});
