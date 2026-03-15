function openLogin(){
document.getElementById("loginPopup").style.display="flex";
}

function closeLogin(){
document.getElementById("loginPopup").style.display="none";
}

function bookTrip(event){
event.preventDefault();
document.getElementById("msg").innerText="Trip booked successfully!";
}