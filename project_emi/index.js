const productInput = document.getElementById("product");
const priceInput = document.getElementById("price");
const interestInput = document.getElementById("interest");
const monthInput = document.getElementById("month");
const imageInput = document.getElementById("image")

const addBtn = document.getElementById("add");
const calculateBtn = document.getElementById("calculate");
const productList = document.getElementById("productList");
const deleteBtn = document.getElementById("delete");

// ✅ EMI Calculation
function calculateEMI() {
  const p = parseFloat(priceInput.value);
  const r = parseFloat(interestInput.value) / 100 / 12;
  const n = parseInt(monthInput.value);

  if (!p || !r || !n) {
    alert("Please fill all fields correctly");
    return null;
  }

  const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  return emi.toFixed(2);
}

// ✅ Show EMI on click
calculateBtn.addEventListener("click", () => {
  const emi = calculateEMI();
  if (emi) {
    alert("Your EMI is: ₹" + emi);
  }
});

// ✅ Save to localStorage
function saveToLocalStorage(data) {
  let items = JSON.parse(localStorage.getItem("products")) || [];
  items.push(data);
  localStorage.setItem("products", JSON.stringify(items));
}

// ✅ Add Product
function addProduct() {
  const emi = calculateEMI();
  if (!emi) return;

  const productDetails = {
    name: productInput.value,
    price: priceInput.value,
    interest: interestInput.value,
    month: monthInput.value,
    emi: emi,
    imageInput:imageInput.value,
  };

  // Save data
  saveToLocalStorage(productDetails);

  // UI update
  const li = document.createElement("li");
  li.textContent = `${productDetails.name} - Price: ₹${productDetails.price}, Interest: ${productDetails.interest}%, Months: ${productDetails.month}, EMI: ₹${productDetails.emi}`;
  productList.appendChild(li);

  // Clear inputs
  productInput.value = "";
  priceInput.value = "";
  interestInput.value = "";
  monthInput.value = "";
}

addBtn.addEventListener("click", addProduct);

// ✅ Load data on refresh
function loadProducts() {
  const items = JSON.parse(localStorage.getItem("products")) || [];

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Price: ₹${item.price}, Interest: ${item.interest}%, Months: ${item.month}, EMI: ₹${item.emi}`;
    productList.appendChild(li);
  });
}

function deleteProducts() {
  localStorage.removeItem("products");
  productList.innerHTML = "";
}
deleteBtn.addEventListener("click", deleteProducts);

function autosave() {
  saveToLocalStorage()
}

function getImageBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
