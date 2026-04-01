const sitesinput = document.getElementById("site");
const userpassword = document.getElementById("Password");
const add = document.querySelector(".addbtn");
const deletes = document.querySelector(".deletesite");
const show = document.querySelector(".listbtn");
const accountlist = document.getElementById("accountlist");

// Load accounts
function loadaccount() {
  const data = localStorage.getItem("accounts");
  return data ? JSON.parse(data) : [];
}

// Save accounts
function saveAccount(accounts) {
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

// Render accounts
function renderAccount() {
  const accounts = loadaccount();
  accountlist.innerHTML = "";

  if (accounts.length === 0) {
    accountlist.innerHTML = "<li>No accounts stored</li>";
    return;
  }

  accounts.forEach((acc, index) => {
    const li = document.createElement("li");
    li.textContent = `${acc.site} : ${acc.password}`;

    // delete button
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = () => deleteData(index);

    li.appendChild(btn);
    accountlist.appendChild(li);
  });
}

// Add account
add.addEventListener("click", function () {
  const site = sitesinput.value.trim().toUpperCase();
  const password = userpassword.value.trim();

  if (!site || !password) {
    alert("Both fields are required");
    return;
  }

  let accounts = loadaccount();

  // prevent duplicate
  if (accounts.some((acc) => acc.site === site)) {
    alert("This site already exists");
    return;
  }

  // add new account
  accounts.push({ site, password });

  saveAccount(accounts);
  renderAccount();

  sitesinput.value = "";
  userpassword.value = "";
});

// Delete account
function deleteData(index) {
  let accounts = loadaccount();
  accounts.splice(index, 1);

  saveAccount(accounts);
  renderAccount();
}

// Show button
show.addEventListener("click", renderAccount);

// Initial load
renderAccount();
