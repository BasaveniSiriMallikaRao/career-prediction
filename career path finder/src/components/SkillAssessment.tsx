import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { skillCategories } from '../data/skills';

export default function SkillAssessment({ onSubmit }: { onSubmit: (skills: string[]) => void }) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillCategories>('industry');

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleSubmit = () => {
    if (selectedSkills.length >= 3) {
      onSubmit(selectedSkills);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Select Your Skills & Interests
      </h2>
      <p className="text-gray-600 mb-8">
        Choose at least 3 skills or interests that best describe you.
      </p>

      {/* Category Tabs */}
      <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
        {(Object.keys(skillCategories) as Array<keyof typeof skillCategories>).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              px-4 py-2 rounded-lg whitespace-nowrap transition-colors
              ${activeCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
            `}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skillCategories[activeCategory].map(skill => (
          <button
            key={skill}
            onClick={() => toggleSkill(skill)}
            className={`
              flex items-center justify-between px-4 py-2 rounded-lg border
              transition-all duration-200
              ${selectedSkills.includes(skill)
                ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                : 'border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/50'}
            `}
          >
            <span>{skill}</span>
            {selectedSkills.includes(skill) && (
              <Check className="w-4 h-4 ml-2" />
            )}
          </button>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleSubmit}
          disabled={selectedSkills.length < 3}
          className={`
            px-8 py-3 rounded-lg font-medium transition-all duration-200
            ${selectedSkills.length >= 3
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
          `}
        >
          {selectedSkills.length >= 3
            ? 'Get Career Recommendations'
            : `Select ${3 - selectedSkills.length} More Skills`}
        </button>
      </div>
    </div>
  );
}