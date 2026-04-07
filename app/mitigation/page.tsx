export default function Mitigation() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-12 space-y-24">
      {/* Hero Section: Title & Impact */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
        <div className="md:col-span-8 space-y-6 relative z-10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold font-label tracking-widest uppercase">
              Educational Poster 03
            </span>
            <div className="h-px flex-grow bg-outline-variant/30"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-tighter leading-[0.9]">
            Bambu: Pelindung Alami <br />
            <span className="text-secondary italic">Lereng Kita.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
            Memahami sinergi mekanis antara vegetasi dan stabilitas tanah melalui kacamata ekologi bambu yang presisi.
          </p>
        </div>
        <div className="md:col-span-4 md:col-start-9 self-end pb-4 border-l-4 border-secondary pl-6 z-10">
          <p className="font-headline font-bold text-sm tracking-widest text-primary uppercase mb-2">
            Primary Focus
          </p>
          <p className="text-on-surface-variant text-sm font-medium">
            Faktor Alam & Peran Bio-engineering Bambu dalam Mitigasi Longsor.
          </p>
        </div>
      </section>

      {/* Bento Grid: Core Mechanics */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Soil Mechanics Card */}
        <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[400px]">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 text-secondary">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                precision_manufacturing
              </span>
              <span className="font-headline font-bold uppercase tracking-tighter">
                Soil Mechanics
              </span>
            </div>
            <h3 className="text-3xl font-headline font-bold text-primary mb-4 leading-none">
              The Anchor Effect
            </h3>
            <p className="text-on-surface-variant max-w-md leading-relaxed mb-6">
              Sistem perakaran rimpang (rhizome) bambu menjalin struktur tanah menjadi satu kesatuan yang kokoh. Serabut akar yang padat meningkatkan kuat geser tanah secara signifikan.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm font-medium">
                <span className="material-symbols-outlined text-secondary text-lg">
                  check_circle
                </span>
                <span>Meningkatkan kohesi antar partikel tanah hingga 300%.</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-medium">
                <span className="material-symbols-outlined text-secondary text-lg">
                  check_circle
                </span>
                <span>Menjangkau kedalaman vertikal dan jangkauan lateral yang luas.</span>
              </li>
            </ul>
          </div>
          {/* Visual Placeholder: Root Cross Section */}
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 pointer-events-none">
            <img
              className="object-cover w-full h-full mix-blend-multiply"
              alt="Technical illustration"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxcPMgUOUH3zx71myKtTlDq7_teM6WXIknAD1xM6T1rPA3p4gaaKEpQvFJPtS4CqLtgn4iwNtGToE_01F1U9npWsfV19pX0QY09TlsEZi2UUpydW4-kpzInWKnqlP5EwGk0PR1ceSQwvc2vwlh2orTpFlgWqJR6SJjsQrhlGyJmoVGa13ntMoOLpI-Ms4gBmpJg3oeXjemEPEdkEGVFRdfVxD1biE5yh_44WWmmGaacwojUATR4VCWLTC4KTIKWIxdiWukpsM_Ig"
            />
          </div>
        </div>

        {/* Risk Factors Card */}
        <div className="bg-tertiary text-on-tertiary rounded-xl p-8 flex flex-col justify-center">
          <span
            className="material-symbols-outlined text-4xl mb-6"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            warning
          </span>
          <h3 className="text-3xl font-headline font-bold mb-4 leading-none">
            Risk Factors
          </h3>
          <p className="text-tertiary-fixed-dim font-light mb-8">
            Deforestation increases run-off and landslide risk.
          </p>
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex justify-between items-center text-xs font-bold tracking-widest uppercase">
              <span>Deforestation Impact</span>
              <span className="text-on-tertiary-container">CRITICAL</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-on-tertiary-container w-[85%]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hydrology Section: Asymmetric Visual Comparison */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6 space-y-8">
          <div className="bg-primary-container text-on-primary-container p-8 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                water_drop
              </span>
              <span className="font-headline font-bold uppercase tracking-tighter">
                Hydrological Control
              </span>
            </div>
            <h3 className="text-3xl font-headline font-bold mb-4">
              Water Infiltration Regulation
            </h3>
            <p className="text-on-primary-container/80 leading-relaxed mb-6">
              Bambu tidak hanya menahan tanah, tapi juga bertindak sebagai sistem drainase alami. Kanopi bambu memecah energi kinetik hujan, sementara serasahnya menyerap kelebihan air permukaan.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-2xl font-bold font-headline">50%</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">
                  Run-off Reduction
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-2xl font-bold font-headline">Safe</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">
                  Saturation Point
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 flex flex-col gap-4">
          <div className="relative rounded-xl overflow-hidden aspect-video group">
            <img
              className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
              alt="Aerial view"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsTP_cBr_qXo8H-96nOCepSIrVJYoqveIDOdLTeB5M7VUj3zODUGsG-IDcGwsBNYcoOtFQSMewvm0CZHXjzqV4b95Zj3eLURwVYdO3JSQydd_3KAs4OgfkypaOTLqtiwNA_OHuW5lzF9XeKAbzVBKP7p9i9ZMlGtVy5uGaoHrn3-s9cB_5M7JbAo6_PWoTumx0QJFeo5r8WlkTr-qF97_rXkG8lKQTVKJRmBKRxQqWf75j_jyEdwULrrBuKfhjlobNOJulxQJ2rQ"
            />
            <div className="absolute inset-0 bg-primary/20 flex items-end p-6">
              <p className="text-white font-headline font-bold text-xl">
                The Comparative Advantage
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 bg-surface-container-highest p-4 rounded-xl flex items-center gap-3">
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                eco
              </span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                Bio-Integrity
              </span>
            </div>
            <div className="flex-1 bg-surface-container-highest p-4 rounded-xl flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                engineering
              </span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                Natural Engineering
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Diagrammatic Breakdown: The Visual Guide */}
      <section className="bg-surface-container-lowest rounded-xl p-12 border border-outline-variant/10 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-headline font-bold text-primary mb-4 leading-none uppercase tracking-tighter">
            Scientific Diagram
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto mb-6"></div>
          <p className="text-on-surface-variant font-medium">
            Analisis visual perbandingan stabilitas lereng dengan dan tanpa kehadiran bambu.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Slope Side A */}
          <div className="space-y-6">
            <div className="aspect-square bg-surface rounded-xl overflow-hidden relative border border-outline-variant/20">
              <img
                className="w-full h-full object-cover opacity-80"
                alt="Botanical illustration"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN8au5EZT4DJ40a2AxMZrDglX1xJ3Imuow6yP2RngQLL_83XSGUSpjk5v7Jx2s5D4W0ebIuEohDBc1xlh15KczLOia1CoXFLCDIHy9v8u-z3Xft89r6d4EDdwqmAT7-KnH-V_MBHv_qEdClt3KDxWypKwTOxoNdS5pWkshdy2NGsVqsUxsbLHWK1DrMyGMf2xH6hSP0_XYU5EN5ezl-V74q4MAWB-fUaIHhnFWu6LJv2TzdOFvlvhJew28bfR7_YA1BjYP0uN6uw"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <span className="bg-secondary text-white px-3 py-1 rounded-full text-[10px] font-bold w-fit">
                  SLOPE A: REINFORCED
                </span>
                <div className="space-y-2">
                  <div className="p-2 bg-white/90 backdrop-blur-md rounded text-xs font-bold border-l-4 border-secondary">
                    ROOT NETWORK: ACTIVE
                  </div>
                  <div className="p-2 bg-white/90 backdrop-blur-md rounded text-xs font-bold border-l-4 border-secondary">
                    INFILTRATION: SLOWED
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm font-medium leading-relaxed italic text-secondary">
              "Bambu menyerap energi hujan dan mengunci tanah dengan ribuan serat akar rimpang."
            </p>
          </div>

          {/* Slope Side B */}
          <div className="space-y-6">
            <div className="aspect-square bg-surface rounded-xl overflow-hidden relative border border-outline-variant/20">
              <img
                className="w-full h-full object-cover opacity-80 grayscale"
                alt="Eroded hill"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSGjhsLNyz-zABfWswTjf24sBkmmQli1P6oDshla-SEBnIH7jyNUBxW3xI0GiWZ0W563izDHDNhDJ9eTkVdxhoBXCmEqbep8QxcfV8EvAQ3kTQcouyWHq4pQ2rzewXQSKc5OGjRIqoWKowuc4wx61K5UG28wha5q5pHPcz0UZSEIFCGuucq2KuxZYC9z4soulOJyemr6lDQx1puQqgsMnJJJ6cAXpOHshgph5GzdT_Rb6b9qQIb7ZTw5wfrfGvY_5U9WuMdCQ1iA"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <span className="bg-tertiary text-white px-3 py-1 rounded-full text-[10px] font-bold w-fit uppercase">
                  Slope B: Exposed
                </span>
                <div className="space-y-2">
                  <div className="p-2 bg-white/90 backdrop-blur-md rounded text-xs font-bold border-l-4 border-tertiary uppercase">
                    Surface Wash: High
                  </div>
                  <div className="p-2 bg-white/90 backdrop-blur-md rounded text-xs font-bold border-l-4 border-tertiary uppercase">
                    Saturation: Rapid
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm font-medium leading-relaxed italic text-tertiary">
              "Tanah terbuka tanpa akar penahan rentan terhadap jenuh air dan pergeseran massa."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
