import type { PointerEvent } from 'react';
import type { DiagramStructure, ScientificDiagram } from '../data/diagramData';
import { usePreferences } from '../app/PreferencesContext';

type Props = {
  diagram: ScientificDiagram;
  activeId?: string;
  examMode?: boolean;
  compact?: boolean;
  onSelect?: (id: string) => void;
};

function LabShape({ structure, x, y }: { structure: DiagramStructure; x: number; y: number }) {
  const stroke = '#b5d1c0';
  const coral = '#d88776';
  const gold = '#d9bc7a';
  switch (structure.id) {
    case 'beaker': return <g transform={`translate(${x - 47},${y - 72})`} fill="none" stroke={stroke} strokeWidth="4" strokeLinejoin="round"><path d="M8 8h76M18 8v94q0 12 12 12h32q12 0 12-12V8M20 76h51" /><path d="M22 66h47" stroke={gold} strokeWidth="7" /></g>;
    case 'erlenmeyer': return <g transform={`translate(${x - 48},${y - 72})`} fill="none" stroke={stroke} strokeWidth="4" strokeLinejoin="round"><path d="M37 8h27M42 8v37L12 105q-5 10 9 10h60q14 0 9-10L60 45V8M23 87h57" /><path d="M27 79h48" stroke={gold} strokeWidth="7" /></g>;
    case 'graduated-cylinder': return <g transform={`translate(${x - 31},${y - 75})`} fill="none" stroke={stroke} strokeWidth="4" strokeLinejoin="round"><path d="M27 8h36v117H27zM18 125h54" /><path d="M28 39h18m-18 15h14m-14 15h18m-18 15h14m-14 15h18" stroke={gold} strokeWidth="3" /></g>;
    case 'test-tube': return <g transform={`translate(${x - 31},${y - 72})`} fill="none" stroke={stroke} strokeWidth="5" strokeLinejoin="round"><path d="M24 8h44M30 8v75a31 31 0 0 0 62 0V8" transform="translate(-10 0)" /><path d="M25 66h45" stroke={gold} strokeWidth="8" /></g>;
    case 'pipette': return <g transform={`translate(${x - 75},${y - 12}) rotate(-28)`} fill="none" stroke={stroke} strokeWidth="5" strokeLinecap="round"><path d="M8 0h92m0 0h30l20 3-20 3h-30M28-7v14m14-10v6m14-10v14m14-10v6" /><path d="M5 0h9" stroke={coral} strokeWidth="3" /></g>;
    case 'burner': return <g transform={`translate(${x - 46},${y - 77})`} fill="none" stroke={stroke} strokeWidth="4" strokeLinejoin="round"><path d="M44 12c-13 23 11 24 0 45-14-11-18-2-20 10-3 22 12 34 26 34s29-12 26-34c-2-14-13-18-12-31 2 10 10 11 12 17 16-25-2-40-10-53 2 16-8 17-9 27-8-5-8-9-13-15Z" fill="rgba(216,135,118,.19)" stroke={coral} /><path d="M14 117h66M24 117v8m45-8v8M34 100h27" /></g>;
    case 'balance': return <g transform={`translate(${x - 60},${y - 65})`} fill="none" stroke={stroke} strokeWidth="4" strokeLinejoin="round"><path d="M28 13h65M60 13v94M39 107h42M22 119h77M60 13l-32 36m32-36 32 36M13 49h18m56 0h18M22 49q-9 19 0 19t9-19m56 0q-9 19 0 19t9-19" /><path d="M27 87h66" stroke={gold} /></g>;
    default: return null;
  }
}

function HeartPlate() {
  return (
    <g className="heart-plate">
      <defs>
        <marker id="heart-arrow-blue" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0 0 0 6 8 3Z" fill="#82bdd3" /></marker>
        <marker id="heart-arrow-red" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0 0 0 6 8 3Z" fill="#dd8b7c" /></marker>
      </defs>
      <path d="M478 226V89c0-28 20-45 43-45s43 17 43 45v151" fill="none" stroke="#d88776" strokeWidth="23" strokeLinecap="round" />
      <path d="M445 230V122c0-25-20-39-42-39s-38 15-38 39v57" fill="none" stroke="#81b8cd" strokeWidth="18" strokeLinecap="round" />
      <path d="M349 174c-57-38-110-16-115 17-5 27 31 50 90 57" fill="none" stroke="#81b8cd" strokeWidth="15" strokeLinecap="round" />
      <path d="M573 182c58-42 112-20 118 11 5 28-32 51-91 59" fill="none" stroke="#dd8b7c" strokeWidth="15" strokeLinecap="round" />
      <path d="M414 190c-40-14-80 15-76 58 4 39 46 88 108 132 63-44 105-93 108-132 5-43-35-72-76-58-15 5-26 17-32 27-7-10-18-22-32-27Z" fill="#26362f" stroke="#a6c1ad" strokeWidth="4" />
      <path d="M446 201c-27-13-54 7-54 40 0 24 24 50 55 70Z" fill="#294b5a" stroke="#82bdd3" strokeWidth="3" />
      <path d="M470 201c27-13 54 7 54 40 0 24-24 50-55 70Z" fill="#5c3938" stroke="#dd8b7c" strokeWidth="3" />
      <path d="M448 312v68c-39-28-77-69-78-98-1-31 26-51 55-34 9 5 16 13 23 22Z" fill="#244351" stroke="#82bdd3" strokeWidth="3" />
      <path d="M470 312v68c39-28 77-69 78-98 1-31-26-51-55-34-9 5-16 13-23 22Z" fill="#67413e" stroke="#dd8b7c" strokeWidth="3" />
      <path d="M450 207v151" stroke="#a6c1ad" strokeWidth="3" />
      <path d="M414 229v66" stroke="#82bdd3" strokeWidth="4" markerEnd="url(#heart-arrow-blue)" />
      <path d="M482 314v56" stroke="#dd8b7c" strokeWidth="4" markerEnd="url(#heart-arrow-red)" />
      <path d="M445 193c-5-26-2-42 0-64" fill="none" stroke="#82bdd3" strokeWidth="4" markerEnd="url(#heart-arrow-blue)" />
      <path d="M501 182c-1-24-1-48 0-71" fill="none" stroke="#dd8b7c" strokeWidth="4" markerEnd="url(#heart-arrow-red)" />
      <text x="324" y="65" className="diagram-small-caption">PULMONARY CIRCUIT</text>
      <text x="524" y="65" className="diagram-small-caption">SYSTEMIC CIRCUIT</text>
      <text x="324" y="470" className="diagram-small-caption">O₂-POOR</text>
      <text x="520" y="470" className="diagram-small-caption">O₂-RICH</text>
    </g>
  );
}

function LeafPlate() {
  return (
    <g className="leaf-plate">
      <rect x="102" y="99" width="696" height="342" rx="18" fill="rgba(148,184,124,.09)" stroke="rgba(164,196,137,.6)" strokeWidth="2" />
      <rect x="112" y="109" width="676" height="22" rx="8" fill="#718f68" />
      <rect x="112" y="131" width="676" height="16" fill="#d3bf7d" opacity=".65" />
      <rect x="112" y="147" width="676" height="105" fill="rgba(142,176,103,.18)" />
      {Array.from({ length: 17 }, (_, i) => <g key={`p-${i}`}><rect x={128 + i * 38} y="153" width="28" height={65 + (i % 3) * 10} rx="12" fill="rgba(123,166,99,.5)" stroke="#a2bf82" strokeWidth="1.4" /><circle cx={141 + i * 38} cy="173" r="3" fill="#d4d988" /><circle cx={141 + i * 38} cy="190" r="3" fill="#d4d988" /></g>)}
      <rect x="112" y="252" width="676" height="151" fill="rgba(190,207,148,.13)" />
      {Array.from({ length: 18 }, (_, i) => <ellipse key={`s-${i}`} cx={137 + (i % 9) * 76 + (Math.floor(i / 9) * 18)} cy={283 + Math.floor(i / 9) * 71} rx="27" ry="19" fill="rgba(165,193,136,.18)" stroke="rgba(164,196,137,.65)" strokeWidth="1.5" />)}
      <rect x="112" y="403" width="676" height="22" rx="8" fill="#829b72" />
      <ellipse cx="551" cy="311" rx="65" ry="53" fill="#ddd9ad" stroke="#9fb47d" strokeWidth="3" />
      <ellipse cx="551" cy="292" rx="39" ry="20" fill="#d79278" />
      <ellipse cx="551" cy="333" rx="42" ry="21" fill="#d9b86e" />
      <path d="M440 415q18-22 37 0m12 0q18-22 37 0m12 0q18-22 37 0" fill="none" stroke="#496b4d" strokeWidth="5" strokeLinecap="round" />
      <path d="M467 416v-2m-10 3v-4m32 3v-2m30 3v-4m31 3v-2" stroke="#dce9d1" strokeWidth="2" />
      <text x="122" y="88" className="diagram-small-caption">UPPER SURFACE</text>
      <text x="122" y="462" className="diagram-small-caption">LOWER SURFACE · STOMATA SHOWN SCHEMATICALLY</text>
    </g>
  );
}

function CellPlate() {
  return (
    <g className="cell-plate">
      <path d="M128 282c-37-87 49-180 165-197 143-22 329 6 417 83 72 63 64 171 7 233-74 80-267 91-421 56-99-23-146-91-168-175Z" fill="rgba(95,132,125,.12)" stroke="#8abdad" strokeWidth="5" />
      <path d="M146 279c-27-72 52-155 148-170 141-22 312 5 389 71 60 52 57 141 9 196-65 73-240 79-386 48-85-18-139-76-160-145Z" fill="rgba(122,160,149,.07)" stroke="rgba(187,215,197,.38)" strokeWidth="1.5" />
      <ellipse cx="426" cy="283" rx="107" ry="91" fill="rgba(130,99,157,.28)" stroke="#a78bc2" strokeWidth="3" />
      <ellipse cx="430" cy="282" rx="28" ry="25" fill="#c7a5cb" stroke="#ead4e8" strokeWidth="2" />
      <path d="M345 245c23-35 69-43 92-28m41 115c-30 34-79 43-109 22" fill="none" stroke="#b3c895" strokeWidth="11" strokeLinecap="round" />
      <path d="M327 221c34-40 95-55 141-32m-123 150c40 27 94 24 126 6" fill="none" stroke="#d2a971" strokeWidth="5" strokeLinecap="round" />
      <path d="M552 210c27-31 75-27 99-4m-98 15c23-23 63-19 79-2m-73 17c17-16 43-12 54-1" fill="none" stroke="#dfbb84" strokeWidth="7" strokeLinecap="round" />
      <path d="M565 330c25-26 65-27 89-8m-80 20c18-17 46-17 64-3" fill="none" stroke="#91c3b1" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="265" cy="229" rx="31" ry="42" transform="rotate(-32 265 229)" fill="rgba(208,137,117,.3)" stroke="#e0a48e" strokeWidth="3" />
      <path d="M248 234c14-8 24-19 34-34m-24 55 36-48" stroke="#e8c0a8" strokeWidth="2" />
      <circle cx="286" cy="340" r="18" fill="rgba(134,124,180,.45)" stroke="#b8abd4" strokeWidth="2" />
      {Array.from({ length: 12 }, (_, i) => <circle key={`rib-${i}`} cx={252 + (i % 4) * 31} cy={183 + Math.floor(i / 4) * 23} r="4" fill="#f2d69c" />)}
      {Array.from({ length: 5 }, (_, i) => <circle key={`lys-${i}`} cx={196 + i * 28} cy={324 + (i % 2) * 24} r="7" fill="rgba(218,129,140,.34)" stroke="#d48a99" strokeWidth="1.5" />)}
      <text x="158" y="104" className="diagram-small-caption">EUKARYOTIC CELL · SCHEMATIC</text>
    </g>
  );
}

function PlateBase({ diagram }: { diagram: ScientificDiagram }) {
  switch (diagram.id) {
    case 'human-heart': return <HeartPlate />;
    case 'dicot-leaf-schema': return <LeafPlate />;
    case 'lab-apparatus': return <g className="lab-plate">{diagram.structures.map((structure) => <LabShape key={structure.id} structure={structure} x={structure.x * 9} y={structure.y * 5.6} />)}<text x="42" y="44" className="diagram-small-caption">COMMON INTRODUCTORY APPARATUS</text></g>;
    default: return <CellPlate />;
  }
}

export function DiagramArtwork({ diagram, activeId, examMode = false, compact = false, onSelect }: Props) {
  const { locale } = usePreferences();
  const lang = locale;
  const gridId = `${diagram.id}-grid`;
  function select(id: string) { onSelect?.(id); }
  return (
    <div className={`diagram-artwork${compact ? ' diagram-artwork--compact' : ''}${examMode ? ' is-exam' : ''}`}>
      <svg className="scientific-svg" viewBox="0 0 900 560" role="group" aria-label={diagram.title[lang]}>
        <defs>
          <pattern id={gridId} width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0v28" fill="none" stroke="rgba(168,197,178,.075)" strokeWidth="1" /></pattern>
          <radialGradient id={`${diagram.id}-wash`}><stop offset="0" stopColor="#294038" stopOpacity=".52" /><stop offset="1" stopColor="#111915" stopOpacity="0" /></radialGradient>
        </defs>
        <rect width="900" height="560" fill="#121a16" />
        <rect width="900" height="560" fill={`url(#${gridId})`} />
        <ellipse cx="450" cy="280" rx="390" ry="250" fill={`url(#${diagram.id}-wash)`} />
        {diagram.photo ? <image href={diagram.photo.src} x="0" y="-8" width="900" height="576" preserveAspectRatio="none" /> : <PlateBase diagram={diagram} />}
        {diagram.structures.map((structure, index) => {
          const x = structure.x * 9; const y = diagram.photo ? structure.y * 5.76 - 8 : structure.y * 5.6;
          const active = activeId === structure.id;
          const accent = active ? '#7bdec3' : '#b7c5bb';
          const label = examMode ? (lang === 'ar' ? 'تركيب مخفي' : 'Hidden structure') : structure.name[lang];
          const handlePointerDown = (event: PointerEvent<SVGGElement>) => event.stopPropagation();
          return (
            <g key={structure.id} className={`diagram-pin${active ? ' is-active' : ''}`} onPointerDown={handlePointerDown} onPointerEnter={() => { if (!examMode) select(structure.id); }} onFocus={() => { if (!examMode) select(structure.id); }} onClick={() => select(structure.id)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); select(structure.id); } }} role="button" tabIndex={0} aria-label={label} aria-pressed={active}>
              <circle cx={x} cy={y} r={active ? 18 : 14} fill={active ? 'rgba(123,222,195,.22)' : 'rgba(14,23,18,.72)'} stroke={accent} strokeWidth={active ? 2.2 : 1.2} />
              <circle cx={x} cy={y} r="3" fill={accent} />
              {!compact && !examMode && <text x={x + 16} y={y - 12} className="diagram-index-text">{String(index + 1).padStart(2, '0')}</text>}
            </g>
          );
        })}
        <text x="30" y="535" className="diagram-footer-code">FS-LAB / {diagram.category.toUpperCase()} / {diagram.structures.length} STRUCTURES</text>
        <text x="870" y="535" textAnchor="end" className="diagram-footer-code">{compact ? 'PLATE / PREVIEW' : 'VECTOR PLATE · NOT TO SCALE'}</text>
      </svg>
    </div>
  );
}
