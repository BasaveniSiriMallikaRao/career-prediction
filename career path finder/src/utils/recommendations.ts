import { CareerPath } from '../types';
import { careerPaths } from '../data/careers';

export function getCareerRecommendations(selectedSkills: string[]): CareerPath[] {
  const recommendations = new Map<string, CareerPath>();
  
  selectedSkills.forEach(skill => {
    if (careerPaths[skill]) {
      careerPaths[skill].forEach(career => {
        // Calculate match score based on how many selected skills match the career's required skills
        const matchingSkills = career.skills.filter(s => selectedSkills.includes(s));
        const score = matchingSkills.length / career.skills.length;
        
        // Only include careers with at least 30% skill match
        if (score >= 0.3) {
          recommendations.set(career.title, career);
        }
      });
    }
  });

  // Sort by number of matching skills (descending)
  return Array.from(recommendations.values()).sort((a, b) => {
    const aMatch = a.skills.filter(s => selectedSkills.includes(s)).length;
    const bMatch = b.skills.filter(s => selectedSkills.includes(s)).length;
    return bMatch - aMatch;
  });
}