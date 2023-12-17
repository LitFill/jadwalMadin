const hari = document.querySelector(".hari");
const prevBttn = document.getElementById("prev");
const nextBttn = document.getElementById("next");
const test = document.querySelector(".test");
const kontainerTabel = document.querySelector(".tabel-kontainer");

const tanggalSekarang = new Date();
const hariArr = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

let indexHari = 0;
hari.innerHTML = `${hariArr[indexHari]}`;

prevBttn.addEventListener("click", pervAndTampilkan);
nextBttn.addEventListener("click", nextAndTampilkan);
document.onload = tampilkanTanggalPerHari(hariArr[indexHari]);

function createTable(className, header, rows) {
    const arrTanggal = tanggalPer7(hariArr[indexHari]);
    let tableHTML = /*html*/ `<div class="${className}">
        <header>${header}</header>
        <table border="0" cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <th>Jam</th>
                    <th>Nama</th>
                    ${(() => {
                        let html = "";
                        for (let i = 0; i < 5; i++) {
                            if (arrTanggal[i]) {
                                html += /*html*/ `<th>${arrTanggal[i]}</th>`;
                            } else {
                                html += /*html*/ `<th></th>`;
                            }
                        }
                        return html;
                    })()}
                </tr>
            </thead>
            <tbody>`;

    for (let i = 0; i < rows.length; i++) {
        tableHTML += /*html*/ `<tr>
            <td>${rows[i].jam}</td>
            <td>${rows[i].nama}</td>`;
        for (let j = 1; j <= 5; j++) {
            tableHTML += /*html*/ `<td>
                <input type="radio" name="keterangan${
                    i + 1
                }${j}" id="ghoib" value="ghoib" />
                <label for="ghoib">Ghoib</label>
                <br />
                <input type="radio" name="keterangan${
                    i + 1
                }${j}" id="izin" value="izin" />
                <label for="izin">Izin</label>
            </td>`;
        }
        tableHTML += "</tr>";
    }

    tableHTML += `</tbody>
        </table>
    </div>`;

    return tableHTML;
}

let rows = [
    { jam: "1", nama: "Ust Mukhlasin" },
    { jam: "2", nama: "Ust Nizar" },
    { jam: "3", nama: "Ust Fakhrurrozi" },
];

kontainerTabel.innerHTML += createTable("tabel-T1A", "1 Tsanawiyyah A", rows);
kontainerTabel.innerHTML += createTable("tabel-T1B", "1 Tsanawiyyah B", rows);
// objek berisi informasi tentang jumlah tanggal perbulan dalam setahun
const jumlahHariPerBulan = {
    0: 31,
    1: 28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31,
};

const jumlahHariBulanIni = jumlahHariPerBulan[tanggalSekarang.getMonth()];

function showInputTanggalValue() {
    showTgl.innerHTML = `${new Date(inputTgl.value).toLocaleDateString(
        "id-ID",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    )}`;
}

function prevHari() {
    indexHari--;
    if (indexHari < 0) {
        indexHari = 5;
    }
    hari.innerHTML = `${hariArr[indexHari]}`;
    console.log(indexHari);
}

function nextHari() {
    indexHari++;
    if (indexHari > 5) {
        indexHari = 0;
    }
    hari.innerHTML = `${hariArr[indexHari]}`;
    console.log(indexHari);
}

function tampilkanTanggalPerHari(hari) {
    const arrTanggal = tanggalPer7(hari);

    for (let i = 0; i < arrTanggal.length; i++) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "tanggal7";
        const label = document.createElement("label");
        label.htmlFor = checkbox.name;
        label.innerHTML = arrTanggal[i];
        test.appendChild(checkbox);
        test.appendChild(label);
    }
}

function tanggalPer7(hari) {
    const sekarang = new Date();

    const tahun = sekarang.getFullYear();
    const bulan = sekarang.getMonth();

    const tanggalPertama = new Date(tahun, bulan, 1);
    const selisihHari =
        (hariArr.indexOf(hari) + 1 - tanggalPertama.getDay() + 7) % 7;

    const tanggalBaru = new Date(tanggalPertama);
    tanggalBaru.setDate(selisihHari + 1);
    const arrTanggal = [];

    while (tanggalBaru.getMonth() === bulan) {
        arrTanggal.push(
            tanggalBaru.toLocaleDateString("id-ID", {
                day: "numeric",
            })
        );
        tanggalBaru.setDate(tanggalBaru.getDate() + 7);
    }
    return arrTanggal;
}

function pervAndTampilkan() {
    test.innerHTML = "";
    prevHari();
    tampilkanTanggalPerHari(hariArr[indexHari]);
}

function nextAndTampilkan() {
    test.innerHTML = "";
    nextHari();
    tampilkanTanggalPerHari(hariArr[indexHari]);
}
