function openLogin() {
    document.getElementById("loginPopup").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginPopup").style.display = "none";
}

function loginUser() {
    document.getElementById("loginPopup").style.display = "none";
    showPopup("Login Successful ✅");
}

function bookTrip(event) {
    event.preventDefault();
    showPopup("Booking Confirmed 🎉");
}

function showPopup(message) {
    document.getElementById("popupMessage").innerHTML = message;
    document.getElementById("successPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("successPopup").style.display = "none";
}