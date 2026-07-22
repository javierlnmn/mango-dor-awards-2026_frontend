import { type IconType } from 'react-icons';

interface ChannelCardProps {
  index: number;
  icon: IconType;
  title: string;
  description: React.ReactNode;
}

const ChannelCard = ({
  index,
  icon: Icon,
  title,
  description,
}: ChannelCardProps) => {
  return (
    <div className="group relative overflow-hidden border border-fuchsia-500/30 bg-black/40 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-fuchsia-400/70">
      <div className="mb-6 flex items-center justify-between font-mono-retro text-xs text-fuchsia-400/70">
        <span>CH.0{index}</span>
        <span className="animate-blink">●</span>
      </div>
      <Icon className="mb-4 text-3xl text-fuchsia-300" />
      <h3 className="font-display mb-2 text-2xl uppercase text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-white/60">{description}</p>
      <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
};

export default ChannelCard;
