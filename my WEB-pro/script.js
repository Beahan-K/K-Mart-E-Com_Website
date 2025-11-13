function registerUser() {
  const name = document.getElementById("reg-name").value;
  const email = document.getElementById("reg-email").value;
  const pass = document.getElementById("reg-pass").value;

  if (name.length < 2) return alert("Enter valid name");
  if (!email.includes("@")) return alert("Enter valid email");
  if (pass.length < 6) return alert("Password must be at least 6 characters");

  const user = { name, email, pass };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Registration successful!");
}

function loginUser() {
  const email = document.getElementById("login-email").value;
  const pass = document.getElementById("login-pass").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.email !== email || user.pass !== pass)
    return alert("Invalid credentials");

  alert("Login successful!");
}

function addToWishlist(item) {
  let list = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (!list.includes(item)) list.push(item);
  localStorage.setItem("wishlist", JSON.stringify(list));
  showWishlist();
}

function addToOrders(item) {
  let list = JSON.parse(localStorage.getItem("orders")) || [];
  list.push(item);
  localStorage.setItem("orders", JSON.stringify(list));
  showOrders();
}

function showWishlist() {
  const list = JSON.parse(localStorage.getItem("wishlist")) || [];
  document.getElementById("wishlist").innerHTML = list.map(i => `<li>${i}</li>`).join('');
}

function showOrders() {
  const list = JSON.parse(localStorage.getItem("orders")) || [];
  document.getElementById("orders").innerHTML = list.map(i => `<li>${i}</li>`).join('');
}

function submitContact() {
  const name = document.getElementById("cust-name").value;
  const email = document.getElementById("cust-email").value;
  const msg = document.getElementById("cust-msg").value;
  if (!name || !email || !msg) return alert("Please fill all fields");
  alert("Your message has been sent!");
}

window.onload = function () {
  if (document.getElementById("wishlist")) showWishlist();
  if (document.getElementById("orders")) showOrders();
};