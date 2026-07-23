import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import { type GuideTopic } from '@/modules/landing/config/content';

interface ExplainerTabsProps {
  topics: GuideTopic[];
}

const ExplainerTabs = ({ topics }: ExplainerTabsProps) => {
  const [active, setActive] = useState(0);
  const current = topics[active];

  return (
    <div className="glass holo-border grid gap-2 rounded-xl p-2 md:grid-cols-[220px_1fr] md:gap-0 md:p-3">
      <div className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
        {topics.map((topic, index) => {
          const isActive = index === active;
          const Icon = topic.icon;
          return (
            <button
              key={topic.label}
              type="button"
              onClick={() => setActive(index)}
              className={`group flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-left font-mono-retro text-xs uppercase tracking-widest transition-colors duration-300 md:shrink ${
                isActive
                  ? 'bg-cyan-400/10 text-cyan-200 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.4)]'
                  : 'text-white/45 hover:text-white'
              }`}
            >
              <Icon
                className={`text-base transition-colors duration-300 ${
                  isActive
                    ? 'text-cyan-300'
                    : 'text-white/30 group-hover:text-white/60'
                }`}
              />
              {topic.label}
            </button>
          );
        })}
      </div>

      <div className="relative min-h-[220px] overflow-hidden rounded-lg p-6 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <h3 className="font-display mb-4 text-2xl uppercase text-white md:text-3xl">
              {current.title}
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
              {current.body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExplainerTabs;
