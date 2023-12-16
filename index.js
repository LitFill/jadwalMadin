const jadwalHariIni = document.getElementById("jadwalHariIni");
const tanggalJadwal = document.getElementById("tanggalJadwal");
const tanggal = new Date();
const pengirimPesanWeb = new PengirimPesan("161223");

tanggalJadwal.innerHTML = getTanggal(tanggal);
jadwalHariIni.innerHTML = getJadwalHariIni();
console.log(getJadwalHariIni());

function getTanggal(tanggal) {
    return `${tanggal.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    })}`;
}

function getJadwalHariIni() {
    const waktu = "sore";
    return pengirimPesanWeb
        .getPesan(waktu)
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
        .replace(/\n/g, "<br />");
}
