// script.js

// Fungsi untuk menangani pengiriman formulir kontak
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Ambil nilai dari input
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    // Tampilkan pesan konfirmasi (Anda bisa mengganti ini dengan logika pengiriman email)
    alert(
      `Terima kasih, ${nama}! Pesan Anda telah dikirim.\nEmail: ${email}\nPesan: ${pesan}`
    );

    // Reset formulir setelah pengiriman
    form.reset();
  });
});

// Fungsi untuk efek scroll halus
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});
