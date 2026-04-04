
const siteInput = document.getElementById("site");
const passwordInput = document.getElementById("password");
const deleteInput = document.getElementById("deleteSite");

const addBtn = document.getElementById("addBtn");
const showBtn = document.getElementById("showBtn");
const deleteBtn = document.getElementById("deleteBtn");

const accountList = document.getElementById("accountList");

function loadAccounts() {
  return JSON.parse(localStorage.getItem("accounts")) || [];
}

// save data
// set item -set the data 
// Json.stringfy-object convert into json 
function saveAccounts(accounts) {
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

// display account 
function displayAccounts() {
  const accounts = loadAccounts();
  accountList.innerHTML = "";

  if (accounts.length === 0) {
    accountList.innerHTML = "<li>No accounts stored</li>";
    return;
  }

  // for each 
  accounts.forEach((acc, index) => {
    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = `${acc.site} : ${acc.password}`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "";

    delBtn.addEventListener("click", () => {
      deleteByIndex(index);
    });

    li.appendChild(text);
    li.appendChild(delBtn);
    accountList.appendChild(li);
  });
}

/* =========================
   Add Account
========================= */
addBtn.addEventListener("click", () => {
  const site = siteInput.value.trim();
  const password = passwordInput.value.trim();

  if (!site || !password) {
    alert("Both fields required");
    return;
  }

  const accounts = loadAccounts();

  // prevent duplicate
  if (accounts.some(acc => acc.site.toLowerCase() === site.toLowerCase())) {
    alert("Site already exists");
    return;
  }

  accounts.push({ site, password });
  saveAccounts(accounts);

  siteInput.value = "";
  passwordInput.value = "";

  displayAccounts();
});

/* =========================
   Delete by Site Name
========================= */
deleteBtn.addEventListener("click", () => {
  const siteToDelete = deleteInput.value.trim().toLowerCase();

  if (!siteToDelete) {
    alert("Enter site to delete");
    return;
  }

  let accounts = loadAccounts();
  const filtered = accounts.filter(
    acc => acc.site.toLowerCase() !== siteToDelete
  );

  if (accounts.length === filtered.length) {
    alert("Site not found");
    return;
  }

  saveAccounts(filtered);
  deleteInput.value = "";
  displayAccounts();
});
function deleteByIndex(index) {
  let accounts = loadAccounts();
  accounts.splice(index, 1);
  saveAccounts(accounts);
  displayAccounts();
}
showBtn.addEventListener("click", displayAccounts);
window.addEventListener("DOMContentLoaded", displayAccounts);