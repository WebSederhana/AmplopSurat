const envelope = document.getElementById("envelope");

// ===============================
// LINK TUJUAN
// ===============================

// GANTI LINK INI DENGAN LINK UNDANGAN KAMU
const tujuan = "https://websederhana.github.io/IsiSurat/";


envelope.addEventListener("click", function () {

    // Mencegah amplop diklik berkali-kali
    if (envelope.classList.contains("open")) {
        return;
    }

    // Membuka amplop
    envelope.classList.add("open");

    // Tunggu 2,5 detik
    setTimeout(function () {

        // Pindah ke website tujuan
        window.location.href = tujuan;

    }, 2500);

});
