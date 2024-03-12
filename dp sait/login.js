
function openLoginModal() {
    var modal = document.getElementById('id01');

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function closeLoginModal() {
    document.getElementById('id01').style.display = 'none';
}
