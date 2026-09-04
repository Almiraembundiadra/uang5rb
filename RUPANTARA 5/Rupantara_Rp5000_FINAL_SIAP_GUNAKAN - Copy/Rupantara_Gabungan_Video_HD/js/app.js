// ===== src/data/banknote5000kData.ts =====
const BANKNOTE_5000_INFO = {
    nominal: 'Rp5.000',
    nominalNumeric: 5000,
    terbilang: 'Lima Ribu Rupiah',
    emisi: 'Tahun Emisi (TE) 2022',
    tanggalPengeluaran: '17 Agustus 2022',
    ukuran: '151 x 65 mm',
    warna: 'Oranye Khas Rp5.000',
    bahan: 'Kertas Serat Kapas Berkualitas Tinggi (Watermarked Banknote Paper)',
    pahlawanUtama: 'Dr. K.H. Idham Chalid',
    gelarPahlawan: 'Tokoh Nasional Indonesia',
    flora: 'Bunga Sedap Malam (Polianthes tuberosa)',
    faunaDanAlam: 'Taman Nasional Bromo Tengger Semeru',
    tari: 'Tari Gambyong (Jawa Tengah)',
    deskripsiRingkas: 'Pecahan tertinggi Republik Indonesia yang menggambarkan semangat Proklamasi Kemerdekaan 1945, kekayaan alam bahari Taman Nasional Bromo, dan keluhuran budaya nusantara.'
};
const HOTSPOTS_5000_FRONT = [
    {
        id: 'hero',
        top: '48%',
        left: '52%',
        title: 'Pahlawan Nasional Dr. K.H. Idham Chalid',
        desc: 'Potret Dr. K.H. Idham Chalid sebagai tokoh nasional Indonesia pada pecahan Rp5.000 TE 2022 dengan teknik cetak intaglio bertekstur timbul.',
        category: 'tokoh',
        side: 'front'
    },
    {
        id: 'nominal_top',
        top: '20%',
        left: '14%',
        title: 'Angka Nominal 5000',
        desc: 'Angka nominal tebal dan jelas dengan cetak intaglio bertekstur kasar saat diraba jari.',
        category: 'keamanan',
        side: 'front'
    },
    {
        id: 'garuda',
        top: '24%',
        left: '84%',
        title: 'Lambang Negara Garuda Pancasila',
        desc: 'Lambang Negara Garuda Pancasila dicetak dengan presisi tinggi dan warna merah keemasan tegas sebagai lambang kedaulatan NKRI.',
        category: 'keamanan',
        side: 'front'
    },
    {
        id: 'bi_spark',
        top: '56%',
        left: '12%',
        title: 'BI-SPARK (Bunga Sedap Malam)',
        desc: 'Fitur keamanan optik canggih berupa ornamen Bunga Sedap Malam yang akan berubah warna (color shifting) dari keemasan menjadi kehijauan saat dilihat dari berbagai sudut pandang.',
        category: 'keamanan',
        side: 'front'
    },
    {
        id: 'watermark',
        top: '38%',
        left: '26%',
        title: 'Tanda Air & Electrotype Rp5.000',
        desc:  'Tanda air dan electrotype nominal Rp5.000 ditampilkan sebagai fitur tembus cahaya dari gambar uang; tidak ada logo logo sintetis yang ditambahkan di atas gambar.',
        category: 'watermark',
        side: 'front'
    },
    {
        id: 'rectoverso',
        top: '64%',
        left: '88%',
        title: 'Rectoverso (Gambar Saling Isi Logo BI)',
        desc: 'Potongan ornamen di sisi depan dan belakang yang saling melengkapi secara presisi membentuk logo Bank Indonesia utuh saat diterawang ke arah cahaya.',
        category: 'keamanan',
        side: 'front'
    },
    {
        id: 'blind_code_left',
        top: '50%',
        left: '4%',
        title: 'Kode Tuna Netra (Blind Code - Kiri)',
        desc: 'Sepasang garis taktil kasar ganda di sisi kiri untuk mempermudah penyandang disabilitas netra mengidentifikasi pecahan Rp5.000.',
        category: 'keamanan',
        side: 'front'
    },
    {
        id: 'blind_code_right',
        top: '50%',
        left: '96%',
        title: 'Kode Tuna Netra (Blind Code - Kanan)',
        desc: 'Sepasang garis taktil ganda di sisi kanan yang terasa kasar saat diraba.',
        category: 'keamanan',
        side: 'front'
    },
    {
        id: 'thread',
        top: '72%',
        left: '32%',
        title: 'Benang Pengaman (Security Thread)',
        desc:  'Benang pengaman memuat teks mikro BI dan fitur keamanan Rp5.000 dan memancarkan efek gerak dinamis saat dimiringkan serta berpendar di bawah sinar UV.',
        category: 'keamanan',
        side: 'front'
    }
];
const HOTSPOTS_5000_BACK = [
    {id:'tari_gambyong', top:'52%', left:'55%', title:'Tari Gambyong', desc:'Tari Gambyong merupakan budaya Jawa Tengah yang ditampilkan pada uang Rp5.000 TE 2022 sebagai identitas budaya Indonesia.', category:'budaya', side:'back'},
    {id:'bromo', top:'38%', left:'25%', title:'Taman Nasional Bromo Tengger Semeru', desc:'Ilustrasi alam Gunung Bromo dan kawasan Taman Nasional Bromo Tengger Semeru pada uang Rp5.000 TE 2022.', category:'alam', side:'back'},
    {id:'sedap_malam', top:'18%', left:'38%', title:'Bunga Sedap Malam', desc:'Bunga Sedap Malam menjadi flora khas yang ditampilkan pada uang Rp5.000 TE 2022.', category:'flora', side:'back'},
    {id:'nomor_seri', top:'76%', left:'25%', title:'Nomor Seri Uang Rp5.000', desc:'Nomor seri merupakan salah satu identitas keamanan pada uang rupiah.', category:'keamanan', side:'back'},
    {id:'bi_back', top:'25%', left:'82%', title:'BANK INDONESIA', desc:'Tulisan dan elemen Bank Indonesia sebagai identitas penerbit uang rupiah.', category:'keamanan', side:'back'},
    {id:'micro_back', top:'82%', left:'82%', title:'Mikroteks Rp5.000', desc:'Mikroteks merupakan fitur keamanan yang membantu mencegah pemalsuan.', category:'keamanan', side:'back'}
];
const TACTILE_ZONES_5000 = [
    {
        id: 'nominal',
        name: 'Angka Nominal 5000 & Tulisan Rupiah',
        desc: 'Angka nominal 5000 dan bagian tulisan tertentu menggunakan teknik cetak timbul (Intaglio) sehingga terasa kasar saat diraba.',
        tactileType: 'Cetak Intaglio',
        area: { x: 5, y: 10, width: 28, height: 22 }
    },
    {
        id: 'hero',
        name: 'Relief Dr. K.H. Idham Chalid',
        desc: 'Potret Dr. K.H. Idham Chalid memiliki bagian cetak timbul dengan tekstur khas yang dapat dikenali melalui sentuhan.',
        tactileType: 'Relief Intaglio',
        area: { x: 38, y: 15, width: 36, height: 70 }
    },
    {
        id: 'blind_left',
        name: 'Kode Tuna Netra Tepi Kiri',
        desc: 'Kode taktil pada sisi uang membantu pengguna mengenali pecahan Rp5.000 melalui rabaan.',
        tactileType: 'Blind Code',
        area: { x: 0, y: 35, width: 8, height: 30 }
    },
    {
        id: 'blind_right',
        name: 'Kode Tuna Netra Tepi Kanan',
        desc: 'Garis timbul pada sisi kanan menjadi salah satu fitur pengenalan uang Rp5.000.',
        tactileType: 'Blind Code',
        area: { x: 92, y: 35, width: 8, height: 30 }
    },
    {
        id: 'bank',
        name: 'Tulisan BANK INDONESIA',
        desc: 'Tulisan BANK INDONESIA menggunakan teknik cetak tertentu yang memberikan sensasi tekstur saat diraba.',
        tactileType: 'Intaglio',
        area: { x: 74, y: 12, width: 22, height: 30 }
    }
];
const SECURITY_FEATURES_5000 = [
    {
        title: '1. Gambar Utama Dr. K.H. Idham Chalid',
        desc: 'Potret Dr. K.H. Idham Chalid dengan cetak Intaglio timbul khas uang Rp5.000 TE 2022.',
        icon: 'fa-user-tie',
        method: 'Dilihat & Diraba'
    },
    {
        title: '2. Tanda Air (Watermark) & Electrotype Rp5.000',
        desc: 'Gambar Idham Chalid & nominal Rp5.000 terlihat jelas saat diterawang.',
        icon: 'fa-droplet',
        method: 'Diterawang'
    },
    {
        title: '3. Cetak Intaglio Kasar & Timbul',
        desc: 'Cetak timbul (Intaglio) pada potret Dr. K.H. Idham Chalid, angka nominal 5000, tulisan BANK INDONESIA, dan kode tuna netra.',
        icon: 'fa-hand',
        method: 'Diraba'
    },
    {
        title: '4. Rectoverso Logo BI Presisi',
        desc: 'Logo BI saling mengisi sempurna dari depan dan belakang.',
        icon: 'fa-arrows-rotate',
        method: 'Diterawang'
    },
    {
        title: '5. BI-SPARK Sedap Malam',
        desc: 'Tinta optik berubah warna emas ke hijau saat dimiringkan.',
        icon: 'fa-gem',
        method: 'Dilihat'
    },
    {
        title: '6. Benang Pengaman Beranyam 3mm',
        desc: 'Memuat teks mikro BI dan memancarkan efek dinamis.',
        icon: 'fa-lines-leaning',
        method: 'Dilihat & UV'
    },
    {
        title: '7. Blind Code Tunanetra',
        desc: 'Sepasang garis taktil ganda di kedua tepi uang.',
        icon: 'fa-braille',
        method: 'Diraba'
    },
    {
        title: '8. Mikroteks & Fluoresens UV',
        desc: 'Teks mikro beresolusi tinggi dan pendaran nomor seri neon di UV.',
        icon: 'fa-sun',
        method: 'Sinar UV'
    }
];
const TTS_SESSIONS_5000 = [
    {
        level: 1,
        title: 'Pecahan Rp5.000 TE 2022',
        nominalText: 'Rp5.000',
        gridMap: [
            ['H', 'A', 'T', 'T', 'A'],
            ['A', '#', '#', '#', '#'],
            ['T', 'O', 'P', 'E', 'N'],
            ['T', '#', '#', '#', 'G'],
            ['A', 'N', 'G', 'G', 'R']
        ],
        clues: [
            { num: '1-Mendatar', text: '1. Nama Wakil Presiden Proklamator pada uang Rp5.000 (5 Huruf: HATTA)' },
            { num: '1-Menurun', text: '1. Sosok Proklamator Pertama RI: Bung ___ (4 Huruf singkatan)' },
            { num: '2-Mendatar', text: '2. Kesenian tari khas Betawi di bagian belakang: Tari ___ (8 Huruf: GAMBYONG)' },
            { num: '3-Mendatar', text: '3. Jenis bunga nasional (Puspa Pesona) di Rp5.000: Bunga Sedap Malam' }
        ]
    },
    {
        level: 2,
        title: 'Keindahan Alam & Budaya Rp5.000',
        nominalText: 'Rp5.000',
        gridMap: [
            ['R', 'A', 'J', 'A', '#'],
            ['A', '#', '#', '#', '#'],
            ['M', 'E', 'R', 'A', 'H'],
            ['P', '#', '#', '#', '#'],
            ['A', 'M', 'P', 'A', 'T']
        ],
        clues: [
            { num: '1-Mendatar', text: '1. Bagian depan nama gugusan kepulauan eksotis Jawa Timur: ___ Ampat (4 Huruf)' },
            { num: '1-Menurun', text: '1. Gugusan pulau karang indah di Jawa Timur (5 Huruf singkat)' },
            { num: '2-Mendatar', text: '2. Warna dominan pada uang pecahan Rp5.000 TE 2022 (5 Huruf: MERAH)' }
        ]
    },
    {
        level: 3,
        title: 'Ciri Keamanan 3D Rupiah',
        nominalText: 'Rp5.000',
        gridMap: [
            ['R', 'A', 'B', 'A', '#'],
            ['E', '#', '#', '#', '#'],
            ['S', 'P', 'A', 'R', 'K'],
            ['T', '#', '#', '#', '#'],
            ['S', 'I', 'N', 'A', 'R']
        ],
        clues: [
            { num: '1-Mendatar', text: '1. Salah satu metode 3D keaslian uang: Di___ (4 Huruf: RABA)' },
            { num: '2-Mendatar', text: '2. Fitur tinta berubah warna pada bunga anggrek: BI-___ (5 Huruf: SPARK)' },
            { num: '3-Mendatar', text: '3. Alat uji keaslian nomor seri berpendar: ___ Ultraviolet (5 Huruf: SINAR)' }
        ]
    }
];
const QUIZ_QUESTIONS_5000 = [
    {
        q: 'Siapakah dua tokoh Pahlawan Nasional pada bagian depan uang pecahan Rp5.000 TE 2022?',
        opt: [
            'Dr. K.H. Idham Chalid',
            'Ir. H. Djuanda & Mohammad Husni Thamrin',
            'Dr. G.S.S.J. Ratulangi & Frans Kaisiepo',
            'Cut Meutia & R.A. Kartini'
        ],
        ans: 0,
        explanation: 'Dr. K.H. Idham Chalid merupakan tokoh nasional yang ditampilkan pada pecahan Rp5.000 TE 2022.'
    },
    {
        q: 'Pemandangan alam spektakuler manakah yang terdapat pada sisi belakang uang Rp5.000 TE 2022?',
        opt: [
            'Gunung Bromo (Jawa Timur)',
            'Taman Nasional Bromo Tengger Semeru (Jawa Timur)',
            'Banda Neira (Maluku)',
            'Taman Nasional Komodo (NTT)'
        ],
        ans: 0,
        explanation: 'Sisi belakang uang Rp5.000 memuat pemandangan alam Taman Nasional Bromo Tengger Semeru di Jawa Timur.'
    },
    {
        q: 'Tarian tradisional apakah yang diabadikan pada sisi belakang uang Rp5.000 TE 2022?',
        opt: [
            'Tari Tifa',
            'Tari Gambyong',
            'Tari Gambyong',
            'Tari Piring'
        ],
        ans: 2,
        explanation: 'Tari Gambyong asal Jawa Tengah melambangkan keceriaan, dinamika, dan keteguhan budaya nusantara.'
    },
    {
        q: 'Fitur keamanan optik modern pada Bunga Sedap Malam uang Rp5.000 yang dapat berubah warna saat digoyangkan disebut...?',
        opt: [
            'BI-SPARK',
            'Rectoverso',
            'Blind Code',
            'Watermark'
        ],
        ans: 0,
        explanation: 'BI-SPARK menggunakan teknologi tinta optis dinamis yang menghasilkan pendaran dan perubahan warna mencolok dari emas ke hijau saat dilihat dari sudut pandang berbeda.'
    },
    {
        q: 'Apa yang terjadi pada nomor seri asimetris uang Rp5.000 jika disinari lampu Ultra Violet (365 nm)?',
        opt: [
            'Menghilang secara total',
            'Berpendar memancarkan cahaya neon kuning-kehijauan',
            'Berubah menjadi warna hitam pekat',
            'Tidak berubah sama sekali'
        ],
        ans: 1,
        explanation: 'Tinta khusus fluoresen pada nomor seri uang asli akan menyala terang dengan warna neon kuning kehijauan di bawah spektrum sinar UV 365 nm.'
    }
];
// ===== src/utils/audio.ts =====
/**
 * Web Audio API synthesizer for sound effects in Rupiah Explorer 3D
 */
class SoundEngine {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
    }
    initContext() {
        if (!this.ctx && typeof window !== 'undefined') {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) {
                this.ctx = new AudioCtx();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume().catch(() => { });
        }
    }
    play(type) {
        if (this.isMuted)
            return;
        try {
            this.initContext();
            if (!this.ctx)
                return;
            const t = this.ctx.currentTime;
            switch (type) {
                case 'coin': {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(987.77, t);
                    osc.frequency.setValueAtTime(1318.51, t + 0.08);
                    gain.gain.setValueAtTime(0.25, t);
                    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(t);
                    osc.stop(t + 0.35);
                    break;
                }
                case 'click': {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(600, t);
                    osc.frequency.exponentialRampToValueAtTime(150, t + 0.06);
                    gain.gain.setValueAtTime(0.15, t);
                    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(t);
                    osc.stop(t + 0.06);
                    break;
                }
                case 'uv': {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(120, t);
                    osc.frequency.exponentialRampToValueAtTime(240, t + 0.2);
                    gain.gain.setValueAtTime(0.2, t);
                    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(t);
                    osc.stop(t + 0.3);
                    break;
                }
                case 'tactile': {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'square';
                    osc.frequency.setValueAtTime(180, t);
                    osc.frequency.setValueAtTime(220, t + 0.02);
                    gain.gain.setValueAtTime(0.12, t);
                    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(t);
                    osc.stop(t + 0.08);
                    break;
                }
                case 'scan': {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(800, t);
                    osc.frequency.linearRampToValueAtTime(1800, t + 0.3);
                    gain.gain.setValueAtTime(0.2, t);
                    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.35);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(t);
                    osc.stop(t + 0.35);
                    break;
                }
                case 'jump': {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'square';
                    osc.frequency.setValueAtTime(180, t);
                    osc.frequency.exponentialRampToValueAtTime(580, t + 0.15);
                    gain.gain.setValueAtTime(0.2, t);
                    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.15);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(t);
                    osc.stop(t + 0.15);
                    break;
                }
                case 'hit': {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(220, t);
                    osc.frequency.linearRampToValueAtTime(40, t + 0.25);
                    gain.gain.setValueAtTime(0.3, t);
                    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.25);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(t);
                    osc.stop(t + 0.25);
                    break;
                }
                case 'correct': {
                    const osc1 = this.ctx.createOscillator();
                    const osc2 = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc1.type = 'sine';
                    osc2.type = 'triangle';
                    osc1.frequency.setValueAtTime(523.25, t); // C5
                    osc1.frequency.setValueAtTime(659.25, t + 0.1); // E5
                    osc1.frequency.setValueAtTime(783.99, t + 0.2); // G5
                    osc1.frequency.setValueAtTime(1046.50, t + 0.3); // C6
                    osc2.frequency.setValueAtTime(261.63, t);
                    gain.gain.setValueAtTime(0.25, t);
                    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
                    osc1.connect(gain);
                    osc2.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc1.start(t);
                    osc2.start(t);
                    osc1.stop(t + 0.55);
                    osc2.stop(t + 0.55);
                    break;
                }
                case 'whoosh': {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(200, t);
                    osc.frequency.exponentialRampToValueAtTime(600, t + 0.15);
                    gain.gain.setValueAtTime(0.1, t);
                    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(t);
                    osc.stop(t + 0.2);
                    break;
                }
            }
        }
        catch {
            // AudioContext unavailable or blocked by browser policy before user interaction
        }
    }
    triggerHaptic() {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            try {
                navigator.vibrate(30);
            }
            catch {
                // ignore
            }
        }
    }
}
const sound = new SoundEngine();
const BANKNOTE_FRONT_IMAGE = 'assets/banknote-front.png';;
const BANKNOTE_BACK_IMAGE = 'assets/banknote-back.png';;
const UV_REFERENCE_5000 = {
  front: 'https://www.bi.go.id/Gambar%20Uang/TE2022/TE-2022-5000-depan-UV.JPG',
  back: 'https://www.bi.go.id/Gambar%20Uang/TE2022/TE-2022-5000-belakang-UV.JPG'
};

const BanknoteVisual = ({ side, mode = 'normal', uvIntensity = 0, watermarkIntensity = 0, tiltAngle = 0, highlightZoneId = null, className = '', onZoneClick }) => {
    const isUV = mode === 'uv';
    const isWatermark = mode === 'watermark';
    const isTactile = mode === 'tactile';
    const isBispark = mode === 'bispark';
    const image = side === 'front' ? BANKNOTE_FRONT_IMAGE : BANKNOTE_BACK_IMAGE;
    const spark = Math.abs(tiltAngle % 90);
    const sparkColor = spark < 25 ? '#fbbf24' : spark < 55 ? '#a3e635' : '#34d399';
    return React.createElement("div", {
        className: `relative w-full h-full select-none overflow-hidden rounded-[8px] shadow-2xl ${className}`,
        style: {
            aspectRatio: '151 / 65',
            background: isUV ? '#07070c' : '#7f2630'
        }
    },
        React.createElement("img", {
            src: image,
            alt: side === 'front' ? 'Uang Rp5.000 sisi depan' : 'Uang Rp5.000 sisi belakang',
            className: `absolute inset-0 w-full h-full object-cover transition-all duration-200 ${isUV ? 'brightness-[0.18] saturate-[0.45]' : ''}`,
            draggable: false
        }),
        /* Mode overlay: dibuat halus agar gambar uang tetap penuh dan tidak tertutup marker. */
        React.createElement("div", { className: "absolute inset-0 pointer-events-none", style: {
            background: isUV
                ? 'linear-gradient(115deg, rgba(80,35,140,.10), rgba(25,8,45,.42))'
                : isWatermark
                    ? `linear-gradient(90deg, rgba(255,245,205,${Math.max(0, watermarkIntensity)/360}), rgba(255,255,255,${Math.max(0, watermarkIntensity-35)/500}) 48%, rgba(255,245,205,${Math.max(0, watermarkIntensity)/330}))`
                    : isBispark
                        ? `linear-gradient(115deg, transparent 25%, ${sparkColor}12 39%, ${sparkColor}58 50%, rgba(255,255,255,.28) 53%, ${sparkColor}18 60%, transparent 75%)`
                        : 'rgba(90,20,30,.025)'
        } }),
        /* Efek fluoresensi UV yang lebih realistis: hanya area fitur yang "menyala", bukan seluruh uang. */
        isUV && React.createElement(React.Fragment, null,
            React.createElement("div", { className: "absolute inset-0 pointer-events-none", style: {
                background: 'radial-gradient(ellipse at 24% 75%, rgba(205,255,80,.24), transparent 17%), radial-gradient(ellipse at 74% 70%, rgba(205,255,90,.20), transparent 13%), radial-gradient(ellipse at 48% 30%, rgba(120,255,170,.12), transparent 20%)',
                mixBlendMode: 'screen'
            } }),
            React.createElement("div", { className: "absolute left-[7%] top-[10%] text-[8px] sm:text-[10px] font-mono font-black tracking-[.18em] text-lime-200/80 drop-shadow-[0_0_8px_rgba(163,230,53,.8)]" }, "UV 365 nm"),
            React.createElement("div", { className: "absolute right-[7%] bottom-[8%] px-2 py-1 rounded-md bg-[#17111f]/80 border border-lime-300/40 text-lime-200 text-[7px] sm:text-[9px] font-black tracking-wider" }, "FLUORESENSI")),
        isTactile && React.createElement("div", { className: "absolute inset-0 pointer-events-none", style: {
            background: 'linear-gradient(180deg, rgba(16,185,129,.03), rgba(16,185,129,.08))'
        } }),
        isBispark && React.createElement("div", { className: "absolute inset-0 pointer-events-none", style: {
            background: `linear-gradient(115deg, transparent 18%, ${sparkColor}08 36%, ${sparkColor}38 49%, rgba(255,255,255,.18) 52%, ${sparkColor}12 62%, transparent 82%)`,
            mixBlendMode: 'screen'
        } }),
        /* Hotspot visual pada gambar sengaja dihilangkan. Informasi muncul setelah user mengetuk area pada modal Diraba. */
        side === 'front' && onZoneClick && React.createElement("button", {
            onClick: () => onZoneClick('hero'),
            className: "absolute left-[43%] top-[42%] w-8 h-8 rounded-full bg-transparent border-0 opacity-0 z-30",
            title: "Pahlawan Dr. K.H. Idham Chalid-Hatta"
        }),
        highlightZoneId && React.createElement("div", {
            className: "absolute pointer-events-none rounded-full border-2 border-white/80 shadow-[0_0_22px_rgba(255,255,255,.75)]",
            style: { width: '46px', height: '46px', left: 'calc(50% - 23px)', top: 'calc(50% - 23px)' }
        })
    );
};
const Bill3DScene = ({ isAutoRotate, onToggleAutoRotate, onHotspotClick, isUVActive, isScanning, onHelpClick }) => {
    const [rotX, setRotX] = React.useState(0);
    const [rotY, setRotY] = React.useState(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const [currentSide, setCurrentSide] = React.useState('front');
    const [rotationSpeed, setRotationSpeed] = React.useState(1); // 1x, 2x
    const dragStartRef = React.useRef({
        x: 0,
        y: 0,
        startRotX: 0,
        startRotY: 0
    });
    const animFrameRef = React.useRef(null);
    // Continuous Auto-Rotation Loop
    React.useEffect(() => {
        let lastTime = performance.now();
        const loop = (currentTime) => {
            const delta = (currentTime - lastTime) / 1000;
            lastTime = currentTime;
            if (isAutoRotate && !isDragging) {
                setRotY(prev => (prev + (35 * rotationSpeed * delta)) % 360);
            }
            animFrameRef.current = requestAnimationFrame(loop);
        };
        animFrameRef.current = requestAnimationFrame(loop);
        return () => {
            if (animFrameRef.current)
                cancelAnimationFrame(animFrameRef.current);
        };
    }, [isAutoRotate, isDragging, rotationSpeed]);
    // Touch and Mouse Handlers
    const handlePointerDown = (e) => {
        setIsDragging(true);
        dragStartRef.current = {
            x: e.clientX,
            y: e.clientY,
            startRotX: rotX,
            startRotY: rotY
        };
        e.currentTarget.setPointerCapture(e.pointerId);
    };
    const handlePointerMove = (e) => {
        if (!isDragging)
            return;
        const deltaX = e.clientX - dragStartRef.current.x;
        const deltaY = e.clientY - dragStartRef.current.y;
        setRotY(dragStartRef.current.startRotY + deltaX * 0.75);
        setRotX(Math.max(-45, Math.min(45, dragStartRef.current.startRotX - deltaY * 0.5)));
    };
    const handlePointerUp = (e) => {
        if (isDragging) {
            setIsDragging(false);
            try {
                e.currentTarget.releasePointerCapture(e.pointerId);
            }
            catch {
                // ignore
            }
        }
    };
    // Flip 180 degrees
    const flipSide = () => {
        sound.play('whoosh');
        setRotY(prev => prev + 180);
        setCurrentSide(prev => prev === 'front' ? 'back' : 'front');
    };
    // Reset 3D View
    const reset3DView = () => {
        sound.play('click');
        setRotX(0);
        setRotY(0);
    };
    // Determine current active hotspots based on normalized rotation angle
    const normalizedRotY = ((rotY % 360) + 360) % 360;
    const isFrontFacing = normalizedRotY < 90 || normalizedRotY > 270;
    const activeHotspots = isFrontFacing ? HOTSPOTS_5000_FRONT : HOTSPOTS_5000_BACK;
    const skew = Math.sin((rotY * Math.PI) / 180) * 5;
    return (React.createElement("section", { id: "3d-showcase-area", className: "relative flex flex-col justify-center items-center my-2 p-4 sm:p-6 rounded-2xl border-2 border-[#c5a059] overflow-hidden shadow-2xl", style: {
            perspective: '1000px',
            background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.25) 0%, rgba(11, 26, 48, 0.9) 70%, #060d19 100%)'
        } },
        React.createElement("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-dashed border-[#d4af37]/30 pointer-events-none z-0 animate-[spin_50s_linear_infinite]", style: {
                boxShadow: '0 0 0 15px rgba(255,255,255,0.02), 0 0 0 35px rgba(212,175,55,0.08), 0 0 0 60px rgba(255,255,255,0.02)'
            } }),
        React.createElement("div", { className: "absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-6xl sm:text-8xl text-white/5 tracking-widest pointer-events-none z-0 select-none" }, "5000"),
        React.createElement("div", { className: "absolute inset-0 pointer-events-none opacity-20 flex justify-between items-end p-3 z-0" },
            React.createElement("i", { className: "fa-solid fa-landmark text-[#f3e5ab] text-3xl sm:text-4xl" }),
            React.createElement("i", { className: "fa-solid fa-spa text-[#d4af37] text-3xl sm:text-4xl absolute top-3 left-1/2 -translate-x-1/2" }),
            React.createElement("i", { className: "fa-solid fa-monument text-[#f3e5ab] text-3xl sm:text-4xl" })),
        React.createElement("div", { className: "relative w-full max-w-[450px] flex flex-col items-center z-10 select-none" },
            React.createElement("div", { id: "bill-3d-scene", className: "relative w-full cursor-grab active:cursor-grabbing transition-transform duration-75", style: {
                    aspectRatio: '151 / 65',
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) skewY(${skew}deg)`
                }, onPointerDown: handlePointerDown, onPointerMove: handlePointerMove, onPointerUp: handlePointerUp, onPointerCancel: handlePointerUp },
                isScanning && (React.createElement("div", { className: "absolute inset-x-0 h-1 bg-emerald-400 shadow-[0_0_15px_#10b981,0_0_30px_#10b981] z-50 animate-[scanAnim_1.8s_infinite_ease-in-out_alternate]" })),
                React.createElement("div", { className: "absolute inset-0 w-full h-full rounded-[4px] shadow-2xl backface-hidden", style: {
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(0deg) translateZ(1px)'
                    } },
                    React.createElement(BanknoteVisual, { side: "front", mode: isUVActive ? 'uv' : 'normal', uvIntensity: isUVActive ? 1 : 0, tiltAngle: rotY })),
                React.createElement("div", { className: "absolute inset-0 w-full h-full rounded-[4px] shadow-2xl backface-hidden", style: {
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg) translateZ(1px)'
                    } },
                    React.createElement(BanknoteVisual, { side: "back", mode: isUVActive ? 'uv' : 'normal', uvIntensity: isUVActive ? 1 : 0, tiltAngle: rotY })),
                activeHotspots.map(hotspot => (React.createElement("div", { key: hotspot.id, onClick: (e) => {
                        e.stopPropagation();
                        sound.play('coin');
                        onHotspotClick(hotspot);
                    }, className: "absolute w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#ff2d55] border-2 border-white cursor-pointer shadow-[0_0_12px_#ff2d55,0_0_24px_#ff2d55] z-40 transition-transform hover:scale-125 animate-pulse", style: {
                        top: hotspot.top,
                        left: hotspot.left,
                        transform: 'translate(-50%, -50%) translateZ(4px)'
                    }, title: hotspot.title },
                    React.createElement("div", { className: "w-1.5 h-1.5 bg-white rounded-full m-auto mt-0.5" }))))),
            React.createElement("div", { className: "w-[94%] h-7 sm:h-9 mt-[-10px] rounded-[50%] bg-gradient-to-b from-slate-300 via-slate-400 to-slate-600 border-2 border-white/60 shadow-[0_12px_24px_rgba(0,0,0,0.6)] z-0", style: { transform: 'rotateX(60deg)' } })),
        React.createElement("div", { className: "mt-4 w-full flex flex-wrap items-center justify-between gap-2 z-20 px-1" },
            React.createElement("button", { id: "btn-auto-rotate", onClick: () => {
                    sound.play('click');
                    onToggleAutoRotate();
                }, className: `flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black border-2 transition-all shadow-lg ${isAutoRotate
                    ? 'bg-[#d4af37] text-[#0b1a30] border-amber-200 ring-2 ring-amber-300/60'
                    : 'bg-[#0b1a30] text-[#f3e5ab] border-[#d4af37] hover:bg-[#152a48]'}` },
                React.createElement("i", { className: `fa-solid ${isAutoRotate ? 'fa-pause' : 'fa-arrows-rotate'} ${isAutoRotate ? 'animate-spin' : ''}` }),
                React.createElement("span", null, isAutoRotate ? 'Auto: ON (360°)' : 'Auto: OFF')),
            isAutoRotate && (React.createElement("button", { onClick: () => {
                    sound.play('click');
                    setRotationSpeed(prev => prev === 1 ? 2 : 1);
                }, className: "px-2.5 py-1.5 rounded-full text-[11px] font-bold bg-[#0b1a30] text-[#f3e5ab] border border-[#d4af37]/60 hover:bg-[#152a48]" },
                "Speed: ",
                rotationSpeed,
                "x")),
            React.createElement("button", { id: "btn-flip-side", onClick: flipSide, className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#0b1a30] text-white border border-white/30 hover:bg-[#152a48] transition-all shadow-md" },
                React.createElement("i", { className: "fa-solid fa-repeat text-[#d4af37]" }),
                React.createElement("span", null,
                    "Balik: ",
                    isFrontFacing ? 'Sisi Depan' : 'Sisi Belakang')),
            React.createElement("button", { id: "btn-reset-view", onClick: reset3DView, className: "p-2 rounded-full text-xs font-bold bg-[#0b1a30] text-[#f3e5ab] border border-[#d4af37] hover:bg-[#152a48]", title: "Reset Orientasi 3D" },
                React.createElement("i", { className: "fa-solid fa-arrows-to-dot" })),
            React.createElement("button", { onClick: onHelpClick, className: "flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-semibold bg-[#0b1a30] text-[#f3e5ab] border border-[#d4af37]/40 hover:bg-[#152a48]" },
                React.createElement("i", { className: "fa-solid fa-hand-pointer text-[#d4af37]" }),
                React.createElement("span", { className: "hidden sm:inline" }, "Panduan 3D")))));
};
const DirabaInspectorModal = ({ onClose }) => {
    const [side, setSide] = React.useState('front');
    const [hit, setHit] = React.useState(null);
    const [point, setPoint] = React.useState({x:50,y:50});
    const [pressed, setPressed] = React.useState(false);
    const findZone = (x,y) => TACTILE_ZONES_5000.find(z => x >= z.area.x && x <= z.area.x+z.area.width && y >= z.area.y && y <= z.area.y+z.area.height);
    const handleTouch = (e) => {
        const r=e.currentTarget.getBoundingClientRect();
        const x=((e.clientX-r.left)/r.width)*100, y=((e.clientY-r.top)/r.height)*100;
        setPoint({x,y});
        const zone=findZone(x,y);
        setHit(zone || {name:'Permukaan uang',desc:'Area ini tidak termasuk zona tekstur utama yang dipetakan.',tactileType:'Tekstur kertas normal'});
        setPressed(true);
        if (navigator.vibrate) { try { navigator.vibrate(zone ? [20,25,35] : 18); } catch(e){} }
        setTimeout(()=>setPressed(false),280);
    };
    return React.createElement("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#160d0f]/92 backdrop-blur-md animate-fadeIn"},
        React.createElement("div",{className:"relative w-full max-w-4xl max-h-[94vh] overflow-y-auto rounded-[26px] bg-[#251318] border-2 border-[#d6b36a] shadow-[0_0_70px_rgba(214,179,106,.25)] text-white p-4 sm:p-6 flex flex-col gap-4"},
            React.createElement("div",{className:"flex items-start justify-between gap-3 pb-3 border-b border-[#d6b36a]/25"},
                React.createElement("div",{className:"flex items-center gap-3"},React.createElement("div",{className:"w-11 h-11 rounded-full bg-[#3a1d22] border border-[#d6b36a] flex items-center justify-center text-[#f7d878] text-xl"},React.createElement("i",{className:"fa-solid fa-hand"})),React.createElement("div",null,React.createElement("h3",{className:"text-base sm:text-xl font-black"},"Uji Diraba • Sensor Haptic"),React.createElement("p",{className:"text-xs sm:text-sm text-[#e8c88a]"},"Tekan permukaan uang untuk mensimulasikan tekstur kasar dan timbul."))),
                React.createElement("div",{className:"flex items-center gap-2"},React.createElement("button",{onClick:()=>setSide(side==='front'?'back':'front'),className:"px-3 sm:px-5 py-2.5 rounded-xl bg-[#35210d] border border-[#d6b36a] text-[#f7d878] font-black text-xs sm:text-sm"},React.createElement("i",{className:"fa-solid fa-repeat mr-1"}),side==='front'?'Sisi Depan':'Sisi Belakang'),React.createElement("button",{onClick:onClose,className:"w-10 h-10 rounded-full border border-[#d6b36a] text-[#f7d878] text-2xl"},"×"))),
            React.createElement("div",{className:"rounded-2xl border-2 border-[#9f3d4a] bg-[#120b0d] p-2 sm:p-4"},
                React.createElement("div",{className:"relative w-full max-w-[760px] mx-auto overflow-hidden rounded-xl touch-none",onPointerDown:handleTouch,style:{aspectRatio:'151 / 65',cursor:'pointer'}},
                    React.createElement(BanknoteVisual,{side:side,mode:"tactile"}),
                    hit && React.createElement("div",{className:"absolute pointer-events-none rounded-full border-2 border-[#f7d878] shadow-[0_0_28px_rgba(247,216,120,.9)]",style:{width:'74px',height:'74px',left:`calc(${point.x}% - 37px)`,top:`calc(${point.y}% - 37px)`,transform:pressed?'scale(1.14)':'scale(1)',transition:'transform .18s ease'}},React.createElement("div",{className:"absolute inset-2 rounded-full border border-dashed border-[#fff4bf]/80"})),
                    React.createElement("div",{className:"absolute left-[3%] bottom-[4%] px-2 py-1 rounded-md bg-black/55 border border-[#d6b36a]/45 text-[#f7d878] text-[8px] sm:text-[10px] font-black"},"TEKAN BAGIAN UANG"))),
            React.createElement("div",{className:"rounded-2xl bg-[#311820]/70 border border-[#d6b36a]/35 p-4"},
                React.createElement("div",{className:"text-xs sm:text-sm text-[#f7d878] font-black"},hit?"Bagian yang diketuk":"Belum ada bagian yang diketuk"),
                React.createElement("div",{className:"text-sm sm:text-base font-black mt-1"},hit?hit.name:"Sentuh gambar uang di atas untuk mulai simulasi"),
                hit&&React.createElement("div",{className:"text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed"},hit.desc),
                hit&&React.createElement("div",{className:"inline-flex mt-2 px-2.5 py-1 rounded-lg bg-[#d6b36a]/15 border border-[#d6b36a]/45 text-[#f7d878] text-[10px] font-black"},hit.tactileType)),
            React.createElement("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2"},['Intaglio','Relief','Blind Code','Permukaan'].map((x,i)=>React.createElement("div",{key:x,className:"rounded-xl bg-[#17100f] border border-[#d6b36a]/20 p-3 text-center"},React.createElement("i",{className:`fa-solid ${i===0?'fa-layer-group':i===1?'fa-lines-leaning':i===2?'fa-braille':'fa-hand-pointer'} text-[#f7d878]`}),React.createElement("div",{className:"text-[10px] font-black text-zinc-300 mt-1"},x)))),
            React.createElement("div",{className:"rounded-xl bg-[#17100f] border border-[#d6b36a]/20 p-3 text-xs text-zinc-400"},React.createElement("i",{className:"fa-solid fa-mobile-screen-button text-[#f7d878] mr-2"}),"Jika perangkat mendukung getaran, ketukan akan memicu haptic feedback. Ini adalah simulasi digital, bukan sensor fisik tekstur uang."),
            React.createElement("button",{onClick:onClose,className:"w-full py-3 rounded-xl bg-[#332a25] hover:bg-[#40352f] text-white font-bold text-xs sm:text-sm"},"Tutup")));
};
// TE 2022 UV NOTE:
// Gunakan asset foto Rp5.000 TE 2022 yang bersih (tanpa tulisan SPECIMEN/logo tambahan)
// sebagai BANKNOTE_FRONT_IMAGE dan BANKNOTE_BACK_IMAGE.
// Efek UV di bawah ini adalah simulasi visual; posisi pendaran dapat disetel mengikuti foto UV referensi.
const UVInspectorModal = ({ onClose }) => {
    const [side, setSide] = React.useState('front');
    const [percent, setPercent] = React.useState(50);
    const comparisonRefs = { front: React.useRef(null), back: React.useRef(null) };
    const draggingRef = React.useRef(false);

    const setSliderFromClientX = (clientX) => {
        const el = comparisonRefs[side].current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (!rect.width) return;
        const next = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
        setPercent(next);
    };

    const startDrag = (e) => {
        draggingRef.current = true;
        const point = e.touches?.[0] || e;
        if (point?.clientX != null) setSliderFromClientX(point.clientX);
        if (e.cancelable) e.preventDefault();
    };

    const moveDrag = (e) => {
        if (!draggingRef.current) return;
        const point = e.touches?.[0] || e;
        if (point?.clientX != null) setSliderFromClientX(point.clientX);
        if (e.cancelable) e.preventDefault();
    };

    const stopDrag = () => { draggingRef.current = false; };

    React.useEffect(() => {
        window.addEventListener('mousemove', moveDrag);
        window.addEventListener('mouseup', stopDrag);
        window.addEventListener('touchmove', moveDrag, { passive: false });
        window.addEventListener('touchend', stopDrag);
        return () => {
            window.removeEventListener('mousemove', moveDrag);
            window.removeEventListener('mouseup', stopDrag);
            window.removeEventListener('touchmove', moveDrag);
            window.removeEventListener('touchend', stopDrag);
        };
    });

    const switchSide = () => {
        setSide(v => v === 'front' ? 'back' : 'front');
        setPercent(50);
    };

    const normalSrc = side === 'front' ? 'assets/uvdpn1.png' : 'assets/uvbk1.png';
    const uvSrc = side === 'front' ? 'assets/uvdpn2.png' : 'assets/uvbk2.png';
    const labelSide = side === 'front' ? 'Depan' : 'Belakang';

    const comparisonStyle = { '--uv-percent': `${percent}%` };
    const uvLayerStyle = {
        width: '100%',
        clipPath: `inset(0 ${100 - percent}% 0 0)`,
        WebkitClipPath: `inset(0 ${100 - percent}% 0 0)`
    };
    const dividerStyle = { left: `${percent}%` };

    return React.createElement('div', { className: 'uv-modal-backdrop' },
        React.createElement('div', { className: 'uv-modal' },
            React.createElement('div', { className: 'uv-heading' },
                React.createElement('div', { className: 'uv-heading-icon' },
                    React.createElement('i', { className: 'fa-solid fa-sun' })
                ),
                React.createElement('div', null,
                    React.createElement('h1', null, 'Yuk, lihat rahasia Rupiah! 🔦'),
                    React.createElement('p', null, 'Geser garis ke kiri dan kanan untuk membandingkan uang biasa dengan tampilan di bawah sinar UV.')
                ),
                React.createElement('button', { className: 'uv-close', onClick: onClose, 'aria-label': 'Tutup' }, '×')
            ),

            React.createElement('div', { className: 'uv-side-row' },
                React.createElement('div', null,
                    React.createElement('strong', null, `Rp5.000 • Bagian ${labelSide}`),
                    React.createElement('small', null, 'Geser garis ← → untuk membandingkan')
                ),
                React.createElement('button', { className: 'uv-side-button', onClick: switchSide },
                    React.createElement('i', { className: 'fa-solid fa-repeat' }), ' ', side === 'front' ? 'Belakang' : 'Depan'
                )
            ),

            React.createElement('div', {
                ref: comparisonRefs[side],
                className: 'uv-comparison',
                style: comparisonStyle,
                onMouseDown: startDrag,
                onTouchStart: startDrag
            },
                React.createElement('img', { className: 'uv-image uv-normal', src: normalSrc, alt: `Uang Rp5.000 bagian ${labelSide} normal` }),
                React.createElement('div', { className: 'uv-uv-layer', style: uvLayerStyle },
                    React.createElement('img', { className: 'uv-image', src: uvSrc, alt: `Uang Rp5.000 bagian ${labelSide} di bawah sinar UV` })
                ),
                React.createElement('div', { className: 'uv-divider', style: dividerStyle },
                    React.createElement('div', { className: 'uv-handle' },
                        React.createElement('i', { className: 'fa-solid fa-arrows-left-right' })
                    )
                ),
                React.createElement('span', { className: 'uv-label uv-label-normal' }, 'NORMAL'),
                React.createElement('span', { className: 'uv-label uv-label-uv' }, '☀️ UV')
            ),

            React.createElement('div', { className: 'uv-info' },
                React.createElement('div', { className: 'uv-info-icon' }, '💡'),
                React.createElement('div', null,
                    React.createElement('strong', null, 'Tahukah kamu?'),
                    React.createElement('p', null, 'Sinar UV dapat membantu melihat fitur keamanan tertentu pada uang Rupiah yang tidak terlihat jelas pada cahaya biasa. Tampilan ini adalah simulasi edukatif menggunakan gambar lokal Rp5.000.')
                )
            ),

            React.createElement('button', { className: 'uv-close-bottom', onClick: onClose }, 'Tutup')
        )
    );
};
const DiterawangInspectorModal = ({ onClose }) => {
    const [side,setSide]=React.useState('front');
    const [lightIntensity,setLightIntensity]=React.useState(0);
    const [selectedFeature,setSelectedFeature]=React.useState(null);
    const r=lightIntensity/100;
    const features={
        watermark:{title:'Tanda Air Potret & Electrotype Rp5.000',desc:'Pada cahaya rendah hampir tidak terlihat. Semakin kuat cahaya tembus, gambar tanda air muncul lebih jelas sebagai gambar samar di dalam kertas.'},
        electrotype:{title:'Electrotype Rp5.000',desc:'Angka electrotype terlihat semakin kontras ketika cahaya menembus lembar uang dari belakang.'},
        rectoverso:{title:'Rectoverso BI',desc:'Potongan ornamen dari sisi depan dan belakang semakin menyatu ketika intensitas cahaya dinaikkan, membentuk motif BI yang utuh.'}
    };
    const base=side==='front'?BANKNOTE_FRONT_IMAGE:BANKNOTE_BACK_IMAGE;
    const opposite=side==='front'?BANKNOTE_BACK_IMAGE:BANKNOTE_FRONT_IMAGE;
    const select=(k)=>setSelectedFeature(k===selectedFeature?null:k);
    const bill=React.createElement('div',{className:'rounded-2xl border-2 border-[#b77a18] bg-gradient-to-b from-[#6d4b13] via-[#3b2b13] to-[#171109] p-2 sm:p-4 shadow-[inset_0_0_50px_rgba(255,193,7,.22)]'},
        React.createElement('div',{className:'relative w-full max-w-[820px] mx-auto overflow-hidden rounded-xl',style:{aspectRatio:'151 / 65'}},
            React.createElement('img',{src:base,alt:'Uang Rp5.000',className:'absolute inset-0 w-full h-full object-cover',style:{filter:`brightness(${0.52+r*.55}) contrast(${.98+r*.10}) saturate(${1-r*.22})`,transition:'filter .3s ease'}}),
            // The opposite side is intentionally blended in as transmitted light; opacity grows with the slider.
            React.createElement('img',{src:opposite,alt:'Sisi belakang untuk efek tembus cahaya',className:'absolute inset-0 w-full h-full object-cover pointer-events-none',style:{opacity:r*.70,filter:`brightness(${.65+r*.55}) contrast(${.92+r*.18}) saturate(.55)`,mixBlendMode:'multiply',transform:`scaleX(${side==='front'?'1':'-1'})`,transition:'opacity .3s ease,filter .3s ease'}}),
            React.createElement('div',{className:'absolute inset-0 pointer-events-none',style:{background:`radial-gradient(ellipse at 50% 50%,rgba(255,250,210,${.04+r*.55}),transparent ${34+r*15}%),linear-gradient(90deg,rgba(255,214,92,${r*.16}),transparent 48%,rgba(255,235,170,${r*.20}))`,mixBlendMode:'screen'}}),
            // Watermark visual
            // Watermark visual is represented by the actual banknote image; no synthetic SH/logo overlay. // Electrotype
            React.createElement('div',{className:'absolute left-[17%] bottom-[15%] pointer-events-none',style:{opacity:Math.max(0,(r-.22)/.78),transition:'opacity .3s ease'}},React.createElement('div',{className:'text-xl sm:text-3xl font-black tracking-[.35em] text-white/75 drop-shadow-[0_0_7px_rgba(255,255,220,.7)]'},'100')),
            // Rectoverso area: two complementary translucent marks that align at high intensity.
            React.createElement('div',{className:'absolute right-[8%] top-[31%] w-[18%] h-[36%] pointer-events-none',style:{opacity:Math.max(0,(r-.18)/.82),transition:'opacity .3s ease'}},
                React.createElement('div',{className:'absolute inset-0 rounded-full border-[8px] border-white/35 shadow-[0_0_22px_rgba(255,255,220,.55)]'}),
                React.createElement('div',{className:'absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 bg-white/35'}),
                React.createElement('div',{className:'absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 bg-white/35'}),
                React.createElement('div',{className:'absolute inset-[28%] rounded-full bg-white/40'})),
            React.createElement('div',{className:'absolute left-[3%] top-[5%] px-2 py-1 rounded-md bg-black/45 border border-white/20 text-white/80 text-[8px] sm:text-[10px] font-black'},`CAHAYA ${lightIntensity}%`),
            React.createElement('button',{onClick:()=>select('watermark'),className:'absolute left-[15%] top-[42%] px-3 py-1.5 rounded-full bg-amber-400 text-black font-black text-[10px] sm:text-xs shadow-[0_0_20px_rgba(251,191,36,.55)]'},'• Tanda Air'),
            React.createElement('button',{onClick:()=>select('electrotype'),className:'absolute left-[13%] bottom-[10%] px-3 py-1.5 rounded-full bg-yellow-300 text-black font-black text-[10px] sm:text-xs shadow-[0_0_20px_rgba(253,224,71,.45)]'},'• Electrotype Rp5.000'),
            React.createElement('button',{onClick:()=>select('rectoverso'),className:'absolute right-[11%] top-[46%] px-3 py-1.5 rounded-full bg-rose-400 text-black font-black text-[10px] sm:text-xs shadow-[0_0_20px_rgba(251,113,133,.45)]'},'• Rectoverso BI')));
    return React.createElement('div',{className:'fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#090e1d]/92 backdrop-blur-md animate-fadeIn'},
        React.createElement('div',{className:'relative w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-[26px] bg-[#081225] border-2 border-[#d6b36a] shadow-[0_0_70px_rgba(214,179,106,.28)] text-white p-4 sm:p-6 flex flex-col gap-4'},
            React.createElement('div',{className:'flex items-start justify-between gap-3 pb-3 border-b border-[#d6b36a]/25'},
                React.createElement('div',{className:'flex items-center gap-3'},React.createElement('div',{className:'w-11 h-11 rounded-full bg-[#2a2110] border border-[#f7d878] flex items-center justify-center text-[#f7d878] text-xl shadow-[0_0_20px_rgba(247,216,120,.25)]'},React.createElement('i',{className:'fa-solid fa-eye'})),React.createElement('div',null,React.createElement('h3',{className:'text-base sm:text-xl font-black text-[#fff7d6]'},'Uji Diterawang (Tembus Cahaya) • Rp5.000 TE 2022'),React.createElement('p',{className:'text-xs sm:text-sm text-[#f0d58d]'},'Naikkan intensitas cahaya untuk melihat detail keamanan yang tersembunyi'))),
                React.createElement('div',{className:'flex items-center gap-2'},React.createElement('button',{onClick:()=>setSide(v=>v==='front'?'back':'front'),className:'px-3 sm:px-5 py-2.5 rounded-xl bg-[#1a2130] border border-[#d6b36a] text-[#f7d878] font-black text-xs sm:text-sm'},React.createElement('i',{className:'fa-solid fa-repeat mr-1'}),side==='front'?'Sisi Depan':'Sisi Belakang'),React.createElement('button',{onClick:onClose,className:'w-10 h-10 rounded-full border border-[#d6b36a] text-[#f7d878] text-2xl'},'×'))),
            bill,
            React.createElement('div',{className:'rounded-2xl bg-[#071022] border border-[#a8781b] p-4'},React.createElement('div',{className:'flex items-center justify-between mb-2'},React.createElement('span',{className:'font-black text-xs sm:text-sm text-[#f7d878]'},'Intensitas Lampu Tembus Cahaya:'),React.createElement('span',{className:'px-3 py-1 rounded-lg bg-[#ffc21c] text-[#17120b] font-black text-xs'},lightIntensity+'%')),React.createElement('input',{type:'range',min:0,max:100,value:lightIntensity,onChange:e=>setLightIntensity(Number(e.target.value)),className:'w-full accent-[#ffc21c] cursor-pointer h-2.5 bg-black/50 rounded-lg'}),React.createElement('div',{className:'grid grid-cols-3 gap-2 pt-2'},React.createElement('button',{onClick:()=>setLightIntensity(0),className:'py-2.5 rounded-xl text-xs font-bold bg-[#0b1426] border border-white/10 text-slate-400'},'Mati (0%)'),React.createElement('button',{onClick:()=>setLightIntensity(50),className:'py-2.5 rounded-xl text-xs font-bold bg-[#0b1426] border border-[#d6b36a]/30 text-[#f0d48e]'},'Sedang (50%)'),React.createElement('button',{onClick:()=>setLightIntensity(100),className:'py-2.5 rounded-xl text-xs font-bold bg-[#ffc21c] text-[#17120b]'},'Terang Maksimal (100%)'))),
            React.createElement('div',{className:'grid grid-cols-1 sm:grid-cols-3 gap-2'},Object.entries(features).map(([k,f])=>React.createElement('button',{key:k,onClick:()=>select(k),className:`p-3 rounded-xl border text-left transition-all ${selectedFeature===k?'bg-[#ffc21c]/15 border-[#ffc21c]':'bg-[#0b1426] border-[#d6b36a]/25'}`},React.createElement('i',{className:`fa-solid ${k==='watermark'?'fa-droplet':k==='electrotype'?'fa-hashtag':'fa-arrows-rotate'} text-[#f7d878]`}),React.createElement('div',{className:'font-black text-xs mt-1'},f.title),React.createElement('div',{className:'text-[10px] text-slate-400 mt-1'},`Kejelasan simulasi: ${Math.round(r*100)}%`)))),
            selectedFeature && React.createElement('div',{className:'rounded-xl bg-[#0b1426] border border-[#d6b36a]/35 p-4'},React.createElement('div',{className:'font-black text-[#f7d878] text-sm'},features[selectedFeature].title),React.createElement('div',{className:'text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed'},features[selectedFeature].desc)),
            React.createElement('div',{className:'rounded-xl bg-[#0b1426] border border-white/10 p-3 text-xs text-slate-300'},React.createElement('i',{className:'fa-solid fa-sun text-[#f7d878] mr-2'}),'Semakin tinggi intensitas, semakin kuat efek tembus cahaya dan semakin jelas Rectoverso, Tanda Air, serta Electrotype pada simulasi.'),
            React.createElement('button',{onClick:onClose,className:'w-full py-3 rounded-xl bg-[#252b36] hover:bg-[#303844] text-white font-bold text-xs sm:text-sm'},'Tutup')));
};
const DilihatInspectorModal = ({ onClose }) => {
    const [tiltAngle, setTiltAngle] = React.useState(35);
    const getSparkDescription = (angle) => angle < 30 ? { color:'Emas Berkilau', desc:'BI-SPARK tampak dominan keemasan saat dilihat hampir tegak lurus.' } : angle < 65 ? { color:'Emas Kehijauan', desc:'Saat sudut berubah, efek optik bergeser secara bertahap menuju hijau.' } : { color:'Hijau Zamrud', desc:'Pada sudut miring, warna BI-SPARK tampak hijau lebih kuat.' };
    const sparkInfo=getSparkDescription(tiltAngle);
    const sparkPos = Math.min(82, Math.max(12, 18 + tiltAngle*.7));
    return React.createElement("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#180f12]/90 backdrop-blur-md animate-fadeIn"},
        React.createElement("div",{className:"relative w-full max-w-4xl max-h-[94vh] overflow-y-auto rounded-[26px] bg-[#251318] border-2 border-[#d6b36a] shadow-[0_0_60px_rgba(214,179,106,.20)] text-white p-4 sm:p-6 flex flex-col gap-4"},
            React.createElement("div",{className:"flex items-start justify-between gap-3 pb-3 border-b border-[#d6b36a]/25"},React.createElement("div",{className:"flex items-center gap-3"},React.createElement("div",{className:"w-11 h-11 rounded-full bg-[#3a1d22] border border-[#d6b36a] flex items-center justify-center text-[#f7d878] text-xl"},React.createElement("i",{className:"fa-solid fa-gem"})),React.createElement("div",null,React.createElement("h3",{className:"text-base sm:text-xl font-black"},"Uji Dilihat • BI-SPARK & Sudut Pandang"),React.createElement("p",{className:"text-xs sm:text-sm text-[#e8c88a]"},"Geser kemiringan untuk melihat perubahan warna optik."))),React.createElement("button",{onClick:onClose,className:"w-10 h-10 rounded-full border border-[#d6b36a] text-[#f7d878] text-2xl"},"×")),
            React.createElement("div",{className:"rounded-2xl border-2 border-[#9f3d4a] bg-[#120b10] p-2 sm:p-4",style:{perspective:'1100px'}},React.createElement("div",{className:"relative w-full max-w-[760px] mx-auto overflow-hidden rounded-xl transition-transform duration-100",style:{aspectRatio:'151 / 65',transform:`rotateY(${(tiltAngle-45)*.45}deg) rotateX(${(tiltAngle-45)*.12}deg)`}},React.createElement(BanknoteVisual,{side:"front",mode:"bispark",tiltAngle:tiltAngle*3,className:"transition-all duration-100"}),React.createElement("div",{className:"absolute inset-0 pointer-events-none",style:{background:`linear-gradient(115deg,transparent 12%,rgba(214,179,106,.04) ${sparkPos-16}%,rgba(255,255,255,.35) ${sparkPos}%,rgba(214,179,106,.12) ${sparkPos+9}%,transparent ${sparkPos+22}%)`,mixBlendMode:'screen'}}))),
            React.createElement("div",{className:"rounded-2xl bg-[#311820]/70 border border-[#d6b36a]/35 p-4"},React.createElement("div",{className:"font-black text-sm sm:text-base text-[#f7d878]"},"Status BI-SPARK: ",React.createElement("span",{className:"inline-block px-2.5 py-1 rounded-lg bg-[#d6b36a]/15 border border-[#d6b36a]/50 text-white text-xs"},sparkInfo.color)),React.createElement("div",{className:"text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed"},sparkInfo.desc)),
            React.createElement("div",{className:"rounded-2xl bg-[#17100f] border border-[#d6b36a]/25 p-4"},React.createElement("div",{className:"flex items-center justify-between mb-2"},React.createElement("span",{className:"font-bold text-xs sm:text-sm text-[#f2d38c]"},"Kemiringan Sudut Pandang"),React.createElement("span",{className:"px-3 py-1 rounded-lg bg-[#d6b36a] text-[#24160d] font-black text-xs"},tiltAngle,"°")),React.createElement("input",{type:"range",min:"0",max:"90",value:tiltAngle,onChange:e=>setTiltAngle(Number(e.target.value)),className:"w-full accent-[#d6b36a] cursor-pointer h-2.5 bg-black/50 rounded-lg"}),React.createElement("div",{className:"grid grid-cols-3 gap-2 pt-2"},React.createElement("button",{onClick:()=>setTiltAngle(10),className:"py-2.5 rounded-xl text-xs font-bold bg-[#211517] border border-[#d6b36a]/20 text-[#f2d38c]"},"Lurus 10°"),React.createElement("button",{onClick:()=>setTiltAngle(45),className:"py-2.5 rounded-xl text-xs font-bold bg-[#211517] border border-[#d6b36a]/20 text-[#f2d38c]"},"Miring 45°"),React.createElement("button",{onClick:()=>setTiltAngle(80),className:"py-2.5 rounded-xl text-xs font-bold bg-[#d6b36a] text-[#24160d]"},"Ekstrem 80°"))),
            React.createElement("div",{className:"rounded-xl bg-[#17100f] border border-[#d6b36a]/20 p-3 text-xs text-zinc-400"},React.createElement("i",{className:"fa-solid fa-volume-xmark text-[#f7d878] mr-2"}),"Penyesuaian sudut pandang dibuat tanpa suara dan tanpa bulatan indikator berwarna di atas uang."),
            React.createElement("button",{onClick:onClose,className:"w-full py-3 rounded-xl bg-[#332a25] hover:bg-[#40352f] text-white font-bold text-xs sm:text-sm"},"Tutup")));
};
const ScannerModal = ({ onClose }) => {
    const DENOMS = {
        5000:{label:'Rp5.000',words:'Lima Ribu Rupiah',history:'Rp5.000 TE 2022 adalah pecahan Rupiah yang digunakan pada proyek Rupiah Explorer ini. Sisi depan menampilkan Dr. Dr. K.H. Idham Chalid dan Drs. Mohammad Hatta, sedangkan sisi belakang menampilkan panorama Taman Nasional Bromo serta unsur budaya Indonesia.'}
    };
    const [cameraOn,setCameraOn]=React.useState(false),[stream,setStream]=React.useState(null),[busy,setBusy]=React.useState(false),[result,setResult]=React.useState(null),[captured,setCaptured]=React.useState(''),[flash,setFlash]=React.useState(false),[error,setError]=React.useState(''),[scanStatus,setScanStatus]=React.useState('Memulai kamera...');
    const videoRef=React.useRef(null),canvasRef=React.useRef(null),streamRef=React.useRef(null),cameraReadyRef=React.useRef(false),busyRef=React.useRef(false);
    const stopCamera=()=>{const st=streamRef.current||stream;if(st)st.getTracks().forEach(t=>t.stop());streamRef.current=null;setStream(null);cameraReadyRef.current=false;setCameraOn(false);};
    const capture=()=>{const v=videoRef.current,c=canvasRef.current;if(!v||!c||v.readyState<2||!v.videoWidth||!v.videoHeight)return null;c.width=v.videoWidth;c.height=v.videoHeight;const ctx=c.getContext('2d',{willReadFrequently:true});ctx.setTransform(1,0,0,1,0,0);ctx.imageSmoothingEnabled=true;ctx.drawImage(v,0,0,c.width,c.height);return {url:c.toDataURL('image/jpeg',0.95),width:c.width,height:c.height};};
    // Fast, denomination-focused OCR. The nominal on Indonesian banknotes is usually
    // large and printed near an upper/lower corner, so we avoid the old 10+ OCR passes.
    const makeScanCrops=cap=>new Promise(resolve=>{
        const img=new Image();
        img.onload=()=>{
            const W=1600,H=Math.round(img.naturalHeight*(W/img.naturalWidth));
            const defs=[
                {x:0,y:0,w:1,h:1},
                {x:0,y:0,w:0.52,h:0.46},
                {x:0.48,y:0,w:0.52,h:0.46},
                {x:0,y:0.54,w:0.52,h:0.46},
                {x:0.48,y:0.54,w:0.52,h:0.46}
            ];
            const out=[];
            for(const q of defs){
                const sx=Math.round(q.x*img.naturalWidth), sy=Math.round(q.y*img.naturalHeight);
                const sw=Math.round(q.w*img.naturalWidth), sh=Math.round(q.h*img.naturalHeight);
                const c=document.createElement('canvas');
                c.width=Math.max(800,Math.round(sw*(W/img.naturalWidth)));
                c.height=Math.max(420,Math.round(sh*(H/img.naturalHeight)));
                const ctx=c.getContext('2d',{willReadFrequently:true});
                ctx.imageSmoothingEnabled=true;
                ctx.drawImage(img,sx,sy,sw,sh,0,0,c.width,c.height);
                const im=ctx.getImageData(0,0,c.width,c.height),d=im.data;
                for(let i=0;i<d.length;i+=4){
                    const g=.299*d[i]+.587*d[i+1]+.114*d[i+2];
                    const v=Math.max(0,Math.min(255,(g-118)*1.55+128));
                    d[i]=d[i+1]=d[i+2]=v;
                }
                ctx.putImageData(im,0,0);
                out.push(c.toDataURL('image/png'));
            }
            resolve(out);
        };
        img.onerror=()=>resolve([cap.url]);
        img.src=cap.url;
    });

    const ocrWorkerRef=React.useRef(null),ocrReadyRef=React.useRef(false),ocrInitRef=React.useRef(null);
    const initOCR=()=>{
        if(ocrReadyRef.current)return Promise.resolve(ocrWorkerRef.current);
        if(ocrInitRef.current)return ocrInitRef.current;
        if(!window.Tesseract)return Promise.resolve(null);
        ocrInitRef.current=(async()=>{
            try{
                const worker=await Tesseract.createWorker('eng');
                await worker.setParameters({
                    tessedit_char_whitelist:'0123456789.,- ',
                    preserve_interword_spaces:'1',
                    user_defined_dpi:'300',
                    tessedit_pageseg_mode:'11'
                });
                ocrWorkerRef.current=worker;ocrReadyRef.current=true;
                return worker;
            }catch(e){ocrInitRef.current=null;return null;}
        })();
        return ocrInitRef.current;
    };

    const ocr=async cap=>{
        const worker=await initOCR();
        if(!worker)return null;
        const crops=await makeScanCrops(cap);
        const founds=[];
        for(let i=0;i<crops.length;i++){
            try{
                const out=await worker.recognize(crops[i]);
                const txt=out?.data?.text||'';
                const found=detectDenom([txt]);
                if(found) founds.push(found);
            }catch(_){}
        }

        // Accept only a strong exact/near-exact OCR result, or repeated agreement
        // from independent crops. Never infer a denomination from colour alone.
        if(!founds.length)return null;

        const grouped={};
        for(const f of founds){
            if(!grouped[f.n])grouped[f.n]=[];
            grouped[f.n].push(f.confidence);
        }
        const ranked=Object.entries(grouped).map(([n,cs])=>{
            const sorted=cs.slice().sort((a,b)=>b-a);
            const exact=sorted.some(c=>c>=98);
            const repeated=sorted.length>=2;
            const avg=sorted.slice(0,3).reduce((a,b)=>a+b,0)/Math.min(3,sorted.length);
            return {n:Number(n),count:sorted.length,best:sorted[0],avg,exact,repeated};
        }).sort((a,b)=>(a.repeated-b.repeated)||(a.best-b.best)||(a.avg-b.avg));

        const top=ranked[ranked.length-1];
        if(!top)return null;

        // If the nominal digits are visibly readable, accept a direct OCR match
        // even when Tesseract's internal confidence is lower. Do NOT invent a
        // denomination from colour, size, or background.
        if(top.exact) return {n:top.n,confidence:Math.min(99,Math.max(88,Math.round(top.best)))};
        if(top.repeated && top.best>=76 && top.avg>=72){
            return {n:top.n,confidence:Math.min(95,Math.max(76,Math.round(top.avg+3)))};
        }
        // A single near-match can still be accepted when the OCR candidate has
        // exactly the same number of digits as a supported denomination. This is
        // useful for slightly blurred notes while still refusing random text.
        if(top.best>=78 && top.avg>=76) return {n:top.n,confidence:Math.min(92,Math.round(top.best))};
        return null;
    };

    // IMPORTANT: no color-based denomination guessing.
    // Only use "Nominal tidak terdeteksi" when no usable nominal digits can be read. Never guess from colour or note appearance.

    const distance=(a,b)=>{const dp=Array.from({length:a.length+1},()=>Array(b.length+1).fill(0));for(let i=0;i<=a.length;i++)dp[i][0]=i;for(let j=0;j<=b.length;j++)dp[0][j]=j;for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return dp[a.length][b.length];};
    const detectDenom=(texts)=>{
        const raw=(texts||[]).join(' ').toLowerCase();
        const cleaned=raw.replace(/[oOqQdD]/g,'0').replace(/[iIlL|]/g,'1').replace(/[zZ]/g,'2').replace(/[sS]/g,'5').replace(/[gG]/g,'6').replace(/[bB]/g,'8').replace(/[tT]/g,'7');
        const compact=cleaned.replace(/[^0-9]/g,'');
        const nums=Object.keys(DENOMS).map(Number);
        const candidates=[];
        const addCandidate=(str,bonus=0)=>{
            if(!str)return;
            const normalized=String(str).replace(/[^0-9]/g,'');
            if(!normalized)return;
            candidates.push({str:normalized,bonus});
            if(normalized.length>3){
                for(let len=4;len<=6;len++) if(normalized.length>=len){
                    for(let i=0;i<=normalized.length-len;i++) candidates.push({str:normalized.slice(i,i+len),bonus:bonus-2});
                }
            }
        };
        // OCR often separates nominal as 100 000 / 100.000 / 100-000.
        (cleaned.match(/\d[\d\s.,-]{2,10}\d/g)||[]).forEach(x=>addCandidate(x,4));
        (cleaned.match(/\d{3,7}/g)||[]).forEach(x=>addCandidate(x,2));
        if(compact) addCandidate(compact,0);
        let best=null;
        for(const c of candidates){
            for(const n of nums){
                const target=String(n);
                if(c.str===target){const score=100+c.bonus;if(!best||score>best.confidence)best={n,confidence:Math.min(99,score)};continue;}
                // Allow OCR to drop/duplicate one character while keeping denomination length close.
                if(c.str.length===target.length){
                    const d=distance(c.str,target), norm=d/target.length;
                    if(norm<=0.18){
                        const score=Math.round(96-norm*45+c.bonus);
                        if(!best||score>best.confidence)best={n,confidence:Math.max(78,Math.min(96,score))};
                    }
                }
            }
        }
        // Indonesian number words can sometimes be produced by OCR if a language pack is available.
        const wordHits=[[/seratus\s*ribu|seratusribu/,5000]];
        for(const [rx,n] of wordHits)if(rx.test(cleaned))return {n,confidence:91};
        return best;
    };
    // Fast OCR scanner: one persistent worker + a few high-value crops.
    // The previous version recreated a worker and scanned many variants, which made
    // the button feel like a long loading process.
    const preprocessImages=cap=>new Promise(resolve=>{
        const img=new Image();
        img.onload=()=>{
            const W=1280, H=Math.round(img.naturalHeight*(W/img.naturalWidth));
            const crops=[
                {x:0,y:0,w:1,h:1},
                {x:0,y:0,w:.55,h:.55},
                {x:.45,y:0,w:.55,h:.55},
                {x:0,y:.45,w:.55,h:.55},
                {x:.45,y:.45,w:.55,h:.55}
            ];
            const out=[];
            for(const crop of crops){
                const sx=Math.round(crop.x*img.naturalWidth),sy=Math.round(crop.y*img.naturalHeight);
                const sw=Math.max(1,Math.round(crop.w*img.naturalWidth)),sh=Math.max(1,Math.round(crop.h*img.naturalHeight));
                const c=document.createElement('canvas');
                c.width=Math.max(700,Math.round(sw*(W/img.naturalWidth)));
                c.height=Math.max(420,Math.round(sh*(H/img.naturalHeight)));
                const x=c.getContext('2d',{willReadFrequently:true});
                x.imageSmoothingEnabled=true;
                x.drawImage(img,sx,sy,sw,sh,0,0,c.width,c.height);
                const im=x.getImageData(0,0,c.width,c.height),d=im.data;
                for(let i=0;i<d.length;i+=4){
                    const g=.299*d[i]+.587*d[i+1]+.114*d[i+2];
                    // Preserve dark printed digits while increasing separation from paper.
                    let v=(g-128)*1.65+128;
                    v=Math.max(0,Math.min(255,v));
                    d[i]=d[i+1]=d[i+2]=v;
                }
                x.putImageData(im,0,0);
                out.push(c.toDataURL('image/png'));
            }
            resolve(out);
        };
        img.onerror=()=>resolve([cap.url]);
        img.src=cap.url;
    });

        const enhanceCamera=async(on)=>{const st=streamRef.current;if(!st)return;const track=st.getVideoTracks()[0];if(!track)return;try{const caps=track.getCapabilities?.()||{};const adv={};if(caps.focusMode&&caps.focusMode.includes('continuous'))adv.focusMode='continuous';if(on&&caps.torch)adv.torch=true;if(!on&&caps.torch)adv.torch=false;if(Object.keys(adv).length)await track.applyConstraints({advanced:[adv]});}catch(_){}};
    const analyze=async()=>{
        if(!cameraReadyRef.current||busyRef.current)return;
        busyRef.current=true;setBusy(true);setError('');setResult(null);
        await enhanceCamera(true);
        const cap=capture();
        await enhanceCamera(false);
        if(!cap){busyRef.current=false;setBusy(false);setError('Kamera belum siap mengambil foto. Coba lagi.');return;}
        // Freeze the actual camera photo immediately. No scanning animation.
        setCaptured(cap.url);setFlash(true);setScanStatus('✓ FOTO DIAMBIL • MEMBACA NOMINAL');setTimeout(()=>setFlash(false),120);
        // Let the photo remain visible while recognition happens in the background.
        const found=await ocr(cap);
        const data=found?DENOMS[found.n]:null;
        // Scanner is universal: NFC does not determine the denomination.
        // If recognition is not reliable, NEVER invent a denomination.
        setResult(data?{
            nominal:found.n,
            label:data.label,
            words:data.words,
            confidence:found.confidence,
            catatan:data.label+' terdeteksi. Informasi di bawah disesuaikan dengan pecahan yang berhasil dibaca scanner.',
            sejarah:data.history
        }:{
            nominal:null,
            label:'Nominal tidak terdeteksi',
            words:'',
            confidence:0,
            catatan:'Angka nominal belum terlihat/terbaca oleh kamera. Pastikan angka pecahan terlihat jelas dan seluruh uang masuk ke kotak, lalu tekan SCAN LAGI.',
            sejarah:'Nominal akan ditampilkan sesuai angka yang benar-benar terbaca dari uang yang discan.'
        });
        setScanStatus('✓ HASIL FOTO & INFORMASI SIAP');busyRef.current=false;setBusy(false);
    };
    const startCamera=async()=>{try{if(!window.isSecureContext&&!['localhost','127.0.0.1'].includes(location.hostname))throw new Error('Kamera membutuhkan HTTPS atau localhost.');let s;try{s=await navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:'environment'},width:{ideal:1920},height:{ideal:1080},frameRate:{ideal:30}},audio:false});}catch(_){s=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment',width:{ideal:1280},height:{ideal:720}},audio:false});}streamRef.current=s;setStream(s);setCameraOn(true);setScanStatus('Kamera aktif • arahkan seluruh uang lalu tekan SCAN SEKARANG');}catch(e){setError(e?.message||'Izinkan akses kamera pada browser.');setScanStatus('Kamera belum aktif');}};
    React.useEffect(()=>{startCamera();return()=>{const st=streamRef.current;if(st)st.getTracks().forEach(t=>t.stop());};},[]);
    React.useEffect(()=>{initOCR();return()=>{const w=ocrWorkerRef.current;if(w){try{w.terminate();}catch(_){}}};},[]);
    React.useEffect(()=>{if(!cameraOn)return;const v=videoRef.current,s=streamRef.current;if(!v||!s)return;v.srcObject=s;v.muted=true;v.autoplay=true;v.playsInline=true;v.style.transform='none';v.style.webkitTransform='none';const ready=()=>{cameraReadyRef.current=true;setScanStatus('Kamera siap • tekan SCAN SEKARANG');};v.addEventListener('loadeddata',ready);v.addEventListener('canplay',ready);v.play().catch(()=>{});if(v.readyState>=2)ready();return()=>{v.removeEventListener('loadeddata',ready);v.removeEventListener('canplay',ready);};},[cameraOn]);
    const photo=React.createElement('div',{className:'relative rounded-2xl overflow-hidden bg-black border-2 border-cyan-400/50',style:{aspectRatio:'16/9'}},captured?React.createElement('img',{src:captured,alt:'Foto hasil scan Rupiah',className:'absolute inset-0 w-full h-full object-contain bg-black',style:{transform:'none',WebkitTransform:'none'}}):React.createElement('video',{ref:videoRef,autoPlay:true,playsInline:true,muted:true,className:'absolute inset-0 w-full h-full object-cover',style:{transform:'none',WebkitTransform:'none'}}),!captured&&React.createElement('div',{className:'absolute inset-[7%] rounded-xl border-2 border-cyan-300/80 pointer-events-none'}),React.createElement('div',{className:'absolute left-3 bottom-3 px-3 py-1.5 rounded-full bg-black/70 border border-cyan-300/50 text-cyan-100 text-[10px] font-bold'},captured?'✓ FOTO HASIL SCAN':'● KAMERA SIAP'),flash&&React.createElement('div',{className:'absolute inset-0 bg-white opacity-90 pointer-events-none'}));
    const resultBox=result&&React.createElement('div',{className:`rounded-2xl p-4 border ${result.nominal?'bg-emerald-950/55 border-emerald-400':'bg-slate-900 border-slate-600'}`},React.createElement('div',{className:'font-black text-sm'},result.nominal?'✓ NOMINAL TERDETEKSI':'⚠ NOMINAL TIDAK TERDETEKSI'),React.createElement('div',{className:'grid grid-cols-2 gap-2 mt-3 text-xs'},React.createElement('div',null,React.createElement('b',null,'Nominal: '),result.label),React.createElement('div',null,React.createElement('b',null,'Confidence: '),result.confidence,'%')),React.createElement('div',{className:'text-xs text-slate-300 mt-3 leading-relaxed'},result.catatan),React.createElement('div',{className:'mt-3 p-3 rounded-xl bg-black/20 border border-white/10'},React.createElement('div',{className:'font-black text-cyan-200 mb-1'},result.nominal?'Sejarah singkat '+result.label:'Informasi'),React.createElement('div',{className:'text-xs text-slate-200 leading-relaxed'},result.sejarah)));
    return React.createElement('div',{className:'fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md'},React.createElement('div',{className:'relative w-full max-w-3xl rounded-3xl bg-[#081220] border-2 border-cyan-500/50 shadow-2xl text-white p-4 sm:p-6 max-h-[95vh] overflow-y-auto flex flex-col gap-4'},React.createElement('div',{className:'flex items-start justify-between border-b border-cyan-500/20 pb-3'},React.createElement('div',{className:'flex items-center gap-3'},React.createElement('div',{className:'w-11 h-11 rounded-2xl bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-300 text-xl'},React.createElement('i',{className:'fa-solid fa-camera'})),React.createElement('div',null,React.createElement('h3',{className:'text-base sm:text-xl font-black'},'Scan Rupiah Otomatis'),React.createElement('p',{className:'text-xs sm:text-sm text-cyan-200/80'},'Kenali uang Rupiah Rp5.000 secara otomatis dari kamera'))),React.createElement('button',{onClick:()=>{stopCamera();onClose();},className:'w-9 h-9 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center font-bold'},'×')),React.createElement('div',{className:'rounded-xl bg-cyan-950/30 border border-cyan-400/25 p-3 text-xs'},React.createElement('b',null,'Arahkan seluruh lembar uang ke kotak dan pastikan angka nominal terlihat jelas.'),React.createElement('div',{className:'mt-1 text-cyan-100/70'},scanStatus)),photo,React.createElement('button',{onClick:analyze,disabled:!cameraReadyRef.current||busy,className:'w-full py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-slate-950 font-black text-sm'},captured?'📷 SCAN LAGI':'📷 SCAN SEKARANG'),captured&&React.createElement('div',{className:'rounded-xl border border-cyan-400/25 bg-cyan-950/20 p-3'},React.createElement('div',{className:'text-[11px] font-black text-cyan-200 mb-2'},'📸 FOTO HASIL SCAN'),React.createElement('img',{src:captured,alt:'Hasil foto scan Rupiah',className:'w-full max-h-80 object-contain rounded-lg bg-black',style:{transform:'none'}})),React.createElement('canvas',{ref:canvasRef,className:'hidden'}),error&&React.createElement('div',{className:'p-3 rounded-xl bg-red-950/60 border border-red-500 text-red-200 text-xs'},error),resultBox,React.createElement('button',{onClick:()=>{stopCamera();onClose();},className:'w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs'},'Tutup')));
};
const TTSGameModal = ({ onClose }) => {
    const [currentLevelIdx, setCurrentLevelIdx] = React.useState(0);
    const [userGrid, setUserGrid] = React.useState([]);
    const [isCompleted, setIsCompleted] = React.useState(false);
    const [timeSpent, setTimeSpent] = React.useState(0);
    const [feedbackMsg, setFeedbackMsg] = React.useState(null);
    const inputRef = React.useRef(null);
    const activeLevel = TTS_SESSIONS_5000[currentLevelIdx];

    React.useEffect(() => {
        const grid = activeLevel.gridMap.map(row => row.map(cell => cell === '#' ? '#' : ''));
        setUserGrid(grid);
        setIsCompleted(false);
        setFeedbackMsg(null);
        setTimeSpent(0);
        setTimeout(() => inputRef.current?.focus(), 50);
    }, [currentLevelIdx]);

    React.useEffect(() => {
        if (isCompleted) return;
        const timer = setInterval(() => setTimeSpent(prev => prev + 1), 1000);
        return () => clearInterval(timer);
    }, [isCompleted]);

    const answerSlots = [];
    activeLevel.gridMap.forEach((row,r) => row.forEach((cell,c) => {
        if (cell !== '#') answerSlots.push([r,c]);
    }));

    const handleKeyboard = (e) => {
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        if (e.key === 'Backspace') {
            e.preventDefault();
            const filled = answerSlots.map(([r,c]) => userGrid[r]?.[c] || '');
            let idx = filled.map((v,i)=>v?i:-1).filter(i=>i>=0).pop();
            if (idx !== undefined) {
                const [r,c] = answerSlots[idx];
                setUserGrid(prev => prev.map((row,ri)=>row.map((cell,ci)=>ri===r&&ci===c?'':cell)));
            }
            return;
        }
        if (/^[a-zA-Z]$/.test(e.key)) {
            e.preventDefault();
            const filled = answerSlots.map(([r,c]) => userGrid[r]?.[c] || '');
            const idx = filled.findIndex(v => !v);
            if (idx < 0) return;
            const [r,c] = answerSlots[idx];
            setUserGrid(prev => prev.map((row,ri)=>row.map((cell,ci)=>ri===r&&ci===c?e.key.toUpperCase():cell)));
            sound.play('click');
        }
    };

    const checkAnswers = () => {
        let allCorrect = true, anyFilled = false;
        for (let r=0;r<activeLevel.gridMap.length;r++) for (let c=0;c<activeLevel.gridMap[r].length;c++) {
            const expected = activeLevel.gridMap[r][c];
            if (expected !== '#') {
                const value = userGrid[r]?.[c]?.trim().toUpperCase() || '';
                if (value) anyFilled = true;
                if (value !== expected) allCorrect = false;
            }
        }
        if (!anyFilled) {
            setFeedbackMsg({text:'⚠️ Ketik jawaban langsung dari keyboard.',isError:true});
            return;
        }
        if (allCorrect) {
            sound.play('correct'); setIsCompleted(true); setFeedbackMsg(null);
            try { window.confetti({particleCount:80,spread:70,origin:{y:.6}}); } catch {}
        } else {
            sound.play('hit');
            setFeedbackMsg({text:'❌ Masih ada huruf yang belum tepat. Gunakan Backspace jika ingin mengoreksi.',isError:true});
        }
    };

    return React.createElement("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn"},
        React.createElement("div",{className:"relative w-full max-w-md rounded-3xl bg-[#0d1527] border-2 border-indigo-500/50 shadow-[0_0_50px_rgba(99,102,241,.3)] text-white p-4 sm:p-6 max-h-[92vh] overflow-y-auto flex flex-col gap-3.5"},
            React.createElement("div",{className:"flex items-center justify-between border-b border-indigo-500/20 pb-2.5"},
                React.createElement("div",{className:"flex items-center gap-2.5"},
                    React.createElement("div",{className:"w-9 h-9 rounded-xl bg-indigo-950 border border-indigo-400 flex items-center justify-center text-indigo-300"},React.createElement("i",{className:"fa-solid fa-table-cells"})),
                    React.createElement("div",null,React.createElement("h3",{className:"text-base font-black"},"TTS Rupiah Pintar"),React.createElement("p",{className:"text-xs text-indigo-200/80"},"Ketik jawaban langsung dari keyboard"))),
                React.createElement("button",{onClick:onClose,className:"w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center font-bold"},"×")),
            React.createElement("div",{className:"flex items-center justify-between bg-indigo-950/40 p-2 rounded-xl border border-indigo-500/30 text-xs"},
                React.createElement("button",{disabled:currentLevelIdx===0,onClick:()=>setCurrentLevelIdx(p=>p-1),className:"px-2.5 py-1 rounded bg-indigo-900/60 disabled:opacity-30 font-bold"},"◀ Prev"),
                React.createElement("span",{className:"font-extrabold text-indigo-200"},"Level ",activeLevel.level,": ",activeLevel.title),
                React.createElement("button",{disabled:currentLevelIdx===TTS_SESSIONS_5000.length-1,onClick:()=>setCurrentLevelIdx(p=>p+1),className:"px-2.5 py-1 rounded bg-indigo-900/60 disabled:opacity-30 font-bold"},"Next ▶")),
            isCompleted
                ? React.createElement("div",{className:"p-4 rounded-2xl bg-indigo-950/60 border border-indigo-400 text-center flex flex-col items-center gap-2"},
                    React.createElement("div",{className:"w-16 h-16 rounded-full bg-yellow-400/20 border-2 border-yellow-400 text-yellow-300 flex items-center justify-center text-3xl"},React.createElement("i",{className:"fa-solid fa-trophy"})),
                    React.createElement("h4",{className:"text-xl font-black text-yellow-300"},"LEVEL SELESAI!"),
                    React.createElement("p",{className:"text-xs text-zinc-200"},"Berhasil menyelesaikan ",React.createElement("b",null,activeLevel.title)," dalam ",React.createElement("b",null,timeSpent)," detik."),
                    React.createElement("button",{onClick:()=>currentLevelIdx<TTS_SESSIONS_5000.length-1?setCurrentLevelIdx(p=>p+1):setCurrentLevelIdx(0),className:"w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-xs"},currentLevelIdx<TTS_SESSIONS_5000.length-1?"Lanjut Level":"Main Ulang"))
                : React.createElement(React.Fragment,null,
                    React.createElement("div",{tabIndex:0,onKeyDown:handleKeyboard,onClick:()=>inputRef.current?.focus(),className:"outline-none cursor-text"},
                        React.createElement("input",{ref:inputRef,autoFocus:true,tabIndex:0,onKeyDown:handleKeyboard,ariaLabel:"Ketik jawaban TTS",className:"absolute opacity-0 pointer-events-none w-px h-px",value:"",onChange:()=>{}}),
                        React.createElement("div",{className:"text-[10px] text-indigo-300 font-bold text-center mb-2"},"Klik area TTS sekali, lalu ketik terus. Tidak perlu pindah kotak."),
                        React.createElement("div",{className:"flex justify-center"},
                            React.createElement("div",{className:"grid gap-1.5 p-3 rounded-2xl bg-zinc-950 border border-indigo-500/40 shadow-inner",style:{gridTemplateColumns:`repeat(${activeLevel.gridMap[0].length},40px)`}},
                                activeLevel.gridMap.map((row,r)=>row.map((cell,c)=>{
                                    if(cell==='#') return React.createElement("div",{key:`cell-${r}-${c}`,className:"w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800"});
                                    return React.createElement("div",{key:`cell-${r}-${c}`,className:`w-10 h-10 rounded-lg border-2 ${userGrid[r]?.[c]?'border-indigo-300 bg-indigo-950 text-white':'border-indigo-500/50 bg-slate-900'} flex items-center justify-center font-black text-lg relative`},
                                        (r===0&&c===0||r===2&&c===0||r===4&&c===0)&&React.createElement("span",{className:"absolute top-0.5 left-1 text-[8px] text-indigo-400"},r===0?'1':r===2?'2':'3'),
                                        userGrid[r]?.[c]||'');
                                }))))),
                    React.createElement("div",{className:"rounded-xl bg-slate-900/90 border border-indigo-500/30 p-3 text-xs space-y-2"},
                        React.createElement("div",{className:"font-extrabold text-indigo-300"},"Petunjuk Soal:"),
                        activeLevel.clues.map((clue,i)=>React.createElement("div",{key:i,className:"text-zinc-300 pl-2 border-l-2 border-indigo-500/60 leading-tight"},React.createElement("span",{className:"font-bold text-indigo-200"},clue.num,":")," ",clue.text))),
                    feedbackMsg&&React.createElement("div",{className:`p-2.5 rounded-xl text-xs font-bold text-center ${feedbackMsg.isError?'bg-red-950/60 border border-red-500 text-red-200':'bg-emerald-950/60 border border-emerald-500 text-emerald-200'}`},feedbackMsg.text),
                    React.createElement("button",{onClick:checkAnswers,className:"w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-lg"},"Periksa Jawaban TTS"))
        )
    );
};
const RunnerGameModal = ({ onClose }) => {
    const [score, setScore] = React.useState(0);
    const [isGameOver, setIsGameOver] = React.useState(false);
    const canvasRef = React.useRef(null);
    const gameStateRef = React.useRef({
        playerY: 140,
        playerVy: 0,
        gravity: 0.75,
        isGrounded: true,
        coins: [],
        obstacles: [],
        score: 0,
        speed: 4.8,
        frame: 0,
        gameOver: false
    });
    const jump = () => {
        if (gameStateRef.current.isGrounded && !gameStateRef.current.gameOver) {
            gameStateRef.current.playerVy = -11.5;
            gameStateRef.current.isGrounded = false;
            sound.play('jump');
        }
    };
    const restart = () => {
        sound.play('coin');
        gameStateRef.current = {
            playerY: 140,
            playerVy: 0,
            gravity: 0.75,
            isGrounded: true,
            coins: [],
            obstacles: [],
            score: 0,
            speed: 4.8,
            frame: 0,
            gameOver: false
        };
        setScore(0);
        setIsGameOver(false);
    };
    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        let animId;
        const loop = () => {
            const state = gameStateRef.current;
            if (!state.gameOver) {
                state.frame++;
                ctx.clearRect(0, 0, 360, 210);
                // Sky & Ground
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(0, 0, 360, 160);
                ctx.fillStyle = '#b91c1c'; // Red ground for 5000 theme
                ctx.fillRect(0, 160, 360, 50);
                // Ground stripe
                ctx.fillStyle = '#f59e0b';
                ctx.fillRect(0, 160, 360, 4);
                // Physics
                state.playerVy += state.gravity;
                state.playerY += state.playerVy;
                if (state.playerY >= 135) {
                    state.playerY = 135;
                    state.playerVy = 0;
                    state.isGrounded = true;
                }
                // Draw Player (Duta Rupiah)
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(35, state.playerY, 24, 28);
                ctx.fillStyle = '#fef08a';
                ctx.fillRect(38, state.playerY + 4, 18, 12);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(48, state.playerY + 7, 4, 4);
                // Spawn Coins (Rp5.000 notes)
                if (state.frame % 60 === 0) {
                    state.coins.push({ x: 370, y: Math.random() > 0.5 ? 95 : 130, val: 5000 });
                }
                // Spawn Obstacles
                if (state.frame % 115 === 0) {
                    state.obstacles.push({ x: 370, y: 142, w: 18, h: 22 });
                }
                // Update Coins
                for (let i = state.coins.length - 1; i >= 0; i--) {
                    const c = state.coins[i];
                    c.x -= state.speed;
                    // Draw mini 5000 Banknote
                    ctx.fillStyle = '#ef4444';
                    ctx.fillRect(c.x - 12, c.y - 6, 24, 12);
                    ctx.strokeStyle = '#fef08a';
                    ctx.strokeRect(c.x - 12, c.y - 6, 24, 12);
                    ctx.fillStyle = '#ffffff';
                    ctx.font = 'bold 7px sans-serif';
                    ctx.fillText('5000', c.x - 9, c.y + 3);
                    // Collision
                    if (Math.abs(c.x - 47) < 22 && Math.abs(c.y - (state.playerY + 14)) < 22) {
                        state.score += c.val;
                        setScore(state.score);
                        sound.play('coin');
                        state.coins.splice(i, 1);
                    }
                    else if (c.x < -30) {
                        state.coins.splice(i, 1);
                    }
                }
                // Update Obstacles
                for (let i = state.obstacles.length - 1; i >= 0; i--) {
                    const o = state.obstacles[i];
                    o.x -= state.speed;
                    ctx.fillStyle = '#f59e0b';
                    ctx.fillRect(o.x, o.y, o.w, o.h);
                    ctx.fillStyle = '#000000';
                    ctx.font = 'bold 10px sans-serif';
                    ctx.fillText('⚠', o.x + 3, o.y + 15);
                    // Collision
                    if (Math.abs(o.x - 45) < 18 && state.playerY > 115) {
                        sound.play('hit');
                        state.gameOver = true;
                        setIsGameOver(true);
                    }
                    else if (o.x < -20) {
                        state.obstacles.splice(i, 1);
                    }
                }
                // Live Score HUD
                ctx.fillStyle = '#fef08a';
                ctx.font = 'bold 11px sans-serif';
                ctx.fillText(`Tabungan Rp5000: Rp ${state.score.toLocaleString('id-ID')}`, 12, 22);
            }
            animId = requestAnimationFrame(loop);
        };
        animId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animId);
    }, []);
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn" },
        React.createElement("div", { className: "relative w-full max-w-md rounded-3xl bg-[#0b1424] border-2 border-rose-500/50 shadow-[0_0_50px_rgba(244,63,94,0.3)] text-white p-4 sm:p-6 flex flex-col gap-3.5 text-center" },
            React.createElement("div", { className: "flex items-center justify-between border-b border-rose-500/20 pb-2" },
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement("i", { className: "fa-solid fa-gamepad text-rose-400 text-lg" }),
                    React.createElement("h3", { className: "text-base font-black text-white" }, "Rupiah Runner 5000")),
                React.createElement("button", { onClick: () => {
                        sound.play('click');
                        onClose();
                    }, className: "w-7 h-7 rounded-full bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center font-bold" }, "\u00D7")),
            React.createElement("div", { className: "relative rounded-2xl overflow-hidden border-2 border-rose-400/50 shadow-inner bg-black flex justify-center" },
                React.createElement("canvas", { ref: canvasRef, width: 360, height: 210, className: "w-full h-auto max-h-[220px]" }),
                isGameOver && (React.createElement("div", { className: "absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-2 p-4 animate-fadeIn" },
                    React.createElement("i", { className: "fa-solid fa-trophy text-amber-400 text-3xl animate-bounce" }),
                    React.createElement("h4", { className: "text-lg font-black text-white" }, "Permainan Selesai!"),
                    React.createElement("div", { className: "px-3 py-1 rounded-full bg-rose-500 text-zinc-950 font-black text-xs" }, "Duta Cinta Rupiah"),
                    React.createElement("p", { className: "text-xs text-zinc-300" },
                        "Total Tabungan:",
                        React.createElement("br", null),
                        React.createElement("span", { className: "text-base font-extrabold text-emerald-400" },
                            "Rp ",
                            score.toLocaleString('id-ID'))),
                    React.createElement("button", { onClick: restart, className: "mt-1 px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-extrabold text-xs shadow-lg" }, "Main Lagi")))),
            React.createElement("div", { className: "flex items-center justify-between gap-3 pt-1" },
                React.createElement("button", { onClick: jump, className: "flex-1 py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-zinc-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all" },
                    React.createElement("i", { className: "fa-solid fa-arrow-up" }),
                    React.createElement("span", null, "Lompat! (Ambil Rp5000)")),
                React.createElement("button", { onClick: () => {
                        sound.play('click');
                        onClose();
                    }, className: "py-3.5 px-5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs" }, "Tutup")))));
};
const QuizModal = ({ onClose }) => {
    const [currentIdx, setCurrentIdx] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [isFinished, setIsFinished] = React.useState(false);
    const [selectedOpt, setSelectedOpt] = React.useState(null);
    const currentQ = QUIZ_QUESTIONS_5000[currentIdx];
    const handleAnswer = (optionIdx) => {
        setSelectedOpt(optionIdx);
        const isCorrect = optionIdx === currentQ.ans;
        if (isCorrect) {
            sound.play('correct');
            setScore(prev => prev + 20);
        }
        else {
            sound.play('hit');
        }
        setTimeout(() => {
            setSelectedOpt(null);
            if (currentIdx + 1 < QUIZ_QUESTIONS_5000.length) {
                setCurrentIdx(prev => prev + 1);
            }
            else {
                setIsFinished(true);
            }
        }, 900);
    };
    const restartQuiz = () => {
        sound.play('coin');
        setCurrentIdx(0);
        setScore(0);
        setIsFinished(false);
        setSelectedOpt(null);
    };
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn" },
        React.createElement("div", { className: "relative w-full max-w-md rounded-3xl bg-[#0a1626] border-2 border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.3)] text-white p-4 sm:p-6 flex flex-col gap-4" },
            React.createElement("div", { className: "flex items-center justify-between border-b border-amber-500/20 pb-2.5" },
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement("i", { className: "fa-solid fa-trophy text-amber-400 text-lg" }),
                    React.createElement("h3", { className: "text-base font-black text-white" }, "Kuis Kebangsaan Rupiah")),
                React.createElement("button", { onClick: () => {
                        sound.play('click');
                        onClose();
                    }, className: "w-7 h-7 rounded-full bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center font-bold" }, "\u00D7")),
            isFinished ? (React.createElement("div", { className: "text-center flex flex-col items-center gap-2.5 p-3 animate-fadeIn" },
                React.createElement("div", { className: "w-16 h-16 rounded-full bg-amber-400/20 border-2 border-amber-400 text-amber-300 flex items-center justify-center text-3xl shadow-[0_0_20px_#f59e0b] animate-bounce" },
                    React.createElement("i", { className: "fa-solid fa-medal" })),
                React.createElement("h4", { className: "text-xl font-black text-white" }, "Hasil Kuis Pengetahuan"),
                React.createElement("div", { className: "px-4 py-1 rounded-full bg-amber-400 text-zinc-950 font-black text-xs" },
                    "Skor Anda: ",
                    score,
                    " / 100"),
                React.createElement("p", { className: "text-xs text-zinc-300 mt-1" }, score >= 80
                    ? 'Luar biasa! Pemahaman kamu tentang uang Rupiah Rp5.000 sangat mendalam!'
                    : 'Bagus! Terus pelajari metode 3D dan ciri keaslian uang Rupiah kita!'),
                React.createElement("div", { className: "w-full flex gap-2 mt-4" },
                    React.createElement("button", { onClick: restartQuiz, className: "flex-1 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-xs shadow-lg" }, "Ulangi Kuis"),
                    React.createElement("button", { onClick: () => {
                            sound.play('click');
                            onClose();
                        }, className: "py-3 px-5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs" }, "Selesai")))) : (React.createElement("div", { className: "flex flex-col gap-3" },
                React.createElement("div", { className: "flex justify-between items-center text-xs text-amber-300/80 font-bold" },
                    React.createElement("span", null,
                        "Soal ",
                        currentIdx + 1,
                        " dari ",
                        QUIZ_QUESTIONS_5000.length),
                    React.createElement("span", null,
                        "Skor: ",
                        score)),
                React.createElement("div", { className: "p-3.5 rounded-2xl bg-slate-900/90 border border-amber-500/30 text-sm font-extrabold text-white leading-relaxed" }, currentQ.q),
                React.createElement("div", { className: "space-y-2" }, currentQ.opt.map((optText, i) => {
                    let optStyle = 'bg-slate-900/70 border-zinc-700 hover:bg-slate-800 text-zinc-200';
                    if (selectedOpt !== null) {
                        if (i === currentQ.ans) {
                            optStyle = 'bg-emerald-600 border-emerald-400 text-white font-bold';
                        }
                        else if (i === selectedOpt) {
                            optStyle = 'bg-rose-600 border-rose-400 text-white font-bold';
                        }
                    }
                    return (React.createElement("button", { key: i, disabled: selectedOpt !== null, onClick: () => handleAnswer(i), className: `w-full p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center gap-2.5 ${optStyle}` },
                        React.createElement("span", { className: "w-5 h-5 rounded-full bg-black/30 flex items-center justify-center text-[10px] shrink-0 font-bold" }, String.fromCharCode(65 + i)),
                        React.createElement("span", null, optText)));
                })))))));
};
const SecurityDetailModal = ({ onClose, onOpenMode }) => {
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn" },
        React.createElement("div", { className: "relative w-full max-w-lg rounded-3xl bg-[#0a1526] border-2 border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.3)] text-white p-4 sm:p-6 max-h-[92vh] overflow-y-auto flex flex-col gap-4" },
            React.createElement("div", { className: "flex items-center justify-between border-b border-amber-500/20 pb-3" },
                React.createElement("div", { className: "flex items-center gap-3" },
                    React.createElement("div", { className: "w-10 h-10 rounded-2xl bg-amber-950/80 border border-amber-400 flex items-center justify-center text-amber-300 text-lg shadow-[0_0_15px_rgba(245,158,11,0.4)]" },
                        React.createElement("i", { className: "fa-solid fa-shield-halved" })),
                    React.createElement("div", null,
                        React.createElement("h3", { className: "text-base sm:text-lg font-black text-white" }, "8 Ciri Keamanan Uang Rp5.000"),
                        React.createElement("p", { className: "text-xs text-amber-200/80" }, "Tahun Emisi (TE) 2022 - Bank Indonesia"))),
                React.createElement("button", { onClick: () => {
                        sound.play('click');
                        onClose();
                    }, className: "w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center font-bold" }, "\u00D7")),
            React.createElement("div", { className: "grid grid-cols-3 gap-2 text-center text-xs" },
                React.createElement("div", { className: "p-2 rounded-xl bg-amber-950/40 border border-amber-500/40" },
                    React.createElement("div", { className: "font-black text-amber-300" }, "1. DILIHAT"),
                    React.createElement("div", { className: "text-[10px] text-zinc-300" }, "BI-SPARK, Benang & Warna")),
                React.createElement("div", { className: "p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/40" },
                    React.createElement("div", { className: "font-black text-emerald-300" }, "2. DIRABA"),
                    React.createElement("div", { className: "text-[10px] text-zinc-300" }, "Cetak Intaglio & Blind Code")),
                React.createElement("div", { className: "p-2 rounded-xl bg-sky-950/40 border border-sky-500/40" },
                    React.createElement("div", { className: "font-black text-sky-300" }, "3. DITERAWANG"),
                    React.createElement("div", { className: "text-[10px] text-zinc-300" }, "Watermark & Rectoverso"))),
            React.createElement("div", { className: "space-y-2" }, SECURITY_FEATURES_5000.map((feat, idx) => (React.createElement("div", { key: idx, className: "p-3 rounded-2xl bg-slate-900/80 border border-zinc-700/60 flex items-start gap-3 hover:border-amber-400/50 transition-all" },
                React.createElement("div", { className: "w-8 h-8 rounded-xl bg-amber-400 text-zinc-950 flex items-center justify-center shrink-0 font-bold mt-0.5 text-sm" },
                    React.createElement("i", { className: `fa-solid ${feat.icon}` })),
                React.createElement("div", { className: "flex-1" },
                    React.createElement("div", { className: "flex items-center justify-between" },
                        React.createElement("div", { className: "font-bold text-xs sm:text-sm text-amber-100" }, feat.title),
                        React.createElement("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-amber-300 font-semibold" }, feat.method)),
                    React.createElement("div", { className: "text-xs text-zinc-300 mt-1 leading-relaxed" }, feat.desc)))))),
            React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1" },
                React.createElement("button", { onClick: () => {
                        sound.play('click');
                        onClose();
                        if (onOpenMode)
                            onOpenMode('dilihat');
                    }, className: "p-2.5 rounded-xl bg-amber-500/20 border border-amber-400 text-amber-200 text-xs font-bold hover:bg-amber-500/30" },
                    React.createElement("i", { className: "fa-solid fa-gem block text-base mb-1" }),
                    " Uji Dilihat"),
                React.createElement("button", { onClick: () => {
                        sound.play('click');
                        onClose();
                        if (onOpenMode)
                            onOpenMode('diraba');
                    }, className: "p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-400 text-emerald-200 text-xs font-bold hover:bg-emerald-500/30" },
                    React.createElement("i", { className: "fa-solid fa-hand block text-base mb-1" }),
                    " Uji Diraba"),
                React.createElement("button", { onClick: () => {
                        sound.play('click');
                        onClose();
                        if (onOpenMode)
                            onOpenMode('diterawang');
                    }, className: "p-2.5 rounded-xl bg-sky-500/20 border border-sky-400 text-sky-200 text-xs font-bold hover:bg-sky-500/30" },
                    React.createElement("i", { className: "fa-solid fa-eye block text-base mb-1" }),
                    " Uji Terawang"),
                React.createElement("button", { onClick: () => {
                        sound.play('click');
                        onClose();
                        if (onOpenMode)
                            onOpenMode('uv');
                    }, className: "p-2.5 rounded-xl bg-purple-500/20 border border-purple-400 text-purple-200 text-xs font-bold hover:bg-purple-500/30" },
                    React.createElement("i", { className: "fa-solid fa-sun block text-base mb-1" }),
                    " Sinar UV")))));
};
const NavigationCarousel = ({ activeMode, isAutoRotate, onSelectMode, onToggleAutoRotate, onScrollToInfo }) => {
    const scrollContainerRef = React.useRef(null);
    const [currentPage, setCurrentPage] = React.useState(0);
    const navItems = [
        {
            id: 'scanner',
            title: 'Scan Uang',
            icon: 'fa-qrcode',
            action: () => onSelectMode('scanner')
        },
        {
            id: '3d-rotate',
            title: isAutoRotate ? 'Auto Putar ON' : '3D Explorer',
            icon: 'fa-cube',
            isGlowing: isAutoRotate,
            badge: isAutoRotate ? '360°' : undefined,
            action: () => onToggleAutoRotate()
        },
        {
            id: 'info',
            title: 'Info Uang',
            icon: 'fa-book-open',
            isActiveDefault: activeMode === 'none',
            action: () => onScrollToInfo()
        },
        {
            id: 'uv',
            title: 'Sinar UV',
            icon: 'fa-sun',
            action: () => onSelectMode('uv')
        },
        {
            id: 'diraba',
            title: 'Diraba',
            icon: 'fa-hand',
            action: () => onSelectMode('diraba')
        },
        {
            id: 'diterawang',
            title: 'Diterawang',
            icon: 'fa-eye',
            action: () => onSelectMode('diterawang')
        },
        {
            id: 'dilihat',
            title: 'Dilihat (SPARK)',
            icon: 'fa-gem',
            action: () => onSelectMode('dilihat')
        },
        {
            id: 'quiz',
            title: 'Kuis',
            icon: 'fa-trophy',
            action: () => onSelectMode('quiz')
        },
        {
            id: 'tts',
            title: 'Game TTS',
            icon: 'fa-table-cells',
            action: () => onSelectMode('tts')
        },
        {
            id: 'runner',
            title: 'Rupiah Runner',
            icon: 'fa-gamepad',
            action: () => onSelectMode('runner')
        }
    ];
    const scroll = (direction) => {
        if (!scrollContainerRef.current)
            return;
        const offset = direction === 'left' ? -220 : 220;
        scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        sound.play('click');
    };
    const handleScrollEvent = () => {
        if (!scrollContainerRef.current)
            return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        if (maxScroll > 0) {
            const page = Math.round((scrollLeft / maxScroll) * 3);
            setCurrentPage(page);
        }
    };
    return (React.createElement("div", { className: "relative w-full rounded-2xl bg-[rgba(248,246,240,0.96)] border-2 border-[#c5a059] p-3 sm:p-3.5 shadow-xl backdrop-blur-md flex flex-col gap-2" },
        React.createElement("div", { className: "relative flex items-center" },
            React.createElement("button", { onClick: () => scroll('left'), className: "absolute -left-2 z-20 w-8 h-8 rounded-full bg-[#0b1a30] border-2 border-[#d4af37] text-[#f3e5ab] flex items-center justify-center text-xs shadow-md hover:bg-[#152a48] transition-all", "aria-label": "Scroll left" },
                React.createElement("i", { className: "fa-solid fa-chevron-left" })),
            React.createElement("div", { ref: scrollContainerRef, onScroll: handleScrollEvent, className: "flex items-center gap-3 overflow-x-auto scrollbar-none py-1.5 px-5 scroll-smooth w-full select-none", style: { scrollbarWidth: 'none', msOverflowStyle: 'none' } }, navItems.map((item) => {
                const isSelected = activeMode === item.id || (item.isActiveDefault && activeMode === 'none');
                const isSpecialGlow = item.isGlowing;
                return (React.createElement("div", { key: item.id, onClick: () => {
                        sound.play('click');
                        item.action();
                    }, className: "flex flex-col items-center gap-1.5 cursor-pointer shrink-0 transition-transform active:scale-95 group", style: { width: '70px' } },
                    React.createElement("div", { className: `relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all ${isSelected
                            ? 'bg-gradient-to-b from-blue-700 to-blue-900 border-2 border-cyan-400 shadow-[0_0_18px_#38bdf8] text-white ring-4 ring-blue-400/30'
                            : isSpecialGlow
                                ? 'bg-gradient-to-b from-amber-500 to-amber-700 border-2 border-amber-300 shadow-[0_0_16px_#f59e0b] text-zinc-950 font-black'
                                : 'bg-[#0b1a30] border-2 border-[#d4af37] text-[#f3e5ab] hover:border-amber-300 hover:shadow-[0_0_12px_rgba(212,175,55,0.4)]'}` },
                        React.createElement("i", { className: `fa-solid ${item.icon} text-lg sm:text-xl` }),
                        item.badge && (React.createElement("span", { className: "absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full bg-amber-400 text-zinc-950 text-[8px] font-black border border-amber-200" }, item.badge))),
                    React.createElement("span", { className: `text-[10px] sm:text-[11px] font-black text-center truncate max-w-full tracking-tight ${isSelected
                            ? 'text-blue-900 drop-shadow-sm'
                            : isSpecialGlow
                                ? 'text-amber-800'
                                : 'text-[#2b2b2b] group-hover:text-[#0b1a30]'}` }, item.title)));
            })),
            React.createElement("button", { onClick: () => scroll('right'), className: "absolute -right-2 z-20 w-8 h-8 rounded-full bg-[#0b1a30] border-2 border-[#d4af37] text-[#f3e5ab] flex items-center justify-center text-xs shadow-md hover:bg-[#152a48] transition-all", "aria-label": "Scroll right" },
                React.createElement("i", { className: "fa-solid fa-chevron-right" }))),
        React.createElement("div", { className: "flex justify-center items-center gap-1.5 pt-0.5" }, [0, 1, 2, 3].map((dotIdx) => (React.createElement("span", { key: dotIdx, className: `h-1.5 rounded-full transition-all ${currentPage === dotIdx
                ? 'w-5 bg-[#0b1a30] shadow-[0_0_6px_rgba(11,26,48,0.5)]'
                : 'w-1.5 bg-[#cbd5e0]'}` }))))));
};
const BanknoteDetailCard = ({ onOpenSecurityDetail, onOpenMode, onOpenCulture }) => {
    return (React.createElement("main", { id: "banknote-detail-card", className: "w-full rounded-2xl bg-[rgba(248,246,240,0.96)] border-2 border-[#c5a059] p-4 sm:p-5 shadow-xl backdrop-blur-md flex flex-col gap-4 text-[#2b2b2b]" },
        React.createElement("div", { className: "w-full rounded-2xl bg-[#0b1a30] border border-[#d4af37] p-3.5 sm:p-4 flex items-center justify-between shadow-lg text-white" },
            React.createElement("div", { className: "w-10 h-10 rounded-full bg-red-950 border-2 border-[#d4af37] flex items-center justify-center text-[#f3e5ab] font-black text-sm shadow" }, "Rp"),
            React.createElement("div", { className: "text-center flex-1 px-2" },
                React.createElement("h2", { className: "text-xl sm:text-2xl font-black text-white tracking-wide drop-shadow" }, BANKNOTE_5000_INFO.nominal),
                React.createElement("p", { className: "text-[11px] sm:text-xs text-[#f3e5ab] font-semibold tracking-wider" },
                    BANKNOTE_5000_INFO.terbilang,
                    " \u2013 ",
                    BANKNOTE_5000_INFO.emisi)),
            React.createElement("div", { className: "w-9 h-6 rounded-md border border-white/50 overflow-hidden shadow" },
                React.createElement("div", { className: "h-1/2 bg-red-600" }),
                React.createElement("div", { className: "h-1/2 bg-white" }))),
        React.createElement("div", { className: "w-full rounded-xl bg-[rgba(237,242,247,0.95)] border border-[#cbd5e0] p-2.5 flex justify-around text-[10.5px] sm:text-xs text-[#2d3748] font-medium" },
            React.createElement("span", null,
                React.createElement("b", null, "Ukuran:"),
                " ",
                BANKNOTE_5000_INFO.ukuran),
            React.createElement("span", null,
                React.createElement("b", null, "Warna:"),
                " ",
                BANKNOTE_5000_INFO.warna),
            React.createElement("span", null,
                React.createElement("b", null, "Emisi:"),
                " ",
                BANKNOTE_5000_INFO.tanggalPengeluaran)),
        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5" },
            React.createElement("div", { className: "rounded-2xl bg-white/95 border border-[#e0e0e0] p-3.5 sm:p-4 flex flex-col justify-between shadow-sm" },
                React.createElement("div", null,
                    React.createElement("div", { className: "font-extrabold text-xs sm:text-sm text-[#0b1a30] flex items-center gap-1.5 mb-2 border-b border-[#f1f1f1] pb-1.5" },
                        React.createElement("i", { className: "fa-solid fa-star text-[#d4af37]" }),
                        React.createElement("span", null, "Tokoh Pahlawan Nasional")),
                    React.createElement("div", { className: "text-xs text-[#2b2b2b] space-y-1.5" },
                        React.createElement("div", { className: "font-black text-[#0b1a30] text-sm" }, BANKNOTE_5000_INFO.pahlawanUtama),
                        React.createElement("ul", { className: "list-disc pl-4 space-y-1 text-[11px] text-[#4a5568]" },
                            React.createElement("li", null,
                                React.createElement("b", null, "Gelar:"),
                                " ",
                                BANKNOTE_5000_INFO.gelarPahlawan),
                            React.createElement("li", null,
                                React.createElement("b", null, "Peran:"),
                                " Pemimpin Perjuangan & Pembaca Teks Proklamasi 17 Agustus 1945."),
                            React.createElement("li", null,
                                React.createElement("b", null, "Presiden & Wapres Pertama:"),
                                " Peletak fondasi kedaulatan NKRI.")))),
                React.createElement("div", { className: "mt-3 p-2 rounded-lg bg-[#fefce8] border border-[#fef08a] text-[10.5px] italic text-[#854d0e] flex items-center gap-2" },
                    React.createElement("i", { className: "fa-solid fa-feather text-[#d4af37] shrink-0" }),
                    React.createElement("span", null, "\"Bangsa yang besar adalah bangsa yang menghormati jasa para pahlawannya.\""))),
            React.createElement("div", { className: "rounded-2xl bg-white/95 border border-[#e0e0e0] p-3.5 sm:p-4 flex flex-col gap-2.5 shadow-sm" },
                React.createElement("div", { className: "font-extrabold text-xs sm:text-sm text-[#0b1a30] flex items-center gap-1.5 border-b border-[#f1f1f1] pb-1.5" },
                    React.createElement("i", { className: "fa-solid fa-mountain text-[#d4af37]" }),
                    React.createElement("span", null, "Kebudayaan & Alam Nusantara")),
                React.createElement("div", { onClick: () => onOpenCulture("tari"), role: "button", tabIndex: 0, className: "culture-card p-2 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center gap-3" },
                     React.createElement("div", { className: "w-10 h-10 rounded-lg bg-red-900 border border-red-700 flex items-center justify-center text-[#f3e5ab] text-lg shrink-0 shadow-sm" },
                        React.createElement("i", { className: "fa-solid fa-masks-theater" })),
                    React.createElement("div", null,
                        React.createElement("div", { className: "font-bold text-xs text-[#0b1a30]" }, "Tari Gambyong"),
                        React.createElement("div", { className: "text-[10px] text-[#64748b]" }, "Tarian tradisional khas DKI Jakarta berkarakter lincah & ekspresif."))),
                React.createElement("div", { onClick: () => onOpenCulture("raja"), role: "button", tabIndex: 0, className: "culture-card p-2 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center gap-3" },
                     React.createElement("div", { className: "w-10 h-10 rounded-lg bg-cyan-900 border border-cyan-700 flex items-center justify-center text-cyan-200 text-lg shrink-0 shadow-sm" },
                        React.createElement("i", { className: "fa-solid fa-water" })),
                    React.createElement("div", null,
                        React.createElement("div", { className: "font-bold text-xs text-[#0b1a30]" }, "Taman Nasional Bromo Tengger Semeru"),
                        React.createElement("div", { className: "text-[10px] text-[#64748b]" }, "Gugusan pulau karang eksotis & surga bawah laut di Jawa Timur."))),
                React.createElement("div", { onClick: () => onOpenCulture("anggrek"), role: "button", tabIndex: 0, className: "culture-card p-2 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center gap-3" },
                     React.createElement("div", { className: "w-10 h-10 rounded-lg bg-amber-900 border border-amber-700 flex items-center justify-center text-[#f3e5ab] text-lg shrink-0 shadow-sm" },
                        React.createElement("i", { className: "fa-solid fa-spa" })),
                    React.createElement("div", null,
                        React.createElement("div", { className: "font-bold text-xs text-[#0b1a30]" }, "Bunga Sedap Malam"),
                        React.createElement("div", { className: "text-[10px] text-[#64748b]" }, "Puspa Pesona bunga nasional Indonesia yang mempesona."))))),
        React.createElement("div", { className: "rounded-2xl bg-gradient-to-r from-[#0b1a30] via-[#0f2444] to-[#070e1b] border border-[#d4af37] p-3.5 sm:p-4 flex flex-col gap-2.5 text-white shadow-md" },
            React.createElement("div", { className: "flex items-center justify-between" },
                React.createElement("div", { className: "font-black text-xs sm:text-sm text-[#f3e5ab] flex items-center gap-1.5" },
                    React.createElement("i", { className: "fa-solid fa-cubes text-[#d4af37]" }),
                    React.createElement("span", null, "Metode 3D: Dilihat, Diraba, Diterawang")),
                React.createElement("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-[#f3e5ab] border border-[#d4af37]/40 font-bold" }, "Panduan Edukasi BI")),
            React.createElement("div", { className: "grid grid-cols-3 gap-2 text-center text-xs pt-1" },
                React.createElement("button", { onClick: () => {
                        sound.play('click');
                        onOpenMode('dilihat');
                    }, className: "p-2.5 sm:p-3 rounded-xl bg-amber-500/20 border border-[#d4af37] text-[#f3e5ab] hover:bg-amber-500/30 transition-all font-black shadow" },
                    React.createElement("i", { className: "fa-solid fa-gem text-[#d4af37] block text-base mb-1" }),
                    React.createElement("span", null, "1. DILIHAT")),
                React.createElement("button", { onClick: () => {
                        sound.play('click');
                        onOpenMode('diraba');
                    }, className: "p-2.5 sm:p-3 rounded-xl bg-emerald-500/20 border border-emerald-400 text-emerald-300 hover:bg-emerald-500/30 transition-all font-black shadow" },
                    React.createElement("i", { className: "fa-solid fa-hand text-emerald-400 block text-base mb-1" }),
                    React.createElement("span", null, "2. DIRABA")),
                React.createElement("button", { onClick: () => {
                        sound.play('click');
                        onOpenMode('diterawang');
                    }, className: "p-2.5 sm:p-3 rounded-xl bg-sky-500/20 border border-sky-400 text-sky-300 hover:bg-sky-500/30 transition-all font-black shadow" },
                    React.createElement("i", { className: "fa-solid fa-eye text-sky-400 block text-base mb-1" }),
                    React.createElement("span", null, "3. DITERAWANG")))),
        React.createElement("section", { className: "border-t border-[#e2e8f0] pt-3 flex flex-col gap-2.5" },
            React.createElement("div", { className: "flex items-center justify-between" },
                React.createElement("div", { className: "font-extrabold text-xs sm:text-sm text-[#0b1a30] flex items-center gap-1.5" },
                    React.createElement("i", { className: "fa-solid fa-shield-halved text-[#d4af37]" }),
                    React.createElement("span", null, "8 Ciri Keamanan Uang Rp5.000")),
                React.createElement("button", { onClick: () => {
                        sound.play('click');
                        onOpenSecurityDetail();
                    }, className: "px-3 py-1 rounded-full text-xs font-bold bg-[#0b1a30] hover:bg-[#152a48] text-[#f3e5ab] border border-[#d4af37] shadow transition-all flex items-center gap-1" },
                    React.createElement("span", null, "Lihat Detail"),
                    React.createElement("i", { className: "fa-solid fa-arrow-right text-[10px]" }))),
            React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs" }, SECURITY_FEATURES_5000.map((feat, idx) => (React.createElement("div", { key: idx, className: "p-2.5 rounded-xl bg-white border border-[#e2e8f0] flex items-center gap-2 text-[#2b2b2b] shadow-sm hover:border-[#c5a059] transition-all" },
                React.createElement("i", { className: `fa-solid ${feat.icon} text-[#d4af37] w-4 shrink-0 text-center` }),
                React.createElement("span", { className: "truncate font-semibold" }, feat.title)))))),
        React.createElement("div", { className: "rounded-xl bg-gradient-to-r from-[#0b1a30] to-[#162e52] border border-[#38bdf8]/60 p-3 flex items-center justify-between text-xs text-white shadow-md" },
            React.createElement("div", { className: "flex items-center gap-2.5" },
                React.createElement("i", { className: "fa-solid fa-wifi text-cyan-400 text-base rotate-90" }),
                React.createElement("div", null,
                    React.createElement("div", { className: "font-bold text-[#f3e5ab]" }, "NFC Smart Tap Terintegrasi"),
                    React.createElement("div", { className: "text-[10px] text-zinc-300" }, "Sentuh chip NFC fisik untuk membuka tampilan 3D instan di smartphone."))),
            React.createElement("button", { onClick: () => {
                    sound.play('scan');
                    onOpenMode('scanner');
                }, className: "px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold hover:bg-cyan-500/30 shrink-0" }, "Tes Scan"))));
};
const InfoPopUpModal = ({ title, icon = 'fa-circle-info', category, onClose, children }) => {
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn" },
        React.createElement("div", { className: "relative w-full max-w-md rounded-3xl bg-[#091528] border-2 border-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.3)] text-white p-5 sm:p-6 max-h-[90vh] overflow-y-auto flex flex-col gap-3.5" },
            React.createElement("button", { onClick: () => {
                    sound.play('click');
                    onClose();
                }, className: "absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center font-bold text-sm" }, "\u00D7"),
            React.createElement("div", { className: "flex items-center gap-3 border-b border-amber-500/20 pb-3 pr-8" },
                React.createElement("div", { className: "w-10 h-10 rounded-2xl bg-amber-950 border border-amber-400 flex items-center justify-center text-amber-300 text-lg shadow shrink-0" },
                    React.createElement("i", { className: `fa-solid ${icon}` })),
                React.createElement("div", null,
                    category && (React.createElement("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 font-bold uppercase tracking-wider" }, category)),
                    React.createElement("h3", { className: "text-base font-black text-white mt-0.5 leading-snug" }, title))),
            React.createElement("div", { className: "text-xs sm:text-sm text-zinc-200 leading-relaxed space-y-2" }, children),
            React.createElement("button", { onClick: () => {
                    sound.play('click');
                    onClose();
                }, className: "w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs shadow mt-2" }, "Tutup"))));
};
// ===== src/App.tsx =====
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
function App() {
    const [activeMode, setActiveMode] = React.useState('none');
    const [isAutoRotate, setIsAutoRotate] = React.useState(true);
    const [isUVActive, setIsUVActive] = React.useState(false);
    const [isScanning, setIsScanning] = React.useState(false);
    const [isAudioMuted, setIsAudioMuted] = React.useState(false);
    const [selectedHotspot, setSelectedHotspot] = React.useState(null);
    const [cultureVideo, setCultureVideo] = React.useState(null);
    // Toggle Audio
    const handleToggleAudio = () => {
        sound.isMuted = !sound.isMuted;
        setIsAudioMuted(sound.isMuted);
        if (!sound.isMuted)
            sound.play('coin');
    };
    // Toggle Auto Rotation
    const handleToggleAutoRotate = () => {
        setIsAutoRotate(prev => !prev);
    };
    // Trigger Hotspot popup
    const handleHotspotClick = (hotspot) => {
        setSelectedHotspot(hotspot);
    };
    const handleCultureVideo = (type) => {
        sound.play('click');
        setCultureVideo(type);
    };
    // Trigger Scanner
    const handleTriggerScan = () => {
        setIsScanning(true);
        sound.play('scan');
        setTimeout(() => {
            setIsScanning(false);
            setActiveMode('scanner');
        }, 1500);
    };
    // Scroll smoothly to detail card
    const handleScrollToInfo = () => {
        const el = document.getElementById('banknote-detail-card');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (React.createElement("div", { className: "relative min-h-screen flex justify-center py-5 px-3 sm:px-4 text-slate-900 overflow-x-hidden font-sans", style: {
            background: 'radial-gradient(circle at 50% 10%, #f7c46a 0%, #e88924 38%, #b84b16 72%, #7a2f0b 100%)'
        } },
        React.createElement("div", { className: "fixed top-12 left-1/2 -translate-x-1/2 w-[580px] h-[580px] rounded-full bg-amber-500/15 blur-[100px] pointer-events-none z-0 animate-pulse" }),
        React.createElement("div", { className: "fixed inset-0 pointer-events-none z-0 opacity-15", style: {
                backgroundImage: 'none',
                backgroundPosition: 'center 40%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '95% auto',
                filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.4))'
            } }),
        React.createElement("div", { className: "relative z-10 w-full max-w-lg rounded-[32px] p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col gap-4", style: {
                background: 'linear-gradient(180deg, rgba(255,247,239,.97) 0%, rgba(248,224,218,.97) 48%, rgba(232,191,190,.97) 100%)',
                border: '2px solid #c5a059'
            } },
            React.createElement("header", { className: "flex items-center justify-between" },
                React.createElement("button", { onClick: () => {
                        sound.play('click');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, className: "w-10 h-10 rounded-full bg-[#0b1a30] border-2 border-[#d4af37] text-[#f3e5ab] flex items-center justify-center shadow-lg hover:bg-[#152a48] transition-transform active:scale-90", title: "Beranda / Reset Posisi" },
                    React.createElement("i", { className: "fa-solid fa-house" })),
                React.createElement("div", { className: "flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1a30] border-2 border-[#d4af37] text-[#f3e5ab] shadow-lg" },
                    React.createElement("i", { className: "fa-solid fa-building-columns text-base" }),
                    React.createElement("span", { className: "text-xs font-black tracking-wider uppercase" }, "BANK INDONESIA")),
                React.createElement("button", { onClick: handleToggleAudio, className: "w-10 h-10 rounded-full bg-[#0b1a30] border-2 border-[#d4af37] text-[#f3e5ab] flex items-center justify-center shadow-lg hover:bg-[#152a48] transition-transform active:scale-90", title: isAudioMuted ? 'Nyalakan Suara' : 'Matikan Suara' },
                    React.createElement("i", { className: `fa-solid ${isAudioMuted ? 'fa-volume-xmark text-rose-400' : 'fa-volume-high'}` }))),
            React.createElement("section", { className: "text-center flex flex-col items-center" },
                React.createElement("h1", { className: "text-2xl sm:text-3xl font-black tracking-wider drop-shadow-md", style: {
                        color: '#0b1a30',
                        textShadow: '0 2px 4px rgba(255,255,255,0.5)'
                    } }, "RUPIAH EXPLORER 3D"),
                React.createElement("p", { className: "text-[11px] font-extrabold text-[#1e293b] tracking-widest mt-0.5" }, "CINTA • BANGGA • PAHAM RUPIAH"),
                React.createElement("div", { onClick: () => {
                        sound.play('click');
                        setActiveMode('help-3d');
                    }, className: "mt-2.5 px-4 py-1.5 rounded-full bg-[#0b1a30] border-2 border-[#d4af37] text-[#f3e5ab] text-[11px] font-black flex items-center gap-2 cursor-pointer shadow-md hover:bg-[#152a48] transition-all active:scale-95" },
                    React.createElement("i", { className: "fa-solid fa-arrows-spin text-[#d4af37] text-xs animate-spin" }),
                    React.createElement("span", null, "3D Auto-Putar 360\u00B0 & Interaktif"))),
            React.createElement(Bill3DScene, { isAutoRotate: isAutoRotate, onToggleAutoRotate: handleToggleAutoRotate, onHotspotClick: handleHotspotClick, isUVActive: isUVActive, isScanning: isScanning, onHelpClick: () => setActiveMode('help-3d') }),
            React.createElement(NavigationCarousel, { activeMode: activeMode, isAutoRotate: isAutoRotate, onSelectMode: (mode) => {
                    if (mode === 'scanner') {
                        handleTriggerScan();
                    }
                    else {
                        setActiveMode(mode);
                    }
                }, onToggleAutoRotate: handleToggleAutoRotate, onScrollToInfo: handleScrollToInfo }),
            React.createElement(BanknoteDetailCard, { onOpenSecurityDetail: () => setActiveMode('security-detail'), onOpenMode: (mode) => setActiveMode(mode), onOpenCulture: handleCultureVideo }),
            React.createElement("footer", { className: "text-center text-xs font-bold text-[#0b1a30] pt-2 pb-1" }, "Cinta, Bangga, Paham Rupiah \u2022 Bank Indonesia")),
        activeMode === 'uv' && (React.createElement(UVInspectorModal, { onClose: () => setActiveMode('none') })),
        activeMode === 'diraba' && (React.createElement(DirabaInspectorModal, { onClose: () => setActiveMode('none') })),
        activeMode === 'diterawang' && (React.createElement(DiterawangInspectorModal, { onClose: () => setActiveMode('none') })),
        activeMode === 'dilihat' && (React.createElement(DilihatInspectorModal, { onClose: () => setActiveMode('none') })),
        activeMode === 'scanner' && (React.createElement(ScannerModal, { onClose: () => setActiveMode('none') })),
        activeMode === 'tts' && (React.createElement(TTSGameModal, { onClose: () => setActiveMode('none') })),
        activeMode === 'runner' && (React.createElement(RunnerGameModal, { onClose: () => setActiveMode('none') })),
        activeMode === 'quiz' && (React.createElement(QuizModal, { onClose: () => setActiveMode('none') })),
        activeMode === 'security-detail' && (React.createElement(SecurityDetailModal, { onClose: () => setActiveMode('none'), onOpenMode: (mode) => setActiveMode(mode) })),
        cultureVideo && (React.createElement(window.CulturalVideoModal, { type: cultureVideo, onClose: () => setCultureVideo(null) })),
        activeMode === 'help-3d' && (React.createElement(InfoPopUpModal, { title: "Panduan Interaksi 3D & Auto-Putar", icon: "fa-arrows-spin", category: "Fitur 3D", onClose: () => setActiveMode('none') },
            React.createElement("div", { className: "space-y-2.5" },
                React.createElement("p", null, "Uang Rupiah Rp5.000 dapat dieksplorasi secara 3 dimensi penuh:"),
                React.createElement("ul", { className: "list-disc pl-4 space-y-1.5 text-zinc-300" },
                    React.createElement("li", null,
                        React.createElement("b", null, "Auto-Putar 360\u00B0:"),
                        " Klik tombol \"Auto: ON\" di bawah uang untuk memutar uang secara otomatis tanpa henti. Anda juga bisa mengatur kecepatan (1x / 2x)."),
                    React.createElement("li", null,
                        React.createElement("b", null, "Sentuh & Geser (Touch/Drag):"),
                        " Usap kursor atau layar sentuh untuk memutar, meliukkan, dan melihat uang dari segala arah."),
                    React.createElement("li", null,
                        React.createElement("b", null, "Titik Merah (Hotspot):"),
                        " Klik pada titik merah berdenyut untuk membaca detail pahlawan, tanda air, benang pengaman, dan kebudayaan nusantara."),
                    React.createElement("li", null,
                        React.createElement("b", null, "Tombol Balik:"),
                        " Klik tombol \"Balik\" untuk berpindah instan antara Sisi Depan dan Sisi Belakang."))))),
        selectedHotspot && (React.createElement(InfoPopUpModal, { title: selectedHotspot.title, icon: selectedHotspot.category === 'tokoh' ? 'fa-user-tie' : selectedHotspot.category === 'budaya' ? 'fa-mountain' : 'fa-shield-halved', category: selectedHotspot.category, onClose: () => setSelectedHotspot(null) },
            React.createElement("p", { className: "text-xs sm:text-sm text-zinc-200 leading-relaxed" }, selectedHotspot.desc)))));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
