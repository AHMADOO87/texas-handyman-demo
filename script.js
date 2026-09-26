const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitButton = form.querySelector("button");
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            alert(
                "Thank you! Your request has been received. " +
                "Texas Pro Handyman will contact you shortly."
            );

            form.reset();
        } else {
            const data = await response.json().catch(() => null);
            alert(
                data?.errors?.map(error => error.message).join("\n") ||
                "There was a problem submitting your request. Please try again."
            );
        }
    } catch (error) {
        alert("There was a connection problem. Please try again.");
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Request a Free Estimate";
    }
});
