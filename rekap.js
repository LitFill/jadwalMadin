/**
 * @param {string} selector
 * @returns {HTMLElement}
 */
const getElement = (selector) => document.querySelector(selector);

/**
 * @param {string} teks
 * @param {function} onClick
 * @returns {HTMLButtonElement}
 */
const createButton = (teks, onClick) => {
    const button = document.createElement("button");
    button.innerHTML = teks;
    button.addEventListener("click", onClick);
    return button;
};

const hari = getElement(".hari");
const prevBttn = getElement("#prev");
const nextBttn = getElement("#next");
const bulanDropdown = getElement("#bulan");
const kontainerTabel = getElement(".tabel-kontainer");
const kontainerTombolHari = getElement(".kontainer-tombol-hari");

const hariArr = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

let indexHari = 0;
let currentHari = hariArr[indexHari];

hari.innerHTML = `${currentHari}`;
bulanDropdown.value = new Date().getMonth().toString();

let sudahTersimpan = false;
let counter = 0;

hariArr.forEach((h) => {
    const bttn = createButton(h, () => {
        if (sudahTersimpan) {
            indexHari = hariArr.indexOf(h);
            currentHari = h;
            const indexBulan = parseInt(bulanDropdown.value);
            updateAndDisplay(0, indexBulan);
            sudahTersimpan = false;
        } else {
            alert(
                "Tidak ada data yang tersimpan. Silahkan simpan terlebih dahulu!"
            );
        }
    });
    kontainerTombolHari.appendChild(bttn);
});

const indexBulan = parseInt(bulanDropdown.value);

prevBttn.addEventListener("click", () => updateAndDisplay(-1, indexBulan));
nextBttn.addEventListener("click", () => updateAndDisplay(1, indexBulan));
bulanDropdown.addEventListener("change", (e) => {
    const indexBulan = parseInt(e.target.value);
    let err = updateAndDisplay(0, indexBulan);
    if (err) {
        console.error(err);
        e.target.value = new Date().getMonth().toString();
    }
});

/**
 * @param {number} inc
 * @param {number} [bulanRekap]
 * @returns {Error | null}
 */
function updateAndDisplay(inc, bulanRekap = undefined) {
    if (sudahTersimpan) {
        indexHari = (indexHari + inc + 6) % 6;
        hari.innerHTML = hariArr[indexHari];
        updateTanggalTabel(bulanRekap);
        updateTabel(bulanRekap);
        sudahTersimpan = false;
        return null;
    } else {
        alert(
            "Tidak ada data yang tersimpan. Silahkan simpan terlebih dahulu!"
        );
        return new Error(
            "Tidak ada data yang tersimpan. Silahkan simpan terlebih dahulu!"
        );
    }
}

/**
 * @param {string[]} arrTanggal
 * @returns {string}
 */
function createTableHeader(arrTanggal) {
    let html = "";
    for (let i = 0; i < arrTanggal.length; i++) {
        if (arrTanggal[i]) {
            html += /*html*/ `<th class="tanggal-tabel-${i + 1}">${arrTanggal[i]
                }</th>`;
        } else {
            html += /*html*/ `<th class="tanggal-tabel-${i + 1}"></th>`;
        }
    }
    return html;
}
/**
 * @param {string[]} arrTanggal
 * @param {Hari} rows
 * @returns {string}
 */
// prettier-ignore
function createTableBody(arrTanggal, rows) {
    let html = "";
    for (let i = 0; i < 3; i++) {
        html += /*html*/ `<tr>
            <td class="jam">${i + 1}</td>
            <td class="guru">Ust ${rows[i].guru}</td>
            `;
        for (let j = 0; j < arrTanggal.length; j++) {
            if (arrTanggal[j]) {
                html += /*html*/ `<td>
                <input 
                    type="radio" 
                    name="keterangan${i + 1}${j + 1}${counter}"
                    id="keterangan${i + 1}${j + 1}${counter}ghoib"
                    value="ghoib" />
                <label 
                    for="keterangan${i + 1}${j + 1}${counter}ghoib"
                    >Ghoib</label>
                <br />
                <input 
                    type="radio" 
                    name="keterangan${i + 1}${j + 1}${counter}" 
                    id="keterangan${i + 1}${j + 1}${counter}izin" 
                    value="izin" />
                <label 
                    for="keterangan${i + 1}${j + 1}${counter}izin"
                    >Izin</label>
                <br />
                <input
                    type="radio"
                    name="keterangan${i + 1}${j + 1}${counter}"
                    id="keterangan${i + 1}${j + 1}${counter}batal"
                    value="" />
                <label
                    for="keterangan${i + 1}${j + 1}${counter}batal"
                    >Batal</label>
            </td>`;
            } else {
                html += /*html*/ `<td></td>`;
            }
        }
        html += /*html*/ `</tr>`;
    }
    return html;
}

/**
 * @param {string} className
 * @param {string} header
 * @param {Hari} rows
 * @param {number} [bulanRekap]
 * @returns
 */
function createTable(className, header, rows, bulanRekap = undefined) {
    const arrTanggal = tanggalPer7(hariArr[indexHari], bulanRekap);
    let tableHTML = /*html*/ `
        <div class="${className.replace(/\s+/g, "")}">
            <header>${header}</header>
            <table 
                border="0" 
                cellspacing="0" 
                cellpadding="0" 
                class="${className.replace(/\s+/g, "").slice(0, -2)}">
                <thead>
                    <tr>
                        <th>Jam</th>
                        <th>Nama</th>
                        ${createTableHeader(arrTanggal)}
                    </tr>
                </thead>
                <tbody>
                    ${createTableBody(arrTanggal, rows)}
                </tbody>
            </table>
        </div>`;

    return tableHTML;
}

displayTabel(new Date().getMonth());

/**
 * @param {number} [bulanRekap]
 */
function displayTabel(bulanRekap = undefined) {
    const hariIni = hariArr[indexHari];
    listKelas.forEach((kelas) => {
        kontainerTabel.innerHTML += createTable(
            `tabel-${kelas.nama}`,
            `${kelas.nama}`,
            kelas[hariIni.toLocaleLowerCase()],
            bulanRekap
        );
        counter++;
    });
    counter = 0;
}

/**
 * @param {number} bulanRekap
 */
function updateTabel(bulanRekap = undefined) {
    kontainerTabel.innerHTML = "";
    displayTabel(bulanRekap);
}

/**
 * @param {string} hari
 * @param {number | undefined} bulanRekap
 * @returns {string[]}
 */
function tanggalPer7(hari, bulanRekap = undefined) {
    const sekarang = new Date();

    const tahun = sekarang.getFullYear();
    const bulan =
        typeof bulanRekap !== "undefined" ? bulanRekap : sekarang.getMonth();

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

/**
 * @param {number | undefined} bulanRekap - default to undefined
 */
function updateTanggalTabel(bulanRekap = undefined) {
    const arrTgl = tanggalPer7(hariArr[indexHari], bulanRekap);
    for (let i = 0; i <= arrTgl.length; i++) {
        const tgl = arrTgl[i];
        const tanggalDiTabel = document.querySelectorAll(
            `.tanggal-tabel-${i + 1}`
        );
        tanggalDiTabel.forEach((td) => {
            td.innerHTML = tgl || "";
        });
    }
}

/**
 * @return {string[][]} An array of data in CSV format
 */
function kumpulkanData() {
    /** @type {string[][]} */
    const dataCSV = [];
    const radios = document.querySelectorAll('input[type="radio"]');

    radios.forEach((radio) => {
        if (!radio.checked || radio.value === "") {
            return;
        }

        const jam =
            radio.parentElement.parentElement.querySelector(".jam").innerHTML;

        const radioId = radio.id;
        const radioColumn = radioId.split("")[11];

        const tanggalTabel =
            radio.parentElement.parentElement.parentElement.previousElementSibling.querySelector(
                `.tanggal-tabel-${radioColumn}`
            ).innerHTML;

        const tanggal = new Date();
        tanggal.setDate(Number(tanggalTabel));
        const tanggalf = tanggal.toLocaleString("id-ID", {
            day: "numeric",
            month: "2-digit",
            year: "numeric",
        });

        const namaGuru = radio.parentElement.parentElement
            .querySelector(".guru")
            .innerHTML.toUpperCase();

        const kelas =
            radio.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
                "header"
            ).innerHTML;

        const keterangan = radio.value.toUpperCase();

        dataCSV.push([tanggalf, namaGuru, kelas, jam, keterangan]);
    });
    return dataCSV;
}

/**
 *
 * @param {string[][]} data
 * @returns {string}
 */
function toCSV(data) {
    let csvContent = "data:text/csv;charset=utf-8,";
    data.forEach((row) => {
        let rowData = row.join(",");
        csvContent += rowData + "\r\n";
    });
    return csvContent;
}

/**
 * @param {string} filename
 * @param {string[][]} data
 */
function downloadCSV(data, filename) {
    try {
        let csvContent = toCSV(data);
        let encodedUri = encodeURI(csvContent);
        let link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error("An error occurred while downloading the CSV:", error);
    }
}

let saveButtons = document.querySelectorAll(".save-button");
saveButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const dataCSV = kumpulkanData();
        try {
            const tanggalDownload = new Date()
                .toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "2-digit",
                    year: "2-digit",
                })
                .split("/")
                .reverse()
                .join("");
            if (dataCSV) {
                downloadCSV(
                    dataCSV,
                    `rekap_kehadiran_${hariArr[
                        indexHari
                    ].toLocaleLowerCase()}_${tanggalDownload}.csv`
                );
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
