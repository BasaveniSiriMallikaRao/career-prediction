import React from 'react';
import { BrainCog, Compass, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import SkillAssessment from './components/SkillAssessment';
import CareerSuggestions from './components/CareerSuggestions';
import Header from './components/Header';
import ChatBot from './components/ChatBot';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [skills, setSkills] = useState<string[]>([]);

  const handleSkillsSubmit = (selectedSkills: string[]) => {
    setSkills(selectedSkills);
    setCurrentStep(2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        {currentStep === 1 && (
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover Your Perfect Career Path
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Let AI guide you to career opportunities that match your unique skills and interests.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <FeatureCard 
                icon={<BrainCog className="w-8 h-8 text-indigo-600" />}
                title="Skill Analysis"
                description="Advanced assessment of your skills and interests"
              />
              <FeatureCard 
                icon={<Compass className="w-8 h-8 text-indigo-600" />}
                title="Smart Matching"
                description="AI-powered career path recommendations"
              />
              <FeatureCard 
                icon={<GraduationCap className="w-8 h-8 text-indigo-600" />}
                title="Learning Paths"
                description="Personalized development roadmaps"
              />
            </div>
          </div>
        )}

        {/* Assessment Section */}
        {currentStep === 1 && (
          <SkillAssessment onSubmit={handleSkillsSubmit} />
        )}

        {/* Results Section */}
        {currentStep === 2 && (
          <CareerSuggestions skills={skills} />
        )}
      </main>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default App;