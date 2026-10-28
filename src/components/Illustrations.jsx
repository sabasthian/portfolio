// Ilustrasi pengganti screenshot. Warnanya mengikuti token tema (terang/gelap).
// Begitu ada screenshot asli, isi field `image` di src/data/projects.js.

function Frame({ label, className, children }) {
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false" className={className}>
      <rect className="fill-surface" width="480" height="300" />
      <rect className="fill-bg" width="480" height="30" />
      <rect className="fill-line" y="30" width="480" height="1" />
      {[16, 31, 46].map((cx) => <circle key={cx} className="fill-line" cx={cx} cy="15" r="4.5" />)}
      <rect className="fill-surface" x="140" y="8" width="200" height="14" rx="7" />
      <text className="fill-muted font-mono text-[11px]" x="240" y="18.5" textAnchor="middle">{label}</text>
      {children}
    </svg>
  );
}

function KrbArt({ className }) {
  const names = [110, 90, 124, 80, 100];
  const scores = [200, 172, 150, 118, 92];
  const opacity = [1, 0.85, 0.7, 0.55, 0.4];
  return (
    <Frame label="krb · live results" className={className}>
      <text className="fill-ink font-sans text-[15px] font-bold" x="24" y="64">Live results</text>
      <rect className="fill-accent" x="404" y="49" width="52" height="20" rx="10" />
      <text className="fill-surface font-mono text-[11px] font-bold" x="430" y="63" textAnchor="middle">LIVE</text>
      {names.map((w, i) => {
        const y = 84 + i * 40;
        return (
          <g key={y}>
            <rect className="fill-bg" x="24" y={y} width="432" height="30" rx="8" />
            <circle className="fill-surface" cx="44" cy={y + 15} r="10" />
            <text className="fill-ink font-mono text-[11px] font-bold" x="44" y={y + 19} textAnchor="middle">{i + 1}</text>
            <rect className="fill-line" x="64" y={y + 11} width={w} height="8" rx="4" />
            <rect className="fill-accent" x="236" y={y + 10} width={scores[i]} height="10" rx="5" opacity={opacity[i]} />
          </g>
        );
      })}
    </Frame>
  );
}

function ProcureArt({ className }) {
  const cols = [['PENDING', 3, 'fill-muted'], ['APPROVED', 2, 'fill-accent'], ['PROCESSING', 2, 'fill-accent'], ['COMPLETED', 3, 'fill-ok']];
  return (
    <Frame label="procurement · requests" className={className}>
      {cols.map(([name, count, tone], c) => {
        const x = 20 + c * 115;
        return (
          <g key={name}>
            <rect className="fill-bg" x={x} y="46" width="95" height="234" rx="8" />
            <text className="fill-muted font-mono text-[11px]" x={x + 10} y="66">{name}</text>
            {Array.from({ length: count }, (_, r) => {
              const y = 80 + r * 46;
              return (
                <g key={r}>
                  <rect className="fill-surface" x={x + 8} y={y} width="79" height="36" rx="6" />
                  <rect className={tone} x={x + 8} y={y} width="3" height="36" rx="1.5" opacity={c === 2 ? 0.6 : 1} />
                  <rect className="fill-line" x={x + 18} y={y + 10} width={52 - r * 8} height="6" rx="3" />
                  <rect className="fill-line" x={x + 18} y={y + 22} width={34 + r * 6} height="5" rx="2.5" />
                </g>
              );
            })}
            {c < 3 && <path d={`M${x + 101} 158 l5 5 l-5 5`} fill="none" className="stroke-muted" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />}
          </g>
        );
      })}
    </Frame>
  );
}

function StreamArt({ className }) {
  return (
    <Frame label="streaming clone" className={className}>
      <rect x="0" y="31" width="480" height="269" fill="#121513" />
      <rect x="20" y="46" width="440" height="110" rx="10" fill="#232824" />
      <circle cx="392" cy="101" r="44" fill="#2E3530" />
      <rect x="40" y="70" width="150" height="14" rx="7" fill="#E6EAE5" />
      <rect x="40" y="92" width="110" height="8" rx="4" fill="#6B736C" />
      <rect x="40" y="118" width="74" height="24" rx="6" fill="#86C5A3" />
      <path d="M52 124 L52 136 L62 130 Z" fill="#121513" />
      <rect x="68" y="126" width="36" height="8" rx="4" fill="#121513" opacity=".7" />
      <rect x="122" y="118" width="80" height="24" rx="6" fill="#3A403B" />
      <rect x="134" y="126" width="56" height="8" rx="4" fill="#9AA39B" />
      <rect x="20" y="172" width="70" height="8" rx="4" fill="#9AA39B" />
      {Array.from({ length: 6 }, (_, i) => (
        <rect key={i} x={20 + i * 74} y="188" width="66" height="92" rx="6" fill={i % 2 ? '#343A35' : '#2A2F2B'} />
      ))}
      <rect x="26" y="270" width="54" height="4" rx="2" fill="#3A403B" />
      <rect x="26" y="270" width="32" height="4" rx="2" fill="#86C5A3" />
    </Frame>
  );
}

function Gauge({ cx, cy, r, f, label }) {
  const a = Math.PI * f;
  const ex = (cx - r * Math.cos(a)).toFixed(1);
  const ey = (cy - r * Math.sin(a)).toFixed(1);
  return (
    <g>
      <path d={`M${cx - r} ${cy} A${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" className="stroke-line" strokeWidth="8" strokeLinecap="round" />
      <path d={`M${cx - r} ${cy} A${r} ${r} 0 0 1 ${ex} ${ey}`} fill="none" className="stroke-accent" strokeWidth="8" strokeLinecap="round" />
      <text className="fill-muted font-mono text-[11px]" x={cx} y={cy + 28} textAnchor="middle">{label}</text>
    </g>
  );
}

function IotArt({ className }) {
  const gauges = [[20, 0.62, 'Temp'], [172, 0.78, 'Level'], [324, 0.45, 'Clarity']];
  return (
    <Frame label="pond monitor" className={className}>
      {gauges.map(([x, f, label]) => (
        <g key={label}>
          <rect className="fill-bg" x={x} y="46" width="136" height="110" rx="10" />
          <Gauge cx={x + 68} cy={110} r={36} f={f} label={label} />
        </g>
      ))}
      <rect className="fill-bg" x="20" y="170" width="200" height="110" rx="10" />
      <rect className="fill-surface" x="32" y="182" width="176" height="86" rx="6" />
      <ellipse className="fill-accent" cx="112" cy="226" rx="22" ry="11" />
      <path className="fill-accent" d="M132 226 L148 214 L148 238 Z" />
      <circle className="fill-surface" cx="100" cy="223" r="2.4" />
      <circle className="fill-ok" cx="196" cy="194" r="4" />
      <rect className="fill-bg" x="232" y="170" width="228" height="110" rx="10" />
      <rect className="fill-surface" x="246" y="184" width="130" height="26" rx="8" />
      <rect className="fill-line" x="256" y="194" width="96" height="6" rx="3" />
      <rect className="fill-accent" x="330" y="218" width="116" height="26" rx="8" />
      <rect className="fill-surface" x="342" y="228" width="70" height="6" rx="3" opacity=".85" />
      <rect className="fill-surface" x="246" y="252" width="150" height="20" rx="8" />
      <rect className="fill-line" x="256" y="259" width="110" height="6" rx="3" />
    </Frame>
  );
}

function PlantArt({ className }) {
  const options = [[124, 100], [160, 124], [196, 86]];
  const steps = [[192, 120], [216, 96], [240, 136]];
  return (
    <Frame label="plant expert system" className={className}>
      <rect className="fill-bg" x="20" y="46" width="214" height="234" rx="10" />
      <text className="fill-ink font-sans text-[15px] font-bold" x="36" y="74">Symptom check</text>
      <rect className="fill-line" x="36" y="88" width="150" height="8" rx="4" />
      <rect className="fill-line" x="36" y="102" width="110" height="8" rx="4" />
      {options.map(([y, w], i) => (
        <g key={y}>
          <rect className="fill-surface" x="36" y={y} width="182" height="28" rx="8" />
          {i === 1
            ? <circle className="fill-accent" cx="52" cy={y + 14} r="6" />
            : <circle fill="none" className="stroke-muted" strokeWidth="2" cx="52" cy={y + 14} r="6" />}
          <rect className="fill-line" x="66" y={y + 10} width={w} height="8" rx="4" />
        </g>
      ))}
      <rect className="fill-ink" x="36" y="240" width="96" height="26" rx="7" />
      <text className="fill-surface font-mono text-[11px] font-bold" x="84" y="257" textAnchor="middle">Diagnose</text>
      <rect className="fill-bg" x="246" y="46" width="214" height="234" rx="10" />
      <circle className="fill-surface" cx="282" cy="84" r="20" />
      <path className="fill-accent" d="M272 95 C 271 80, 283 71, 294 72 C 296 85, 287 96, 272 95 Z" />
      <text className="fill-ink font-sans text-[15px] font-bold" x="312" y="82">Diagnosis</text>
      <rect className="fill-line" x="312" y="92" width="90" height="6" rx="3" />
      <rect className="fill-line" x="262" y="122" width="180" height="8" rx="4" />
      <rect className="fill-line" x="262" y="138" width="150" height="8" rx="4" />
      <rect className="fill-line" x="262" y="154" width="164" height="8" rx="4" />
      <rect className="fill-line" x="262" y="176" width="182" height="1" />
      {steps.map(([y, w]) => (
        <g key={y}>
          <circle className="fill-accent" cx="270" cy={y + 4} r="6.5" />
          <path d={`M266.8 ${y + 4} l2.2 2.4 l4.2 -4.8`} fill="none" className="stroke-surface" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <rect className="fill-line" x="284" y={y} width={w} height="8" rx="4" />
        </g>
      ))}
    </Frame>
  );
}

const ART = { krb: KrbArt, procure: ProcureArt, stream: StreamArt, iot: IotArt, plant: PlantArt };

// Normalisasi daftar foto: string atau { src, caption } -> { src, caption }
export const photosOf = (project) => (project.images ?? []).map((img) => (typeof img === 'string' ? { src: img, caption: null } : img));

// Sampul kartu: foto pertama jika ada, ilustrasi jika belum.
export function ProjectVisual({ project, alt = '', className = '' }) {
  const [cover] = photosOf(project);
  if (cover) {
    return <img src={cover.src} alt={alt} loading="lazy" decoding="async" className={`${className} object-cover object-top`} />;
  }
  const Art = ART[project.preview];
  return Art ? <Art className={className} /> : null;
}
