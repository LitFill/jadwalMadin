const hari = document.querySelector(".hari");
const prevBttn = document.getElementById("prev");
const nextBttn = document.getElementById("next");
const kontainerTabel = document.querySelector(".tabel-kontainer");

const tanggalSekarang = new Date();
const hariArr = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

let indexHari = 0;
let currentHari = hariArr[indexHari];
hari.innerHTML = `${currentHari}`;

prevBttn.addEventListener("click", pervAndTampilkan);
nextBttn.addEventListener("click", nextAndTampilkan);

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

let counter = 0;

/**
 *
 * @param {string} className
 * @param {string} header
 * @param {Object} rows
 * @returns
 */
function createTable(className, header, rows) {
    const arrTanggal = tanggalPer7(hariArr[indexHari]);
    let tableHTML = /*html*/ `<div class="${className.split(" ").join("")}">
        <header>${header}</header>
        <table border="0" cellspacing="0" cellpadding="0" class="${className
            .split(" ")
            .join("")
            .slice(0, -2)}">
            <thead>
                <tr>
                    <th>Jam</th>
                    <th>Nama</th>
                    ${(() => {
            let html = "";
            for (let i = 0; i < arrTanggal.length; i++) {
                if (arrTanggal[i]) {
                    html += /*html*/ `<th class="tanggal-tabel-${i + 1
                        }">${arrTanggal[i]}</th>`;
                } else {
                    html += /*html*/ `<th class="tanggal-tabel-${i + 1
                        }"></th>`;
                }
            }
            return html;
        })()}
                </tr>
            </thead>
            <tbody>`;

    for (let i = 0; i < 3; i++) {
        tableHTML += /*html*/ `<tr>
            <td>${i + 1}</td>
            <td>Ust ${rows[i].guru}</td>`;
        for (let j = 0; j < arrTanggal.length; j++) {
            tableHTML += /*html*/ `<td>
                <input type="radio" name="keterangan${i + 1}${j + 1
                }${counter}" id="ghoib${i + 1}${j + 1}${counter}" value="ghoib" />
                <label for="ghoib${i + 1}${j + 1}${counter}">Ghoib</label>
                <br />
                <input type="radio" name="keterangan${i + 1}${j + 1
                }${counter}" id="izin${i + 1}${j + 1}${counter}" value="izin" />
                <label for="izin${i + 1}${j + 1}${counter}">Izin</label>
            </td>`;
        }
        tableHTML += "</tr>";
    }

    tableHTML += /*html*/ `</tbody>
        </table>
    </div>`;

    return tableHTML;
}

displayTabel();

const jumlahHariBulanIni = jumlahHariPerBulan[tanggalSekarang.getMonth()];

function displayTabel() {
    const hariIni = hariArr[indexHari];
    listKelas.forEach((kelas) => {
        kontainerTabel.innerHTML += createTable(
            `tabel-${kelas.nama}`,
            `${kelas.nama}`,
            kelas[hariIni.toLocaleLowerCase()]
        );
        counter++;
    });
    counter = 0;
}

function updateTabel() {
    kontainerTabel.innerHTML = "";
    displayTabel();
}

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
    prevHari();
    updateTanggalTabel();
    updateTabel();
}

function nextAndTampilkan() {
    nextHari();
    updateTanggalTabel();
    updateTabel();
}

function updateTanggalTabel() {
    const arrTgl = tanggalPer7(hariArr[indexHari]);
    for (let i = 0; i <= arrTgl.length; i++) {
        const tgl = arrTgl[i];
        const tanggalDiTabel = document.querySelectorAll(
            `.tanggal-tabel-${i + 1}`
        );
        if (tanggalDiTabel && tgl) {
            tanggalDiTabel.forEach((td) => {
                td.innerHTML = tgl;
            });
        } else if (!tgl) {
            tanggalDiTabel.forEach((td) => {
                td.innerHTML = "";
            });
        }
    }
}
