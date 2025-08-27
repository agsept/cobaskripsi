// Token khusus admin
const ADMIN_TOKEN = "SECRET123";

// Form login dengan token
const tokenForm = document.getElementById("tokenForm");
if (tokenForm) {
  tokenForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const tokenInput = document.getElementById("tokenInput").value;
    if (tokenInput === ADMIN_TOKEN) {
      localStorage.setItem("isAuthorized", "true");
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("errorMsg").innerText = "Token salah!";
    }
  });
}

// Cek akses ke dashboard
if (window.location.pathname.includes("dashboard.html")) {
  if (localStorage.getItem("isAuthorized") !== "true") {
    window.location.href = "index.html";
  }
}

// Logout
if (window.location.pathname.includes("logout.html")) {
  localStorage.removeItem("isAuthorized");
}
