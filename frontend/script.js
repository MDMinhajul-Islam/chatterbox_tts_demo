// ========================================
// Chatterbox TTS Demo Frontend
// ========================================


// -------------------------------
// Navigation
// -------------------------------

const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".page-section");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        const target = item.dataset.section;

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        item.classList.add("active");

        sections.forEach(section => {
            section.classList.remove("active");
        });

        const selectedSection = document.getElementById(target);

        if (selectedSection) {
            selectedSection.classList.add("active");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


// -------------------------------
// Toast notification
// -------------------------------

const toast = document.getElementById("toast");

function showToast(title, message) {

    toast.querySelector("strong").textContent = title;
    toast.querySelector("small").textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// -------------------------------
// Run frontend demo
// -------------------------------

const demoButton = document.getElementById("demoButton");

if (demoButton) {

    demoButton.addEventListener("click", () => {

        const waveform = document.getElementById("waveform");

        waveform.classList.add("playing");

        showToast(
            "Frontend is running",
            "Chatterbox interface is ready for TTS integration."
        );

        setTimeout(() => {
            waveform.classList.remove("playing");
        }, 3000);

    });

}


// -------------------------------
// View Docker setup
// -------------------------------

const dockerButton = document.getElementById("dockerButton");

if (dockerButton) {

    dockerButton.addEventListener("click", () => {

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        document
            .querySelector('[data-section="docker"]')
            .classList.add("active");

        sections.forEach(section => {
            section.classList.remove("active");
        });

        document
            .getElementById("docker")
            .classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// -------------------------------
// Copy Dockerfile
// -------------------------------

const copyButton = document.querySelector(".copy-button");

if (copyButton) {

    copyButton.addEventListener("click", async () => {

        const dockerfile = document.getElementById("dockerfile");

        const text = dockerfile.innerText;

        try {

            await navigator.clipboard.writeText(text);

            copyButton.textContent = "Copied!";

            showToast(
                "Copied",
                "Dockerfile copied to clipboard."
            );

            setTimeout(() => {
                copyButton.textContent = "Copy";
            }, 1500);

        } catch (error) {

            showToast(
                "Copy failed",
                "Please copy the Dockerfile manually."
            );

        }

    });

}


// -------------------------------
// Theme button
// -------------------------------

const themeButton = document.getElementById("themeButton");

if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        showToast(
            "Theme changed",
            "Frontend appearance updated."
        );

    });

}


// -------------------------------
// Task checkbox interaction
// -------------------------------

const taskRows = document.querySelectorAll(".task-row");

taskRows.forEach(row => {

    const checkbox = row.querySelector("input");

    if (!checkbox) return;

    checkbox.addEventListener("change", () => {

        if (checkbox.checked) {

            row.classList.add("completed");

            const state = row.querySelector(".task-state");

            if (state) {
                state.textContent = "DONE";
                state.classList.remove("pending");
            }

            const customCheckbox =
                row.querySelector(".custom-checkbox");

            if (customCheckbox) {
                customCheckbox.textContent = "✓";
            }

            showToast(
                "Task completed",
                row.querySelector("strong").textContent
            );

        } else {

            row.classList.remove("completed");

            const state = row.querySelector(".task-state");

            if (state) {
                state.textContent = "NEXT";
                state.classList.add("pending");
            }

            const customCheckbox =
                row.querySelector(".custom-checkbox");

            if (customCheckbox) {
                customCheckbox.textContent = "";
            }

        }

    });

});


// -------------------------------
// Docker status simulation
// -------------------------------

function updateDockerStatus() {

    const statusElements =
        document.querySelectorAll(".live-status");

    statusElements.forEach(status => {

        status.innerHTML = `
            <span class="pulse"></span>
            Dockerized
        `;

    });

}

updateDockerStatus();


// -------------------------------
// Console message
// -------------------------------

console.log(`
========================================
 Chatterbox TTS Demo
========================================

Frontend:
  HTML + CSS + JavaScript

Container:
  chatterbox-frontend

Server:
  Nginx Alpine

Port:
  localhost:3000 -> container:80

Docker:
  Image: chatterbox-frontend:latest

========================================
`);