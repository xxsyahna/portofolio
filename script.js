// ==== DARK MODE TOGGLE ====
const toggleButton = document.querySelector(".dark-toggle");

// Terapkan mode gelap kalau sebelumnya disimpan di localStorage
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
});

toggleButton?.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Simpan preferensi ke localStorage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

