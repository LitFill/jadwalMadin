const jadwalHariIni = document.getElementById("jadwalHariIni");
const tanggalJadwal = document.getElementById("tanggalJadwal");
const tanggal = new Date();
const kodeTanggal = tanggal
    .toLocaleDateString("id-ID", {
        dateStyle: "short",
    })
    .split("/")
    .join("");
console.log(kodeTanggal);
const pengirimPesanWeb = new PengirimPesan(kodeTanggal);

tanggalJadwal.innerHTML = getTanggal(tanggal);
jadwalHariIni.innerHTML = getJadwalHariIni();
// console.log(getJadwalHariIni());

function getTanggal(tanggal) {
    return `${tanggal.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    })}`;
}

function getJadwalHariIni() {
    const pesanPagi = pengirimPesanWeb.getPesan("pagi");
    const pesanSore = pengirimPesanWeb.getPesan("sore");

    const pesan = pesanPagi + pesanSore;

    const escapedPesan = pesan
        .replace(/</g, /*html*/ `&lt;`)
        .replace(/>/g, /*html*/ `&gt;`)
        .replace(/_(.*)_/g, /*html*/ `<i>$1</i>`)
        .replace(/\*(.*)\*/g, /*html*/ `<b>$1</b>`)
        .replace(/(Jadwal Madin.*)\n/g, /*html*/ `<h4>$1</h4>`)
        .replace(/\t/g, /*html*/ `&nbsp;`.repeat(8))
        .replace(/\n/g, /*html*/ `<br />`);

    return escapedPesan;
}
