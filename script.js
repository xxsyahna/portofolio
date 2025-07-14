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

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.project-desc').forEach(p => {
    const fullText = p.textContent.trim();
    const sentences = fullText.split(/(?<=[.?!])\s+/); // Pisahkan kalimat

    if (sentences.length <= 2) return; // Kalau pendek, tidak perlu dipotong

    const shortText = sentences.slice(0, 2).join(" ");
    const restText = sentences.slice(2).join(" ");

    p.innerHTML = `
        <span class="short-text">${shortText}</span>
        <span class="full-text hidden">${restText}</span>
        <button class="read-more-btn">Lihat Selengkapnya</button>
    `;

    const btn = p.querySelector('.read-more-btn');
    const shortSpan = p.querySelector('.short-text');
    const fullSpan = p.querySelector('.full-text');

    btn.addEventListener('click', () => {
        const isHidden = fullSpan.classList.contains('hidden');
        fullSpan.classList.toggle('hidden');
        shortSpan.classList.toggle('hidden');
        btn.textContent = isHidden ? 'Sembunyikan' : 'Lihat Selengkapnya';
    });
    });
});


