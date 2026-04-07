export default function Archive() {
  return (
    <main className="min-h-screen">
      {/* Hero Section: Layered Information Architecture */}
      <section className="relative overflow-hidden px-6 lg:px-12 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content: Typographic Power */}
          <div className="lg:col-span-7 space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label text-sm font-bold tracking-widest uppercase">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                bolt
              </span>
              Digital Dissemination
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-primary leading-[0.9] uppercase">
              Peringatan Dini <br />
              <span className="text-on-tertiary-container">Genggaman Anda</span>
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Sistem otomasi informasi cuaca ekstrem melalui bot Telegram. Mengintegrasikan data real-time BMKG langsung ke perangkat pribadi Anda untuk aksi mitigasi yang lebih cepat dan terukur.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/10">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined">robot_2</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-wider">
                    Channel Bot
                  </p>
                  <p className="font-headline font-bold text-primary">
                    @cuacadesapetir_bot
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Asymmetric Device Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-20 translate-x-4 lg:translate-x-12 rotate-3 hover:rotate-0 transition-transform duration-500 flex justify-center">
              {/* Phone Mockup with Telegram UI */}
              <div className="w-72 md:w-80 h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden relative">
                {/* Telegram Header */}
                <div className="bg-[#24a1de] p-4 text-white flex items-center gap-3">
                  <span className="material-symbols-outlined">arrow_back</span>
                  <div>
                    <p className="font-bold text-sm">Cuaca Desa Petir Bot</p>
                    <p className="text-[10px] opacity-80">bot</p>
                  </div>
                </div>

                {/* Telegram Messages */}
                <div className="p-4 space-y-4 bg-[#e7ebf0] h-full overflow-y-auto font-body text-xs">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                    <p className="text-blue-600 font-bold mb-1">/status</p>
                    <p className="text-on-surface">
                      Mengecek kondisi cuaca saat ini di Desa Petir...
                    </p>
                  </div>

                  <div className="bg-[#efffde] p-3 rounded-2xl rounded-tr-none shadow-sm ml-auto max-w-[85%] border-l-4 border-error">
                    <p className="text-error font-bold text-[10px] mb-1">
                      PERINGATAN DINI BMKG
                    </p>
                    <p className="font-bold">Hujan Lebat & Petir</p>
                    <p className="mt-1">
                      Waspada potensi hujan lebat disertai kilat/petir di wilayah Bogor Barat antara pukul 14:00 - 17:00 WIB.
                    </p>
                    <p className="text-[9px] text-slate-400 mt-2">13:45 PM</p>
                  </div>

                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                    <p className="text-blue-600 font-bold mb-1">/risiko</p>
                    <p className="text-on-surface">
                      Tingkat risiko longsor: SEDANG. Pastikan saluran drainase tidak tersumbat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Features & Logic */}
      <section className="px-6 lg:px-12 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h2 className="font-headline text-4xl font-bold text-primary uppercase">
                Fitur Cerdas
              </h2>
              <div className="h-1 w-24 bg-on-tertiary-container"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1: Alerts */}
            <div className="md:col-span-2 p-8 rounded-xl bg-surface-container-lowest group hover:bg-primary transition-all duration-300">
              <span
                className="material-symbols-outlined text-4xl text-on-tertiary-container mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                notifications_active
              </span>
              <h3 className="font-headline text-2xl font-bold mb-4 group-hover:text-white">
                Automatic BMKG Alerts
              </h3>
              <p className="font-body text-on-surface-variant group-hover:text-slate-300 leading-relaxed">
                Notifikasi real-time tanpa delay. Bot akan mengirimkan pesan otomatis segera setelah BMKG merilis peringatan cuaca ekstrem untuk wilayah lingkar kampus IPB dan sekitarnya.
              </p>
              <div className="mt-8 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-error-container text-on-error-container text-[10px] font-bold uppercase tracking-widest">
                  Urgent
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest">
                  Real-time
                </span>
              </div>
            </div>

            {/* Feature 2: Commands */}
            <div className="p-8 rounded-xl bg-surface-container-highest flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-6 block">
                  terminal
                </span>
                <h3 className="font-headline text-2xl font-bold mb-4">
                  Interaktif
                </h3>
                <ul className="space-y-3 font-body text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <code className="bg-primary/10 px-2 py-0.5 rounded text-primary font-bold">
                      /status
                    </code>{" "}
                    Cek kondisi terkini
                  </li>
                  <li className="flex items-center gap-2">
                    <code className="bg-primary/10 px-2 py-0.5 rounded text-primary font-bold">
                      /risiko
                    </code>{" "}
                    Analisis ancaman
                  </li>
                  <li className="flex items-center gap-2">
                    <code className="bg-primary/10 px-2 py-0.5 rounded text-primary font-bold">
                      /bantuan
                    </code>{" "}
                    Panduan bot
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <div className="w-full h-24 rounded-lg overflow-hidden grayscale opacity-50 contrast-125">
                  <img
                    className="w-full h-full object-cover"
                    alt="matrix code"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNAzxEPEedp2aLr-MpXrA8b-aezkl5BQL9KwB5Sc8SWvzRiJnZU3181bfEvI86ILRuiyhabyJdlGxbyLRn15OxG6lWK1XBY8qGq2yHHGEp6zHRS2lmun1LYZwmhmMyEtTWakjMmWKOBoXat7QcKx05N1igT7fYaC7T7A0VhRDBkvgS9_nga01so0GuzWZeLASJq9qy2n1nhFcSnRtybePBWDOrLxexjs2NKth-1UN6OtsKz4FYzQDCms3sroq_fj4xYziTK601mQ"
                  />
                </div>
              </div>
            </div>

            {/* Feature 3: Daily Reports */}
            <div className="p-8 rounded-xl bg-[#48663e] text-white">
              <span className="material-symbols-outlined text-4xl mb-6 block">
                calendar_month
              </span>
              <h3 className="font-headline text-2xl font-bold mb-4">
                Laporan Rutin
              </h3>
              <p className="font-body text-secondary-fixed opacity-90 text-sm leading-relaxed mb-6">
                Dapatkan ringkasan prakiraan cuaca setiap pagi (07:00 WIB) untuk perencanaan aktivitas, dan laporan evaluasi setiap sore (18:00 WIB).
              </p>
              <div className="p-4 bg-white/10 rounded-lg border border-white/20">
                <p className="text-[10px] uppercase tracking-widest font-bold mb-2">
                  Next Schedule
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-headline font-bold text-xl">
                    18:00 WIB
                  </span>
                  <span className="material-symbols-outlined">schedule</span>
                </div>
              </div>
            </div>

            {/* CTA / QR Section */}
            <div className="md:col-span-2 p-8 rounded-xl bg-gradient-to-br from-[#002c53] to-[#1a426e] text-white flex flex-col md:flex-row gap-8 items-center justify-between overflow-hidden relative">
              <div className="space-y-4 relative z-10 text-center md:text-left">
                <h3 className="font-headline text-3xl font-bold tracking-tight">
                  Bergabung Sekarang
                </h3>
                <p className="font-body text-primary-fixed max-w-sm">
                  Amankan keluarga dan lingkungan Anda dengan informasi yang akurat. Scan QR atau cari bot di Telegram.
                </p>
                <div className="flex justify-center md:justify-start items-center gap-4">
                  <button className="px-8 py-3 bg-on-tertiary-container text-white font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                    Open Telegram{" "}
                    <span className="material-symbols-outlined text-sm">
                      open_in_new
                    </span>
                  </button>
                </div>
              </div>
              {/* QR Placeholder */}
              <div className="relative z-10 p-4 bg-white rounded-2xl shadow-xl rotate-6">
                <div className="w-32 h-32 bg-surface-container-high rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-primary/20">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    qr_code_2
                  </span>
                  <span className="text-[8px] text-primary font-bold mt-2 uppercase tracking-tighter">
                    @cuacadesapetir_bot
                  </span>
                </div>
              </div>
              {/* Atmospheric Background Text */}
              <span className="absolute -bottom-10 -left-10 text-[10rem] font-black text-white/5 font-headline pointer-events-none select-none">
                BOT
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Context: The Environment */}
      <section className="w-full h-[400px] relative">
        <img
          className="w-full h-full object-cover"
          alt="Storm landscape"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlMU3ok5MvqkiVxd6PAH4h-SOWRDo7zxqro5vaBuBjIGA1P0cudXSsBB7VdfKR6BIrRLJG6efdpTjlOmztnxGf3YqYUV58TCTV5O2k7C5h8ZEtQp1aGq7jzLeGDCvgd_3RYOWQYR84Sd5kqV3QxJD-ktGZUqyuIElJhFys2XXht7PjpS4Qon_KtKS04pcsKxRvRAfc4m9nvImTPMFQzl_PU1XzyZo47mBo7TK6DJ1ArSa4PO1pfMnBKkWjr7s4Owu3MFaBEo9yuw"
        />
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center glass-panel p-12 rounded-3xl border border-white/20">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
              Waspada Adalah Kunci Mitigasi
            </h2>
            <p className="font-body text-lg text-on-surface leading-relaxed italic">
              "Jangan menunggu badai datang untuk bersiap. Dapatkan informasi mendahului cuaca."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
