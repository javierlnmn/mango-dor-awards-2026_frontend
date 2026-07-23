import { type IconType } from 'react-icons';

interface VcrStep {
  title: string;
  description: string;
  icon: IconType;
}

interface VcrStepsProps {
  steps: VcrStep[];
}

const VcrSteps = ({ steps }: VcrStepsProps) => {
  return (
    <ol className="font-mono-retro relative">
      {/* signal path spine */}
      <span className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-fuchsia-400/40 via-violet-400/20 to-cyan-400/40" />

      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <li key={step.title} className="group relative flex items-start gap-5 py-5">
            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-ink text-xs text-cyan-200 shadow-[0_0_18px_-6px_rgba(34,211,238,0.7)] transition-colors duration-300 group-hover:border-fuchsia-400/60 group-hover:text-fuchsia-200">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 pt-1">
              <p className="font-display text-lg uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-cyan-200">
                {step.title}
              </p>
              <p className="mt-1 text-sm text-white/50">{step.description}</p>
            </div>
            <Icon className="mt-1 shrink-0 text-xl text-cyan-200/60 transition-colors duration-300 group-hover:text-cyan-200" />
          </li>
        );
      })}
    </ol>
  );
};

export default VcrSteps;
