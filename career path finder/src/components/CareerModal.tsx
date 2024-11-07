import React from 'react';
import { X, ExternalLink, Building2, GraduationCap, Briefcase, TrendingUp, Users, BookOpen } from 'lucide-react';
import { CareerPath } from '../types';

interface CareerModalProps {
  career: CareerPath;
  onClose: () => void;
}

export default function CareerModal({ career, onClose }: CareerModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{career.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600">{career.description}</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Career Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <DetailItem
              icon={<Building2 className="w-5 h-5 text-indigo-600" />}
              title="Industry Growth"
              content={`${career.growth} growth potential in the next 5 years`}
            />
            <DetailItem
              icon={<GraduationCap className="w-5 h-5 text-indigo-600" />}
              title="Required Education"
              content={career.education}
            />
            <DetailItem
              icon={<TrendingUp className="w-5 h-5 text-indigo-600" />}
              title="Salary Range"
              content={career.salary}
            />
            <DetailItem
              icon={<Briefcase className="w-5 h-5 text-indigo-600" />}
              title="Key Skills"
              content={career.skills.join(', ')}
            />
          </div>

          {/* Additional Resources */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Resources</h3>
            <div className="space-y-4">
              <ResourceLink
                title="Career Path Guide"
                description="Detailed guide about becoming a successful professional in this field"
              />
              <ResourceLink
                title="Industry Insights"
                description="Latest trends and future outlook for this career"
              />
              <ResourceLink
                title="Learning Resources"
                description="Recommended courses and certifications"
              />
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <button
            onClick={onClose}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h4 className="text-sm font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
}

function ResourceLink({ title, description }: { title: string; description: string }) {
  return (
    <a
      href="#"
      className="block p-4 border border-gray-200 rounded-lg hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
    >
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-sm font-medium text-gray-900">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400" />
      </div>
    </a>
  );
}