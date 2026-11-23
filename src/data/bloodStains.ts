import type { Bilingual, ScientificReference } from './scientificData';

export type BloodStainId = 'wright-giemsa' | 'giemsa' | 'new-methylene-blue' | 'brilliant-cresyl-blue';

export type BloodStain = {
  id: BloodStainId;
  title: Bilingual;
  purpose: Bilingual;
  color: string;
  canvasFilter: string;
  references: ScientificReference[];
};

export const bloodStains: BloodStain[] = [
  {
    id: 'wright-giemsa',
    title: { en: 'Wright–Giemsa', ar: 'رايت–جيمسا' },
    purpose: {
      en: 'A routine blood-film stain for comparing red cells and white-cell morphology.',
      ar: 'صبغة شائعة للاطلاع على شكل كريات الدم الحمراء والبيضاء في اللطاخة.',
    },
    color: '#9877a8',
    canvasFilter: 'saturate(1.24) hue-rotate(345deg) contrast(1.06)',
    references: [{
      id: 'cdc-blood-staining',
      title: 'Blood Specimens – Staining',
      provider: 'CDC DPDx',
      url: 'https://www.cdc.gov/dpdx/diagnosticprocedures/blood/staining.html',
      supports: 'Wright-Giemsa is used in hematology; CDC notes its limitations for some malaria parasite features.',
    }],
  },
  {
    id: 'giemsa',
    title: { en: 'Giemsa', ar: 'جيمسا' },
    purpose: {
      en: 'Used for blood-parasite microscopy; Giemsa is preferred for several Plasmodium details.',
      ar: 'تُستخدم لفحص طفيليات الدم، وتُفضّل لإظهار تفاصيل متعددة في طفيليات البلازموديوم.',
    },
    color: '#6d5ab2',
    canvasFilter: 'saturate(1.48) hue-rotate(325deg) contrast(1.08)',
    references: [{
      id: 'cdc-dpdx-malaria-stain',
      title: 'DPDx: Malaria',
      provider: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/dpdx/malaria/index.html',
      supports: 'Giemsa is preferred to Wright or Wright-Giemsa for viewing some Plasmodium morphological features.',
    }],
  },
  {
    id: 'new-methylene-blue',
    title: { en: 'New methylene blue', ar: 'أزرق الميثيلين الجديد' },
    purpose: {
      en: 'A supravital stain that reveals residual RNA in reticulocytes as blue granules or a network.',
      ar: 'صبغة حيوية فائقة تكشف بقايا الحمض النووي الريبي في الخلايا الشبكية كحبيبات أو شبكة زرقاء.',
    },
    color: '#4d93ad',
    canvasFilter: 'saturate(1.28) hue-rotate(158deg) contrast(1.04)',
    references: [{
      id: 'ncbi-new-methylene-blue',
      title: 'Histology, Reticulocytes',
      provider: 'StatPearls · NCBI Bookshelf',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK542172/',
      supports: 'New methylene blue binds reticulocyte RNA and makes residual material visible under light microscopy.',
    }],
  },
  {
    id: 'brilliant-cresyl-blue',
    title: { en: 'Brilliant cresyl blue', ar: 'أزرق الكريزيل اللامع' },
    purpose: {
      en: 'A supravital reticulocyte stain used to reveal residual RNA.',
      ar: 'صبغة حيوية فائقة للخلايا الشبكية تكشف بقايا الحمض النووي الريبي.',
    },
    color: '#4585a0',
    canvasFilter: 'saturate(1.3) hue-rotate(164deg) contrast(1.05)',
    references: [{
      id: 'ncbi-brilliant-cresyl-blue',
      title: 'Histology, Reticulocytes',
      provider: 'StatPearls · NCBI Bookshelf',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK542172/',
      supports: 'Brilliant cresyl blue is one of the supravital stains used to show reticulocyte RNA under light microscopy.',
    }],
  },
];
