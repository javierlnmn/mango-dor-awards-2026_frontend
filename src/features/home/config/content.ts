import { type IconType } from 'react-icons';
import { FaRegHandPointer, FaTrophy, FaUsers } from 'react-icons/fa';

/** "Qué verás esta noche" — programming grid cards. */
export interface Channel {
  icon: IconType;
  title: string;
  description: string;
}

export const CHANNELS: Channel[] = [
  {
    icon: FaUsers,
    title: 'Candidatos',
    description:
      'Quiénes se juegan el trofeo esta noche. Cada uno postulado por sus propios méritos (o desastres).',
  },
  {
    icon: FaTrophy,
    title: 'Categorías',
    description:
      'Los premios en juego. De lo más honorable a lo más absurdo, todo se vota igual.',
  },
  {
    icon: FaRegHandPointer,
    title: 'Votos',
    description:
      'El público decide. Reparte tus votos entre tus favoritos en cada categoría.',
  },
];

/** "Cómo sintonizar" — the voting flow steps. */
export interface Step {
  title: string;
  description: string;
  icon: string;
}

export const STEPS: Step[] = [
  {
    title: 'Cuenta requerida',
    description: 'Regístrate o inicia sesión para poder participar.',
    icon: '👤',
  },
  {
    title: 'Buscar categorías',
    description: 'Explora las categorías y conoce a los nominados.',
    icon: '🔍',
  },
  {
    title: 'Repartir los votos',
    description: 'Distribuye tus votos entre tus candidatos favoritos.',
    icon: '🗳️',
  },
  {
    title: 'Resultados',
    description: 'Llegado el día, descubre quién se lleva cada trofeo.',
    icon: '🏆',
  },
];

/** Hero stat strip. */
export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: '08', label: 'Categorías' },
  { value: '∞', label: 'Egos en juego' },
  { value: '01', label: 'Noche decisiva' },
];
