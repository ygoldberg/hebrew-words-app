import React, { useEffect, useState } from 'react';
import TenseSection from './TenseSection';

type Verb = {
  shoresh: string;
  english: string;
  family: string;
  infinitive: string;
  present_masc_sg: string;
  present_masc_pl: string;
  present_fem_sg: string;
  present_fem_pl: string;
};

function App() {
  const [verbs, setVerbs] = useState<Verb[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/verbs")
      .then((res) => res.json())
      .then(setVerbs)
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Hebrew Verbs</h1>
      <div className="flex flex-wrap gap-6 justify-center max-w-6xl mx-auto">
        {verbs.map((verb, index) => (
          <div key={index} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
            <div className="bg-white p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg h-full">
              <div className="text-right font-hebrew rtl text-2xl font-semibold text-blue-900 mb-1">{verb.infinitive}</div>
              <div className="text-gray-600 italic mb-1">{verb.english}</div>
              <div className="text-sm text-gray-500 mb-2">{verb.family} — <span className="font-bold">{verb.shoresh}</span></div>
              <TenseSection
                title="Present"
                forms={{
                  masc_sg: verb.present_masc_sg,
                  masc_pl: verb.present_masc_pl,
                  fem_sg: verb.present_fem_sg,
                  fem_pl: verb.present_fem_pl,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
