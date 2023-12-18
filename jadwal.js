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
                                `Ust. ${this.nama} mengajar kelas ${kelas.nama
                                } fan ${kelas[hari][i].fan} di hari ${kelas[hari].nama
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
            HFD: HFD,
            GFR: GFR,
            IBR: IBR,
            RHL: RHL,
            UTJ: UTJ,
            MIS: MIS,
            MRJ: MRJ,
            MSH: MSH,
            MST: MST,
            SHF: SHF,
            FDL: FDL,
            IDT: IDT,
            IDM: IDM,
            HLY: HLY,
            UHS: UHS,
            UHN: UHN,
            HR: HR,
            IDS: IDS,
            ADN: ADN,
            YHY: YHY,
            BDL: BDL,
            SLD: SLD,
            LSN: LSN,
            SDL: SDL,
            UMM: UMM,
            FRZ: FRZ,
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
            FRQ: FRQ,
            WF: WF,
            AZZ: AZZ,
            LTF: LTF,
            UL: UL,
            HS: HS,
            _ust: _ust,
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
                                `Abah mucal kelas ${kelas.nama} fan ${kelas[hari][i].fan
                                } di hari ${kelas[hari].nama} jam ke-${i + 1}.`
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
                `ERROR: Ust. ${guru.nama} tidak mengajar fan ${fan.nama}.\nLOK  : kelas ${this.nama} / ${hari}:${jam}.`
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
                        `Kelas ${this.nama} di hari ${this[hari].nama} jam ke-${i + 1
                        } diajar oleh Ust. ${this[hari][i].guru} fan ${this[hari][i].fan
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
                                `Di hari ${kelas[hari].nama} jam ke-${i + 1
                                } kelas ${kelas.nama} diajar oleh Ust. ${kelas[hari][i].guru
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
            PengirimPesan.TANGGAL_FULL_FORMAT
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
                "Error: Tanggal harus diinisialisasi terlebih dahulu."
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
                "Error: Tanggal harus diinisialisasi terlebih dahulu."
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
                        PengirimPesan.DURASI_JAM_PAGI
                    )
                    : this.tambahMenit(
                        PengirimPesan.JAM_PAGI,
                        2 * PengirimPesan.DURASI_JAM_PAGI +
                        PengirimPesan.DURASI_ISTIRAHAT
                    );
        const waktuAkhir = this.tambahMenit(
            waktuAwal,
            PengirimPesan.DURASI_JAM_PAGI
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
                        PengirimPesan.DURASI_JAM_SORE_1
                    )
                    : this.tambahMenit(
                        PengirimPesan.JAM_SORE,
                        PengirimPesan.DURASI_JAM_SORE_1 +
                        PengirimPesan.DURASI_JAM_SORE
                    );
        const waktuAkhir = this.tambahMenit(
            waktuAwal,
            jam === 1
                ? PengirimPesan.DURASI_JAM_SORE_1
                : PengirimPesan.DURASI_JAM_SORE
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
const JBR = new Guru("Jabir", nahwu);
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

/** @type {{ [kelas: string]: [Guru, Fan][] }} */
const JADWAL_MADIN = {
    T1A: [
        [MNS, shorof],
        [FRZ, arab],
        [FDL, imla],
        [NZR, nahwu],
        [GFR, fiqih],
        [MNS, shorof],
        [FRZ, arab],
        [ASR, tajwid],
        [GFR, fiqih],
        [NZR, nahwu],
        [FRZ, arab],
        [GFR, fiqih],
        [LSN, tauhid],
        [NZR, nahwu],
        [YDN, akhlaq],
        [LSN, tauhid],
        [NZR, nahwu],
        [FRZ, arab],
    ],
    T1B: [
        [NZR, nahwu],
        [FDL, imla],
        [YDN, akhlaq],
        [ASR, tajwid],
        [LSN, tauhid],
        [FRZ, arab],
        [NZR, nahwu],
        [FRZ, arab],
        [MST, fiqih],
        [LSN, tauhid],
        [NZR, nahwu],
        [FRZ, arab],
        [FRZ, arab],
        [MST, fiqih],
        [NZR, nahwu],
        [MST, fiqih],
        [MNS, shorof],
        [MNS, shorof],
    ],
    T1C: [
        [FDL, imla],
        [FRQ, arab],
        [MST, fiqih],
        [LSN, tauhid],
        [NZR, nahwu],
        [FRQ, arab],
        [MNR, shorof],
        [NZR, nahwu],
        [FRQ, arab],
        [MST, fiqih],
        [LSN, tauhid],
        [MNR, shorof],
        [NZR, nahwu],
        [FRQ, arab],
        [MST, fiqih],
        [NZR, nahwu],
        [YDN, akhlaq],
        [ASR, tajwid],
    ],
    T1D: [
        [LSN, tauhid],
        [MSH, imla],
        [FRQ, arab],
        [HFD, shorof],
        [MIS, fiqih],
        [FT, nahwu],
        [FT, nahwu],
        [FRQ, arab],
        [ASR, tajwid],
        [YDN, akhlaq],
        [FT, nahwu],
        [FRQ, arab],
        [MIS, fiqih],
        [LSN, tauhid],
        [FT, nahwu],
        [HFD, shorof],
        [MIS, fiqih],
        [FRQ, arab],
    ],
    T1E: [
        [MST, fiqih],
        [LSN, tauhid],
        [FRZ, arab],
        [FRZ, arab],
        [ASR, tajwid],
        [HFD, shorof],
        [MST, fiqih],
        [FT, nahwu],
        [HFD, shorof],
        [FT, nahwu],
        [YDN, akhlaq],
        [FT, nahwu],
        [MST, fiqih],
        [FT, nahwu],
        [FRZ, arab],
        [FRZ, arab],
        [LSN, tauhid],
        [MSH, imla],
    ],
    T1F: [
        [FRQ, arab],
        [HFD, shorof],
        [BCH, tauhid],
        [FT, nahwu],
        [FT, nahwu],
        [MIS, fiqih],
        [MIS, fiqih],
        [HFD, shorof],
        [FT, nahwu],
        [FRQ, arab],
        [FRQ, arab],
        [BCH, tauhid],
        [FT, nahwu],
        [MSH, imla],
        [ASR, tajwid],
        [MIS, fiqih],
        [FRQ, arab],
        [YDN, akhlaq],
    ],
    T1G: [
        [HFD, shorof],
        [YDN, akhlaq],
        [HR, nahwu],
        [FRH, arab],
        [BCH, tauhid],
        [HR, nahwu],
        [HR, nahwu],
        [MIS, fiqih],
        [HR, nahwu],
        [MIS, fiqih],
        [FRH, arab],
        [FRH, arab],
        [FRH, arab],
        [MIS, fiqih],
        [MSH, imla],
        [ASR, tajwid],
        [HFD, shorof],
        [BCH, tauhid],
    ],
    T2A: [
        [SLH, nahwu],
        [YHY, arab],
        [WF, shorof],
        [LBB, tajwid],
        [HMD, tauhid],
        [MRW, fiqih],
        [MRW, fiqih],
        [SLH, nahwu],
        [MNJ, akhlaq],
        [MNJ, akhlaq],
        [YHY, arab],
        [YHY, arab],
        [YHY, arab],
        [SLH, nahwu],
        [HMD, tauhid],
        [SLH, nahwu],
        [MRW, fiqih],
        [WF, shorof],
    ],
    T2B: [
        [LBB, tajwid],
        [SLH, nahwu],
        [YHY, arab],
        [USY, tauhid],
        [MRW, fiqih],
        [WF, shorof],
        [SLH, nahwu],
        [MRW, fiqih],
        [WF, shorof],
        [YHY, arab],
        [MNJ, akhlaq],
        [SLH, nahwu],
        [MRW, fiqih],
        [YHY, arab],
        [SLH, nahwu],
        [MNJ, akhlaq],
        [YHY, arab],
        [USY, tauhid],
    ],
    T2C: [
        [YHY, arab],
        [LBB, tajwid],
        [MNJ, akhlaq],
        [YHY, arab],
        [WF, shorof],
        [MST, fiqih],
        [HMD, tauhid],
        [MNJ, akhlaq],
        [SLH, nahwu],
        [SLH, nahwu],
        [MST, fiqih],
        [MST, fiqih],
        [SLH, nahwu],
        [HMD, tauhid],
        [YHY, arab],
        [YHY, arab],
        [WF, shorof],
        [SLH, nahwu],
    ],
    T2D: [
        [RIF, arab],
        [MNJ, akhlaq],
        [BGS, fiqih],
        [RIF, arab],
        [ASP, nahwu],
        [LBB, tajwid],
        [MNJ, akhlaq],
        [SDQ, tauhid],
        [ASP, nahwu],
        [BGS, fiqih],
        [ASP, nahwu],
        [WF, shorof],
        [SDQ, tauhid],
        [BGS, fiqih],
        [RIF, arab],
        [WF, shorof],
        [RIF, arab],
        [ASP, nahwu],
    ],
    T2E: [
        [MNR, nahwu],
        [WF, shorof],
        [RIF, arab],
        [MNR, nahwu],
        [RIF, arab],
        [BGS, fiqih],
        [SDQ, tauhid],
        [LBB, tajwid],
        [MNR, nahwu],
        [MNR, nahwu],
        [WF, shorof],
        [MNJ, akhlaq],
        [RIF, arab],
        [SDQ, tauhid],
        [BGS, fiqih],
        [RIF, arab],
        [BGS, fiqih],
        [MNJ, akhlaq],
    ],
    T2F: [
        [WF, shorof],
        [RIF, arab],
        [LBB, tajwid],
        [ANM, tauhid],
        [BGS, fiqih],
        [RIF, arab],
        [BGS, fiqih],
        [IDS, nahwu],
        [ANM, tauhid],
        [WF, shorof],
        [BCH, akhlaq],
        [IDS, nahwu],
        [IDS, nahwu],
        [RIF, arab],
        [BCH, akhlaq],
        [BGS, fiqih],
        [IDS, nahwu],
        [RIF, arab],
    ],
    T2G: [
        [IDS, nahwu],
        [MRJ, arab],
        [ANM, tauhid],
        [IDS, nahwu],
        [ANM, tauhid],
        [BCH, akhlaq],
        [IDS, nahwu],
        [BGS, fiqih],
        [BCH, akhlaq],
        [MRJ, arab],
        [LBB, tajwid],
        [BGS, fiqih],
        [MRJ, arab],
        [FQH, shorof],
        [IDS, nahwu],
        [MRJ, arab],
        [FQH, shorof],
        [BGS, fiqih],
    ],
    T2H: [
        [ADN, fiqih],
        [ANM, tauhid],
        [MRJ, arab],
        [FQH, shorof],
        [LBB, tajwid],
        [MRJ, arab],
        [ADN, fiqih],
        [FQH, shorof],
        [IDS, nahwu],
        [UMR, akhlaq],
        [IDS, nahwu],
        [ANM, tauhid],
        [UMR, akhlaq],
        [IDS, nahwu],
        [MRJ, arab],
        [IDS, nahwu],
        [ADN, fiqih],
        [MRJ, arab],
    ],
    T2I: [
        [MRJ, arab],
        [MNR, nahwu],
        [ADN, fiqih],
        [MRJ, arab],
        [FQH, shorof],
        [ANM, tauhid],
        [BCH, akhlaq],
        [MNR, nahwu],
        [ADN, fiqih],
        [LBB, tajwid],
        [ANM, tauhid],
        [MRJ, arab],
        [MNR, nahwu],
        [MRJ, arab],
        [FQH, shorof],
        [BCH, akhlaq],
        [MNR, nahwu],
        [ADN, fiqih],
    ],
    T2J: [
        [ANM, tauhid],
        [ADN, fiqih],
        [UMR, akhlaq],
        [UMR, akhlaq],
        [FRH, arab],
        [MNR, nahwu],
        [FQH, shorof],
        [ADN, fiqih],
        [FRH, arab],
        [ANM, tauhid],
        [MNR, nahwu],
        [LBB, tajwid],
        [FQH, shorof],
        [FRH, arab],
        [MNR, nahwu],
        [ADN, fiqih],
        [FRH, arab],
        [MNR, nahwu],
    ],
    T3A: [
        [SRR, nahwu],
        [BDL, arab],
        [URB, shorof],
        [KHL, akhlaq],
        [DMN, fiqih],
        [URB, shorof],
        [MZN, ilal],
        [DMN, fiqih],
        [KHL, akhlaq],
        [BDL, arab],
        [SRR, nahwu],
        [DMN, fiqih],
        [BDL, arab],
        [SRR, nahwu],
        [WHB, tajwid],
        [BDL, arab],
        [SDQ, tauhid],
        [SRR, nahwu],
    ],
    T3B: [
        [BDL, arab],
        [URB, shorof],
        [KHL, akhlaq],
        [DMN, fiqih],
        [KHL, akhlaq],
        [SRR, nahwu],
        [DMN, fiqih],
        [MZN, ilal],
        [SDQ, tauhid],
        [SRR, nahwu],
        [BDL, arab],
        [WHB, tajwid],
        [URB, shorof],
        [BDL, arab],
        [SRR, nahwu],
        [DMN, fiqih],
        [SRR, nahwu],
        [BDL, arab],
    ],
    T3C: [
        [USM, nahwu],
        [DMN, fiqih],
        [BDL, arab],
        [HMD, shorof],
        [USM, nahwu],
        [KHL, akhlaq],
        [USM, nahwu],
        [HMD, shorof],
        [WHB, tajwid],
        [KHL, akhlaq],
        [USM, nahwu],
        [BDL, arab],
        [DMN, fiqih],
        [MZN, ilal],
        [BDL, arab],
        [SDQ, tauhid],
        [BDL, arab],
        [DMN, fiqih],
    ],
    T3E: [
        [UHS, fiqih],
        [KHL, akhlaq],
        [ASY, arab],
        [MZN, ilal],
        [ASY, arab],
        [HMD, shorof],
        [WHB, tajwid],
        [KHL, akhlaq],
        [UHS, fiqih],
        [ASY, arab],
        [IDT, nahwu],
        [HMD, shorof],
        [IDT, nahwu],
        [ASY, arab],
        [SDQ, tauhid],
        [UHS, fiqih],
        [IDT, nahwu],
        [IDT, nahwu],
    ],
    T3F: [
        [ASY, arab],
        [UMR, akhlaq],
        [IDT, nahwu],
        [UHS, fiqih],
        [WHB, tajwid],
        [UMR, akhlaq],
        [AFF, tauhid],
        [IDT, nahwu],
        [HMD, shorof],
        [UHS, fiqih],
        [ASY, arab],
        [MZN, ilal],
        [ASY, arab],
        [IDT, nahwu],
        [UHS, fiqih],
        [IDT, nahwu],
        [ASY, arab],
        [HMD, shorof],
    ],
    T3G: [
        [IDT, nahwu],
        [UHS, fiqih],
        [MSR, arab],
        [AFF, tauhid],
        [UMR, akhlaq],
        [IDT, nahwu],
        [IDT, nahwu],
        [UHS, fiqih],
        [MSR, arab],
        [MZN, ilal],
        [MSR, arab],
        [IDT, nahwu],
        [HMD, shorof],
        [WHB, tajwid],
        [UMR, akhlaq],
        [HMD, shorof],
        [UHS, fiqih],
        [MSR, arab],
    ],
    T3H: [
        [AFF, tauhid],
        [MSR, arab],
        [MNS, fiqih],
        [WHB, tajwid],
        [MZN, ilal],
        [MSR, arab],
        [DRW, nahwu],
        [MNS, fiqih],
        [UMR, akhlaq],
        [MSR, arab],
        [DRW, nahwu],
        [URB, shorof],
        [MNS, fiqih],
        [UMR, akhlaq],
        [DRW, nahwu],
        [URB, shorof],
        [MSR, arab],
        [DRW, nahwu],
    ],
    T3I: [
        [MSR, arab],
        [DRW, nahwu],
        [WHB, tajwid],
        [MNS, fiqih],
        [MSR, arab],
        [MZN, ilal],
        [MSR, arab],
        [AFF, tauhid],
        [MNS, fiqih],
        [MNS, fiqih],
        [IDM, akhlaq],
        [DRW, nahwu],
        [DRW, nahwu],
        [URB, shorof],
        [MSR, arab],
        [IDM, akhlaq],
        [DRW, nahwu],
        [URB, shorof],
    ],
    T3J: [
        [URB, shorof],
        [ASY, arab],
        [DRW, nahwu],
        [ASY, arab],
        [DRW, nahwu],
        [WHB, tajwid],
        [MNS, fiqih],
        [DRW, nahwu],
        [IDM, akhlaq],
        [AFF, tauhid],
        [MZN, ilal],
        [ASY, arab],
        [IDM, akhlaq],
        [DRW, nahwu],
        [MNS, fiqih],
        [MNS, fiqih],
        [URB, shorof],
        [ASY, arab],
    ],
    IST: [
        [MNJ, akhlaq],
        [AFF, tauhid],
        [HFD, miftah],
        [MRW, fiqih],
        [HFD, miftah],
        [IBR, shorof],
        [HFD, miftah],
        [IBR, shorof],
        [MRW, fiqih],
        [ASR, tajwid],
        [MIS, nahwu],
        [MIS, nahwu],
        [AFF, tauhid],
        [IBR, arab],
        [MIS, nahwu],
        [MRW, fiqih],
        [IBR, arab],
        [MIS, nahwu],
    ],
    A1A: [
        [FTN, nahwu],
        [SDL, tauhid],
        [MSH, fiqih],
        [SDL, tauhid],
        [IBR, arab],
        [MSH, fiqih],
        [FTN, nahwu],
        [MSH, fiqih],
        [IBR, arab],
        [IRF, akhlaq],
        [SBH, shorof],
        [MSH, fiqih],
        [FTN, nahwu],
        [IRF, akhlaq],
        [IBR, arab],
        [IBR, arab],
        [FTN, nahwu],
        [SBH, shorof],
    ],
    A1B: [
        [SBH, shorof],
        [FTN, nahwu],
        [SDL, tauhid],
        [IBR, arab],
        [MSH, fiqih],
        [SDL, tauhid],
        [IBR, arab],
        [FTN, nahwu],
        [MSH, fiqih],
        [MSH, fiqih],
        [MSH, fiqih],
        [IRF, akhlaq],
        [IBR, arab],
        [FTN, nahwu],
        [IRF, akhlaq],
        [FTN, nahwu],
        [SBH, shorof],
        [IBR, arab],
    ],
    A1C: [
        [SDL, tauhid],
        [UHN, arab],
        [USM, nahwu],
        [GFR, fiqih],
        [SDL, tauhid],
        [USM, nahwu],
        [GFR, fiqih],
        [UHN, arab],
        [USM, nahwu],
        [SBH, shorof],
        [IRF, akhlaq],
        [USM, nahwu],
        [IRF, akhlaq],
        [UHN, arab],
        [GFR, fiqih],
        [SBH, shorof],
        [UHN, arab],
        [GFR, fiqih],
    ],
    A1D: [
        [AZZ, nahwu],
        [FRH, arab],
        [GFR, fiqih],
        [AZZ, nahwu],
        [UMM, tauhid],
        [FRH, arab],
        [UMM, tauhid],
        [IRF, akhlaq],
        [SBH, shorof],
        [FRH, arab],
        [GFR, fiqih],
        [AZZ, nahwu],
        [SBH, shorof],
        [GFR, fiqih],
        [FRH, arab],
        [IRF, akhlaq],
        [GFR, fiqih],
        [AZZ, nahwu],
    ],
    A1E: [
        [UMM, tauhid],
        [AZZ, nahwu],
        [SBH, shorof],
        [UMM, tauhid],
        [USY, arab],
        [USY, arab],
        [IRF, akhlaq],
        [AZZ, nahwu],
        [FDL, fiqih],
        [FDL, fiqih],
        [FDL, fiqih],
        [SBH, shorof],
        [AZZ, nahwu],
        [AZZ, nahwu],
        [FDL, fiqih],
        [USY, arab],
        [USY, arab],
        [IRF, akhlaq],
    ],
    A1F: [
        [LTF, arab],
        [UMM, tauhid],
        [AZZ, nahwu],
        [LTF, arab],
        [AZZ, nahwu],
        [SBH, shorof],
        [LTF, arab],
        [UMM, tauhid],
        [IRF, akhlaq],
        [LTF, arab],
        [AZZ, nahwu],
        [FDL, fiqih],
        [FDL, fiqih],
        [FDL, fiqih],
        [SBH, shorof],
        [AZZ, nahwu],
        [IRF, akhlaq],
        [FDL, fiqih],
    ],
    A2A: [
        [UTJ, nahwu],
        [ALW, fiqih],
        [RHL, balaghoh],
        [UTJ, nahwu],
        [ALW, fiqih],
        [RF, ushul],
        [FHM, arab],
        [FHM, arab],
        [UTJ, nahwu],
        [ALW, fiqih],
        [UL, tauhid],
        [ABAH.madin, mustholah],
        [RHL, balaghoh],
        [RF, ushul],
        [ALW, fiqih],
        [FHM, arab],
        [FHM, arab],
        [UTJ, nahwu],
    ],
    A2B: [
        [RHL, arab],
        [UTJ, nahwu],
        [UTJ, nahwu],
        [ALW, fiqih],
        [HLY, balaghoh],
        [RHL, arab],
        [ALW, fiqih],
        [RHL, arab],
        [HLY, balaghoh],
        [RF, ushul],
        [ALW, fiqih],
        [ABAH.madin, mustholah],
        [UTJ, nahwu],
        [UTJ, nahwu],
        [UL, tauhid],
        [ALW, fiqih],
        [RHL, arab],
        [RF, ushul],
    ],
    A2C: [
        [ALW, fiqih],
        [FHM, arab],
        [FHM, arab],
        [RHL, balaghoh],
        [RF, nahwu],
        [ALW, fiqih],
        [RF, nahwu],
        [ALW, fiqih],
        [FHM, arab],
        [RHL, balaghoh],
        [RF, ushul],
        [ABAH.madin, mustholah],
        [UL, tauhid],
        [ALW, fiqih],
        [RF, ushul],
        [RF, nahwu],
        [RF, nahwu],
        [FHM, arab],
    ],
    A3A: [
        [HR, fiqih],
        [HR, fiqih],
        [ABD, ushul],
        [HR, fiqih],
        [HR, fiqih],
        [ASP, tauhid],
        [HLD, nahwu],
        [HLD, nahwu],
        [ABAH.madin, mustholah],
        [ABAH.madin, balaghoh],
        [ABAH.madin, balaghoh],
        [ST, arab],
        [HR, fiqih],
        [ST, arab],
        [ST, arab],
        [ABD, ushul],
        [HLD, nahwu],
        [HLD, nahwu],
    ],
    A3B: [
        [HS, fiqih],
        [ABD, ushul],
        [SLD, nahwu],
        [ASP, tauhid],
        [SLD, nahwu],
        [HS, fiqih],
        [SLD, nahwu],
        [HS, fiqih],
        [ABAH.madin, mustholah],
        [ABAH.madin, balaghoh],
        [ABAH.madin, balaghoh],
        [ST, arab],
        [HS, fiqih],
        [ST, arab],
        [ST, arab],
        [HS, fiqih],
        [SLD, nahwu],
        [ABD, ushul],
    ],
    A3C: [
        [ABD, ushul],
        [SLD, nahwu],
        [HS, fiqih],
        [HS, fiqih],
        [HS, fiqih],
        [SLD, nahwu],
        [HS, fiqih],
        [SLD, nahwu],
        [ABAH.madin, mustholah],
        [ABAH.madin, balaghoh],
        [ABAH.madin, balaghoh],
        [ST, arab],
        [ASP, tauhid],
        [ST, arab],
        [ST, arab],
        [SLD, nahwu],
        [ABD, ushul],
        [HS, fiqih],
    ],
    MTP: [
        [AZZ, nahwu],
        [SHF, fiqih],
        [ABD, ushul],
        [AZZ, nahwu],
        [USY, arab],
        [USY, arab],
        [HLY, balaghoh],
        [HLY, balaghoh],
        [ABAH.madin, mustholah],
        [AZZ, nahwu],
        [SHF, fiqih],
        [RF, tasme],
        [RF, tasme],
        [_ust, _fan],
        [_ust, _fan],
        [AZZ, nahwu],
        [HLY, balaghoh],
        [USY, arab],
    ],
    MTS: [
        [SHF, fiqih],
        [SHF, fiqih],
        [SHF, fiqih],
        [HLY, balaghoh],
        [_ust, _fan],
        [_ust, _fan],
        [UTJ, tasme],
        [UL, tauhid],
        [UL, tauhid],
        [HR, nahwu],
        [HR, nahwu],
        [_ust, _fan],
        [SHF, fiqih],
        [SHF, fiqih],
        [_ust, _fan],
        [HR, nahwu],
        [HR, nahwu],
        [SHF, fiqih],
    ],
};

//fungsi tempatkan
for (const kelas in JADWAL_MADIN) {
    JADWAL_MADIN[kelas].forEach((jadwal, index) => {
        const hari = NAMA_HARI[Math.floor(index / 3)];
        const jam = (index % 3) + 1;
        const guru = jadwal[0];
        const fan = jadwal[1];
        Kelas.fromString(kelas)?.tempatkan(hari, jam, guru, fan);
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
        "aplikasi Jadwal versi 1.3.\ndibuat oleh pemegang hak cipta: LitFill.\n"
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
            command.data.toString()
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
        `ERROR: Tolong masukkan flag ${namaFlag} beserta valuenya.\n`
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
