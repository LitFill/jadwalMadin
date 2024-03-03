// @ts-check
"use strict";
const NAMA_HARI = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];

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
     * @param {string[]|string} [namaHari=NAMA_HARI] - Nama hari dalam seminggu.
     */
    jadwal(namaHari = NAMA_HARI) {
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
                                } jam ke-${i + 1}.`,
                            );
                        }
                    }
                }
            }
        });
    }
    /**
     * Menampilkan jadwal mengajar guru.
     * @param {string[]|string} [namaHari = NAMA_HARI] - Nama hari dalam seminggu.
     * @returns {{[jamKe: string]: string}|{}}
     */
    jadwalObj(namaHari = NAMA_HARI) {
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
     * Metode statis ini mengambil string kode guru dan mengembalikan instansi kelas `Guru`.
     *
     * @param {string} kodeGuru - Kode guru yang akan dicari.
     * @returns {Guru|null} - Instansi kelas `Guru` jika ditemukan, atau `null` jika tidak.
     * @memberof Guru
     * @author LitFill
     * @date 06/12/2023
     */
    static fromString(kodeGuru) {
        const guruMap = {
            ABAH: ABAH.madin,
            ASP: ASP,
            MNR: MNR,
            USY: USY,
            MNS: MNS,
            HMD: HMD,
            RF: RF,
            BCH: BCH,
            // HFD: HFD,
            GFR: GFR,
            IBR: IBR,
            RHL: RHL,
            UTJ: UTJ,
            MIS: MIS,
            MRJ: MRJ,
            MSH: MSH,
            // MST: MST,
            SHF: SHF,
            FDL: FDL,
            IDT: IDT,
            IDM: IDM,
            HLY: HLY,
            UHS: UHS,
            UHN: UHN,
            HR: HR,
            // IDS: IDS,
            ADN: ADN,
            YHY: YHY,
            BDL: BDL,
            SLD: SLD,
            LSN: LSN,
            SDL: SDL,
            UMM: UMM,
            // FRZ: FRZ,
            AFF: AFF,
            MSR: MSR,
            DMN: DMN,
            ST: ST,
            FHM: FHM,
            URB: URB,
            SDQ: SDQ,
            HLD: HLD,
            IRF: IRF,
            ASR: ASR,
            UMR: UMR,
            KHL: KHL,
            SBH: SBH,
            FTN: FTN,
            YDN: YDN,
            SLH: SLH,
            FQH: FQH,
            LBB: LBB,
            MNJ: MNJ,
            MRW: MRW,
            MZN: MZN,
            DRW: DRW,
            WHB: WHB,
            ABD: ABD,
            ANM: ANM,
            BGS: BGS,
            NZR: NZR,
            FRH: FRH,
            FT: FT,
            SRR: SRR,
            USM: USM,
            ASY: ASY,
            ALW: ALW,
            JBR: JBR,
            RIF: RIF,
            // FRQ: FRQ,
            WF: WF,
            AZZ: AZZ,
            LTF: LTF,
            UL: UL,
            HS: HS,
            _ust: _ust,

            RID: RID,
            SBR: SBR,
        };

        return guruMap[kodeGuru] || null;
    }
}

class Abah {
    constructor() {
        this.asma = "KH. Zuhrul Anam Hisyam";
        this.madin = new Guru("ABAH", [mustholah, balaghoh]);
    }

    /**
     * Menampilkan jadwal mengajar guru.
     * @param {string[]|string} [namaHari = NAMA_HARI] - Nama hari dalam seminggu.
     */
    jadwal(namaHari = NAMA_HARI) {
        listKelas.forEach((kelas) => {
            for (let hari in kelas) {
                if (namaHari.includes(hari)) {
                    for (let i = 0; i < 3; i++) {
                        if (kelas[hari][i].guru === this.madin.nama) {
                            console.log(
                                `Abah mucal kelas ${kelas.nama} fan ${
                                    kelas[hari][i].fan
                                } di hari ${kelas[hari].nama} jam ke-${i + 1}.`,
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
                `ERROR: Ust. ${guru.nama} tidak mengajar fan ${fan.nama}.\nLOK  : kelas ${this.nama} / ${hari}:${jam}.`,
            );
        }
    }
    /**
     * @description log jadwal sebuah kelas dalam suatu hari
     * @author LitFill
     * @date 21/11/2023
     * @param {string[]|string} [namaHari = NAMA_HARI] - Nama hari dalam seminggu.
     * @memberof Kelas
     */
    jadwal(namaHari = NAMA_HARI) {
        for (let hari in this) {
            if (namaHari.includes(hari)) {
                for (let i = 0; i < 3; i++) {
                    console.log(
                        // @ts-ignore
                        `Kelas ${this.nama} di hari ${this[hari].nama} jam ke-${
                            i + 1
                        } diajar oleh Ust. ${this[hari][i].guru} fan ${
                            this[hari][i].fan
                        }.`,
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
        const classMap = {
            T1A: T1A,
            T1B: T1B,
            T1C: T1C,
            T1D: T1D,
            T1E: T1E,
            T1F: T1F,
            T1G: T1G,
            T2A: T2A,
            T2B: T2B,
            T2C: T2C,
            T2D: T2D,
            T2E: T2E,
            T2F: T2F,
            T2G: T2G,
            T2H: T2H,
            T2I: T2I,
            T2J: T2J,
            T3A: T3A,
            T3B: T3B,
            T3C: T3C,
            T3D: T3D,
            T3E: T3E,
            T3F: T3F,
            T3G: T3G,
            T3H: T3H,
            T3I: T3I,
            T3J: T3J,
            A1A: A1A,
            A1B: A1B,
            A1C: A1C,
            A1D: A1D,
            A1E: A1E,
            A1F: A1F,
            A2A: A2A,
            A2B: A2B,
            A2C: A2C,
            A3A: A3A,
            A3B: A3B,
            A3C: A3C,
            IST: IST,
            MTP: MTP,
            MTS: MTS,
        };

        return classMap[kodeKelas] || null;
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
                                } fan ${kelas[hari][i].fan}.`,
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

    getNama() {
        return this.nama;
    }

    toString() {
        return `Fan: ${this.nama}`;
    }

    static getAllFans() {
        return [
            Fan.Ilal,
            Fan.Mustholah,
            Fan.Balaghoh,
            Fan.Ushul,
            Fan.Arab,
            Fan.Miftah,
            Fan.Shorof,
            Fan.Tajwid,
            Fan.Tauhid,
            Fan.Akhlaq,
            Fan.Tasme,
            Fan.Nahwu,
            Fan.Fiqih,
            Fan.Imla,
            Fan.FanKosong,
        ];
    }

    /**
     * Finds a fan by their name.
     *
     * @param {string} nama - The name of the fan.
     * @return {Fan | undefined} The fan object if found, otherwise undefined.
     */
    static getFanByNama(nama) {
        return Fan.getAllFans().find((fan) => fan.getNama() === nama);
    }

    static getFanCount() {
        return Fan.getAllFans().length;
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
     * @type {{day: 'numeric', month: 'long', year: 'numeric'}}
     */
    static TANGGAL_FULL_FORMAT = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    static JAM_PAGI = "08:15";
    static JAM_SORE = "14:10";
    static DURASI_JAM_PAGI = 55;
    static DURASI_JAM_SORE_1 = 35;
    static DURASI_JAM_SORE = 45;
    static DURASI_ISTIRAHAT = 15;

    /**
     * @description menampilkan log jadwal Madin di console
     * @param {string} strTanggal
     */
    constructor(strTanggal) {
        this.inisialisasiTanggal(strTanggal);
        this.pesan = "";
        this.hari = this.getHari();
        this.namaBulan = this.getNamaBulan();
        this.tanggalTerformat = this.tanggalPesan?.toLocaleDateString(
            "id-ID",
            PengirimPesan.TANGGAL_FULL_FORMAT,
        );
    }

    /**
     * @description
     * @param {string} strTanggal
     * @memberof PengirimPesan
     */
    inisialisasiTanggal(strTanggal) {
        const tanggal = Number(strTanggal.slice(0, 2));
        const bulan = Number(strTanggal.slice(2, 4));
        const tahun = Number(strTanggal.slice(4, 6)) + 2000;
        this.tanggalPesan = new Date(tahun, bulan - 1, tanggal);
    }

    getHari() {
        if (this.tanggalPesan) {
            return this.tanggalPesan
                .toLocaleDateString("id-ID", { weekday: "long" })
                .toLocaleLowerCase();
        } else {
            throw new Error(
                "Error: Tanggal harus diinisialisasi terlebih dahulu.",
            );
        }
    }

    getNamaBulan() {
        if (this.tanggalPesan) {
            return this.tanggalPesan.toLocaleDateString("id-ID", {
                month: "long",
            });
        } else {
            throw new Error(
                "Error: Tanggal harus diinisialisasi terlebih dahulu.",
            );
        }
    }

    pagi() {
        this.logPesan("pagi");
    }

    sore() {
        this.logPesan("sore");
    }

    full() {
        this.pagi();
        console.log("---Pesan Kedua---");
        this.sore();
    }

    /**
     * @description
     * @author LitFill
     * @date 16/12/2023
     * @param {'pagi'|'sore'} waktuKBM
     * @return {string}
     * @memberof PengirimPesan
     */
    getPesan(waktuKBM) {
        this.buatPesan(waktuKBM);
        const pesan = this.pesan;
        this.pesan = "";
        return pesan;
    }

    /**
     * @description
     * @param {'pagi'|'sore'} waktuKBM
     * @memberof PengirimPesan
     */
    logPesan(waktuKBM) {
        this.buatPesan(waktuKBM);

        console.log(this.pesan);
        this.pesan = "";
    }

    /**
     * @description
     * @author LitFill
     * @date 16/12/2023
     * @param {'pagi'|'sore'} waktuKBM
     * @memberof PengirimPesan
     */
    buatPesan(waktuKBM) {
        this.pesan += "Jadwal Madin Putra ";
        this.pesan += kap(this.hari ? this.hari : "");
        this.pesan += " ";
        this.pesan += kap(waktuKBM);
        this.pesan += "\n_Tanggal ";
        this.pesan += this.tanggalTerformat;
        this.pesan += "_\n\n";
        this.pesan +=
            "*(Guru Fan wajib mengisi jurnal Madin dan mengabsen kelas)*\n";
        this.pesan +=
            "*Perizinan harus sesuai dengan prosedur yang telah ada.*\n\n";
        for (let i = 1; i <= 3; i++) {
            this.pesan += `<Jam ${this.labelJam(i)}>\n`;
            this.pesan += `*Waktu: ${this.labelWaktu(waktuKBM, i)}*`;
            this.pesan += "\n\n";
            this.pesanKelas(waktuKBM, i === 1 ? 1 : i === 2 ? 2 : 3);
        }
    }

    /**
     * @description
     * @param {'pagi'|'sore'} waktuKBM
     * @param {1|2|3} jam
     * @memberof PengirimPesan
     */
    pesanKelas(waktuKBM, jam) {
        if (waktuKBM == "pagi") {
            this.pesanMTP(jam);
        } else if (waktuKBM == "sore") {
            this.pesan1TSN(jam);
            this.pesan2TSN(jam);
            this.pesan3TSN(jam);
            this.pesanIST(jam);
            this.pesan1ALY(jam);
            this.pesan2ALY(jam);
            this.pesan3ALY(jam);
            this.pesanMTS(jam);
        } else {
            throw new Error("Error: Waktu harus 'pagi' atau 'sore'.");
        }
    }

    /**
     * @description
     * @param {1|2|3} jam
     */
    pesanMTP(jam) {
        if (MTP && MTP[this.hari] && MTP[this.hari][jam - 1]) {
            const { guru, fan } = MTP[this.hari][jam - 1];
            this.pesan += `Mutakhorijin Pagi\n`;
            this.pesan += `\tUst ${guru} # ${fan}\n`;
            this.pesan += "\n";
        } else {
            this.pesan += `Mutakhorijin Pagi\n`;
            this.pesan += `\tTidak ada\n`;
            this.pesan += "\n";
            console.error("Error: Tidak ada Mutakhorijin Pagi.");
        }
    }

    /**
     * @description
     * @param {1|2|3} jam
     */
    pesanMTS(jam) {
        if (MTS && MTS[this.hari] && MTS[this.hari][jam - 1]) {
            const { guru, fan } = MTS[this.hari][jam - 1];
            this.pesan += `Mutakhorijin Sore\n`;
            this.pesan += `\tUst ${guru} # ${fan}\n`;
            this.pesan += "\n";
        } else {
            this.pesan += `Mutakhorijin Sore\n`;
            this.pesan += `\tTidak ada\n`;
            this.pesan += "\n";
            console.error("Error: Tidak ada Mutakhorijin Sore.");
        }
    }

    /**
     * @description
     * @param {1|2|3} jam
     */
    pesanIST(jam) {
        const kelasData = {
            A: IST,
        };

        this.pesan += `Isti'dad\n`;
        this.addPesan(kelasData, jam);
        this.pesan += "\n";
    }

    /**
     * @description
     * @param {1|2|3} jam
     */
    pesan3ALY(jam) {
        const kelasData = {
            A: A3A,
            B: A3B,
            C: A3C,
        };

        this.pesan += `3 Aliyah\n`;
        this.addPesan(kelasData, jam);
        this.pesan += "\n";
    }

    /**
     * @description
     * @param {1|2|3} jam
     */
    pesan2ALY(jam) {
        const kelasData = {
            A: A2A,
            B: A2B,
            C: A2C,
        };

        this.pesan += `2 Aliyah\n`;
        this.addPesan(kelasData, jam);
        this.pesan += "\n";
    }

    /**
     * @description
     * @param {1|2|3} jam
     */
    pesan1ALY(jam) {
        const kelasData = {
            A: A1A,
            B: A1B,
            C: A1C,
            D: A1D,
            E: A1E,
            F: A1F,
        };

        this.pesan += `1 Aliyah\n`;
        this.addPesan(kelasData, jam);
        this.pesan += "\n";
    }

    /**
     * @description
     * @param {1|2|3} jam
     */
    pesan3TSN(jam) {
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

        this.pesan += `3 Tsanawiyyah\n`;
        this.addPesan(kelasData, jam);
        this.pesan += "\n";
    }

    /**
     * @description
     * @param {1|2|3} jam
     */
    pesan2TSN(jam) {
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

        this.pesan += `2 Tsanawiyyah\n`;
        this.addPesan(kelasData, jam);
        this.pesan += "\n";
    }

    /**
     * @description
     * @param {1|2|3} jam
     */
    pesan1TSN(jam) {
        const kelasData = {
            A: T1A,
            B: T1B,
            C: T1C,
            D: T1D,
            E: T1E,
            F: T1F,
            G: T1G,
        };

        this.pesan += `1 Tsanawiyyah\n`;
        this.addPesan(kelasData, jam);
        this.pesan += "\n";
    }

    /**
     * @description
     * @param {{ [hurufKelas: string]: Kelas }} kelasData
     * @param {1|2|3} jam
     */
    addPesan(kelasData, jam) {
        for (const kelas in kelasData) {
            /** @type {{ guru: string, fan: string }} */
            if (
                kelasData[kelas] &&
                kelasData[kelas][this.hari] &&
                kelasData[kelas][this.hari][jam - 1]
            ) {
                const { guru, fan } = kelasData[kelas][this.hari][jam - 1];
                this.pesan += `\t${kelas}. Ust ${guru} # ${fan}\n`;
            } else {
                this.pesan += `\t${kelas}. Tidak ada\n`;
                console.error(`Tidak ada jadwal`);
            }
        }
    }

    /**
     * @description
     * @param {Number|1|2|3} jam
     * @return {"Pertama"|"Kedua"|"Ketiga"}
     * @memberof PengirimPesan
     */
    labelJam(jam) {
        return jam == 1 ? "Pertama" : jam == 2 ? "Kedua" : "Ketiga";
    }

    /**
     * @description
     * @param {'pagi'|'sore'} waktuKBM
     * @param {Number|1|2|3} jam
     * @return {string}
     * @memberof PengirimPesan
     */
    labelWaktu(waktuKBM, jam) {
        if (waktuKBM == "pagi") {
            return this.labelWaktuPagi(jam);
        } else if (waktuKBM == "sore") {
            return this.labelWaktuSore(jam);
        } else {
            throw "Error: Waktu harus 'pagi' atau 'sore'";
        }
    }

    /**
     * @description
     * @param {Number|1|2|3} jam
     * @return {string}
     * @memberof PengirimPesan
     */
    labelWaktuPagi(jam) {
        const waktuAwal =
            jam === 1
                ? PengirimPesan.JAM_PAGI
                : jam === 2
                  ? this.tambahMenit(
                        PengirimPesan.JAM_PAGI,
                        PengirimPesan.DURASI_JAM_PAGI,
                    )
                  : this.tambahMenit(
                        PengirimPesan.JAM_PAGI,
                        2 * PengirimPesan.DURASI_JAM_PAGI +
                            PengirimPesan.DURASI_ISTIRAHAT,
                    );
        const waktuAkhir = this.tambahMenit(
            waktuAwal,
            PengirimPesan.DURASI_JAM_PAGI,
        );
        return `${waktuAwal} - ${waktuAkhir}`;
    }

    /**
     * @param {Number|1|2|3} jam
     * @returns
     */
    labelWaktuSore(jam) {
        const waktuAwal =
            jam === 1
                ? PengirimPesan.JAM_SORE
                : jam === 2
                  ? this.tambahMenit(
                        PengirimPesan.JAM_SORE,
                        PengirimPesan.DURASI_JAM_SORE_1,
                    )
                  : this.tambahMenit(
                        PengirimPesan.JAM_SORE,
                        PengirimPesan.DURASI_JAM_SORE_1 +
                            PengirimPesan.DURASI_JAM_SORE,
                    );
        const waktuAkhir = this.tambahMenit(
            waktuAwal,
            jam === 1
                ? PengirimPesan.DURASI_JAM_SORE_1
                : PengirimPesan.DURASI_JAM_SORE,
        );
        return `${waktuAwal} - ${waktuAkhir}`;
    }

    /**
     * @description
     * @param {string} waktu
     * @param {number} menit
     * @returns {string}
     * @memberof PengirimPesan
     */
    tambahMenit(waktu, menit) {
        const [jamLama, menitLama] = waktu.split(":").map(Number);
        const menitBaru = (menitLama + menit) % 60;
        const jamBaru = jamLama + Math.floor((menitLama + menit) / 60);
        return `${this.pad(jamBaru)}:${this.pad(menitBaru)}`;
    }

    /**
     * @description
     * @param {number} number
     * @return {string}
     * @memberof PengirimPesan
     */
    pad(number) {
        return number.toString().padStart(2, "0");
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
        this.dataPerizinan = objIzin;

        const tanggal = Number(tanggalIzin.slice(0, 2));
        const bulan = Number(tanggalIzin.slice(2, 4));
        const tahun = Number(tanggalIzin.slice(4, 6)) + 2000;
        this.tanggal = new Date(tahun, bulan - 1, tanggal);

        /** @type {{ weekday: "long", day: "numeric", month: "long", year: "numeric" }} */
        const opsiFormat = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        };
        this.tanggalf = this.tanggal.toLocaleDateString("id-ID", opsiFormat);
    }

    kirimPesan() {
        let pesan = "";
        pesan += "*Konfirmasi Perizinan*\n";
        pesan += `_Tanggal: ${this.tanggalf}_\n\n`;
        pesan += this.formatPesan(this.dataPerizinan);

        console.log(pesan);
    }

    /**
     * @description - format pesan
     * @author LitFill
     * @date 06/12/2023
     * @param {Array<{guru: string, sebab: string, jam: Array<boolean>}>} objIzin - data perizinan
     * @returns {string} - pesan
     * @memberof Perizinan
     */
    formatPesan(objIzin) {
        let pesan = "";
        objIzin.forEach((item, index) => {
            const guru = Guru.fromString(item.guru);

            pesan += `${index + 1}. Ust ${guru?.nama}\n`;
            pesan += `\tAlasan: ${kap(item.sebab)}\n`;
            pesan += "\tDetail Perizinan:\n";

            item.jam.forEach((j, i) => {
                pesan += `\t - jam ${i + 1}: `;
                if (j) {
                    /** @type {{ weekday: "long" }} */
                    const formatTanggal = {
                        weekday: "long",
                    };
                    const hari = this.tanggal
                        .toLocaleDateString("id-ID", formatTanggal)
                        .toLocaleLowerCase();

                    pesan += guru?.jadwalObj(hari)[`jam${i + 1}`] || "~";
                    pesan += "\n";
                } else {
                    pesan += "~\n";
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
const ABD = new Guru("Mu'thi", ushul);
const ADN = new Guru("Adnan Fauzi", fiqih);
const AFF = new Guru("Afifudin", tauhid);
const ALW = new Guru("Alawy", fiqih);
const ANM = new Guru("Anam", tauhid);
const ASP = new Guru("Saifurrohman Aly", [nahwu, tauhid]);
const ASR = new Guru("Asrofi", tajwid);
const ASY = new Guru("Asyrof", arab);
const AZZ = new Guru("Aziz", nahwu);
const BCH = new Guru("Bukhori", [tauhid, akhlaq]);
const BDL = new Guru("Hb. Abdillah", arab);
const BGS = new Guru("Bagus", fiqih);
const DMN = new Guru("Damanhuri", [fiqih, nahwu]);
const DRW = new Guru("Darwis", nahwu);
const FDL = new Guru("Fadil", [imla, fiqih]);
const FHM = new Guru("Agus Fahmi", arab);
const FQH = new Guru("Faqih", shorof);
const FRH = new Guru("Farhan", [fiqih, arab]);
// const FRQ = new Guru("Faruq", arab);
// const FRZ = new Guru("Fakhrurozi", arab);
const FT = new Guru("Fathur", nahwu);
const FTN = new Guru("Fathoni", nahwu);
const GFR = new Guru("Musthofa Ghufron", fiqih);
// const HFD = new Guru("Hafidz", [shorof, miftah]);
const HLD = new Guru("Kholidin", nahwu);
const HLY = new Guru("Agus Hilmy", balaghoh);
const HMD = new Guru("Hamid M.", [tauhid, shorof, fiqih]);
const HR = new Guru("Heri", [nahwu, fiqih]);
const HS = new Guru("Hasan", fiqih);
const IBR = new Guru("Ibrohim", [shorof, arab]);
const IDM = new Guru("Agus Idhohul", akhlaq);
// const IDS = new Guru("Idris Besuk", nahwu);
const IDT = new Guru("Idris Thobari", nahwu);
const IRF = new Guru("Irfangi", akhlaq);
const JBR = new Guru("Jabir", nahwu);
const KHL = new Guru("Kholil", akhlaq);
const LBB = new Guru("Lubab", tajwid);
const LSN = new Guru("Mukhlasin", tauhid);
const LTF = new Guru("Lutfi", arab);
const MIS = new Guru("Maisur", [fiqih, nahwu, miftah]);
const MNJ = new Guru("Munji", akhlaq);
const MNR = new Guru("Munir Subkhi", [shorof, nahwu]);
const MNS = new Guru("Munshorif", [shorof, fiqih]);
const MRJ = new Guru("Mu'rijul Ma'arif", arab);
const MRW = new Guru("Mirwan", fiqih);
const MSH = new Guru("Mashudi", [imla, fiqih]);
const MSR = new Guru("Masriyanto", arab);
// const MST = new Guru("Musthofa Besuk", fiqih);
const MZN = new Guru("Muzaini", ilal);
const NZR = new Guru("Nizar", [nahwu, imla, shorof]);
const RF = new Guru("Rouf", [nahwu, ushul, tasme, shorof]);
const RHL = new Guru("Rohli", [balaghoh, arab]);
const RID = new Guru("Riedho", arab);
const RIF = new Guru("Rifqi", arab);
const SBH = new Guru("Subhan", shorof);
const SDL = new Guru("Sa'dulloh", tauhid);
const SDQ = new Guru("Sodiqin", tauhid);
const SHF = new Guru("Shofi", [nahwu, fiqih]);
const SLD = new Guru("Sholahuddin", nahwu);
const SLH = new Guru("Sholah", [nahwu, fiqih]);
const SRR = new Guru("Surur", nahwu);
const ST = new Guru("Syaikh Toha", arab);
const UHN = new Guru("Husni Cianjur", arab);
const UHS = new Guru("Husni Sarang", [fiqih, nahwu]);
const UL = new Guru("Ulil", [tauhid, fiqih]);
const UMM = new Guru("Agus Umam", tauhid);
const UMR = new Guru("Ma'ruf", [akhlaq, fiqih, nahwu]);
const URB = new Guru("Robingu", [shorof, nahwu]);
const USM = new Guru("Usman", nahwu);
const USY = new Guru("Syafi'il Anam", [tauhid, arab]);
const UTJ = new Guru("Tajudin", [nahwu, tasme, fiqih]);
const WF = new Guru("Wafa", [shorof, nahwu]);
const WHB = new Guru("Wahib", tajwid);
const YDN = new Guru("Yadin", [akhlaq, imla]);
const YHY = new Guru("Yahya Mansur", arab);
const SBR = new Guru("Subur", arab);
const _ust = new Guru("-", _fan); // Guru kosong

/* Deklarasi Kelas */
/**
 * @type {Kelas[]}
 */
const listKelas = [];

/**
 * Membuat serangkaian kelas berdasarkan awalan, awal, akhir, dan waktu yang diberikan.
 *
 * @param {string} awalan - Awalan untuk nama kelas. Contoh: "Tsanawiyah 1"
 * @param {string} awal - Huruf awal untuk rentang kelas.
 * @param {string} akhir - Huruf akhir untuk rentang kelas.
 * @param {"pagi"|"sore"} [waktu = "sore"] - Waktu KBM kelas. Default: "sore"
 * @return {void} Fungsi ini tidak mengembalikan nilai apapun.
 */
const buatKelas = (awalan, awal, akhir, waktu = "sore") => {
    for (let i = awal.charCodeAt(0); i <= akhir.charCodeAt(0); i++) {
        const kelas = new Kelas(`${awalan}-${String.fromCharCode(i)}`, waktu);
        listKelas.push(kelas);
    }
};

// Tsanawiyah 1-A sampai 1-G
buatKelas("Tsanawiyah 1", "A", "G");
// Tsanawiyah 2-A sampai 2-J dan Tsanawiyah 3-A sampai 3-J
for (let j = 2; j <= 3; j++) {
    buatKelas(`Tsanawiyah ${j}`, "A", "J");
}
// Aliyah 1-A sampai 1-F
buatKelas("Aliyah 1", "A", "F");
// Aliyah 2-A sampai 2-C dan Aliyah 3-A sampai 3-C
for (let j = 2; j <= 3; j++) {
    buatKelas(`Aliyah ${j}`, "A", "C");
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
Kelas.kelasKosong(T1B);

/** @type {Map<Kelas, [Guru, Fan][]>} */
const Map_Jadwal = new Map();
Map_Jadwal.set(T1A, [
    // Senin
    [MNS, shorof],
    [FDL, imla],
    [FDL, imla],
    // Selasa
    [NZR, nahwu],
    [GFR, fiqih],
    [MNS, shorof],
    // Rabu
    [FDL, imla],
    [ASR, tajwid],
    [GFR, fiqih],
    // Kamis
    [NZR, nahwu],
    [RID, arab],
    [GFR, fiqih],
    // Jumat
    [LSN, tauhid],
    [NZR, nahwu],
    [YDN, akhlaq],
    // Sabtu
    [LSN, tauhid],
    [RID, arab],
    [NZR, nahwu],
]);
Map_Jadwal.set(T1B, [
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
    [_ust, _fan],
]);
Map_Jadwal.set(T1C, [
    [FDL, imla],
    [NZR, nahwu],
    [RID, arab],

    [LSN, tauhid],
    [NZR, imla],
    [UTJ, fiqih],

    [MNR, shorof],
    [NZR, nahwu],
    [NZR, imla],

    [LSN, tauhid],
    [UTJ, fiqih],
    [MNR, shorof],

    [YDN, akhlaq],
    [RID, arab],
    [NZR, nahwu],

    [UTJ, fiqih],
    [NZR, nahwu],
    [ASR, tajwid],
]);
Map_Jadwal.set(T1D, [
    [LSN, tauhid],
    [YDN, imla],
    [YDN, imla],

    [MIS, fiqih],
    [MIS, fiqih],
    [FT, nahwu],

    [FT, nahwu],
    [SBR, arab],
    [ASR, tajwid],

    [SBR, arab],
    [FT, nahwu],
    [MNS, shorof],

    [MIS, fiqih],
    [LSN, tauhid],
    [FT, nahwu],

    [YDN, akhlaq],
    [MSH, imla],
    [MNS, shorof],
]);
Map_Jadwal.set(T1E, [
    // Senin
    [ASR, tajwid],
    [LSN, tauhid],
    [SBR, arab],
    // Selasa
    [IBR, shorof],
    [UL, fiqih],
    [UL, fiqih],
    // Rabu
    [SBR, arab],
    [FT, nahwu],
    [MSH, imla],
    // Kamis
    [FT, nahwu],
    [YDN, akhlaq],
    [FT, nahwu],
    // Jumat
    [FT, nahwu],
    [UL, fiqih],
    [MSH, imla],
    // Sabtu
    [MSH, imla],
    [LSN, tauhid],
    [IBR, shorof],
]);
Map_Jadwal.set(T1F, [
    // Senin
    [RF, shorof],
    [ASR, tajwid],
    [BCH, tauhid],
    // Selasa
    [FT, nahwu],
    [FT, nahwu],
    [FRH, arab],
    // Rabu
    [YDN, akhlaq],
    [RF, shorof],
    [DMN, fiqih],
    // Kamis
    [FRH, arab],
    [FRH, arab],
    [BCH, tauhid],
    // Jumat
    [FRH, arab],
    [FT, nahwu],
    [DMN, fiqih],
    // Sabtu
    [FT, nahwu],
    [DMN, fiqih],
    [MSH, imla],
]);
Map_Jadwal.set(T1G, [
    // Senin
    [SBR, arab],
    [BCH, tauhid],
    [HR, nahwu],
    // Selasa
    [MSH, imla],
    [YDN, akhlaq],
    [HR, nahwu],
    // Rabu
    [HR, nahwu],
    [MIS, fiqih],
    [HR, nahwu],
    // Kamis
    [MIS, fiqih],
    [SBR, arab],
    [SBR, arab],
    // Jumat
    [NZR, shorof],
    [MIS, fiqih],
    [SBR, arab],
    // Sabtu
    [NZR, shorof],
    [ASR, tajwid],
    [BCH, tauhid],
]);
Map_Jadwal.set(T2A, [
    // Senin
    [SLH, nahwu],
    [YHY, arab],
    [WF, shorof],
    // Selasa
    [LBB, tajwid],
    [HMD, tauhid],
    [MRW, fiqih],
    // Rabu
    [MRW, fiqih],
    [SLH, nahwu],
    [MNJ, akhlaq],
    // Kamis
    [MNJ, akhlaq],
    [YHY, arab],
    [YHY, arab],
    // Jumat
    [YHY, arab],
    [SLH, nahwu],
    [HMD, tauhid],
    // Sabtu
    [SLH, nahwu],
    [MRW, fiqih],
    [WF, shorof],
]);
Map_Jadwal.set(T2B, [
    // Senin
    [LBB, tajwid],
    [SLH, nahwu],
    [YHY, arab],
    // Selasa
    [USY, tauhid],
    [MRW, fiqih],
    [WF, shorof],
    // Rabu
    [SLH, nahwu],
    [MRW, fiqih],
    [WF, shorof],
    // Kamis
    [YHY, arab],
    [MNJ, akhlaq],
    [SLH, nahwu],
    // Jumat
    [MRW, fiqih],
    [YHY, arab],
    [SLH, nahwu],
    // Sabtu
    [MNJ, akhlaq],
    [YHY, arab],
    [USY, tauhid],
]);
Map_Jadwal.set(T2C, [
    // Senin
    [YHY, arab],
    [LBB, tajwid],
    [MNJ, akhlaq],
    // Selasa
    [YHY, arab],
    [WF, shorof],
    [SLH, fiqih],
    // Rabu
    [HMD, tauhid],
    [MNJ, akhlaq],
    [SLH, nahwu],
    // Kamis
    [SLH, nahwu],
    [HMD, fiqih],
    [UMR, fiqih],
    // Jumat
    [SLH, nahwu],
    [HMD, tauhid],
    [YHY, arab],
    // Sabtu
    [YHY, arab],
    [WF, shorof],
    [SLH, nahwu],
]);
Map_Jadwal.set(T2D, [
    // Senin
    [RIF, arab],
    [MNJ, akhlaq],
    [BGS, fiqih],
    // Selasa
    [RIF, arab],
    [ASP, nahwu],
    [LBB, tajwid],
    // Rabu
    [MNJ, akhlaq],
    [SDQ, tauhid],
    [ASP, nahwu],
    // Kamis
    [BGS, fiqih],
    [ASP, nahwu],
    [WF, shorof],
    // Jumat
    [SDQ, tauhid],
    [BGS, fiqih],
    [RIF, arab],
    // Sabtu
    [WF, shorof],
    [RIF, arab],
    [ASP, nahwu],
]);
Map_Jadwal.set(T2E, [
    // Senin
    [MNR, nahwu],
    [WF, shorof],
    [RIF, arab],
    // Selasa
    [MNR, nahwu],
    [RIF, arab],
    [BGS, fiqih],
    // Rabu
    [SDQ, tauhid],
    [LBB, tajwid],
    [MNR, nahwu],
    // Kamis
    [MNR, nahwu],
    [WF, shorof],
    [MNJ, akhlaq],
    // Jumat
    [RIF, arab],
    [SDQ, tauhid],
    [BGS, fiqih],
    // Sabtu
    [RIF, arab],
    [BGS, fiqih],
    [MNJ, akhlaq],
]);
Map_Jadwal.set(T2F, [
    // Senin
    [WF, shorof],
    [RIF, arab],
    [LBB, tajwid],
    // Selasa
    [ANM, tauhid],
    [BGS, fiqih],
    [RIF, arab],
    // Rabu
    [BGS, fiqih],
    [URB, nahwu],
    [ANM, tauhid],
    // Kamis
    [WF, shorof],
    [BCH, akhlaq],
    [UHS, nahwu],
    // Jumat
    [UHS, nahwu],
    [RIF, arab],
    [BCH, akhlaq],
    // Sabtu
    [BGS, fiqih],
    [UTJ, nahwu],
    [RIF, arab],
]);
Map_Jadwal.set(T2G, [
    // Senin
    [UMR, nahwu],
    [MRJ, arab],
    [ANM, tauhid],
    // Selasa
    [RF, nahwu],
    [ANM, tauhid],
    [BCH, akhlaq],
    // Rabu
    [WF, nahwu],
    [BGS, fiqih],
    [BCH, akhlaq],
    // Kamis
    [MRJ, arab],
    [LBB, tajwid],
    [BGS, fiqih],
    // Jumat
    [MRJ, arab],
    [FQH, shorof],
    [UTJ, nahwu],
    // Sabtu
    [MRJ, arab],
    [FQH, shorof],
    [BGS, fiqih],
]);
Map_Jadwal.set(T2H, [
    // Senin
    [FRH, fiqih],
    [ANM, tauhid],
    [MRJ, arab],
    // Selasa
    [FQH, shorof],
    [LBB, tajwid],
    [MRJ, arab],
    // Rabu
    [FRH, fiqih],
    [FQH, shorof],
    [RF, nahwu],
    // Kamis
    [UMR, akhlaq],
    [DMN, nahwu],
    [ANM, tauhid],
    // Jumat
    [UMR, akhlaq],
    [UHS, nahwu],
    [MRJ, arab],
    // Sabtu
    [DRW, nahwu],
    [FRH, fiqih],
    [MRJ, arab],
]);
Map_Jadwal.set(T2I, [
    // Senin
    [MRJ, arab],
    [MNR, nahwu],
    [FRH, fiqih],
    // Selasa
    [MRJ, arab],
    [FQH, shorof],
    [ANM, tauhid],
    // Rabu
    [BCH, akhlaq],
    [MNR, nahwu],
    [FRH, fiqih],
    // Kamis
    [LBB, tajwid],
    [ANM, tauhid],
    [MRJ, arab],
    // Jumat
    [MNR, nahwu],
    [MRJ, arab],
    [FQH, shorof],
    // Sabtu
    [BCH, akhlaq],
    [MNR, nahwu],
    [FRH, fiqih],
]);
Map_Jadwal.set(T2J, [
    // Senin
    [ANM, tauhid],
    [FRH, fiqih],
    [UMR, akhlaq],
    // Selasa
    [UMR, akhlaq],
    [SBR, arab],
    [MNR, nahwu],
    // Rabu
    [FQH, shorof],
    [FRH, fiqih],
    [SBR, arab],
    // Kamis
    [ANM, tauhid],
    [MNR, nahwu],
    [LBB, tajwid],
    // Jumat
    [FQH, shorof],
    [SBR, arab],
    [MNR, nahwu],
    // Sabtu
    [FRH, fiqih],
    [SBR, arab],
    [MNR, nahwu],
]);
Map_Jadwal.set(T3A, [
    // Senin
    [SRR, nahwu],
    [BDL, arab],
    [URB, shorof],
    // Selasa
    [KHL, akhlaq],
    [DMN, fiqih],
    [URB, shorof],
    // Rabu
    [MZN, ilal],
    [DMN, fiqih],
    [KHL, akhlaq],
    // Kamis
    [BDL, arab],
    [SRR, nahwu],
    [DMN, fiqih],
    // Jumat
    [BDL, arab],
    [SRR, nahwu],
    [WHB, tajwid],
    // Sabtu
    [BDL, arab],
    [SDQ, tauhid],
    [SRR, nahwu],
]);
Map_Jadwal.set(T3B, [
    // Senin
    [BDL, arab],
    [URB, shorof],
    [KHL, akhlaq],
    // Selasa
    [DMN, fiqih],
    [KHL, akhlaq],
    [SRR, nahwu],
    // Rabu
    [DMN, fiqih],
    [MZN, ilal],
    [SDQ, tauhid],
    // Kamis
    [SRR, nahwu],
    [BDL, arab],
    [WHB, tajwid],
    // Jumat
    [URB, shorof],
    [BDL, arab],
    [SRR, nahwu],
    // Sabtu
    [DMN, fiqih],
    [SRR, nahwu],
    [BDL, arab],
]);
Map_Jadwal.set(T3C, [
    // Senin
    [USM, nahwu],
    [DMN, fiqih],
    [BDL, arab],
    // Selasa
    [HMD, shorof],
    [USM, nahwu],
    [KHL, akhlaq],
    // Rabu
    [USM, nahwu],
    [HMD, shorof],
    [WHB, tajwid],
    // Kamis
    [KHL, akhlaq],
    [USM, nahwu],
    [BDL, arab],
    // Jumat
    [DMN, fiqih],
    [MZN, ilal],
    [BDL, arab],
    // Sabtu
    [SDQ, tauhid],
    [BDL, arab],
    [DMN, fiqih],
]);
Map_Jadwal.set(T3E, [
    // Senin
    [UHS, fiqih],
    [KHL, akhlaq],
    [ASY, arab],
    // Selasa
    [MZN, ilal],
    [ASY, arab],
    [HMD, shorof],
    // Rabu
    [WHB, tajwid],
    [KHL, akhlaq],
    [UHS, fiqih],
    // Kamis
    [ASY, arab],
    [IDT, nahwu],
    [HMD, shorof],
    // Jumat
    [IDT, nahwu],
    [ASY, arab],
    [SDQ, tauhid],
    // Sabtu
    [UHS, fiqih],
    [IDT, nahwu],
    [IDT, nahwu],
]);
Map_Jadwal.set(T3F, [
    // Senin
    [ASY, arab],
    [UMR, akhlaq],
    [IDT, nahwu],
    // Selasa
    [UHS, fiqih],
    [WHB, tajwid],
    [UMR, akhlaq],
    // Rabu
    [AFF, tauhid],
    [IDT, nahwu],
    [HMD, shorof],
    // Kamis
    [UHS, fiqih],
    [ASY, arab],
    [MZN, ilal],
    // Jumat
    [ASY, arab],
    [IDT, nahwu],
    [UHS, fiqih],
    // Sabtu
    [IDT, nahwu],
    [ASY, arab],
    [HMD, shorof],
]);
Map_Jadwal.set(T3G, [
    // Senin
    [IDT, nahwu],
    [UHS, fiqih],
    [MSR, arab],
    // Selasa
    [AFF, tauhid],
    [UMR, akhlaq],
    [IDT, nahwu],
    // Rabu
    [IDT, nahwu],
    [UHS, fiqih],
    [MSR, arab],
    // Kamis
    [MZN, ilal],
    [MSR, arab],
    [IDT, nahwu],
    // Jumat
    [HMD, shorof],
    [WHB, tajwid],
    [UMR, akhlaq],
    // Sabtu
    [HMD, shorof],
    [UHS, fiqih],
    [MSR, arab],
]);
Map_Jadwal.set(T3H, [
    // Senin
    [AFF, tauhid],
    [MSR, arab],
    [MNS, fiqih],
    // Selasa
    [WHB, tajwid],
    [MZN, ilal],
    [MSR, arab],
    // Rabu
    [DRW, nahwu],
    [MNS, fiqih],
    [UMR, akhlaq],
    // Kamis
    [MSR, arab],
    [DRW, nahwu],
    [URB, shorof],
    // Jumat
    [MNS, fiqih],
    [UMR, akhlaq],
    [DRW, nahwu],
    // Sabtu
    [URB, shorof],
    [MSR, arab],
    [DRW, nahwu],
]);
Map_Jadwal.set(T3I, [
    // Senin
    [MSR, arab],
    [DRW, nahwu],
    [WHB, tajwid],
    // Selasa
    [MNS, fiqih],
    [MSR, arab],
    [MZN, ilal],
    // Rabu
    [MSR, arab],
    [AFF, tauhid],
    [MNS, fiqih],
    // Kamis
    [MNS, fiqih],
    [IDM, akhlaq],
    [DRW, nahwu],
    // Jumat
    [DRW, nahwu],
    [URB, shorof],
    [MSR, arab],
    // Sabtu
    [IDM, akhlaq],
    [DRW, nahwu],
    [URB, shorof],
]);
Map_Jadwal.set(T3J, [
    // Senin
    [URB, shorof],
    [ASY, arab],
    [DRW, nahwu],
    // Selasa
    [ASY, arab],
    [DRW, nahwu],
    [WHB, tajwid],
    // Rabu
    [MNS, fiqih],
    [DRW, nahwu],
    [IDM, akhlaq],
    // Kamis
    [AFF, tauhid],
    [MZN, ilal],
    [ASY, arab],
    // Jumat
    [IDM, akhlaq],
    [DRW, nahwu],
    [MNS, fiqih],
    // Sabtu
    [MNS, fiqih],
    [URB, shorof],
    [ASY, arab],
]);
Map_Jadwal.set(IST, [
    // Senin
    [MNJ, akhlaq],
    [MIS, miftah],
    [MIS, miftah],
    // Selasa
    [MRW, fiqih],
    [AFF, tauhid],
    [IBR, shorof],
    // Rabu
    [MIS, miftah],
    [IBR, shorof],
    [MRW, fiqih],
    // Kamis
    [ASR, tajwid],
    [MIS, nahwu],
    [MIS, nahwu],
    // Jumat
    [AFF, tauhid],
    [IBR, arab],
    [MIS, nahwu],
    // Sabtu
    [MRW, fiqih],
    [IBR, arab],
    [MIS, nahwu],
]);
Map_Jadwal.set(A1A, [
    // Senin
    [FTN, nahwu],
    [SDL, tauhid],
    [MSH, fiqih],
    // Selasa
    [SDL, tauhid],
    [IBR, arab],
    [MSH, fiqih],
    // Rabu
    [FTN, nahwu],
    [MSH, fiqih],
    [IBR, arab],
    // Kamis
    [IRF, akhlaq],
    [SBH, shorof],
    [MSH, fiqih],
    // Jumat
    [FTN, nahwu],
    [IRF, akhlaq],
    [IBR, arab],
    // Sabtu
    [IBR, arab],
    [FTN, nahwu],
    [SBH, shorof],
]);
Map_Jadwal.set(A1B, [
    // Senin
    [SBH, shorof],
    [FTN, nahwu],
    [SDL, tauhid],
    // Selasa
    [RID, arab],
    [MSH, fiqih],
    [SDL, tauhid],
    // Rabu
    [RID, arab],
    [FTN, nahwu],
    [MSH, fiqih],
    // Kamis
    [MSH, fiqih],
    [MSH, fiqih],
    [IRF, akhlaq],
    // Jumat
    [RID, arab],
    [FTN, nahwu],
    [IRF, akhlaq],
    // Sabtu
    [FTN, nahwu],
    [SBH, shorof],
    [RID, arab],
]);
Map_Jadwal.set(A1C, [
    // Senin
    [SDL, tauhid],
    [UHN, arab],
    [USM, nahwu],
    // Selasa
    [GFR, fiqih],
    [SDL, tauhid],
    [USM, nahwu],
    // Rabu
    [GFR, fiqih],
    [UHN, arab],
    [USM, nahwu],
    // Kamis
    [SBH, shorof],
    [IRF, akhlaq],
    [USM, nahwu],
    // Jumat
    [IRF, akhlaq],
    [UHN, arab],
    [GFR, fiqih],
    // Sabtu
    [SBH, shorof],
    [UHN, arab],
    [GFR, fiqih],
]);
Map_Jadwal.set(A1D, [
    // Senin
    [AZZ, nahwu],
    [RID, arab],
    [GFR, fiqih],
    // Selasa
    [AZZ, nahwu],
    [UMM, tauhid],
    [RID, arab],
    // Rabu
    [UMM, tauhid],
    [IRF, akhlaq],
    [SBH, shorof],
    // Kamis
    [RID, arab],
    [GFR, fiqih],
    [AZZ, nahwu],
    // Jumat
    [SBH, shorof],
    [GFR, fiqih],
    [RID, arab],
    // Sabtu
    [IRF, akhlaq],
    [GFR, fiqih],
    [AZZ, nahwu],
]);
Map_Jadwal.set(A1E, [
    // Senin
    [UMM, tauhid],
    [AZZ, nahwu],
    [SBH, shorof],
    // Selasa
    [UMM, tauhid],
    [USY, arab],
    [USY, arab],
    // Rabu
    [IRF, akhlaq],
    [AZZ, nahwu],
    [FDL, fiqih],
    // Kamis
    [FDL, fiqih],
    [FDL, fiqih],
    [SBH, shorof],
    // Jumat
    [AZZ, nahwu],
    [AZZ, nahwu],
    [FDL, fiqih],
    // Sabtu
    [USY, arab],
    [USY, arab],
    [IRF, akhlaq],
]);
Map_Jadwal.set(A1F, [
    // Senin
    [LTF, arab],
    [UMM, tauhid],
    [AZZ, nahwu],
    // Selasa
    [LTF, arab],
    [AZZ, nahwu],
    [SBH, shorof],
    // Rabu
    [LTF, arab],
    [UMM, tauhid],
    [IRF, akhlaq],
    // Kamis
    [LTF, arab],
    [AZZ, nahwu],
    [FDL, fiqih],
    // Jumat
    [FDL, fiqih],
    [FDL, fiqih],
    [SBH, shorof],
    // Sabtu
    [AZZ, nahwu],
    [IRF, akhlaq],
    [FDL, fiqih],
]);
Map_Jadwal.set(A2A, [
    // Senin
    [UTJ, nahwu],
    [ALW, fiqih],
    [RHL, balaghoh],
    // Selasa
    [UTJ, nahwu],
    [ALW, fiqih],
    [RF, ushul],
    // Rabu
    [FHM, arab],
    [FHM, arab],
    [UTJ, nahwu],
    // Kamis
    [ALW, fiqih],
    [UL, tauhid],
    [ABAH.madin, mustholah],
    // Jumat
    [RHL, balaghoh],
    [RF, ushul],
    [ALW, fiqih],
    // Sabtu
    [FHM, arab],
    [FHM, arab],
    [UTJ, nahwu],
]);
Map_Jadwal.set(A2B, [
    // Senin
    [RHL, arab],
    [UTJ, nahwu],
    [UTJ, nahwu],
    // Selasa
    [ALW, fiqih],
    [HLY, balaghoh],
    [RHL, arab],
    // Rabu
    [ALW, fiqih],
    [RHL, arab],
    [HLY, balaghoh],
    // Kamis
    [RF, ushul],
    [ALW, fiqih],
    [ABAH.madin, mustholah],
    // Jumat
    [UTJ, nahwu],
    [UTJ, nahwu],
    [UL, tauhid],
    // Sabtu
    [ALW, fiqih],
    [RHL, arab],
    [RF, ushul],
]);
Map_Jadwal.set(A2C, [
    // Senin
    [ALW, fiqih],
    [FHM, arab],
    [FHM, arab],
    // Selasa
    [RHL, balaghoh],
    [RF, nahwu],
    [ALW, fiqih],
    // Rabu
    [RF, nahwu],
    [ALW, fiqih],
    [FHM, arab],
    // Kamis
    [RHL, balaghoh],
    [RF, ushul],
    [ABAH.madin, mustholah],
    // Jumat
    [UL, tauhid],
    [ALW, fiqih],
    [RF, ushul],
    // Sabtu
    [RF, nahwu],
    [RF, nahwu],
    [FHM, arab],
]);
Map_Jadwal.set(A3A, [
    // Senin
    [HR, fiqih],
    [HR, fiqih],
    [ABD, ushul],
    // Selasa
    [HR, fiqih],
    [HR, fiqih],
    [ASP, tauhid],
    // Rabu
    [HLD, nahwu],
    [HLD, nahwu],
    [ABAH.madin, mustholah],
    // Kamis
    [ABAH.madin, balaghoh],
    [ABAH.madin, balaghoh],
    [ST, arab],
    // Jumat
    [HR, fiqih],
    [ST, arab],
    [ST, arab],
    // Sabtu
    [ABD, ushul],
    [HLD, nahwu],
    [HLD, nahwu],
]);
Map_Jadwal.set(A3B, [
    // Senin
    [HS, fiqih],
    [ABD, ushul],
    [SLD, nahwu],
    // Selasa
    [ASP, tauhid],
    [SLD, nahwu],
    [HS, fiqih],
    // Rabu
    [SLD, nahwu],
    [HS, fiqih],
    [ABAH.madin, mustholah],
    // Kamis
    [ABAH.madin, balaghoh],
    [ABAH.madin, balaghoh],
    [ST, arab],
    // Jumat
    [HS, fiqih],
    [ST, arab],
    [ST, arab],
    // Sabtu
    [HS, fiqih],
    [SLD, nahwu],
    [ABD, ushul],
]);
Map_Jadwal.set(A3C, [
    // Senin
    [ABD, ushul],
    [SLD, nahwu],
    [HS, fiqih],
    // Selasa
    [HS, fiqih],
    [HS, fiqih],
    [SLD, nahwu],
    // Rabu
    [HS, fiqih],
    [SLD, nahwu],
    [ABAH.madin, mustholah],
    // Kamis
    [ABAH.madin, balaghoh],
    [ABAH.madin, balaghoh],
    [ST, arab],
    // Jumat
    [ASP, tauhid],
    [ST, arab],
    [ST, arab],
    // Sabtu
    [SLD, nahwu],
    [ABD, ushul],
    [HS, fiqih],
]);
Map_Jadwal.set(MTP, [
    // Senin
    [AZZ, nahwu],
    [SHF, fiqih],
    [ABD, ushul],
    // Selasa
    [AZZ, nahwu],
    [USY, arab],
    [USY, arab],
    // Rabu
    [HLY, balaghoh],
    [HLY, balaghoh],
    [ABAH.madin, mustholah],
    // Kamis
    [AZZ, nahwu],
    [SHF, fiqih],
    [RF, tasme],
    // Jumat
    [RF, tasme],
    [_ust, _fan],
    [_ust, _fan],
    // Sabtu
    [AZZ, nahwu],
    [HLY, balaghoh],
    [USY, arab],
]);
Map_Jadwal.set(MTS, [
    // Senin
    [SHF, fiqih],
    [SHF, fiqih],
    [SHF, fiqih],
    // Selasa
    [HLY, balaghoh],
    [_ust, _fan],
    [_ust, _fan],
    // Rabu
    [UTJ, tasme],
    [UL, tauhid],
    [UL, tauhid],
    // Kamis
    [HR, nahwu],
    [HR, nahwu],
    [_ust, _fan],
    // Jumat
    [SHF, fiqih],
    [SHF, fiqih],
    [_ust, _fan],
    // Sabtu
    [SHF, fiqih],
    [HR, nahwu],
    [HR, nahwu],
]);

// fungsi tempatkan jika menggunakan map
for (const [kelas, jadwal] of Map_Jadwal.entries()) {
    jadwal.forEach((jadwal, index) => {
        const hari = NAMA_HARI[Math.floor(index / 3)];
        const jam = (index % 3) + 1;
        const [guru, fan] = jadwal;
        kelas.tempatkan(hari, jam, guru, fan);
    });
}

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
 * @description Jika array `argumen` sudah ada, `argumen` akan ditambahkan ke dalamnya;
 * jika tidak, akan dibuat array baru dengan `argumen` yang diberikan.
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

        if (["jadwal", "version"].includes(flag)) {
            nextArg = true;
        } else if (args[i + 1] && !args[i + 1].startsWith("--")) {
            nextArg = args[i + 1];
            i++; // Lewati argumen berikutnya sebab telah digunakan.
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
        "aplikasi Jadwal versi 1.3.\ndibuat oleh pemegang hak cipta: LitFill.\n",
    );
}

if (command.jadwal) {
    if (command.guru) {
        if (command.hari) {
            command.guru.forEach((kodeGuru) => {
                Guru.fromString(kodeGuru.toString())?.jadwal(
                    command.hari.toLocaleString(),
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
                    command.hari.toLocaleString(),
                );
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

["pesanWA1", "pesanWA2", "pesanWA"].forEach((key) => {
    if (command[key]) {
        command[key].forEach((value) => {
            if (typeof value === "string") {
                /** @type {"pagi"|"sore"|"full"} */
                let waktu;

                waktu =
                    key === "pesanWA1"
                        ? "pagi"
                        : key === "pesanWA2"
                          ? "sore"
                          : "full";

                new PengirimPesan(value)[waktu]();
            }
        });
    }
});

if (command.pesanIzin) {
    if (command.data) {
        const izin = new Perizinan(
            command.pesanIzin.toString(),
            command.data.toString(),
        );
        izin.kirimPesan();
    }
}

/**
 * Fungsi ini mencetak pesan error ke konsol jika flag tertentu tidak disertakan dalam argumen command line.
 *
 * @param {string} namaFlag - Nama flag yang diharapkan.
 * @author LitFill
 * @date 02/12/2023
 */
function noFlag(namaFlag) {
    console.error(
        `ERROR: Tolong masukkan flag ${namaFlag} beserta valuenya.\n`,
    );
}

/**
 * Mengembalikan string dengan huruf pertama setiap kata diubah menjadi huruf kapital.
 *
 * @param {String} str - String yang akan diubah.
 * @returns {String} - String baru dengan huruf pertama setiap kata menjadi huruf kapital.
 * @author LitFill
 * @date 25/11/2023
 */
function kap(str) {
    return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Fungsi ini mengambil array string sebagai input, memisahkan setiap string dengan "-",
 * dan mengembalikan array objek dengan properti guru, sebab, dan jam.
 * @param {string[]} data - Array string yang akan diproses.
 * @returns {Array<{guru: string, sebab: string, jam: Array<boolean>}>} - Array objek yang berisi informasi guru, sebab, dan jam.
 * @author LitFill
 * @date 014/12/2023
 */
function splitDash(data) {
    const obj = data.map((item) => {
        const [guru, sebab, jams] = item.split("-");
        const jam = Array.from(jams, (char) => Boolean(Number(char)));
        return { guru, sebab, jam };
    });
    return obj;
}

/* Testing */
// console.log(T1A); // sukses!
// NZR.jadwal(); // sukses!
// T1A.jadwal(); // sukses!
// Hari.jadwal("Senin"); // sukses!
// console.log(listKelas);
// console.log(KHL.jadwal("rabu")); //sukses!
// console.log(FT.jadwal(["selasa", "rabu"])); // sukses!
