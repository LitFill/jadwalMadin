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
     * @memberof Guru
     */
    static daftarkanFan(fan) {
        if (Array.isArray(fan)) {
            return fan.map((pelajaran) => pelajaran.nama);
        } else {
            return fan.nama;
        }
    }

    jadwal() {
        listKelas.forEach((kelas) => {
            for (let hari in kelas) {
                if (
                    [
                        "senin",
                        "selasa",
                        "rabu",
                        "kamis",
                        "jumat",
                        "sabtu",
                    ].includes(hari)
                ) {
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
    /**
     * Membuat instans Kelas baru.
     * @param {String} nama - Nama kelas.
     */
    constructor(nama) {
        this.nama = nama;
        this.senin = new Hari("Senin");
        this.selasa = new Hari("Selasa");
        this.rabu = new Hari("Rabu");
        this.kamis = new Hari("Kamis");
        this.jumat = new Hari("Jumat");
        this.sabtu = new Hari("Sabtu");
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

    jadwal() {
        for (let hari in this) {
            if (
                ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"].includes(
                    hari
                )
            ) {
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

    static jadwal(nama) {
        listKelas.forEach((kelas) => {
            for (let hari in kelas) {
                if (kelas[hari].nama === nama) {
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
    static Nahwu = new Fan("Nahwu");
    static Arab = new Fan("Bahasa Arab");
    static Fiqih = new Fan("Fiqih");
    static Shorof = new Fan("Shorof");
    static Tajwid = new Fan("Tajwid");
    static Tauhid = new Fan("Tauhid");
    static Akhlaq = new Fan("Akhlaq");
    static Imla = new Fan("Imla");

    constructor(nama) {
        this.nama = nama;
    }
}

/* Deklarasi Fan */
const nahwu = Fan.Nahwu;
const arab = Fan.Arab;
const fiqih = Fan.Fiqih;
const shorof = Fan.Shorof;
const tajwid = Fan.Tajwid;
const tauhid = Fan.Tauhid;
const akhlaq = Fan.Akhlaq;
const imla = Fan.Imla;

/*  Deklarasi Guru */
const NZR = new Guru("Nizar", nahwu);
const FT = new Guru("Fathur", nahwu);
const HR = new Guru("Heri", nahwu);
const FRZ = new Guru("Fakhrurozi", arab);
const FRQ = new Guru("Faruq", arab);
const FRH = new Guru("Farhan", arab);
const MST = new Guru("Musthofa Besuk", fiqih);
const GFR = new Guru("Musthofa Ghufron", fiqih);
const MIS = new Guru("Maisur", fiqih);
const HFD = new Guru("Hafidz", shorof);
const MNS = new Guru("Munshorif", shorof);
const MNR = new Guru("Munir Subkhi", shorof);
const ASR = new Guru("Asrofi", tajwid);
const LSN = new Guru("Mukhlasin", tauhid);
const BCH = new Guru("Bukhori", tauhid);
const YDN = new Guru("Yadin", akhlaq);
const MSH = new Guru("Mashudi", imla);
const FDL = new Guru("Fadlulloh Ulil Azmi", imla);

/* Deklarasi Kelas */
const listKelas = [];

// Tsanawiyah 1-A sampai 1-G
for (let i = "A".charCodeAt(0); i <= "G".charCodeAt(0); i++) {
    const kelas = new Kelas(`Tsanawiyah 1-${String.fromCharCode(i)}`);
    listKelas.push(kelas);
}

// Tsanawiyah 2-A sampai 2-J dan Tsanawiyah 3-A sampai 3-J
for (let j = 2; j <= 3; j++) {
    for (let i = "A".charCodeAt(0); i <= "J".charCodeAt(0); i++) {
        const kelas = new Kelas(`Tsanawiyah ${j}-${String.fromCharCode(i)}`);
        listKelas.push(kelas);
    }
}

// Aliyah 1-A sampai 1-F
for (let i = "A".charCodeAt(0); i <= "F".charCodeAt(0); i++) {
    const kelas = new Kelas(`Aliyah 1-${String.fromCharCode(i)}`);
    listKelas.push(kelas);
}

// Aliyah 2-A sampai 2-C dan Aliyah 3-A sampai 3-C
for (let j = 2; j <= 3; j++) {
    for (let i = "A".charCodeAt(0); i <= "C".charCodeAt(0); i++) {
        const kelas = new Kelas(`Aliyah ${j}-${String.fromCharCode(i)}`);
        listKelas.push(kelas);
    }
}

// Isti'dad dan Mutakhorijin
listKelas.push(new Kelas("Isti'dad"));
listKelas.push(new Kelas("Mutakhorijin"));

const [
    T1A,
    T1B,
    T1C,
    T1D,
    T1E,
    T1F,
    T1G,
    T2A,
    T2B,
    T2C,
    T2D,
    T2E,
    T2F,
    T2G,
    T2H,
    T2I,
    T2J,
    T3A,
    T3B,
    T3C,
    T3D,
    T3E,
    T3F,
    T3G,
    T3H,
    T3I,
    T3J,
    A1A,
    A1B,
    A1C,
    A1D,
    A1E,
    A1F,
    A2A,
    A2B,
    A2C,
    A3A,
    A3B,
    A3C,
    IST,
    MTH,
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
T1D.tempatkan("selasa", 1, MIS);
T1D.tempatkan("selasa", 2);
T1D.tempatkan("selasa", 3);
T1D.tempatkan("rabu", 1);
T1D.tempatkan("rabu", 2);
T1D.tempatkan("rabu", 3);
T1D.tempatkan("kamis", 1);
T1D.tempatkan("kamis", 2);
T1D.tempatkan("kamis", 3);
T1D.tempatkan("jumat", 1);
T1D.tempatkan("jumat", 2);
T1D.tempatkan("jumat", 3);
T1D.tempatkan("sabtu", 1);
T1D.tempatkan("sabtu", 2);
T1D.tempatkan("sabtu", 3);

/* Testing */
// console.log(T1A); // sukses!
// NZR.jadwal(); // sukses!
// T1A.jadwal(); // sukses!
// Hari.jadwal("Senin"); // sukses!
