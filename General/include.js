document.addEventListener("DOMContentLoaded", function() {
    fetch("./Navbar/navbar.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("header").innerHTML = data;
        });

    fetch("./Footer/footer.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        });
});