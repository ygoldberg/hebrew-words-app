import React, { useState } from 'react';

type TenseSectionProps = {
  title: string;
  forms: {
    masc_sg: string;
    masc_pl: string;
    fem_sg: string;
    fem_pl: string;
  };
};

const TenseSection: React.FC<TenseSectionProps> = ({ title, forms }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{title}</h2>
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-gray-500 hover:text-gray-800 transition-transform transform flex items-center gap-1"
        >
          <span className="text-sm">{expanded ? 'Hide' : 'Show'}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden \${expanded ? 'max-h-96 pt-2' : 'max-h-0 pt-0'}`}
      >
        {expanded && (
          <div className="grid grid-cols-2 gap-4 font-hebrew rtl text-xl">
            <div>
              <div className="uppercase text-xs text-gray-500 font-bold mb-1">Masculine</div>
              <div><span className="text-gray-500 text-sm">Sg:</span> {forms.masc_sg}</div>
              <div><span className="text-gray-500 text-sm">Pl:</span> {forms.masc_pl}</div>
            </div>
            <div>
              <div className="uppercase text-xs text-gray-500 font-bold mb-1">Feminine</div>
              <div><span className="text-gray-500 text-sm">Sg:</span> {forms.fem_sg}</div>
              <div><span className="text-gray-500 text-sm">Pl:</span> {forms.fem_pl}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TenseSection;
