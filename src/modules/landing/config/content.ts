import { type IconType } from 'react-icons';
import {
  FaBroadcastTower,
  FaGlassCheers,
  FaListUl,
  FaSearch,
  FaTrophy,
  FaUserCircle,
  FaUsers,
  FaVoteYea,
} from 'react-icons/fa';

/** "Qué verás esta noche" — tabs explaining what the awards are. */
export interface GuideTopic {
  icon: IconType;
  label: string;
  title: string;
  body: string;
}

export const PROGRAM_GUIDE: GuideTopic[] = [
  {
    icon: FaBroadcastTower,
    label: 'Qué es',
    title: 'Una gala de premios muy en serio',
    body: 'Los Mango D\'Or Awards son unos premios anuales que celebran los momentos, manías y hazañas más memorables del año. Nada de Óscars ni Grammys — aquí se premia la vida real, tal cual es: absurda, dramática y perfectamente digna de un trofeo.',
  },
  {
    icon: FaListUl,
    label: 'Categorías',
    title: 'Ocho categorías, cero piedad',
    body: 'Cada categoría reconoce un tipo de comportamiento inconfundible: el meme del año, el drama que nadie pidió, el look que rompió internet. Si existe, probablemente ya tiene su propio premio.',
  },
  {
    icon: FaVoteYea,
    label: 'Votación',
    title: 'El público decide, los números no mienten',
    body: 'Cada categoría tiene sus nominados. Se vota, se cuenta y gana quien más votos reúna. Sin jurados, sin favoritismos — solo el veredicto colectivo.',
  },
  {
    icon: FaGlassCheers,
    label: 'La gala',
    title: 'Una noche, un ganador por categoría',
    body: 'El día de la gala se cierra la votación y se anuncian los ganadores en directo. Trofeos, algún discurso improvisado y, seguramente, alguna sorpresa incómoda garantizada.',
  },
];

/** Quick-access channel cards linking to the site's other pages. */
export interface NavChannel {
  icon: IconType;
  title: string;
  description: string;
  to: string;
}

export const NAV_CHANNELS: NavChannel[] = [
  {
    icon: FaUsers,
    title: 'Candidatos',
    description:
      'Quiénes se juegan el trofeo esta noche. Cada uno postulado por sus propios méritos (o desastres).',
    to: '/candidates',
  },
  {
    icon: FaTrophy,
    title: 'Categorías',
    description:
      'Los premios en juego. De lo más honorable a lo más absurdo, todo se vota igual.',
    to: '/categories',
  },
];

/** "Cómo sintonizar" — the voting flow steps. */
export interface Step {
  title: string;
  description: string;
  icon: IconType;
}

export const STEPS: Step[] = [
  {
    title: 'Cuenta requerida',
    description: 'Regístrate o inicia sesión para poder participar.',
    icon: FaUserCircle,
  },
  {
    title: 'Buscar categorías',
    description: 'Explora las categorías y conoce a los nominados.',
    icon: FaSearch,
  },
  {
    title: 'Repartir los votos',
    description: 'Distribuye tus votos entre tus candidatos favoritos.',
    icon: FaVoteYea,
  },
  {
    title: 'Resultados',
    description: 'Llegado el día, descubre quién se lleva cada trofeo.',
    icon: FaTrophy,
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
