// JavaScript code for the login modal

// Function to open the login modal
function openLoginModal() {
    var modal = document.getElementById('id01');

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Function to close the login modal
function closeLoginModal() {
    document.getElementById('id01').style.display = 'none';
}
