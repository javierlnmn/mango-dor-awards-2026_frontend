interface VcrStep {
  title: string;
  description: string;
  icon: string;
}

interface VcrStepsProps {
  steps: VcrStep[];
}

const VcrSteps = ({ steps }: VcrStepsProps) => {
  return (
    <ol className="font-mono-retro divide-y divide-white/10">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="group flex items-baseline gap-4 py-5 md:gap-6"
        >
          <span className="w-8 shrink-0 text-sm text-fuchsia-400/60">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex-1">
            <p className="font-display text-lg uppercase tracking-wide text-white transition-colors group-hover:text-fuchsia-300">
              {step.title}
            </p>
            <p className="mt-1 text-sm text-white/50">{step.description}</p>
          </div>
          <span className="shrink-0 text-xl text-white/30">{step.icon}</span>
        </li>
      ))}
    </ol>
  );
};

export default VcrSteps;
