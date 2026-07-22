import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import SectionHeading from '@/ui/SectionHeading';

interface PagePlaceholderProps {
  label: string;
  title: string;
  description?: string;
}

/** Shared "coming soon" scaffold for pages not built yet. */
const PagePlaceholder = ({ label, title, description }: PagePlaceholderProps) => (
  <section className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 md:px-12">
    <SectionHeading label={label} title={title} />
    {description && (
      <p className="mt-6 max-w-xl leading-relaxed text-white/55">
        {description}
      </p>
    )}
    <Link
      to="/"
      className="group mt-10 inline-flex items-center gap-2 font-mono-retro text-xs uppercase tracking-[0.3em] text-cyan-200 transition-colors hover:text-cyan-100"
    >
      <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
      Volver al inicio
    </Link>
  </section>
);

export default PagePlaceholder;
