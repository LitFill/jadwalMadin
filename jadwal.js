// import fs from "fs";
// const fs = require("fs");

/**
 * Mewakili seorang guru.
 * @class
 */
class Guru {
    /**
     * Membuat instans Guru baru.
     * @param {String} nama - Nama ustad.
     * @param {Fan|Fan[]} fan - Nama mata pelajaran yang diajarkan oleh guru.
     */
    constructor(nama, fan) {
        this.nama = nama;
        this.fan = Guru.daftarkanFan(fan);
    }

    /**
     * @static
     * @param {Fan|Fan[]} fan
     * @returns {string|string[]}
     * @memberof Guru
     */
    static daftarkanFan(fan) {
        if (Array.isArray(fan)) {
            return fan.map((pelajaran) => pelajaran.nama);
        } else {
            return fan.nama;
        }
    }

    /**
     * Menampilkan jadwal mengajar guru.
     * @param {string[]} [namaHari=["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]] - Nama hari dalam seminggu.
     */
    jadwal(namaHari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]) {
        listKelas.forEach((kelas) => {
            for (let hari in kelas) {
                if (namaHari.includes(hari)) {
                    for (let i = 0; i < 3; i++) {
                        if (kelas[hari][i].guru === this.nama) {
                            console.log(
                                `Ust. ${this.nama} mengajar kelas ${
                                    kelas.nama
                                } fan ${kelas[hari][i].fan} di hari ${
                                    kelas[hari].nama
                                } jam ke-${i + 1}.`
                            );
                        }
                    }
                }
            }
        });
    }
}

/**
 * Mewakili sebuah kelas.
 * @class
 */
class Kelas {
    senin = new Hari("Senin");
    selasa = new Hari("Selasa");
    rabu = new Hari("Rabu");
    kamis = new Hari("Kamis");
    jumat = new Hari("Jumat");
    sabtu = new Hari("Sabtu");
    /**
     * Membuat instans Kelas baru.
     * @param {String} nama - Nama kelas.
     * @param {String} waktu - Waktu KBM, 'sore' atau 'pagi'
     */
    constructor(nama, waktu) {
        this.nama = nama;
        this.waktu = waktu;
    }

    /**
     * Menempatkan seorang guru dalam jadwal kelas.
     * @param {String} hari - Hari dalam seminggu (misalnya, "senin").
     * @param {Number} jam - Jam pelajaran (1, 2, atau 3).
     * @param {Guru} guru - Guru yang akan ditempatkan dalam jadwal.
     * @param {Fan} fan - Nama mata pelajaran.
     */
    tempatkan(hari, jam, guru, fan) {
        if (guru.fan.includes(fan.nama)) {
            this[hari][jam - 1].guru = guru.nama;
            this[hari][jam - 1].fan = fan.nama;
        } else {
            console.error(
                `ERROR: Ust. ${guru.nama} tidak mengajar fan ${fan.nama}.`
            );
        }
    }

    jadwal(namaHari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]) {
        for (let hari in this) {
            if (namaHari.includes(hari)) {
                for (let i = 0; i < 3; i++) {
                    console.log(
                        `Kelas ${this.nama} di hari ${this[hari].nama} jam ke-${
                            i + 1
                        } diajar oleh Ust. ${this[hari][i].guru} fan ${
                            this[hari][i].fan
                        }.`
                    );
                }
            }
        }
    }
}

/**
 * Mewakili satu hari dalam jadwal kelas.
 * @class
 */
class Hari {
    constructor(nama) {
        this.nama = nama;
        this[0] = { guru: "", fan: "" };
        this[1] = { guru: "", fan: "" };
        this[2] = { guru: "", fan: "" };
        // for (let i = 0; i < 3; i++) {
        //     this[i] = { guru: "", fan: "" };
        // }
    }

    static hello() {
        console.log("halo!");
    }

    static jadwal(namaHari) {
        listKelas.forEach((kelas) => {
            for (let hari in kelas) {
                if (kelas[hari].nama === namaHari) {
                    for (let i = 0; i < 3; i++) {
                        console.log(
                            `Di hari ${kelas[hari].nama} jam ke-${
                                i + 1
                            } kelas ${kelas.nama} diajar oleh Ust. ${
                                kelas[hari][i].guru
                            } fan ${kelas[hari][i].fan}.`
                        );
                    }
                }
            }
        });
    }
}

class Fan {
    static Ilal = new Fan("I'lal dan I'rob");
    static Mustholah = new Fan("Mustholah");
    static Balaghoh = new Fan("Balaghoh");
    static Ushul = new Fan("Ushul Fiqih");
    static Arab = new Fan("Bahasa Arab");
    static Miftah = new Fan("Al-Miftah");
    static Shorof = new Fan("Shorof");
    static Tajwid = new Fan("Tajwid");
    static Tauhid = new Fan("Tauhid");
    static Akhlaq = new Fan("Akhlaq");
    static Tasme = new Fan("Tasme'");
    static Nahwu = new Fan("Nahwu");
    static Fiqih = new Fan("Fiqih");
    static Imla = new Fan("Imla'");

    /**
     * @param {string} nama
     */
    constructor(nama) {
        this.nama = nama;
    }
}

// TODO
function cekTabrakan() {
    const listPagi = [];
    const listSore = [];
    listKelas.forEach((kelas) => {
        for (let hari in kelas) {
            for (let i = 0; i < 3; i++) {
                if (kelas.waktu === "pagi") listPagi.push(kelas[hari][i].guru);
                if (kelas.waktu === "sore") listSore.push(kelas[hari][i].guru);
            }
        }
    });

    return "Aman! Tidak ada jam tabrakan.";
}

/**
 * @description
 * @author LitFill
 * @date 18/10/2023
 * @param {String[]} array
 */
function cekDupeArray(array) {
    const listYangAda = {};
    const yangReturn = {};
    array.forEach((guru, index) => {
        if (!listYangAda[guru]) listYangAda[guru] = [];
        listYangAda[guru].push(index);
    });
    for (let guru in listYangAda) {
        if (listYangAda[guru].length > 1) yangReturn[guru] = listYangAda[guru];
    }
    return yangReturn;
}

/* Deklarasi Fan */
const mustholah = Fan.Mustholah;
const balaghoh = Fan.Balaghoh;
const shorof = Fan.Shorof;
const tajwid = Fan.Tajwid;
const tauhid = Fan.Tauhid;
const akhlaq = Fan.Akhlaq;
const miftah = Fan.Miftah;
const nahwu = Fan.Nahwu;
const fiqih = Fan.Fiqih;
const ushul = Fan.Ushul;
const tasme = Fan.Tasme;
const arab = Fan.Arab;
const imla = Fan.Imla;
const ilal = Fan.Ilal;

/*  Deklarasi Guru */
const MNR = new Guru("Munir Subkhi", [shorof, nahwu]);
const BCH = new Guru("Bukhori", [tauhid, akhlaq]);
const FDL = new Guru("Fadlulloh Ulil Azmi", imla);
const GFR = new Guru("Musthofa Ghufron", fiqih);
const ASP = new Guru("Saifurrohman Aly", nahwu);
const MIS = new Guru("Maisur", [fiqih, nahwu]);
const MRJ = new Guru("Mu'rijul Ma'arif", arab);
const MST = new Guru("Musthofa Besuk", fiqih);
const USY = new Guru("Syafi'il Anam", tauhid);
const IDS = new Guru("Idris Besuk", nahwu);
const ADN = new Guru("Adnan Fauzi", fiqih);
const YHY = new Guru("Yahya Mansur", arab);
const LSN = new Guru("Mukhlasin", tauhid);
const MNS = new Guru("Munshorif", shorof);
const FRZ = new Guru("Fakhrurozi", arab);
const HMD = new Guru("Hamid M.", tauhid);
const SDQ = new Guru("Sodiqin", tauhid);
const HFD = new Guru("Hafidz", shorof);
const ASR = new Guru("Asrofi", tajwid);
const UMR = new Guru("Ma'ruf", akhlaq);
const YDN = new Guru("Yadin", akhlaq);
const MSH = new Guru("Mashudi", imla);
const SLH = new Guru("Sholah", nahwu);
const FQH = new Guru("Faqih", shorof);
const LBB = new Guru("Lubab", tajwid);
const MNJ = new Guru("Munji", akhlaq);
const MRW = new Guru("Mirwan", fiqih);
const ANM = new Guru("Anam", tauhid);
const BGS = new Guru("Bagus", fiqih);
const NZR = new Guru("Nizar", nahwu);
const FRH = new Guru("Farhan", arab);
const RIF = new Guru("Rifqi", arab);
const FRQ = new Guru("Faruq", arab);
const FT = new Guru("Fathur", nahwu);
const WF = new Guru("Wafa", shorof);
const HR = new Guru("Heri", nahwu);

/* Deklarasi Kelas */
const listKelas = [];

// Tsanawiyah 1-A sampai 1-G
for (let i = "A".charCodeAt(0); i <= "G".charCodeAt(0); i++) {
    const kelas = new Kelas(`Tsanawiyah 1-${String.fromCharCode(i)}`, "pagi");
    listKelas.push(kelas);
}

// Tsanawiyah 2-A sampai 2-J dan Tsanawiyah 3-A sampai 3-J
for (let j = 2; j <= 3; j++) {
    for (let i = "A".charCodeAt(0); i <= "J".charCodeAt(0); i++) {
        const kelas = new Kelas(
            `Tsanawiyah ${j}-${String.fromCharCode(i)}`,
            "sore"
        );
        listKelas.push(kelas);
    }
}

// Aliyah 1-A sampai 1-F
for (let i = "A".charCodeAt(0); i <= "F".charCodeAt(0); i++) {
    const kelas = new Kelas(`Aliyah 1-${String.fromCharCode(i)}`, "sore");
    listKelas.push(kelas);
}

// Aliyah 2-A sampai 2-C dan Aliyah 3-A sampai 3-C
for (let j = 2; j <= 3; j++) {
    for (let i = "A".charCodeAt(0); i <= "C".charCodeAt(0); i++) {
        const kelas = new Kelas(
            `Aliyah ${j}-${String.fromCharCode(i)}`,
            "sore"
        );
        listKelas.push(kelas);
    }
}

// Isti'dad dan Mutakhorijin
listKelas.push(new Kelas("Isti'dad", "sore"));
listKelas.push(new Kelas("Mutakhorijin Pagi", "pagi"));
listKelas.push(new Kelas("Mutakhorijin Sore", "sore"));

// prettier-ignore
const [
    T1A, T1B, T1C, T1D, T1E, T1F, T1G,
    T2A, T2B, T2C, T2D, T2E, T2F, T2G, T2H, T2I, T2J,
    T3A, T3B, T3C, T3D, T3E, T3F, T3G, T3H, T3I, T3J,
    A1A, A1B, A1C, A1D, A1E, A1F,
    A2A, A2B, A2C,
    A3A, A3B, A3C,
    IST,
    MTP, MTS,
] = listKelas;

/* Penempatan Guru ke dalam Kelas sesuai Jadwal */
/* Tsanawy 1-A */
T1A.tempatkan("senin", 1, NZR, nahwu);
T1A.tempatkan("senin", 2, MNS, shorof);
T1A.tempatkan("senin", 3, FDL, imla);
T1A.tempatkan("selasa", 1, FRZ, arab);
T1A.tempatkan("selasa", 2, GFR, fiqih);
T1A.tempatkan("selasa", 3, MNS, shorof);
T1A.tempatkan("rabu", 1, FRZ, arab);
T1A.tempatkan("rabu", 2, ASR, tajwid);
T1A.tempatkan("rabu", 3, NZR, nahwu);
T1A.tempatkan("kamis", 1, NZR, nahwu);
T1A.tempatkan("kamis", 2, FRZ, arab);
T1A.tempatkan("kamis", 3, GFR, fiqih);
T1A.tempatkan("jumat", 1, LSN, tauhid);
T1A.tempatkan("jumat", 2, NZR, nahwu);
T1A.tempatkan("jumat", 3, YDN, akhlaq);
T1A.tempatkan("sabtu", 1, FRZ, arab);
T1A.tempatkan("sabtu", 2, LSN, tauhid);
T1A.tempatkan("sabtu", 3, GFR, fiqih);

/* Tsanawy 1-B */
T1B.tempatkan("senin", 1, FRZ, arab);
T1B.tempatkan("senin", 2, NZR, nahwu);
T1B.tempatkan("senin", 3, MNS, shorof);
T1B.tempatkan("selasa", 1, ASR, tajwid);
T1B.tempatkan("selasa", 2, LSN, tauhid);
T1B.tempatkan("selasa", 3, YDN, akhlaq);
T1B.tempatkan("rabu", 1, NZR, nahwu);
T1B.tempatkan("rabu", 2, FRZ, arab);
T1B.tempatkan("rabu", 3, MST, fiqih);
T1B.tempatkan("kamis", 1, FRZ, arab);
T1B.tempatkan("kamis", 2, NZR, nahwu);
T1B.tempatkan("kamis", 3, LSN, tauhid);
T1B.tempatkan("jumat", 1, FRZ, arab);
T1B.tempatkan("jumat", 2, MST, fiqih);
T1B.tempatkan("jumat", 3, NZR, nahwu);
T1B.tempatkan("sabtu", 1, MST, fiqih);
T1B.tempatkan("sabtu", 2, MNS, shorof);
T1B.tempatkan("sabtu", 3, FDL, imla);

/* Tsanawy 1-C */
T1C.tempatkan("senin", 1, FDL, imla);
T1C.tempatkan("senin", 2, FRQ, arab);
T1C.tempatkan("senin", 3, MST, fiqih);
T1C.tempatkan("selasa", 1, NZR, nahwu);
T1C.tempatkan("selasa", 2, FRQ, arab);
T1C.tempatkan("selasa", 3, LSN, tauhid);
T1C.tempatkan("rabu", 1, MNR, shorof);
T1C.tempatkan("rabu", 2, NZR, nahwu);
T1C.tempatkan("rabu", 3, FRQ, arab);
T1C.tempatkan("kamis", 1, MNR, shorof);
T1C.tempatkan("kamis", 2, LSN, tauhid);
T1C.tempatkan("kamis", 3, MST, fiqih);
T1C.tempatkan("jumat", 1, NZR, nahwu);
T1C.tempatkan("jumat", 2, FRQ, arab);
T1C.tempatkan("jumat", 3, MST, fiqih);
T1C.tempatkan("sabtu", 1, NZR, nahwu);
T1C.tempatkan("sabtu", 2, YDN, akhlaq);
T1C.tempatkan("sabtu", 3, ASR, tajwid);

/* Tsanawy 1-D */
T1D.tempatkan("senin", 1, MSH, imla);
T1D.tempatkan("senin", 2, LSN, tauhid);
T1D.tempatkan("senin", 3, FRQ, arab);
T1D.tempatkan("selasa", 1, MIS, fiqih);
T1D.tempatkan("selasa", 2, YDN, akhlaq);
T1D.tempatkan("selasa", 3, FT, nahwu);
T1D.tempatkan("rabu", 1, FT, nahwu);
T1D.tempatkan("rabu", 2, FRQ, arab);
T1D.tempatkan("rabu", 3, ASR, tajwid);
T1D.tempatkan("kamis", 1, HFD, shorof);
T1D.tempatkan("kamis", 2, FT, nahwu);
T1D.tempatkan("kamis", 3, FRQ, arab);
T1D.tempatkan("jumat", 1, MIS, fiqih);
T1D.tempatkan("jumat", 2, LSN, tauhid);
T1D.tempatkan("jumat", 3, HFD, shorof);
T1D.tempatkan("sabtu", 1, FT, nahwu);
T1D.tempatkan("sabtu", 2, MIS, fiqih);
T1D.tempatkan("sabtu", 3, FRQ, arab);

/* Tsanawy 1-E */
T1E.tempatkan("senin", 1, MST, fiqih);
T1E.tempatkan("senin", 2, FRZ, arab);
T1E.tempatkan("senin", 3, LSN, tauhid);
T1E.tempatkan("selasa", 1, FT, nahwu);
T1E.tempatkan("selasa", 2, FRZ, arab);
T1E.tempatkan("selasa", 3, MST, fiqih);
T1E.tempatkan("rabu", 1, ASR, tajwid);
T1E.tempatkan("rabu", 2, FT, nahwu);
T1E.tempatkan("rabu", 3, HFD, shorof);
T1E.tempatkan("kamis", 1, MSH, imla);
T1E.tempatkan("kamis", 2, HFD, shorof);
T1E.tempatkan("kamis", 3, FT, nahwu);
T1E.tempatkan("jumat", 1, MST, fiqih);
T1E.tempatkan("jumat", 2, FRZ, arab);
T1E.tempatkan("jumat", 3, FT, nahwu);
T1E.tempatkan("sabtu", 1, YDN, akhlaq);
T1E.tempatkan("sabtu", 2, FRZ, arab);
T1E.tempatkan("sabtu", 3, LSN, tauhid);

/* Tsanawy 1-F */
T1F.tempatkan("senin", 1, MIS, fiqih);
T1F.tempatkan("senin", 2, HFD, shorof);
T1F.tempatkan("senin", 3, MSH, imla);
T1F.tempatkan("selasa", 1, FRQ, arab);
T1F.tempatkan("selasa", 2, FT, nahwu);
T1F.tempatkan("selasa", 3, BCH, tauhid);
T1F.tempatkan("rabu", 1, FRQ, arab);
T1F.tempatkan("rabu", 2, HFD, shorof);
T1F.tempatkan("rabu", 3, FT, nahwu);
T1F.tempatkan("kamis", 1, FT, nahwu);
T1F.tempatkan("kamis", 2, FRQ, arab);
T1F.tempatkan("kamis", 3, BCH, tauhid);
T1F.tempatkan("jumat", 1, ASR, tajwid);
T1F.tempatkan("jumat", 2, FT, nahwu);
T1F.tempatkan("jumat", 3, MIS, fiqih);
T1F.tempatkan("sabtu", 1, MIS, fiqih);
T1F.tempatkan("sabtu", 2, FRQ, arab);
T1F.tempatkan("sabtu", 3, YDN, akhlaq);

/* Tsanawy 1-G */
T1G.tempatkan("senin", 1, HR, nahwu);
T1G.tempatkan("senin", 2, BCH, tauhid);
T1G.tempatkan("senin", 3, FRH, arab);
T1G.tempatkan("selasa", 1, HR, nahwu);
T1G.tempatkan("selasa", 2, MIS, fiqih);
T1G.tempatkan("selasa", 3, FRH, arab);
T1G.tempatkan("rabu", 1, HR, nahwu);
T1G.tempatkan("rabu", 2, MIS, fiqih);
T1G.tempatkan("rabu", 3, FRH, arab);
T1G.tempatkan("kamis", 1, HR, nahwu);
T1G.tempatkan("kamis", 2, YDN, akhlaq);
T1G.tempatkan("kamis", 3, MSH, imla);
T1G.tempatkan("jumat", 1, HFD, shorof);
T1G.tempatkan("jumat", 2, MIS, fiqih);
T1G.tempatkan("jumat", 3, FRH, arab);
T1G.tempatkan("sabtu", 1, ASR, tajwid);
T1G.tempatkan("sabtu", 2, BCH, tauhid);
T1G.tempatkan("sabtu", 3, HFD, shorof);

/* Tsanawy 2-A */
T2A.tempatkan("senin", 1, SLH, nahwu);
T2A.tempatkan("senin", 2, YHY, arab);
T2A.tempatkan("senin", 3, WF, shorof);
T2A.tempatkan("selasa", 1, LBB, tajwid);
T2A.tempatkan("selasa", 2, HMD, tauhid);
T2A.tempatkan("selasa", 3, MRW, fiqih);
T2A.tempatkan("rabu", 1, MRW, fiqih);
T2A.tempatkan("rabu", 2, SLH, nahwu);
T2A.tempatkan("rabu", 3, MNJ, akhlaq);
T2A.tempatkan("kamis", 1, MNJ, akhlaq);
T2A.tempatkan("kamis", 2, YHY, arab);
T2A.tempatkan("kamis", 3, YHY, arab);
T2A.tempatkan("jumat", 1, YHY, arab);
T2A.tempatkan("jumat", 2, SLH, nahwu);
T2A.tempatkan("jumat", 3, HMD, tauhid);
T2A.tempatkan("sabtu", 1, SLH, nahwu);
T2A.tempatkan("sabtu", 2, MRW, fiqih);
T2A.tempatkan("sabtu", 3, WF, shorof);

/* Tsanawy 2-B */
T2B.tempatkan("senin", 1, LBB, tajwid);
T2B.tempatkan("senin", 2, SLH, nahwu);
T2B.tempatkan("senin", 3, YHY, arab);
T2B.tempatkan("selasa", 1, USY, tauhid);
T2B.tempatkan("selasa", 2, MRW, fiqih);
T2B.tempatkan("selasa", 3, WF, shorof);
T2B.tempatkan("rabu", 1, SLH, nahwu);
T2B.tempatkan("rabu", 2, MRW, fiqih);
T2B.tempatkan("rabu", 3, WF, shorof);
T2B.tempatkan("kamis", 1, YHY, arab);
T2B.tempatkan("kamis", 2, MNJ, akhlaq);
T2B.tempatkan("kamis", 3, SLH, nahwu);
T2B.tempatkan("jumat", 1, MRW, fiqih);
T2B.tempatkan("jumat", 2, YHY, arab);
T2B.tempatkan("jumat", 3, SLH, nahwu);
T2B.tempatkan("sabtu", 1, MNJ, akhlaq);
T2B.tempatkan("sabtu", 2, YHY, arab);
T2B.tempatkan("sabtu", 3, USY, tauhid);

/* Tsanawy 2-C */
T2C.tempatkan("senin", 1, YHY, arab);
T2C.tempatkan("senin", 2, LBB, tajwid);
T2C.tempatkan("senin", 3, MNJ, akhlaq);
T2C.tempatkan("selasa", 1, YHY, arab);
T2C.tempatkan("selasa", 2, WF, shorof);
T2C.tempatkan("selasa", 3, MST, fiqih);
T2C.tempatkan("rabu", 1, HMD, tauhid);
T2C.tempatkan("rabu", 2, MNJ, akhlaq);
T2C.tempatkan("rabu", 3, SLH, nahwu);
T2C.tempatkan("kamis", 1, SLH, nahwu);
T2C.tempatkan("kamis", 2, MST, fiqih);
T2C.tempatkan("kamis", 3, MST, fiqih);
T2C.tempatkan("jumat", 1, SLH, nahwu);
T2C.tempatkan("jumat", 2, HMD, tauhid);
T2C.tempatkan("jumat", 3, YHY, arab);
T2C.tempatkan("sabtu", 1, YHY, arab);
T2C.tempatkan("sabtu", 2, WF, shorof);
T2C.tempatkan("sabtu", 3, SLH, nahwu);

/* Tsanawy 2-D */
T2D.tempatkan("senin", 1, RIF, arab);
T2D.tempatkan("senin", 2, MNJ, akhlaq);
T2D.tempatkan("senin", 3, BGS, fiqih);
T2D.tempatkan("selasa", 1, RIF, arab);
T2D.tempatkan("selasa", 2, ASP, nahwu);
T2D.tempatkan("selasa", 3, LBB, tajwid);
T2D.tempatkan("rabu", 1, MNJ, akhlaq);
T2D.tempatkan("rabu", 2, SDQ, tauhid);
T2D.tempatkan("rabu", 3, ASP, nahwu);
T2D.tempatkan("kamis", 1, BGS, fiqih);
T2D.tempatkan("kamis", 2, ASP, nahwu);
T2D.tempatkan("kamis", 3, WF, shorof);
T2D.tempatkan("jumat", 1, SDQ, tauhid);
T2D.tempatkan("jumat", 2, BGS, fiqih);
T2D.tempatkan("jumat", 3, RIF, arab);
T2D.tempatkan("sabtu", 1, WF, shorof);
T2D.tempatkan("sabtu", 2, RIF, arab);
T2D.tempatkan("sabtu", 3, ASP, nahwu);

/* Tsanawy 2-E */
T2E.tempatkan("senin", 1, MNR, nahwu);
T2E.tempatkan("senin", 2, WF, shorof);
T2E.tempatkan("senin", 3, RIF, arab);
T2E.tempatkan("selasa", 1, MNR, nahwu);
T2E.tempatkan("selasa", 2, RIF, arab);
T2E.tempatkan("selasa", 3, BGS, fiqih);
T2E.tempatkan("rabu", 1, SDQ, tauhid);
T2E.tempatkan("rabu", 2, LBB, tajwid);
T2E.tempatkan("rabu", 3, MNR, nahwu);
T2E.tempatkan("kamis", 1, MNR, nahwu);
T2E.tempatkan("kamis", 2, WF, shorof);
T2E.tempatkan("kamis", 3, MNJ, akhlaq);
T2E.tempatkan("jumat", 1, RIF, arab);
T2E.tempatkan("jumat", 2, SDQ, tauhid);
T2E.tempatkan("jumat", 3, BGS, fiqih);
T2E.tempatkan("sabtu", 1, RIF, arab);
T2E.tempatkan("sabtu", 2, BGS, fiqih);
T2E.tempatkan("sabtu", 3, MNJ, akhlaq);

/* Tsanawy 2-F */
T2F.tempatkan("senin", 1, WF, shorof);
T2F.tempatkan("senin", 2, RIF, arab);
T2F.tempatkan("senin", 3, LBB, tajwid);
T2F.tempatkan("selasa", 1, ANM, tauhid);
T2F.tempatkan("selasa", 2, BGS, fiqih);
T2F.tempatkan("selasa", 3, RIF, arab);
T2F.tempatkan("rabu", 1, BGS, fiqih);
T2F.tempatkan("rabu", 2, IDS, nahwu);
T2F.tempatkan("rabu", 3, ANM, tauhid);
T2F.tempatkan("kamis", 1, WF, shorof);
T2F.tempatkan("kamis", 2, BCH, akhlaq);
T2F.tempatkan("kamis", 3, IDS, nahwu);
T2F.tempatkan("jumat", 1, IDS, nahwu);
T2F.tempatkan("jumat", 2, RIF, arab);
T2F.tempatkan("jumat", 3, BCH, akhlaq);
T2F.tempatkan("sabtu", 1, BGS, fiqih);
T2F.tempatkan("sabtu", 2, IDS, nahwu);
T2F.tempatkan("sabtu", 3, RIF, arab);

/* Tsanawy 2-G */
T2G.tempatkan("senin", 1, IDS, nahwu);
T2G.tempatkan("senin", 2, MRJ, arab);
T2G.tempatkan("senin", 3, ANM, tauhid);
T2G.tempatkan("selasa", 1, IDS, nahwu);
T2G.tempatkan("selasa", 2, ANM, tauhid);
T2G.tempatkan("selasa", 3, BCH, akhlaq);
T2G.tempatkan("rabu", 1, IDS, nahwu);
T2G.tempatkan("rabu", 2, BGS, fiqih);
T2G.tempatkan("rabu", 3, BCH, akhlaq);
T2G.tempatkan("kamis", 1, MRJ, arab);
T2G.tempatkan("kamis", 2, LBB, tajwid);
T2G.tempatkan("kamis", 3, BGS, fiqih);
T2G.tempatkan("jumat", 1, MRJ, arab);
T2G.tempatkan("jumat", 2, FQH, shorof);
T2G.tempatkan("jumat", 3, IDS, nahwu);
T2G.tempatkan("sabtu", 1, MRJ, arab);
T2G.tempatkan("sabtu", 2, FQH, shorof);
T2G.tempatkan("sabtu", 3, BGS, fiqih);

/* Tsanawy 2-H */
T2H.tempatkan("senin", 1, ADN, fiqih);
T2H.tempatkan("senin", 2, ANM, tauhid);
T2H.tempatkan("senin", 3, MRJ, arab);
T2H.tempatkan("selasa", 1, FQH, shorof);
T2H.tempatkan("selasa", 2, LBB, tajwid);
T2H.tempatkan("selasa", 3, MRJ, arab);
T2H.tempatkan("rabu", 1, ADN, fiqih);
T2H.tempatkan("rabu", 2, FQH, shorof);
T2H.tempatkan("rabu", 3, IDS, nahwu);
T2H.tempatkan("kamis", 1, UMR, akhlaq);
T2H.tempatkan("kamis", 2, IDS, nahwu);
T2H.tempatkan("kamis", 3, ANM, tauhid);
T2H.tempatkan("jumat", 1, UMR, akhlaq);
T2H.tempatkan("jumat", 2, IDS, nahwu);
T2H.tempatkan("jumat", 3, MRJ, arab);
T2H.tempatkan("sabtu", 1, IDS, nahwu);
T2H.tempatkan("sabtu", 2, ADN, fiqih);
T2H.tempatkan("sabtu", 3, MRJ, arab);

/* Tsanawy 2-I */
T2I.tempatkan("senin", 1, MRJ, arab);
T2I.tempatkan("senin", 2, MNR, nahwu);
T2I.tempatkan("senin", 3, ADN, fiqih);
T2I.tempatkan("selasa", 1, MRJ, arab);
T2I.tempatkan("selasa", 2, FQH, shorof);
T2I.tempatkan("selasa", 3, ANM, tauhid);
T2I.tempatkan("rabu", 1, BCH, akhlaq);
T2I.tempatkan("rabu", 2, MNR, nahwu);
T2I.tempatkan("rabu", 3, ADN, fiqih);
T2I.tempatkan("kamis", 1, LBB, tajwid);
T2I.tempatkan("kamis", 2, ANM, tauhid);
T2I.tempatkan("kamis", 3, MRJ, arab);
T2I.tempatkan("jumat", 1, MNR, nahwu);
T2I.tempatkan("jumat", 2, MRJ, arab);
T2I.tempatkan("jumat", 3, FQH, shorof);
T2I.tempatkan("sabtu", 1, BCH, akhlaq);
T2I.tempatkan("sabtu", 2, MNR, nahwu);
T2I.tempatkan("sabtu", 3, ADN, fiqih);

/* Tsanawy 2-J */
T2J.tempatkan("senin", 1, ANM, tauhid);
T2J.tempatkan("senin", 2, ADN, fiqih);
T2J.tempatkan("senin", 3, UMR, akhlaq);
T2J.tempatkan("selasa", 1, UMR, akhlaq);
T2J.tempatkan("selasa", 2, FRH, arab);
T2J.tempatkan("selasa", 3, MNR, nahwu);
T2J.tempatkan("rabu", 1, FQH, shorof);
T2J.tempatkan("rabu", 2, ADN, fiqih);
T2J.tempatkan("rabu", 3, FRH, arab);
T2J.tempatkan("kamis", 1, ANM, tauhid);
T2J.tempatkan("kamis", 2, MNR, nahwu);
T2J.tempatkan("kamis", 3, LBB, tajwid);
T2J.tempatkan("jumat", 1, FQH, shorof);
T2J.tempatkan("jumat", 2, FRH, arab);
T2J.tempatkan("jumat", 3, MNR, nahwu);
T2J.tempatkan("sabtu", 1, ADN, fiqih);
T2J.tempatkan("sabtu", 2, FRH, arab);
T2J.tempatkan("sabtu", 3, MNR, nahwu);

/* Testing */
// console.log(T1A); // sukses!
// NZR.jadwal(); // sukses!
// T1A.jadwal(); // sukses!
// Hari.jadwal("Senin"); // sukses!
// console.log(listKelas);

// fs.writeFile("./listKelas.txt", FT.fan, (err) => {
//     if (err) console.error(err);
// });

// let date = new Date(2023, 9, 16);
// let pesan = `
// 📅Jadwal Madin Putra Senin Pagi
// _Tanggal ${date.toLocaleString("id-ID", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
// })}_

// *(Guru Fan wajib mengisi jurnal madin dan mengabsen kelas)*
// *Perizinan harus sesuai dengan prosedur yang telah ada.*

//  <Jam Pertama>
//  *Waktu: 08.15 - 09.10*

// 1 Tsanawiyyah
// 	A. Ust ${T1A.senin[0].guru}; Fan: ${T1A.senin[0].fan}
// 	B. Ust Fakhrurrozi
// 	C. Ust Fadil
// 	D. Ust Mashudi
// 	E. Ust Musthofa Besuk
// 	F. Ust Maisur
// 	G. Ust Heri

// Mutakhorijin Pagi
// 	Ust Jabir

//  <Jam Kedua>
//  *Waktu: 09.10 - 10.05*

// 1 Tsanawiyyah
// 	A. Ust Munshorif
// 	B. Ust Nizar
// 	C. Ust Faruq
// 	D. Ust Mukhlasin
// 	E. Ust Fakhrurrozi
// 	F. Ust Hafidz
// 	G. Ust Bukhori

// Mutakhorijin Pagi
// 	Ust Shofi

//  <Jam Ketiga>
//  *Waktu: 10.20 - 11.15*

// 1 Tsanawiyyah
// 	A. Ust Fadil
// 	B. Ust Munshorif
// 	C. Ust Musthofa
// 	D. Ust Faruq
// 	E. Ust Mukhlasin
// 	F. Ust Mashudi
// 	G. Ust Farhan

// Mutakhorijin Pagi
// 	Ust Mukti
// `;

// console.log(pesan);

// console.log(FT.jadwal(["selasa", "rabu"])); // sukses!
