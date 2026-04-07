export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto px-12 py-16">
      {/* Hero Editorial Section */}
      <header className="grid grid-cols-12 gap-8 mb-20">
        <div className="col-span-12 md:col-span-8 flex flex-col justify-end">
          <div className="mb-4">
            <span className="inline-block px-4 py-1 rounded-full bg-tertiary text-on-tertiary font-label text-xs font-bold tracking-widest uppercase mb-6">
              Dokumen Observasi: Desa Petir
            </span>
            <h1 className="font-headline text-7xl md:text-8xl font-bold text-primary tracking-tighter leading-none mb-6">
              Waspada Bencana Hidrometeorologi.
            </h1>
          </div>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Analisis kerentanan geografis dan atmosferik terhadap risiko pergerakan tanah dan banjir luapan di kawasan Kabupaten Bogor.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 relative">
          <div className="aspect-[3/4] bg-primary overflow-hidden rounded-xl">
            <img
              alt="Pemandangan hujan lebat di perbukitan tropis"
              className="w-full h-full object-cover mix-blend-luminosity opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBceNrHJO-6WdEcBUgK1Yo_W9g3W2Cc71T3KH84MfIVvzwibnJLVeviQBrCTlOb07vY8LOUD8D8JoGfMldf022hwhHZcQ6H3fX6SnVczWBj22dhXGFnQQhV-ix19vSiRD5JKwdafdeUOhssDoWemgZpKsvfLv0FtANLq2zamjHQ03L734k4zNGHIb4PyWFIiH5hPl9gVW8L1mFBodckctuOz4kANcEMglviM1Er55Ti1deQ9QiWn7zMwoRjbJ4vx3cfoYmzwiY1TQ"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 glass-panel p-8 rounded-xl border border-white/20 max-w-[280px]">
            <span className="font-headline text-5xl font-black text-tertiary block mb-2">
              4000+
            </span>
            <span className="font-label text-xs font-bold text-on-surface tracking-widest uppercase block mb-4">
              Milimeter / Tahun
            </span>
            <p className="text-sm font-medium text-on-surface-variant">
              Presipitasi ekstrem yang melampaui rata-rata regional, memicu saturasi tanah Latosol.
            </p>
          </div>
        </div>
      </header>

      {/* Data Bento Grid */}
      <section className="grid grid-cols-12 gap-8 mb-24">
        {/* Map Visualization Card */}
        <div className="col-span-12 lg:col-span-7 bg-surface-container-low rounded-xl p-10 overflow-hidden relative group">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-2">
                Peta Kerentanan Desa
              </h2>
              <span className="font-label text-sm text-secondary font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>{" "}
                Zona Bahaya Tinggi
              </span>
            </div>
            <div className="text-right">
              <span className="font-headline text-sm font-bold block">
                06°36'51&quot;S
              </span>
              <span className="font-headline text-sm font-bold block">
                106°43'10&quot;E
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center h-[400px] bg-surface-container rounded-xl relative">
            <img
              alt="Topographic map visualization"
              className="w-full h-full object-cover opacity-30 grayscale contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbJ3n0JtqtDR4ccUt2K89wyyiYUDU0afyRcfC-KxfGg3Od2iigKmoc6jV-Qbm7qxHBcyRe499lWfCk7TvZb4l-Mnqqx5d8MUZFWQhhXw8ny93d7Fh_FNZEqHBPEm6Zxg9hKIOdy3U8DOqB5fPN9hiCe6jNAQZdGlnJg9k1V2NYbjs1MUfmAi9s5BAXj99BrdKTrhxbjI4tVCwLDO9I4H9MwPj4aFFT-Ej2nvTKbEkW3mbWGKAloWQfpyEdO0CoYYVi3wJX4fgBRA"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-4 border-dashed border-tertiary/40 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-tertiary/10 border-2 border-tertiary rounded-full animate-pulse flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary scale-150">
                    warning
                  </span>
                </div>
              </div>
            </div>
            {/* Map Legend */}
            <div className="absolute bottom-6 left-6 flex flex-col gap-2">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-tight">
                <span className="w-3 h-3 bg-tertiary rounded-full"></span> Risiko Longsor Tinggi
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-tight">
                <span className="w-3 h-3 bg-secondary rounded-full"></span> Kawasan Vegetasi
              </div>
            </div>
          </div>
        </div>

        {/* Key Facts Sidebar */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
          {/* Slope Diagram */}
          <div className="bg-primary text-white rounded-xl p-8 flex-1 relative overflow-hidden">
            <div className="relative z-10">
              <span
                className="material-symbols-outlined text-primary-fixed-dim mb-4"
                style={{ fontSize: "40px" }}
              >
                landscape
              </span>
              <h3 className="font-headline text-3xl font-bold mb-4">
                Kemiringan Lereng
              </h3>
              <p className="font-body text-primary-fixed opacity-90 mb-8">
                Dominasi kelerengan curam hingga sangat curam yang mempercepat limpasan permukaan dan potensi longsor.
              </p>
              <div className="flex items-end gap-1 mb-2">
                <div className="h-1 bg-white/20 w-1/4"></div>
                <div className="h-12 bg-primary-fixed-dim w-1/4"></div>
                <div className="h-24 bg-tertiary-fixed-dim w-1/4"></div>
                <div className="h-32 bg-[#ff8e63] w-1/4"></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                <span>0° - 8°</span>
                <span>8° - 20°</span>
                <span className="text-tertiary-fixed">20° - 45°</span>
                <span className="text-on-tertiary-container">Sangat Curam</span>
              </div>
            </div>
            {/* Background texture */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary-container to-primary opacity-50 pointer-events-none"></div>
          </div>

          {/* Soil Type Card */}
          <div className="bg-surface-container-highest rounded-xl p-8 flex flex-col justify-between">
            <div>
              <span className="font-label text-xs font-black uppercase text-secondary tracking-widest mb-2 block">
                Pedologi
              </span>
              <h3 className="font-headline text-3xl font-bold text-primary mb-4">
                Tanah Latosol
              </h3>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border-4 border-secondary/20 flex items-center justify-center bg-white">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  water_drop
                </span>
              </div>
              <p className="text-sm font-medium leading-relaxed">
                Tanah vulkanik tua yang memiliki pori makro tinggi, namun menjadi sangat **licin dan tidak stabil** saat jenuh air.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tragic Event Reminder (Impact) */}
      <section className="bg-tertiary text-on-tertiary rounded-xl p-12 mb-24 relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-4xl">history</span>
              <span className="font-headline text-xl font-bold uppercase tracking-widest">
                Catatan Kelam: November 2023
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight mb-6">
              Longsoran yang Mengingatkan Kita Akan Kekuatan Alam.
            </h2>
            <p className="text-lg opacity-90 max-w-xl">
              Tragedi tanah longsor di penghujung tahun 2023 menjadi bukti nyata tingginya kerentanan Desa Petir. Curah hujan yang tak henti memicu pergerakan tanah di lereng-lereng tanpa mitigasi yang memadai.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex justify-center">
            <div className="w-full aspect-video bg-black/20 rounded-lg overflow-hidden relative">
              <img
                alt="Kondisi pasca bencana tanah longsor"
                className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk7PmjSH2bXyFj631kBdf-n3yuzDH9fqNsE2B8u5ogDyq7mSfuiK8ZuLiom4p8xo2uLw-kSZ7VWCiaHrfIA1aUtInOkBNVr_Ksbez7mKAHtuzitpg7m7BszsktcVorZXovAZ49oE_XwBSJWPUhypcKarfgsic3r2yD1fnYMfLpgpmWPfCYKWaaqPjUsOCwM69d2UGv33YfRh5UCaaHSptrEnNlxp4DBN4MXLrh0qxUrRDu-nbvNA5zeQyCbufRuf1PYU2Q8lPNZA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 to-transparent"></div>
            </div>
          </div>
        </div>
        {/* Aesthetic overlay element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Authors Footer Branding */}
      <section className="border-t-2 border-primary/10 pt-16 grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 md:col-span-4">
          <h4 className="font-headline text-sm font-black uppercase tracking-widest text-primary mb-6">
            Disusun Oleh Tim Peneliti
          </h4>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold text-on-surface">Departemen Meteorologi & Geofisika</p>
            <p className="text-sm text-on-surface-variant uppercase tracking-tight">
              Fakultas Matematika dan Ilmu Pengetahuan Alam
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex justify-center md:justify-start gap-8">
          <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">school</span>
          </div>
          <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">public</span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right">
          <span className="font-headline text-2xl font-black text-secondary block mb-2 uppercase">
            IPB University
          </span>
          <span className="font-label text-xs font-bold text-slate-500 uppercase tracking-widest">
            Environment & Resilience Board
          </span>
        </div>
      </section>
    </main>
  );
}
