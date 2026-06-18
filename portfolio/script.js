document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stops page reload + 404

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        alert("Message sent successfully!");
        this.reset(); // clears form
    } else {
        alert("Please fill all fields!");
    }
});