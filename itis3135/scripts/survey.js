document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("intro-form");
    const addCourseButton = document.getElementById("add-course-btn");
    const coursesSection = document.getElementById("courses-section");

    // Function to add new course entry
    const addCourseField = () => {
        const courseDiv = document.createElement("div");
        courseDiv.className = "course-entry";

        const input = document.createElement("input");
        input.type = "text";
        input.name = "courses[]";
        input.placeholder = "Enter course name";
        input.required = true;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => courseDiv.remove());

        courseDiv.appendChild(input);
        courseDiv.appendChild(deleteButton);

        coursesSection.appendChild(courseDiv);
    };

    // Event listener for adding courses
    addCourseButton.addEventListener("click", addCourseField);

    // Form validation and submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting

        // Validate all inputs
        const requiredFields = form.querySelectorAll("[required]");
        let valid = true;

        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                valid = false;
                alert(`Please fill out the ${field.name} field.`);
                field.focus();
                return;
            }
        });

        if (valid) {
            // Replace form content with submitted data
            const formData = new FormData(form);
            const resultsDiv = document.createElement("div");

            formData.forEach((value, key) => {
                const p = document.createElement("p");
                p.textContent = `${key}: ${value}`;
                resultsDiv.appendChild(p);
            });

            // Replace form with results
            form.replaceWith(resultsDiv);

            // Add a reset link
            const resetLink = document.createElement("a");
            resetLink.href = "#";
            resetLink.textContent = "Reset Form";
            resetLink.addEventListener("click", () => location.reload());
            resultsDiv.appendChild(resetLink);
        }
    });

    // Reset functionality
    form.addEventListener("reset", () => {
        coursesSection.querySelectorAll(".course-entry").forEach((entry) => entry.remove());
    });
});
