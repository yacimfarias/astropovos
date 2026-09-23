import raw from '../../data/asterismos.json';

export type Asterismo = (typeof raw.asterismos)[number];

export const asterismos = raw.asterismos;
export const fontes = raw.fontes;

export function getAsterismo(slug: string) {
  return asterismos.find((item) => item.slug === slug);
}
