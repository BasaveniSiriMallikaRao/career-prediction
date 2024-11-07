import React, { useState } from 'react';
import { Briefcase, BookOpen, TrendingUp, ExternalLink } from 'lucide-react';
import { DetailCard } from './ui/DetailCard';
import { getCareerRecommendations } from '../utils/recommendations';
import type { CareerPath } from '../types';
import CareerModal from './CareerModal';

export default function CareerSuggestions({ skills }: { skills: string[] }) {
  const recommendations = getCareerRecommendations(skills);
  const [selectedCareer, setSelectedCareer] = useState<CareerPath | null>(null);

  if (recommendations.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          No Matches Found
        </h2>
        <p className="text-gray-600">
          Try selecting different skills to get career recommendations.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Your Career Path Recommendations
        </h2>
        <p className="text-gray-600">
          Based on your skills and interests, here are some promising career paths to consider.
        </p>
      </div>

      <div className="space-y-6">
        {recommendations.map((career: CareerPath) => (
          <div key={career.title} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {career.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{career.description}</p>
                </div>
                <span className={`
                  inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                  ${career.growth === 'Very High' ? 'bg-green-100 text-green-800' : 
                    career.growth === 'High' ? 'bg-blue-100 text-blue-800' :
                    career.growth === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'}
                `}>
                  {career.growth} Growth
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <DetailCard
                  icon={<Briefcase className="w-5 h-5 text-indigo-600" />}
                  title="Required Skills"
                  content={career.skills.join(', ')}
                />
                <DetailCard
                  icon={<BookOpen className="w-5 h-5 text-indigo-600" />}
                  title="Education"
                  content={career.education}
                />
                <DetailCard
                  icon={<TrendingUp className="w-5 h-5 text-indigo-600" />}
                  title="Salary Range"
                  content={career.salary}
                />
              </div>

              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => setSelectedCareer(career)}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  Learn More <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCareer && (
        <CareerModal
          career={selectedCareer}
          onClose={() => setSelectedCareer(null)}
        />
      )}
    </div>
  );
}