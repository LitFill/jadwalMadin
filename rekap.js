const hari = document.querySelector(".hari");
const prevBttn = document.getElementById("prev");
const nextBttn = document.getElementById("next");
const kontainerTabel = document.querySelector(".tabel-kontainer");
const kontainerTombolHari = document.querySelector(".kontainer-tombol-hari");

const hariArr = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];


let indexHari = 0;
let currentHari = hariArr[indexHari];
hari.innerHTML = `${currentHari}`;

let sudahTersimpan = false;

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

const jumlahHariBulanIni = jumlahHariPerBulan[new Date().getMonth()];

let counter = 0;

hariArr.forEach((h) => {
    const bttn = document.createElement("button");
    bttn.innerHTML = h;
    bttn.addEventListener("click", () => {
        if (sudahTersimpan) {
            indexHari = hariArr.indexOf(h);
            currentHari = h;
            updateAndDisplay(0);
            sudahTersimpan = false;
        } else {
            alert('Tidak ada data yang tersimpan. Silahkan simpan terlebih dahulu!');
        }
    });
    kontainerTombolHari.appendChild(bttn);
})

prevBttn.addEventListener("click", () => updateAndDisplay(-1));
nextBttn.addEventListener("click", () => updateAndDisplay(1));

function updateAndDisplay(inc) {
    if (sudahTersimpan) {
        indexHari = (indexHari + inc + 6) % 6;
        hari.innerHTML = hariArr[indexHari];
        updateTanggalTabel();
        updateTabel();
        sudahTersimpan = false;
    } else {
        alert('Tidak ada data yang tersimpan. Silahkan simpan terlebih dahulu!');
    }
}

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
            <td class="jam">${i + 1}</td>
            <td class="guru">Ust ${rows[i].guru}</td>`;
        for (let j = 0; j < arrTanggal.length; j++) {
            tableHTML += /*html*/ `<td>
                <input type="radio" name="keterangan${i + 1}${j + 1
                }${counter}" id="keterangan${i + 1}${j + 1}${counter}ghoib" value="ghoib" />
                <label for="keterangan${i + 1}${j + 1}${counter}ghoib">Ghoib</label>
                <br />
                <input type="radio" name="keterangan${i + 1}${j + 1
                }${counter}" id="keterangan${i + 1}${j + 1}${counter}izin" value="izin" />
                <label for="keterangan${i + 1}${j + 1}${counter}izin">Izin</label>
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

function updateTanggalTabel() {
    const arrTgl = tanggalPer7(hariArr[indexHari]);
    for (let i = 0; i <= arrTgl.length; i++) {
        const tgl = arrTgl[i];
        const tanggalDiTabel = document.querySelectorAll(
            `.tanggal-tabel-${i + 1}`
        );
        tanggalDiTabel.forEach((td) => {
            td.innerHTML = tgl || "";
        })
    }
}

function kumpulkanData() {
    const dataCSV = [];
    const radios = document.querySelectorAll('input[type="radio"]');

    radios.forEach((radio) => {
        if (radio.checked) {
            const jam = radio
                .parentElement
                .parentElement
                .querySelector(".jam")
                .innerHTML;

            const radioId = radio.id;
            const radioColumn = radioId.split("")[11]

            const tanggalTabel = radio
                .parentElement
                .parentElement
                .parentElement
                .previousElementSibling
                .querySelector(`.tanggal-tabel-${radioColumn}`)
                .innerHTML;

            const tanggal = new Date()
            tanggal.setDate(Number(tanggalTabel));
            const tanggalf = tanggal.toLocaleString("id-ID", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
            });

            const namaGuru = radio
                .parentElement
                .parentElement
                .querySelector(".guru")
                .innerHTML
                .toUpperCase();

            const kelas = radio
                .parentElement
                .parentElement
                .parentElement
                .parentElement
                .parentElement
                .querySelector("header")
                .innerHTML;

            const keterangan = radio.value.toUpperCase();

            dataCSV.push([tanggalf, namaGuru, kelas, jam, keterangan]);
        }
    });
    return dataCSV;
}

function toCSV(data) {
    let csvContent = "data:text/csv;charset=utf-8,";
    data.forEach((row) => {
        let rowData = row.join(",");
        csvContent += rowData + "\r\n";
    })
    return csvContent;
}

function downloadCSV(data, filename) {
    let csvContent = toCSV(data);
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

let saveButton = document.querySelectorAll(".save-button");
saveButton.forEach((button) => {
    button.addEventListener("click", () => {
        const dataCSV = kumpulkanData();
        try {
            const tanggalDownload = new Date()
                .toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "numeric",
                    year: "2-digit",
                })
                .split("/")
                .reverse()
                .join("");
            if (dataCSV) {
                downloadCSV(dataCSV, `rekap_kehadiran_${hariArr[indexHari].toLocaleLowerCase()}_${tanggalDownload}.csv`);
                sudahTersimpan = true;
            } else {
                console.log("dataCSV is null or undefined");
                sudahTersimpan = false;
            }
        } catch (error) {
            console.error("An error occurred:", error);
            sudahTersimpan = false;
        }
    });
});