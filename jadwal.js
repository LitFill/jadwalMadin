// @ts-check
"use strict";
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
     * @param {string[]|string} [namaHari=["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]] - Nama hari dalam seminggu.
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
    /**
     * Menampilkan jadwal mengajar guru.
     * @param {string[]|string} [namaHari=["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]] - Nama hari dalam seminggu.
     * @returns {{[jamKe: string]: string}|{}}
     */
    jadwalObj(
        namaHari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]
    ) {
        /** @type {{[jamKe: string]: string}|{}} */
        const jadwalMengajar = {};
        listKelas.forEach((kelas) => {
            for (let hari in kelas) {
                if (namaHari.includes(hari)) {
                    for (let i = 0; i < 3; i++) {
                        if (kelas[hari][i].guru === this.nama) {
                            jadwalMengajar[`jam${i + 1}`] = kelas.nama;
                        }
                    }
                }
            }
        });
        return jadwalMengajar;
    }

    /**
     * @description mengambil string kode guru dan mengembalikan instansi kelas `Guru`
     * @author LitFill
     * @date 06/12/2023
     * @static
     * @param {string} kodeGuru
     * @returns {Guru|null}
     * @memberof Hari
     */
    static fromString(kodeGuru) {
        switch (kodeGuru) {
            case "ABAH":
                return ABAH.madin;
            case "ASP":
                return ASP;
            case "MNR":
                return MNR;
            case "USY":
                return USY;
            case "MNS":
                return MNS;
            case "HMD":
                return HMD;
            case "RF":
                return RF;
            case "BCH":
                return BCH;
            case "HFD":
                return HFD;
            case "GFR":
                return GFR;
            case "IBR":
                return IBR;
            case "RHL":
                return RHL;
            case "UTJ":
                return UTJ;
            case "MIS":
                return MIS;
            case "MRJ":
                return MRJ;
            case "MSH":
                return MSH;
            case "MST":
                return MST;
            case "SHF":
                return SHF;
            case "FDL":
                return FDL;
            case "IDT":
                return IDT;
            case "IDM":
                return IDM;
            case "HLY":
                return HLY;
            case "UHS":
                return UHS;
            case "UHN":
                return UHN;
            case "HR":
                return HR;
            case "IDS":
                return IDS;
            case "ADN":
                return ADN;
            case "YHY":
                return YHY;
            case "BDL":
                return BDL;
            case "SLD":
                return SLD;
            case "LSN":
                return LSN;
            case "SDL":
                return SDL;
            case "UMM":
                return UMM;
            case "FRZ":
                return FRZ;
            case "AFF":
                return AFF;
            case "MSR":
                return MSR;
            case "DMN":
                return DMN;
            case "ST":
                return ST;
            case "FHM":
                return FHM;
            case "URB":
                return URB;
            case "SDQ":
                return SDQ;
            case "HLD":
                return HLD;
            case "IRF":
                return IRF;
            case "ASR":
                return ASR;
            case "UMR":
                return UMR;
            case "KHL":
                return KHL;
            case "SBH":
                return SBH;
            case "FTN":
                return FTN;
            case "YDN":
                return YDN;
            case "SLH":
                return SLH;
            case "FQH":
                return FQH;
            case "LBB":
                return LBB;
            case "MNJ":
                return MNJ;
            case "MRW":
                return MRW;
            case "MZN":
                return MZN;
            case "DRW":
                return DRW;
            case "WHB":
                return WHB;
            case "ABD":
                return ABD;
            case "ANM":
                return ANM;
            case "BGS":
                return BGS;
            case "NZR":
                return NZR;
            case "FRH":
                return FRH;
            case "FT":
                return FT;
            case "SRR":
                return SRR;
            case "USM":
                return USM;
            case "ASY":
                return ASY;
            case "ALW":
                return ALW;
            // case "JBR":
            //     return JBR;
            case "RIF":
                return RIF;
            case "FRQ":
                return FRQ;
            case "WF":
                return WF;
            case "AZZ":
                return AZZ;
            case "LTF":
                return LTF;
            case "UL":
                return UL;
            case "HS":
                return HS;
            case "_ust":
                return _ust;
            default:
                return null;
        }
    }
}

class Abah {
    constructor() {
        this.asma = "KH. Zuhrul Anam Hisyam";
        this.madin = new Guru("ABAH", [mustholah, balaghoh]);
    }

    /**
     * Menampilkan jadwal mengajar guru.
     * @param {string[]|string} [namaHari=["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]] - Nama hari dalam seminggu.
     */
    jadwal(namaHari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]) {
        listKelas.forEach((kelas) => {
            for (let hari in kelas) {
                if (namaHari.includes(hari)) {
                    for (let i = 0; i < 3; i++) {
                        if (kelas[hari][i].guru === this.madin.nama) {
                            console.log(
                                `Abah mucal kelas ${kelas.nama} fan ${
                                    kelas[hari][i].fan
                                } di hari ${kelas[hari].nama} jam ke-${i + 1}.`
                            );
                        }
                    }
                }
            }
        });
    }
}

// class Syaikh {
//     constructor(kode, nama, fan) {
//         this[kode] = new Guru(nama, fan);
//     }
// }

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
     * @param {'pagi'|'sore'} waktu - Waktu KBM, 'sore' atau 'pagi'
     */
    constructor(nama, waktu) {
        this.nama = nama;
        this.waktu = waktu;
        this.kosong = false;
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
            throw new Error(
                `ERROR: Ust. ${guru.nama} tidak mengajar fan ${fan.nama}.\nLOK  : kelas ${this.nama} / ${hari}:${jam}.`
            );
        }
    }
    /**
     * @description log jadwal sebuah kelas dalam suatu hari
     * @author LitFill
     * @date 21/11/2023
     * @param {string[]|string} [namaHari=["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]]
     * @memberof Kelas
     */
    jadwal(namaHari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]) {
        for (let hari in this) {
            if (namaHari.includes(hari)) {
                for (let i = 0; i < 3; i++) {
                    console.log(
                        // @ts-ignore
                        `Kelas ${this.nama} di hari ${this[hari].nama} jam ke-${
                            i + 1
                        } diajar oleh Ust. ${this[hari][i].guru} fan ${
                            this[hari][i].fan
                        }.`
                    );
                }
                // console.log("\n");
            }
        }
    }
    /**
     * @description mengubah kelas menjadi kelas kosong.
     * @author LitFill
     * @date 17/11/2023
     * @static
     * @param {Kelas} kelas - kelas yang akan dijadikan kelas kosong.
     * @memberof Kelas
     */
    static kelasKosong(kelas) {
        // console.log(`kelas ${kelas.nama} kosong.`);
        kelas.kosong = true;
        kelas.jadwal = () => {
            // return `kelas ${kelas.nama} kosong.`;
            // console.log(`kelas ${kelas.nama} kosong.`);
            throw new Error(`kelas ${kelas.nama} kosong.`);
        };
    }

    /**
     * @description
     * @author LitFill
     * @date 06/12/2023
     * @static
     * @param {string} kodeKelas
     * @return {Kelas|null}
     * @memberof Kelas
     */
    static fromString(kodeKelas) {
        // return listKelas.find((kelas) => kelas.nama === kodeKelas);
        switch (kodeKelas) {
            case "T1A":
                return T1A;
            case "T1B":
                return T1B;
            case "T1C":
                return T1C;
            case "T1D":
                return T1D;
            case "T1E":
                return T1E;
            case "T1F":
                return T1F;
            case "T1G":
                return T1G;
            case "T2A":
                return T2A;
            case "T2B":
                return T2B;
            case "T2C":
                return T2C;
            case "T2D":
                return T2D;
            case "T2E":
                return T2E;
            case "T2F":
                return T2F;
            case "T2G":
                return T2G;
            case "T2H":
                return T2H;
            case "T2I":
                return T2I;
            case "T2J":
                return T2J;
            case "T3A":
                return T3A;
            case "T3B":
                return T3B;
            case "T3C":
                return T3C;
            case "T3D":
                return T3D;
            case "T3E":
                return T3E;
            case "T3F":
                return T3F;
            case "T3G":
                return T3G;
            case "T3H":
                return T3H;
            case "T3I":
                return T3I;
            case "T3J":
                return T3J;
            case "A1A":
                return A1A;
            case "A1B":
                return A1B;
            case "A1C":
                return A1C;
            case "A1D":
                return A1D;
            case "A1E":
                return A1E;
            case "A1F":
                return A1F;
            case "A2A":
                return A2A;
            case "A2B":
                return A2B;
            case "A2C":
                return A2C;
            case "A3A":
                return A3A;
            case "A3B":
                return A3B;
            case "A3C":
                return A3C;
            case "IST":
                return IST;
            case "MTP":
                return MTP;
            case "MTS":
                return MTS;
            default:
                return null;
        }
    }
}

/**
 * Mewakili satu hari dalam jadwal kelas.
 * @class
 * @constructor
 */
class Hari {
    /**
     * Creates an instance of Hari.
     * @author LitFill
     * @date 28/11/2023
     * @param {String} nama - nama dari Hari
     * @memberof Hari
     */
    constructor(nama) {
        /** @type {string} */
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
    /**
     * @description melog jadwal pada hari yang dimasukkan
     * @author LitFill
     * @date 21/11/2023
     * @static
     * @param {string|string[]} namaHari
     * @memberof Hari
     */
    static jadwal(namaHari) {
        listKelas.forEach((kelas) => {
            if (!kelas.kosong) {
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
    static FanKosong = new Fan("-");

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

class PengirimPesan {
    /**
     * @description the improved version of v1
     * @author LitFill
     * @date 29/11/2023
     * @param {string} strTanggal
     */
    constructor(strTanggal) {
        const tanggal = Number(strTanggal.slice(0, 2));
        const bulan = Number(strTanggal.slice(2, 4));
        const tahun = Number(strTanggal.slice(4, 6)) + 2000;
        // console.log(`tanggal ${tanggal}, bulan ${bulan}.`);
        const tanggalPesan = new Date(tahun, bulan - 1, tanggal);
        const hariSeminggu = [
            "ahad",
            "senin",
            "selasa",
            "rabu",
            "kamis",
            "jumat",
            "sabtu",
        ];
        const hari = tanggalPesan.getDay();
        const namaHari = hariSeminggu[hari];
        const bulanSetahun = [
            "januari",
            "februari",
            "maret",
            "april",
            "mei",
            "juni",
            "juli",
            "agustus",
            "september",
            "oktober",
            "november",
            "desember",
        ];
        const namaBulan = bulanSetahun[bulan - 1];
        // console.log(kap(namaHari));
        let pesan = "";
        function pesanPagi() {
            pesan += `Jadwal Madin Putra ${kap(namaHari)} Pagi\n`;
            pesan += `_Tanggal ${tanggal} ${kap(namaBulan)} ${tahun}_\n\n`;
            pesan += `*(Guru Fan wajib mengisi jurnal Madin dan mengabsen kelas)*\n`;
            pesan += `*Perizinan harus sesuai dengan prosedur yang telah ada.*\n\n`;
            pesan += `<Jam Pertama>\n`;
            pesan += `*Waktu: 08.15 - 09.10*\n`;
            pesan += "\n";
            pesanKelasPagi(1);
            pesan += `<Jam Kedua>\n`;
            pesan += `*Waktu: 09.10 - 10.05*\n`;
            pesan += "\n";
            pesanKelasPagi(2);
            pesan += `<Jam Ketiga>\n`;
            pesan += `*Waktu: 10.20 - 11.15\n`;
            pesan += "\n";
            pesanKelasPagi(3);
            console.log(pesan);
            pesan = "";
            return;

            /**
             * @description
             * @author LitFill
             * @date 29/11/2023
             * @param {1|2|3} jam
             */
            function pesanKelasPagi(jam) {
                pesan1TSN(jam);
                peasnMTP(jam);
            }
        }
        function pesanSore() {
            pesan += `Jadwal Madin Putra ${kap(namaHari)} Sore\n`;
            pesan += `_Tanggal ${tanggal} ${kap(namaBulan)} ${tahun}_\n`;
            pesan += "\n";
            pesan += `*(Guru Fan wajib mengisi jurnal Madin dan mengabsen kelas)*\n`;
            pesan += `*Perizinan harus sesuai dengan prosedur yang telah ada.*\n`;
            pesan += "\n";
            pesan += `<Jam Pertama>\n`;
            pesan += `*Waktu: 14.10 - 14.45*\n`;
            pesan += "\n";
            pesanKelasSore(1);
            pesan += `<Jam Kedua>\n`;
            pesan += `*Waktu: 14.45 - 15.30*\n`;
            pesan += "\n";
            pesanKelasSore(2);
            pesan += `<Jam Ketiga>\n`;
            pesan += `*Waktu: 15.30 - 16.15*\n`;
            pesan += "\n";
            pesanKelasSore(3);
            console.log(pesan);
            pesan = "";
            return;

            /**
             * @description
             * @author LitFill
             * @date 29/11/2023
             * @param {1|2|3} jam
             */
            function pesanKelasSore(jam) {
                pesan2TSN(jam);
                pesan3TSN(jam);
                pesanIST(jam);
                pesan1ALY(jam);
                pesan2ALY(jam);
                pesan3ALY(jam);
                pesanMTS(jam);
            }
        }
        function pesanFull() {
            pesanPagi();
            console.log("---Pesan Kedua---\n");
            pesanSore();
        }

        /**
         * @description
         * @author LitFill
         * @date 29/11/2023
         * @param {1|2|3} jam
         */
        function peasnMTP(jam) {
            const guru = MTP[namaHari][jam - 1].guru;
            const fan = MTP[namaHari][jam - 1].fan;
            pesan += `Mutakhorijin Pagi\n`;
            pesan += `\tUst ${guru} # ${fan}\n`;
            pesan += "\n";
        }

        /**
         * @description
         * @author LitFill
         * @date 29/11/2023
         * @param {1|2|3} jam
         */
        function pesanMTS(jam) {
            const guru = MTS[namaHari][jam - 1].guru;
            const fan = MTS[namaHari][jam - 1].fan;
            pesan += `Mutakhorijin Sore\n`;
            pesan += `\tUst ${guru} # ${fan}\n`;
            pesan += "\n";
        }

        /**
         * @description
         * @author LitFill
         * @date 29/11/2023
         * @param {1|2|3} jam
         */
        function pesan3ALY(jam) {
            const kelasData = {
                A: A3A,
                B: A3B,
                C: A3C,
            };

            pesan += `3 Aliyah\n`;
            addPesan(kelasData, jam);
            pesan += "\n";
        }

        /**
         * @description
         * @author LitFill
         * @date 29/11/2023
         * @param {1|2|3} jam
         */
        function pesan2ALY(jam) {
            const kelasData = {
                A: A2A,
                B: A2B,
                C: A2C,
            };

            pesan += `2 Aliyah\n`;
            addPesan(kelasData, jam);
            pesan += "\n";
        }

        /**
         * @description
         * @author LitFill
         * @date 29/11/2023
         * @param {1|2|3} jam
         */
        function pesan1ALY(jam) {
            const kelasData = {
                A: A1A,
                B: A1B,
                C: A1C,
                D: A1D,
                E: A1E,
                F: A1F,
            };

            pesan += `1 Aliyah\n`;
            addPesan(kelasData, jam);
            pesan += "\n";
        }

        /**
         * @description
         * @author LitFill
         * @date 29/11/2023
         * @param {1|2|3} jam
         */
        function pesanIST(jam) {
            const guru = IST[namaHari][jam - 1].guru;
            const fan = IST[namaHari][jam - 1].fan;
            pesan += `Isti'dad\n`;
            pesan += `\tA. Ust ${guru} # ${fan}\n`;
            pesan += "\n";
        }

        /**
         * @description
         * @author LitFill
         * @date 29/11/2023
         * @param {1|2|3} jam
         */
        function pesan3TSN(jam) {
            const kelasData = {
                A: T3A,
                B: T3B,
                C: T3C,
                E: T3E,
                F: T3F,
                G: T3G,
                H: T3H,
                I: T3I,
                J: T3J,
            };

            pesan += `3 Tsanawiyyah\n`;
            addPesan(kelasData, jam);
            pesan += "\n";
        }

        /**
         * @description
         * @author LitFill
         * @date 29/11/2023
         * @param {1|2|3} jam
         */
        function pesan2TSN(jam) {
            const kelasData = {
                A: T2A,
                B: T2B,
                C: T2C,
                D: T2D,
                E: T2E,
                F: T2F,
                G: T2G,
                H: T2H,
                I: T2I,
                J: T2J,
            };

            pesan += `2 Tsanawiyyah\n`;
            addPesan(kelasData, jam);
            pesan += "\n";
        }

        /**
         * @description
         * @author LitFill
         * @date 29/11/2023
         * @param {1|2|3} jam
         */
        function pesan1TSN(jam) {
            const kelasData = {
                A: T1A,
                B: T1B,
                C: T1C,
                D: T1D,
                E: T1E,
                F: T1F,
                G: T1G,
            };

            pesan += `1 Tsanawiyyah\n`;
            addPesan(kelasData, jam);
            pesan += "\n";
        }

        /**
         * @description
         * @author LitFill
         * @date 29/11/2023
         * @param {{ [hurufKelas: string]: Kelas }} kelasData
         * @param {1|2|3} jam
         */
        function addPesan(kelasData, jam) {
            for (const kelas in kelasData) {
                const guru = kelasData[kelas][namaHari][jam - 1].guru;
                const fan = kelasData[kelas][namaHari][jam - 1].fan;
                pesan += `\t${kelas}. Ust ${guru} # ${fan}\n`;
            }
        }
        this.pagi = pesanPagi;
        this.sore = pesanSore;
        this.full = pesanFull;
    }
}
class Perizinan {
    /**
     * Creates an instance of Perizinan.
     * @author LitFill
     * @date 06/12/2023
     * @param {string} tanggalIzin
     * @param {string} argumen
     * @memberof Perizinan
     */
    constructor(tanggalIzin, argumen) {
        const data = argumen.split("/");
        const objIzin = splitDash(data);
        // console.log(value);
        this._dataPerizinan = objIzin;

        const tanggal = Number(tanggalIzin.slice(0, 2));
        const bulan = Number(tanggalIzin.slice(2, 4));
        const tahun = Number(tanggalIzin.slice(4, 6)) + 2000;
        this.tanggal = new Date(tahun, bulan - 1, tanggal);
        const opsiFormat = {
            weekday: "long",
            day: "numeric",
            month: "long",
            yaer: "numeric",
        };
        this.tanggalf = this.tanggal.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    }

    get dataPerizinan() {
        return this._dataPerizinan;
    }

    kirimPesan() {
        let pesan = "";
        pesan += "*Konfirmasi Perizinan*\n";
        pesan += "_Tanggal: ";
        pesan += this.tanggalf;
        pesan += "_\n\n";
        pesan += this.formatPesan(this._dataPerizinan);

        console.log(pesan);
    }

    /**
     * @description
     * @author LitFill
     * @date 06/12/2023
     * @param {Array<{guru: string, sebab: string, jam: Array<boolean>}>} objIzin
     * @returns {string}
     * @memberof Perizinan
     */
    formatPesan(objIzin) {
        let pesan = "";
        objIzin.forEach((item, index) => {
            const guru = Guru.fromString(item.guru);
            pesan += index + 1;
            pesan += ". Ust ";
            pesan += guru?.nama;
            pesan += "\n\tAlasan: ";
            pesan += kap(item.sebab);
            pesan += "\n\tDetail Perizinan:\n";
            item.jam.forEach((j, i) => {
                pesan += "\t - jam ";
                pesan += i + 1;
                if (j) {
                    const hari = this.tanggal
                        .toLocaleDateString("id-ID", {
                            weekday: "long",
                        })
                        .toLocaleLowerCase();
                    // console.log(hari);
                    pesan += ": ";
                    pesan += guru?.jadwalObj(hari)[`jam${i + 1}`] || "~";
                    pesan += "\n";
                } else {
                    pesan += ": ~\n";
                }
            });
            pesan += "\n";
        });

        return pesan;
    }
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
const _fan = Fan.FanKosong;

/*  Deklarasi Guru */
const ABAH = new Abah();
const ASP = new Guru("Saifurrohman Aly", [nahwu, tauhid]);
const MNR = new Guru("Munir Subkhi", [shorof, nahwu]);
const USY = new Guru("Syafi'il Anam", [tauhid, arab]);
const MNS = new Guru("Munshorif", [shorof, fiqih]);
const HMD = new Guru("Hamid M.", [tauhid, shorof]);
const RF = new Guru("Rouf", [nahwu, ushul, tasme]);
const BCH = new Guru("Bukhori", [tauhid, akhlaq]);
const HFD = new Guru("Hafidz", [shorof, miftah]);
const GFR = new Guru("Musthofa Ghufron", fiqih);
const IBR = new Guru("Ibrohim", [shorof, arab]);
const RHL = new Guru("Rohli", [balaghoh, arab]);
const UTJ = new Guru("Tajudin", [nahwu, tasme]);
const MIS = new Guru("Maisur", [fiqih, nahwu]);
const MRJ = new Guru("Mu'rijul Ma'arif", arab);
const MSH = new Guru("Mashudi", [imla, fiqih]);
const MST = new Guru("Musthofa Besuk", fiqih);
const SHF = new Guru("Shofi", [nahwu, fiqih]);
const FDL = new Guru("Fadil", [imla, fiqih]);
const IDT = new Guru("Idris Thobari", nahwu);
const IDM = new Guru("Agus Idhohul", akhlaq);
const HLY = new Guru("Agus Hilmy", balaghoh);
const UHS = new Guru("Husni Sarang", fiqih);
const UHN = new Guru("Husni Cianjur", arab);
const HR = new Guru("Heri", [nahwu, fiqih]);
const IDS = new Guru("Idris Besuk", nahwu);
const ADN = new Guru("Adnan Fauzi", fiqih);
const YHY = new Guru("Yahya Mansur", arab);
const BDL = new Guru("Hb. Abdillah", arab);
const SLD = new Guru("Sholahuddin", nahwu);
const LSN = new Guru("Mukhlasin", tauhid);
const SDL = new Guru("Sa'dulloh", tauhid);
const UMM = new Guru("Agus Umam", tauhid);
const FRZ = new Guru("Fakhrurozi", arab);
const AFF = new Guru("Afifudin", tauhid);
const MSR = new Guru("Masriyanto", arab);
const DMN = new Guru("Damanhuri", fiqih);
const ST = new Guru("Syaikh Toha", arab);
const FHM = new Guru("Agus Fahmi", arab);
const URB = new Guru("Robingu", shorof);
const SDQ = new Guru("Sodiqin", tauhid);
const HLD = new Guru("Kholidin", nahwu);
const IRF = new Guru("Irfangi", akhlaq);
const ASR = new Guru("Asrofi", tajwid);
const UMR = new Guru("Ma'ruf", akhlaq);
const KHL = new Guru("Kholil", akhlaq);
const SBH = new Guru("Subhan", shorof);
const FTN = new Guru("Fathoni", nahwu);
const YDN = new Guru("Yadin", akhlaq);
const SLH = new Guru("Sholah", nahwu);
const FQH = new Guru("Faqih", shorof);
const LBB = new Guru("Lubab", tajwid);
const MNJ = new Guru("Munji", akhlaq);
const MRW = new Guru("Mirwan", fiqih);
const MZN = new Guru("Muzaini", ilal);
const DRW = new Guru("Darwis", nahwu);
const WHB = new Guru("Wahib", tajwid);
const ABD = new Guru("Mu'thi", ushul);
const ANM = new Guru("Anam", tauhid);
const BGS = new Guru("Bagus", fiqih);
const NZR = new Guru("Nizar", nahwu);
const FRH = new Guru("Farhan", arab);
const FT = new Guru("Fathur", nahwu);
const SRR = new Guru("Surur", nahwu);
const USM = new Guru("Usman", nahwu);
const ASY = new Guru("Asyrof", arab);
const ALW = new Guru("Alawy", fiqih);
// const JBR = new Guru("Jabir", nahwu);
const RIF = new Guru("Rifqi", arab);
const FRQ = new Guru("Faruq", arab);
const WF = new Guru("Wafa", shorof);
const AZZ = new Guru("Aziz", nahwu);
const LTF = new Guru("Lutfi", arab);
const UL = new Guru("Ulil", tauhid);
const HS = new Guru("Hasan", fiqih);

const _ust = new Guru("-", _fan);

/* Deklarasi Kelas */
/**
 * @type {Kelas[]}
 */
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

// kelas kosong
Kelas.kelasKosong(T3D);

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

/* Tsanawy 3-A */
T3A.tempatkan("senin", 1, SRR, nahwu);
T3A.tempatkan("senin", 2, BDL, arab);
T3A.tempatkan("senin", 3, URB, shorof);
T3A.tempatkan("selasa", 1, KHL, akhlaq);
T3A.tempatkan("selasa", 2, DMN, fiqih);
T3A.tempatkan("selasa", 3, URB, shorof);
T3A.tempatkan("rabu", 1, MZN, ilal);
T3A.tempatkan("rabu", 2, DMN, fiqih);
T3A.tempatkan("rabu", 3, KHL, akhlaq);
T3A.tempatkan("kamis", 1, BDL, arab);
T3A.tempatkan("kamis", 2, SRR, nahwu);
T3A.tempatkan("kamis", 3, DMN, fiqih);
T3A.tempatkan("jumat", 1, BDL, arab);
T3A.tempatkan("jumat", 2, SRR, nahwu);
T3A.tempatkan("jumat", 3, WHB, tajwid);
T3A.tempatkan("sabtu", 1, BDL, arab);
T3A.tempatkan("sabtu", 2, SDQ, tauhid);
T3A.tempatkan("sabtu", 3, SRR, nahwu);

/* Tsanawy 3-B */
T3B.tempatkan("senin", 1, BDL, arab);
T3B.tempatkan("senin", 2, URB, shorof);
T3B.tempatkan("senin", 3, KHL, akhlaq);
T3B.tempatkan("selasa", 1, DMN, fiqih);
T3B.tempatkan("selasa", 2, KHL, akhlaq);
T3B.tempatkan("selasa", 3, SRR, nahwu);
T3B.tempatkan("rabu", 1, DMN, fiqih);
T3B.tempatkan("rabu", 2, MZN, ilal);
T3B.tempatkan("rabu", 3, SDQ, tauhid);
T3B.tempatkan("kamis", 1, SRR, nahwu);
T3B.tempatkan("kamis", 2, BDL, arab);
T3B.tempatkan("kamis", 3, WHB, tajwid);
T3B.tempatkan("jumat", 1, URB, shorof);
T3B.tempatkan("jumat", 2, BDL, arab);
T3B.tempatkan("jumat", 3, SRR, nahwu);
T3B.tempatkan("sabtu", 1, DMN, fiqih);
T3B.tempatkan("sabtu", 2, SRR, nahwu);
T3B.tempatkan("sabtu", 3, BDL, arab);

/* Tsanawy 3-C */
T3C.tempatkan("senin", 1, USM, nahwu);
T3C.tempatkan("senin", 2, DMN, fiqih);
T3C.tempatkan("senin", 3, BDL, arab);
T3C.tempatkan("selasa", 1, HMD, shorof);
T3C.tempatkan("selasa", 2, USM, nahwu);
T3C.tempatkan("selasa", 3, KHL, akhlaq);
T3C.tempatkan("rabu", 1, USM, nahwu);
T3C.tempatkan("rabu", 2, HMD, shorof);
T3C.tempatkan("rabu", 3, WHB, tajwid);
T3C.tempatkan("kamis", 1, KHL, akhlaq);
T3C.tempatkan("kamis", 2, USM, nahwu);
T3C.tempatkan("kamis", 3, BDL, arab);
T3C.tempatkan("jumat", 1, DMN, fiqih);
T3C.tempatkan("jumat", 2, MZN, ilal);
T3C.tempatkan("jumat", 3, BDL, arab);
T3C.tempatkan("sabtu", 1, SDQ, tauhid);
T3C.tempatkan("sabtu", 2, BDL, arab);
T3C.tempatkan("sabtu", 3, DMN, fiqih);

/* Tsanawy 3-D */ // kelas kosong
// T3D.tempatkan("senin", 1, USM, nahwu);
// T3D.tempatkan("senin", 2, DMN, fiqih);
// T3D.tempatkan("senin", 3, BDL, arab);
// T3D.tempatkan("selasa", 1, HMD, shorof);
// T3D.tempatkan("selasa", 2, USM, nahwu);
// T3D.tempatkan("selasa", 3, KHL, akhlaq);
// T3D.tempatkan("rabu", 1, USM, nahwu);
// T3D.tempatkan("rabu", 2, HMD, shorof);
// T3D.tempatkan("rabu", 3, WHB, tajwid);
// T3D.tempatkan("kamis", 1, KHL, akhlaq);
// T3D.tempatkan("kamis", 2, USM, nahwu);
// T3D.tempatkan("kamis", 3, BDL, arab);
// T3D.tempatkan("jumat", 1, DMN, fiqih);
// T3D.tempatkan("jumat", 2, MZN, ilal);
// T3D.tempatkan("jumat", 3, BDL, arab);
// T3D.tempatkan("sabtu", 1, SDQ, tauhid);
// T3D.tempatkan("sabtu", 2, BDL, arab);
// T3D.tempatkan("sabtu", 3, DMN, fiqih);

/* Tsanawy 3-E */
T3E.tempatkan("senin", 1, UHS, fiqih);
T3E.tempatkan("senin", 2, KHL, akhlaq);
T3E.tempatkan("senin", 3, ASY, arab);
T3E.tempatkan("selasa", 1, MZN, ilal);
T3E.tempatkan("selasa", 2, ASY, arab);
T3E.tempatkan("selasa", 3, HMD, shorof);
T3E.tempatkan("rabu", 1, WHB, tajwid);
T3E.tempatkan("rabu", 2, KHL, akhlaq);
T3E.tempatkan("rabu", 3, UHS, fiqih);
T3E.tempatkan("kamis", 1, ASY, arab);
T3E.tempatkan("kamis", 2, IDT, nahwu);
T3E.tempatkan("kamis", 3, HMD, shorof);
T3E.tempatkan("jumat", 1, IDT, nahwu);
T3E.tempatkan("jumat", 2, ASY, arab);
T3E.tempatkan("jumat", 3, SDQ, tauhid);
T3E.tempatkan("sabtu", 1, UHS, fiqih);
T3E.tempatkan("sabtu", 2, IDT, nahwu);
T3E.tempatkan("sabtu", 3, IDT, nahwu);

/* Tsanawy 3-F */
T3F.tempatkan("senin", 1, ASY, arab);
T3F.tempatkan("senin", 2, UMR, akhlaq);
T3F.tempatkan("senin", 3, IDT, nahwu);
T3F.tempatkan("selasa", 1, UHS, fiqih);
T3F.tempatkan("selasa", 2, WHB, tajwid);
T3F.tempatkan("selasa", 3, UMR, akhlaq);
T3F.tempatkan("rabu", 1, AFF, tauhid);
T3F.tempatkan("rabu", 2, IDT, nahwu);
T3F.tempatkan("rabu", 3, HMD, shorof);
T3F.tempatkan("kamis", 1, UHS, fiqih);
T3F.tempatkan("kamis", 2, ASY, arab);
T3F.tempatkan("kamis", 3, MZN, ilal);
T3F.tempatkan("jumat", 1, ASY, arab);
T3F.tempatkan("jumat", 2, IDT, nahwu);
T3F.tempatkan("jumat", 3, UHS, fiqih);
T3F.tempatkan("sabtu", 1, IDT, nahwu);
T3F.tempatkan("sabtu", 2, ASY, arab);
T3F.tempatkan("sabtu", 3, HMD, shorof);

/* Tsanawy 3-G */
T3G.tempatkan("senin", 1, IDT, nahwu);
T3G.tempatkan("senin", 2, UHS, fiqih);
T3G.tempatkan("senin", 3, MSR, arab);
T3G.tempatkan("selasa", 1, AFF, tauhid);
T3G.tempatkan("selasa", 2, UMR, akhlaq);
T3G.tempatkan("selasa", 3, IDT, nahwu);
T3G.tempatkan("rabu", 1, IDT, nahwu);
T3G.tempatkan("rabu", 2, UHS, fiqih);
T3G.tempatkan("rabu", 3, MSR, arab);
T3G.tempatkan("kamis", 1, MZN, ilal);
T3G.tempatkan("kamis", 2, MSR, arab);
T3G.tempatkan("kamis", 3, IDT, nahwu);
T3G.tempatkan("jumat", 1, HMD, shorof);
T3G.tempatkan("jumat", 2, WHB, tajwid);
T3G.tempatkan("jumat", 3, UMR, akhlaq);
T3G.tempatkan("sabtu", 1, HMD, shorof);
T3G.tempatkan("sabtu", 2, UHS, fiqih);
T3G.tempatkan("sabtu", 3, MSR, arab);

/* Tsanawy 3-H */
T3H.tempatkan("senin", 1, AFF, tauhid);
T3H.tempatkan("senin", 2, MSR, arab);
T3H.tempatkan("senin", 3, MNS, fiqih);
T3H.tempatkan("selasa", 1, WHB, tajwid);
T3H.tempatkan("selasa", 2, MZN, ilal);
T3H.tempatkan("selasa", 3, MSR, arab);
T3H.tempatkan("rabu", 1, DRW, nahwu);
T3H.tempatkan("rabu", 2, MNS, fiqih);
T3H.tempatkan("rabu", 3, UMR, akhlaq);
T3H.tempatkan("kamis", 1, MSR, arab);
T3H.tempatkan("kamis", 2, DRW, nahwu);
T3H.tempatkan("kamis", 3, URB, shorof);
T3H.tempatkan("jumat", 1, MNS, fiqih);
T3H.tempatkan("jumat", 2, UMR, akhlaq);
T3H.tempatkan("jumat", 3, DRW, nahwu);
T3H.tempatkan("sabtu", 1, URB, shorof);
T3H.tempatkan("sabtu", 2, MSR, arab);
T3H.tempatkan("sabtu", 3, DRW, nahwu);

/* Tsanawy 3-I */
T3I.tempatkan("senin", 1, MSR, arab);
T3I.tempatkan("senin", 2, DRW, nahwu);
T3I.tempatkan("senin", 3, WHB, tajwid);
T3I.tempatkan("selasa", 1, MNS, fiqih);
T3I.tempatkan("selasa", 2, MSR, arab);
T3I.tempatkan("selasa", 3, MZN, ilal);
T3I.tempatkan("rabu", 1, MSR, arab);
T3I.tempatkan("rabu", 2, AFF, tauhid);
T3I.tempatkan("rabu", 3, MNS, fiqih);
T3I.tempatkan("kamis", 1, MNS, fiqih);
T3I.tempatkan("kamis", 2, IDM, akhlaq);
T3I.tempatkan("kamis", 3, DRW, nahwu);
T3I.tempatkan("jumat", 1, DRW, nahwu);
T3I.tempatkan("jumat", 2, URB, shorof);
T3I.tempatkan("jumat", 3, MSR, arab);
T3I.tempatkan("sabtu", 1, IDM, akhlaq);
T3I.tempatkan("sabtu", 2, DRW, nahwu);
T3I.tempatkan("sabtu", 3, URB, shorof);

/* Tsanawy 3-J */
T3J.tempatkan("senin", 1, URB, shorof);
T3J.tempatkan("senin", 2, ASY, arab);
T3J.tempatkan("senin", 3, DRW, nahwu);
T3J.tempatkan("selasa", 1, ASY, arab);
T3J.tempatkan("selasa", 2, DRW, nahwu);
T3J.tempatkan("selasa", 3, WHB, tajwid);
T3J.tempatkan("rabu", 1, MNS, fiqih);
T3J.tempatkan("rabu", 2, DRW, nahwu);
T3J.tempatkan("rabu", 3, IDM, akhlaq);
T3J.tempatkan("kamis", 1, AFF, tauhid);
T3J.tempatkan("kamis", 2, MZN, ilal);
T3J.tempatkan("kamis", 3, ASY, arab);
T3J.tempatkan("jumat", 1, IDM, akhlaq);
T3J.tempatkan("jumat", 2, DRW, nahwu);
T3J.tempatkan("jumat", 3, MNS, fiqih);
T3J.tempatkan("sabtu", 1, MNS, fiqih);
T3J.tempatkan("sabtu", 2, URB, shorof);
T3J.tempatkan("sabtu", 3, ASY, arab);

/* Isti'dad */
IST.tempatkan("senin", 1, MNJ, akhlaq);
IST.tempatkan("senin", 2, AFF, tauhid);
IST.tempatkan("senin", 3, HFD, miftah);
IST.tempatkan("selasa", 1, MRW, fiqih);
IST.tempatkan("selasa", 2, HFD, miftah);
IST.tempatkan("selasa", 3, IBR, shorof);
IST.tempatkan("rabu", 1, HFD, miftah);
IST.tempatkan("rabu", 2, IBR, shorof);
IST.tempatkan("rabu", 3, MRW, fiqih);
IST.tempatkan("kamis", 1, ASR, tajwid);
IST.tempatkan("kamis", 2, MIS, nahwu);
IST.tempatkan("kamis", 3, MIS, nahwu);
IST.tempatkan("jumat", 1, AFF, tauhid);
IST.tempatkan("jumat", 2, IBR, arab);
IST.tempatkan("jumat", 3, MIS, nahwu);
IST.tempatkan("sabtu", 1, MRW, fiqih);
IST.tempatkan("sabtu", 2, IBR, arab);
IST.tempatkan("sabtu", 3, MIS, nahwu);

/* Aliyah 1-A */
A1A.tempatkan("senin", 1, FTN, nahwu);
A1A.tempatkan("senin", 2, SDL, tauhid);
A1A.tempatkan("senin", 3, MSH, fiqih);
A1A.tempatkan("selasa", 1, SDL, tauhid);
A1A.tempatkan("selasa", 2, IBR, arab);
A1A.tempatkan("selasa", 3, MSH, fiqih);
A1A.tempatkan("rabu", 1, FTN, nahwu);
A1A.tempatkan("rabu", 2, MSH, fiqih);
A1A.tempatkan("rabu", 3, IBR, arab);
A1A.tempatkan("kamis", 1, IRF, akhlaq);
A1A.tempatkan("kamis", 2, SBH, shorof);
A1A.tempatkan("kamis", 3, MSH, fiqih);
A1A.tempatkan("jumat", 1, FTN, nahwu);
A1A.tempatkan("jumat", 2, IRF, akhlaq);
A1A.tempatkan("jumat", 3, IBR, arab);
A1A.tempatkan("sabtu", 1, IBR, arab);
A1A.tempatkan("sabtu", 2, FTN, nahwu);
A1A.tempatkan("sabtu", 3, SBH, shorof);

/* Aliyah 1-B */
A1B.tempatkan("senin", 1, MSH, fiqih);
A1B.tempatkan("senin", 2, FTN, nahwu);
A1B.tempatkan("senin", 3, SDL, tauhid);
A1B.tempatkan("selasa", 1, IBR, arab);
A1B.tempatkan("selasa", 2, SBH, shorof);
A1B.tempatkan("selasa", 3, SDL, tauhid);
A1B.tempatkan("rabu", 1, IBR, arab);
A1B.tempatkan("rabu", 2, FTN, nahwu);
A1B.tempatkan("rabu", 3, MSH, fiqih);
A1B.tempatkan("kamis", 1, MSH, fiqih);
A1B.tempatkan("kamis", 2, MSH, fiqih);
A1B.tempatkan("kamis", 3, IRF, akhlaq);
A1B.tempatkan("jumat", 1, IBR, arab);
A1B.tempatkan("jumat", 2, FTN, nahwu);
A1B.tempatkan("jumat", 3, IRF, akhlaq);
A1B.tempatkan("sabtu", 1, FTN, nahwu);
A1B.tempatkan("sabtu", 2, SBH, shorof);
A1B.tempatkan("sabtu", 3, IBR, arab);

/* Aliyah 1-C */
A1C.tempatkan("senin", 1, SDL, tauhid);
A1C.tempatkan("senin", 2, UHN, arab);
A1C.tempatkan("senin", 3, USM, nahwu);
A1C.tempatkan("selasa", 1, GFR, fiqih);
A1C.tempatkan("selasa", 2, SDL, tauhid);
A1C.tempatkan("selasa", 3, USM, nahwu);
A1C.tempatkan("rabu", 1, GFR, fiqih);
A1C.tempatkan("rabu", 2, UHN, arab);
A1C.tempatkan("rabu", 3, USM, nahwu);
A1C.tempatkan("kamis", 1, SBH, shorof);
A1C.tempatkan("kamis", 2, IRF, akhlaq);
A1C.tempatkan("kamis", 3, USM, nahwu);
A1C.tempatkan("jumat", 1, IRF, akhlaq);
A1C.tempatkan("jumat", 2, UHN, arab);
A1C.tempatkan("jumat", 3, GFR, fiqih);
A1C.tempatkan("sabtu", 1, SBH, shorof);
A1C.tempatkan("sabtu", 2, UHN, arab);
A1C.tempatkan("sabtu", 3, GFR, fiqih);

/* Aliyah 1-D */
A1D.tempatkan("senin", 1, AZZ, nahwu);
A1D.tempatkan("senin", 2, FRH, arab);
A1D.tempatkan("senin", 3, GFR, fiqih);
A1D.tempatkan("selasa", 1, AZZ, nahwu);
A1D.tempatkan("selasa", 2, UMM, tauhid);
A1D.tempatkan("selasa", 3, FRH, arab);
A1D.tempatkan("rabu", 1, UMM, tauhid);
A1D.tempatkan("rabu", 2, IRF, akhlaq);
A1D.tempatkan("rabu", 3, SBH, shorof);
A1D.tempatkan("kamis", 1, GFR, fiqih);
A1D.tempatkan("kamis", 2, FRH, arab);
A1D.tempatkan("kamis", 3, AZZ, nahwu);
A1D.tempatkan("jumat", 1, SBH, shorof);
A1D.tempatkan("jumat", 2, GFR, fiqih);
A1D.tempatkan("jumat", 3, FRH, arab);
A1D.tempatkan("sabtu", 1, IRF, akhlaq);
A1D.tempatkan("sabtu", 2, GFR, fiqih);
A1D.tempatkan("sabtu", 3, AZZ, nahwu);

/* Aliyah 1-E */
A1E.tempatkan("senin", 1, UMM, tauhid);
A1E.tempatkan("senin", 2, AZZ, nahwu);
A1E.tempatkan("senin", 3, SBH, shorof);
A1E.tempatkan("selasa", 1, UMM, tauhid);
A1E.tempatkan("selasa", 2, USY, arab);
A1E.tempatkan("selasa", 3, USY, arab);
A1E.tempatkan("rabu", 1, IRF, akhlaq);
A1E.tempatkan("rabu", 2, AZZ, nahwu);
A1E.tempatkan("rabu", 3, FDL, fiqih);
A1E.tempatkan("kamis", 1, FDL, fiqih);
A1E.tempatkan("kamis", 2, FDL, fiqih);
A1E.tempatkan("kamis", 3, SBH, shorof);
A1E.tempatkan("jumat", 1, AZZ, nahwu);
A1E.tempatkan("jumat", 2, AZZ, nahwu);
A1E.tempatkan("jumat", 3, FDL, fiqih);
A1E.tempatkan("sabtu", 1, USY, arab);
A1E.tempatkan("sabtu", 2, USY, arab);
A1E.tempatkan("sabtu", 3, IRF, akhlaq);

/* Aliyah 1-F */
A1F.tempatkan("senin", 1, LTF, arab);
A1F.tempatkan("senin", 2, UMM, tauhid);
A1F.tempatkan("senin", 3, AZZ, nahwu);
A1F.tempatkan("selasa", 1, LTF, arab);
A1F.tempatkan("selasa", 2, AZZ, nahwu);
A1F.tempatkan("selasa", 3, SBH, shorof);
A1F.tempatkan("rabu", 1, LTF, arab);
A1F.tempatkan("rabu", 2, UMM, tauhid);
A1F.tempatkan("rabu", 3, IRF, akhlaq);
A1F.tempatkan("kamis", 1, LTF, arab);
A1F.tempatkan("kamis", 2, AZZ, nahwu);
A1F.tempatkan("kamis", 3, FDL, fiqih);
A1F.tempatkan("jumat", 1, FDL, fiqih);
A1F.tempatkan("jumat", 2, FDL, fiqih);
A1F.tempatkan("jumat", 3, SBH, shorof);
A1F.tempatkan("sabtu", 1, AZZ, nahwu);
A1F.tempatkan("sabtu", 2, IRF, akhlaq);
A1F.tempatkan("sabtu", 3, FDL, fiqih);

/* Aliyah 2-A */
A2A.tempatkan("senin", 1, UTJ, nahwu);
A2A.tempatkan("senin", 2, ALW, fiqih);
A2A.tempatkan("senin", 3, RHL, balaghoh);
A2A.tempatkan("selasa", 1, UTJ, nahwu);
A2A.tempatkan("selasa", 2, ALW, fiqih);
A2A.tempatkan("selasa", 3, RF, ushul);
A2A.tempatkan("rabu", 1, FHM, arab);
A2A.tempatkan("rabu", 2, FHM, arab);
A2A.tempatkan("rabu", 3, UTJ, nahwu);
A2A.tempatkan("kamis", 1, ALW, fiqih);
A2A.tempatkan("kamis", 2, UL, tauhid);
A2A.tempatkan("kamis", 3, ABAH.madin, mustholah);
A2A.tempatkan("jumat", 1, RHL, balaghoh);
A2A.tempatkan("jumat", 2, RF, ushul);
A2A.tempatkan("jumat", 3, ALW, fiqih);
A2A.tempatkan("sabtu", 1, FHM, arab);
A2A.tempatkan("sabtu", 2, FHM, arab);
A2A.tempatkan("sabtu", 3, UTJ, nahwu);

/* Aliyah 2-B */
A2B.tempatkan("senin", 1, RHL, arab);
A2B.tempatkan("senin", 2, UTJ, nahwu);
A2B.tempatkan("senin", 3, UTJ, nahwu);
A2B.tempatkan("selasa", 1, ALW, fiqih);
A2B.tempatkan("selasa", 2, HLY, balaghoh);
A2B.tempatkan("selasa", 3, RHL, arab);
A2B.tempatkan("rabu", 1, ALW, fiqih);
A2B.tempatkan("rabu", 2, RHL, arab);
A2B.tempatkan("rabu", 3, HLY, balaghoh);
A2B.tempatkan("kamis", 1, RF, ushul);
A2B.tempatkan("kamis", 2, ALW, fiqih);
A2B.tempatkan("kamis", 3, ABAH.madin, mustholah);
A2B.tempatkan("jumat", 1, UTJ, nahwu);
A2B.tempatkan("jumat", 2, UTJ, nahwu);
A2B.tempatkan("jumat", 3, UL, tauhid);
A2B.tempatkan("sabtu", 1, ALW, fiqih);
A2B.tempatkan("sabtu", 2, RHL, arab);
A2B.tempatkan("sabtu", 3, RF, ushul);

/* Aliyah 2-C */
A2C.tempatkan("senin", 1, ALW, fiqih);
A2C.tempatkan("senin", 2, FHM, arab);
A2C.tempatkan("senin", 3, FHM, arab);
A2C.tempatkan("selasa", 1, RHL, balaghoh);
A2C.tempatkan("selasa", 2, RF, nahwu);
A2C.tempatkan("selasa", 3, ALW, fiqih);
A2C.tempatkan("rabu", 1, RF, nahwu);
A2C.tempatkan("rabu", 2, ALW, fiqih);
A2C.tempatkan("rabu", 3, FHM, arab);
A2C.tempatkan("kamis", 1, RHL, balaghoh);
A2C.tempatkan("kamis", 2, RF, ushul);
A2C.tempatkan("kamis", 3, ABAH.madin, mustholah);
A2C.tempatkan("jumat", 1, UL, tauhid);
A2C.tempatkan("jumat", 2, ALW, fiqih);
A2C.tempatkan("jumat", 3, RF, ushul);
A2C.tempatkan("sabtu", 1, RF, nahwu);
A2C.tempatkan("sabtu", 2, RF, nahwu);
A2C.tempatkan("sabtu", 3, FHM, arab);

/* Aliyah 3-A */
A3A.tempatkan("senin", 1, HR, fiqih);
A3A.tempatkan("senin", 2, HR, fiqih);
A3A.tempatkan("senin", 3, ABD, ushul);
A3A.tempatkan("selasa", 1, HR, fiqih);
A3A.tempatkan("selasa", 2, HR, fiqih);
A3A.tempatkan("selasa", 3, ASP, tauhid);
A3A.tempatkan("rabu", 1, HLD, nahwu);
A3A.tempatkan("rabu", 2, HLD, nahwu);
A3A.tempatkan("rabu", 3, ABAH.madin, mustholah);
A3A.tempatkan("kamis", 1, ABAH.madin, balaghoh);
A3A.tempatkan("kamis", 2, ABAH.madin, balaghoh);
A3A.tempatkan("kamis", 3, ST, arab);
A3A.tempatkan("jumat", 1, HR, fiqih);
A3A.tempatkan("jumat", 2, ST, arab);
A3A.tempatkan("jumat", 3, ST, arab);
A3A.tempatkan("sabtu", 1, ABD, ushul);
A3A.tempatkan("sabtu", 2, HLD, nahwu);
A3A.tempatkan("sabtu", 3, HLD, nahwu);

/* Aliyah 3-B */
A3B.tempatkan("senin", 1, HS, fiqih);
A3B.tempatkan("senin", 2, ABD, ushul);
A3B.tempatkan("senin", 3, SLD, nahwu);
A3B.tempatkan("selasa", 1, ASP, tauhid);
A3B.tempatkan("selasa", 2, SLD, nahwu);
A3B.tempatkan("selasa", 3, HS, fiqih);
A3B.tempatkan("rabu", 1, SLD, nahwu);
A3B.tempatkan("rabu", 2, HS, fiqih);
A3B.tempatkan("rabu", 3, ABAH.madin, mustholah);
A3B.tempatkan("kamis", 1, ABAH.madin, balaghoh);
A3B.tempatkan("kamis", 2, ABAH.madin, balaghoh);
A3B.tempatkan("kamis", 3, ST, arab);
A3B.tempatkan("jumat", 1, HS, fiqih);
A3B.tempatkan("jumat", 2, ST, arab);
A3B.tempatkan("jumat", 3, ST, arab);
A3B.tempatkan("sabtu", 1, HS, fiqih);
A3B.tempatkan("sabtu", 2, SLD, nahwu);
A3B.tempatkan("sabtu", 3, ABD, ushul);

/* Aliyah 3-C */
A3C.tempatkan("senin", 1, ABD, ushul);
A3C.tempatkan("senin", 2, SLD, nahwu);
A3C.tempatkan("senin", 3, HS, fiqih);
A3C.tempatkan("selasa", 1, HS, fiqih);
A3C.tempatkan("selasa", 2, HS, fiqih);
A3C.tempatkan("selasa", 3, SLD, nahwu);
A3C.tempatkan("rabu", 1, HS, fiqih);
A3C.tempatkan("rabu", 2, SLD, nahwu);
A3C.tempatkan("rabu", 3, ABAH.madin, mustholah);
A3C.tempatkan("kamis", 1, ABAH.madin, balaghoh);
A3C.tempatkan("kamis", 2, ABAH.madin, balaghoh);
A3C.tempatkan("kamis", 3, ST, arab);
A3C.tempatkan("jumat", 1, ASP, tauhid);
A3C.tempatkan("jumat", 2, ST, arab);
A3C.tempatkan("jumat", 3, ST, arab);
A3C.tempatkan("sabtu", 1, SLD, nahwu);
A3C.tempatkan("sabtu", 2, ABD, ushul);
A3C.tempatkan("sabtu", 3, HS, fiqih);

/* Mutakhorijin Pagi */
MTP.tempatkan("senin", 1, AZZ, nahwu);
MTP.tempatkan("senin", 2, SHF, fiqih);
MTP.tempatkan("senin", 3, ABD, ushul);
MTP.tempatkan("selasa", 1, AZZ, nahwu);
MTP.tempatkan("selasa", 2, USY, arab);
MTP.tempatkan("selasa", 3, USY, arab);
MTP.tempatkan("rabu", 1, HLY, balaghoh);
MTP.tempatkan("rabu", 2, HLY, balaghoh);
MTP.tempatkan("rabu", 3, ABAH.madin, mustholah);
MTP.tempatkan("kamis", 1, AZZ, nahwu);
MTP.tempatkan("kamis", 2, SHF, fiqih);
MTP.tempatkan("kamis", 3, RF, tasme);
MTP.tempatkan("jumat", 1, SHF, fiqih);
MTP.tempatkan("jumat", 2, SHF, fiqih);
MTP.tempatkan("jumat", 3, RF, tasme);
MTP.tempatkan("sabtu", 1, AZZ, nahwu);
MTP.tempatkan("sabtu", 2, HLY, balaghoh);
MTP.tempatkan("sabtu", 3, USY, arab);

/* Mutakhorijin Sore */
MTS.tempatkan("senin", 1, _ust, _fan);
MTS.tempatkan("senin", 2, SHF, fiqih);
MTS.tempatkan("senin", 3, SHF, fiqih);
MTS.tempatkan("selasa", 1, HLY, balaghoh);
MTS.tempatkan("selasa", 2, _ust, _fan);
MTS.tempatkan("selasa", 3, _ust, _fan);
MTS.tempatkan("rabu", 1, UTJ, tasme);
MTS.tempatkan("rabu", 2, UL, tauhid);
MTS.tempatkan("rabu", 3, UL, tauhid);
MTS.tempatkan("kamis", 1, HR, nahwu);
MTS.tempatkan("kamis", 2, HR, nahwu);
MTS.tempatkan("kamis", 3, _ust, _fan);
MTS.tempatkan("jumat", 1, SHF, fiqih);
MTS.tempatkan("jumat", 2, SHF, fiqih);
MTS.tempatkan("jumat", 3, _ust, _fan);
MTS.tempatkan("sabtu", 1, HR, nahwu);
MTS.tempatkan("sabtu", 2, HR, nahwu);
MTS.tempatkan("sabtu", 3, _ust, _fan);

/* Testing */
// console.log(T1A); // sukses!
// NZR.jadwal(); // sukses!
// T1A.jadwal(); // sukses!
// Hari.jadwal("Senin"); // sukses!
// console.log(listKelas);
// console.log(KHL.jadwal("rabu")); //sukses!
// console.log(FT.jadwal(["selasa", "rabu"])); // sukses!

/**
 * @type {string[]}
 */
// @ts-ignore
const args = process.argv.slice(2);
/** @type {{ [key: string]: Array.<(string|boolean)> }} */
const command = {};

/**
 * Menetapkan `argumen` untuk `flag` yang ditentukan dalam objek `command`.
 *
 * @param {string} flag - Flag untuk nilai yang sedang ditetapkan.
 * @param {string|true} argumen - Argumen yang akan ditetapkan untuk `flag`.
 * @returns {void}
 * @description Fungsi ini memeriksa apakah `flag` sudah ada dalam objek `command`.
 * Jika ya, `argumen` akan ditambahkan ke dalam array yang sudah ada; jika tidak, akan dibuat array baru dengan `argumen` yang diberikan.
 * @author LitFill
 * @date 29/11/2023
 */
function setCommandValue(flag, argumen) {
    if (!command[flag]) {
        command[flag] = [argumen];
    } else {
        command[flag].push(argumen);
    }
}

for (let i = 0; i < args.length; i++) {
    const value = args[i];
    if (value.startsWith("--")) {
        const flag = value.substring(2);
        /** @type {string|true} */
        let nextArg = "";

        // if (flag === "jadwal" || flag === "version" || flag === "pesanIzin") {
        if (["jadwal", /*"pesanIzin",*/ "version"].includes(flag)) {
            nextArg = true;
        } else if (args[i + 1] && !args[i + 1].startsWith("--")) {
            nextArg = args[i + 1];
            i++; // Skip the next argument as it has been used
        } else {
            console.error(`Flag --${flag} membutuhkan value.`);
            // @ts-ignore
            process.exit(1);
        }

        setCommandValue(flag, nextArg);
    }
}

if (command.version) {
    console.log(
        "aplikasi Jadwal versi 1.1.\ndibuat oleh pemegang hak cipta: LitFill.\n"
    );
}

if (command.jadwal) {
    if (command.guru) {
        if (command.hari) {
            command.guru.forEach((kodeGuru) => {
                Guru.fromString(kodeGuru.toString())?.jadwal(
                    command.hari.toLocaleString()
                );
            });
        } else {
            command.guru.forEach((kodeGuru) => {
                Guru.fromString(kodeGuru.toString())?.jadwal();
            });
        }
    } else if (command.kelas) {
        if (command.hari) {
            command.kelas.forEach((kodeKelas) => {
                Kelas.fromString(kodeKelas.toString())?.jadwal(
                    command.hari.toLocaleString()
                );
                // console.log("kelas:", kodeKelas, "hari", command.hari);
            });
        } else {
            command.kelas.forEach((kodeKelas) => {
                Kelas.fromString(kodeKelas.toString())?.jadwal();
            });
        }
    } else if (command.hari) {
        // TODO
        command.hari.forEach((hari) => {
            if (typeof hari === "string" || Array.isArray(hari)) {
                Hari.jadwal(hari);
            } else {
                console.error("Invalid argument for Hari.jadwal: ", hari);
            }
        });
    }
}

// if (command.pesanWA !== undefined) {
["pesanWA1", "pesanWA2", "pesanWA"].forEach((key) => {
    if (command[key]) {
        command[key].forEach((value) => {
            if (typeof value === "string") {
                /** @type {"pagi"|"sore"|"full"} */
                let waktu;

                if (key === "pesanWA1") {
                    waktu = "pagi";
                } else if (key === "pesanWA2") {
                    waktu = "sore";
                } else {
                    waktu = "full";
                }

                new PengirimPesan(value)[waktu]();
            }
        });
    }
});

if (command.pesanIzin) {
    // if (command.tanggal) {
    //     if (command.guru) {
    //         if (command.ket) {
    //             if (command.jam) {
    //             } else noFlag("--jam");
    //         } else noFlag("--ket");
    //     } else noFlag("--guru");
    // } else noFlag("--tanggal");
    if (command.data) {
        const izin = new Perizinan(
            command.pesanIzin.toString(),
            command.data.toString()
        );
        izin.kirimPesan();
        // console.log(izin.dataPerizinan);
    }
}

/**
 * @description
 * @author LitFill
 * @date 02/12/2023
 * @param {string} namaFlag
 */
function noFlag(namaFlag) {
    console.error(
        `ERROR: Tolong masukkan flag ${namaFlag} beserta valuenya.\n`
    );
}

// }

// fs.writeFile("./listKelas.txt", FT.fan, (err) => {
//     if (err) console.error(err);
// });

/**
 * Mengembalikan string dengan huruf pertama setiap kata diubah menjadi huruf kapital.
 *
 * @param {String} str - String yang akan diubah.
 * @returns {String} - String baru dengan huruf pertama setiap kata menjadi huruf kapital.
 * @description Fungsi ini mengubah huruf pertama setiap kata dalam string menjadi huruf kapital.
 * Misalnya, "kata pertama" akan diubah menjadi "Kata Pertama".
 * @author LitFill
 * @date 25/11/2023
 */
function kap(str) {
    return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * @description
 * @author LitFill
 * @date 06/12/2023
 * @param {string[]} data
 * @return {Array<{guru: string, sebab: string, jam: Array<boolean>}>}
 */
function splitDash(data) {
    /** @type {Array<Array<String>>} */
    const arr = [];
    /** @type {Array<{guru: string, sebab: string, jam: Array<boolean>}>} */
    const objs = [];
    data.forEach((item) => {
        arr.push(item.split("-"));
    });
    arr.forEach((item) => {
        const guru = item[0];
        const sebab = item[1];
        const jams = item[2].split("");
        const jam = jams.map((char) => {
            return Boolean(Number(char));
        });
        objs.push({ guru, sebab, jam });
    });
    return objs;
}
