
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const loginBox = document.getElementById("loginBox");
const submitLogin = document.getElementById("submitLogin");
const closeLogin = document.getElementById("closeLogin");
const loginError = document.getElementById("loginError");


const USER = "cj123@gmail.com";
const PASS = "password123";

loginBtn.onclick = () => {
    loginBox.classList.remove("hidden");
};

closeLogin.onclick = () => {
    loginBox.classList.add("hidden");
};

submitLogin.onclick = () => {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === USER && pass === PASS) {
        loginError.textContent = "";
        alert("Login successful!");
        loginBox.classList.add("hidden");

        loginBtn.classList.add("hidden");
        logoutBtn.classList.remove("hidden");
    } else {
        loginError.textContent = "Invalid username or password";
    }
};

logoutBtn.onclick = () => {
    alert("You have logged out.");
    logoutBtn.classList.add("hidden");
    loginBtn.classList.remove("hidden");
};


document.getElementById("contactForm").onsubmit = function(e) {
    e.preventDefault();
    document.getElementById("contactFeedback").textContent = "Message sent!";
};
