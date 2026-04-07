export default function RiskMap() {
  return (
    <main className="max-w-[1440px] mx-auto px-12 py-16">
      {/* Hero Section: Title & Identity */}
      <section className="mb-24 relative">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="font-label text-xs font-extrabold uppercase tracking-[0.3em] text-tertiary mb-4 block">
              Sistem Pemantauan Digital
            </span>
            <h1 className="font-headline text-7xl font-bold tracking-tighter text-primary leading-tight">
              Monitoring Cuaca <br />
              Real-Time <span className="text-tertiary">Desa Petir</span>.
            </h1>
          </div>
          <div className="flex flex-col items-end text-right">
            <span className="font-headline text-5xl font-light text-outline-variant">
              02
            </span>
            <span className="font-label text-[10px] font-bold uppercase tracking-widest border-t border-outline-variant pt-2">
              Poster Seri Mitigasi
            </span>
          </div>
        </div>
        <div className="h-[2px] bg-primary mt-12 w-full opacity-10"></div>
      </section>

      {/* Bento Grid: Main Dashboard Visualization */}
      <section className="grid grid-cols-12 gap-8 mb-32">
        {/* Main Dashboard Visual (Placeholder Screenshot) */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl overflow-hidden relative group">
          <img
            className="w-full h-full object-cover grayscale-0 group-hover:grayscale-[0.5] transition-all duration-700"
            alt="Dashboard"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBM6GL58RyuWLlceJjIIPS6fy2Jl71tj--T1g9RiGCdBnnMDhtSpYOQkeXAqwRifaPJj9mgWkcqLZVa2QIwWpep5QS_eQLnfQ_dmzPv4ok_s1Ky6cdNhL17e8GS_aF-NLdVLCluSRITymCSELg2UpLa6Zoi_p9C7qowvKjGwxMRTrFyyOZIeSnK-sDG4dQg9W7AbXysM4ForXGY1kO69AMcwOrn9wEflvcOL2d6khKbrJPkwxPM7-5__WO5tn4TG1f_eUMDAu-zA"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-12">
            <div className="glass-card p-8 rounded-xl border border-white/20 max-w-md">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-white font-bold text-sm tracking-widest uppercase">
                  Live Interface
                </span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Antarmuka operasional yang mengintegrasikan data lapangan dengan prediksi satelit secara instan.
              </p>
            </div>
          </div>
        </div>

        {/* Data Fusion Sidebar */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          <div className="bg-primary p-10 rounded-xl flex flex-col justify-between h-full text-white">
            <div>
              <h3 className="font-headline text-3xl font-bold mb-6 leading-tight">
                Data Fusion Engine
              </h3>
              <p className="font-body text-on-primary-container text-sm leading-relaxed mb-10">
                Menggabungkan 4 sumber data global dan lokal untuk presisi maksimal tingkat desa.
              </p>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-label text-xs uppercase tracking-widest">
                    BMKG (Prioritas)
                  </span>
                  <span className="font-headline text-xl font-bold text-[#ff8e63]">
                    40%
                  </span>
                </div>
                <div className="w-full h-1 bg-white/10 overflow-hidden">
                  <div className="bg-[#ff8e63] h-full w-[40%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-label text-xs uppercase tracking-widest">
                    OpenWeather
                  </span>
                  <span className="font-headline text-xl font-bold">20%</span>
                </div>
                <div className="w-full h-1 bg-white/10 overflow-hidden">
                  <div className="bg-white/40 h-full w-[20%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-label text-xs uppercase tracking-widest">
                    Open-Meteo
                  </span>
                  <span className="font-headline text-xl font-bold">20%</span>
                </div>
                <div className="w-full h-1 bg-white/10 overflow-hidden">
                  <div className="bg-white/40 h-full w-[20%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-label text-xs uppercase tracking-widest">
                    Tomorrow.io
                  </span>
                  <span className="font-headline text-xl font-bold">20%</span>
                </div>
                <div className="w-full h-1 bg-white/10 overflow-hidden">
                  <div className="bg-white/40 h-full w-[20%]"></div>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 mt-8">
              <div className="flex gap-4 items-center grayscale opacity-60">
                <span className="material-symbols-outlined">api</span>
                <span className="material-symbols-outlined">dataset</span>
                <span className="material-symbols-outlined">cloud_sync</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Features: Infographic Cards */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="font-headline text-4xl font-bold text-primary">
            Fitur Dashboard Utama
          </h2>
          <div className="h-[1px] flex-grow bg-outline-variant"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-10 bg-surface-container-low rounded-xl group hover:bg-white transition-all duration-300 border-b-4 border-transparent hover:border-secondary">
            <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center mb-8 text-on-secondary-container">
              <span className="material-symbols-outlined text-3xl">sensors</span>
            </div>
            <h4 className="font-headline text-xl font-bold mb-4">
              Real-time Cards
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Pemantauan instan untuk temperatur, kelembaban, dan intensitas curah hujan di titik koordinat Desa Petir.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold uppercase">
                Temp
              </span>
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold uppercase">
                Humid
              </span>
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold uppercase">
                Rain
              </span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-10 bg-surface-container-low rounded-xl group hover:bg-white transition-all duration-300 border-b-4 border-transparent hover:border-primary">
            <div className="w-14 h-14 bg-primary-fixed rounded-full flex items-center justify-center mb-8 text-on-primary-fixed-variant">
              <span className="material-symbols-outlined text-3xl">timeline</span>
            </div>
            <h4 className="font-headline text-xl font-bold mb-4">
              Historical Trends
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Analisis data masa lalu menggunakan satelit CHIRPS & NASA POWER untuk pola iklim jangka panjang.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold uppercase">
                Chirps
              </span>
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold uppercase">
                NASA Power
              </span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-10 bg-surface-container-low rounded-xl group hover:bg-white transition-all duration-300 border-b-4 border-transparent hover:border-tertiary">
            <div className="w-14 h-14 bg-tertiary-fixed rounded-full flex items-center justify-center mb-8 text-on-tertiary-fixed-variant">
              <span className="material-symbols-outlined text-3xl">map</span>
            </div>
            <h4 className="font-headline text-xl font-bold mb-4">Risk Maps</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Visualisasi spasial daerah rawan bencana berdasarkan kemiringan lereng dan akumulasi air.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold uppercase">
                Geospatial
              </span>
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold uppercase">
                Alert Zone
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Connection Diagram */}
      <section className="mb-16 p-16 bg-[#f2f4f5] rounded-xl flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
        <div className="w-full md:w-1/2 z-10">
          <h3 className="font-headline text-4xl font-bold text-primary mb-8 leading-tight">
            Arsitektur Koneksi API
          </h3>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="font-headline text-3xl font-light text-outline-variant">
                01
              </div>
              <div>
                <h5 className="font-bold text-lg mb-2">Ingestion Layer</h5>
                <p className="text-sm text-on-surface-variant">
                  API Gateway menarik data mentah dari 4 provider meteorologi setiap 15 menit.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="font-headline text-3xl font-light text-outline-variant">
                02
              </div>
              <div>
                <h5 className="font-bold text-lg mb-2">Harmonization</h5>
                <p className="text-sm text-on-surface-variant">
                  Data yang berbeda format disatukan (JSON/XML) dan dikalibrasi menggunakan stasiun cuaca lokal.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="font-headline text-3xl font-light text-outline-variant">
                03
              </div>
              <div>
                <h5 className="font-bold text-lg mb-2">Visualization</h5>
                <p className="text-sm text-on-surface-variant">
                  Data bersih dikirim ke Cloud Database untuk ditampilkan pada dashboard publik Desa Petir.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 z-10">
          <div className="aspect-square bg-white rounded-xl shadow-sm p-12 flex flex-col items-center justify-center">
            <img
              className="w-full h-auto max-w-[300px] mb-8"
              alt="Diagram"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8U-pJ3lJfFnrA3a3yCbBZJu3H4jgB3GsgQdocS4dfmmn5ReihzifkyvwgzRWJ2oqrCQLsgvTC-sUrHfvnyjlDuhzJUnLvC_q7ayIxls9PUKIO-bWuA3EamkDt7Dm1dp3nZABIV4Y0p3mamgCOX85XxIsImEtU8XbmQRQYal4fYjjDQAFsHyMa-7jrkUHtaPsM8rba_rA8CK34koQK5NzUsPfHMdz_vVnBZNJtPwozq9R3X5TDn_R1qSQwLfd_AbzJOAkD0tuRfQ"
            />
            <p className="font-label text-[10px] text-center uppercase tracking-widest text-outline">
              Skema Alur Data Digital
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
