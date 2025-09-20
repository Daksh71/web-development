function logme(){

    
    let user = {
        saksham :"saksham123",
        ankit : "ankit123",
        sachin : "sachin123",
        Faiz : "faiz123",
}

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

if (user[username]==password) {
    alert("Login successful!");
    window.location.href = "http://127.0.0.1:5500/website/2pg.html";
    localStorage.setItem("loggedInUser", username)
    window.location.href = "2pg.html";
} else {
    alert("Invalid username or password");
    // document.getElementById("message").innerText = "Invalid username or password.";
    // return false; // Prevent form submission
}
}
