// =========================
// CONTACT FORM
// =========================

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you! Your request has been received. " +
        "Texas Pro Handyman will contact you shortly."
    );

    form.reset();

});