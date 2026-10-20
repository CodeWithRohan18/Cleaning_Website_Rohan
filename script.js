function toggleMenu() {

    let nav = document.getElementById("navLinks");

    nav.classList.toggle("show");
}

function showDetails(id) {

    let detail = document.getElementById(id);

    if (detail.style.display === "block") {

        detail.style.display = "none";

    } else {

        detail.style.display = "block";
    }
}

let quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

    quoteForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();

        let email = document.getElementById("email").value.trim();

        let phone = document.getElementById("phone").value.trim();

        let service = document.getElementById("service").value;

        let date = document.getElementById("date").value;

        let formMessage = document.getElementById("formMessage");

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            service === "" ||
            date === ""
        ) {

            formMessage.style.color = "red";

            formMessage.textContent =
            "Please complete all required fields.";

        } else if (
            !email.includes("@") ||
            !email.includes(".")
        ) {

            formMessage.style.color = "red";

            formMessage.textContent =
            "Please enter a valid email address.";

        } else {

            formMessage.style.color = "green";

            formMessage.textContent =
            "Your cleaning quote request has been submitted successfully.";

            quoteForm.reset();
        }

    });

}