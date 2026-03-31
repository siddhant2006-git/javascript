const sitesinput = document.getElementById("site");
const userpassword = document.getElementById("Password");
const add = document.querySelector(".addbtn");
const deletes = document.querySelector(".deletesite");
const show = document.querySelector(".listbtn");
const accountlist = document.getElementById("accountlist")

// load account from local storage
// Jsonparse-Json string convert to javascript object
//getitem-use to read the storge

function loadaccount() {
  const data = localStorage.getItem("accounts");
  return data ? JSON.parse(data) : [];
}

// save account to local storage 
// jsonstringfy- java script object to change the json string 
function saveAccount() {
  const inputdata = localStorage.setitem("accounts", JSON.stringify("accounts"))
  console.log("save data")

}

// Render accounts list 
function renderAccount() {
  const account = loadaccount();
  accountlist.innerHTML = "";

  if (account.length === 0) {
    accountlist.innerHTML = " <li>No accounts stored</li>"
    return;
  }
  // foreach-use to loopinfg array and perform an action for each element

  accountforEach((acc, index) =>{
    const li = document.createElement("li");
    li.textContent = `${acc.sitesinput} : ${acc.userpasswordpassword}`;
    accountlist.appendChild(li)
    
  })
 }

// add account 
add.addEventListener("click", function () {
  const site = sitesinput.value.trim().toUpperCase();
  const passwords = userpassword.value.trim()
  
  if (!site || !userpassword) {
    alert("both field are required")
  }
  let accounts = loadaccount();
  
  //prevent duplicate
  if (accounts.some(acc => acc.site.toUpperCase() === site.toUpperCase())) {
    alert("this sites already exist ")
  }
    
  
 })

// delete site

deletes.addEventListener("clcick", function () {
  inputdata.remove()



  
  
})
                                                   