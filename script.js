document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("surveyForm");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close");
    const resultsDiv = document.getElementById("results");

    submitBtn.addEventListener("click", function () {
        if (form.checkValidity()) {
            showResults();
        } else {
            form.reportValidity();
        }
    });

    resetBtn.addEventListener("click", function () {
        form.reset();
    });

    function showResults() {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const gender = document.getElementById("male").checked
            ? "Male"
            : document.getElementById("female").checked
            ? "Female"
            : "Not Specified";
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        const resultsHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        resultsDiv.innerHTML = resultsHTML;
        popup.style.display = "block";
    }

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
