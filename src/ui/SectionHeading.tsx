interface SectionHeadingProps {
  /** Small mono eyebrow above the title. */
  label: string;
  title: string;
}

const SectionHeading = ({ label, title }: SectionHeadingProps) => (
  <div>
    <p className="font-mono-retro inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-300/80 before:h-px before:w-8 before:bg-cyan-300/50 before:content-['']">
      {label}
    </p>
    <h2 className="font-display mt-3 text-4xl uppercase md:text-5xl">{title}</h2>
  </div>
);

export default SectionHeading;
