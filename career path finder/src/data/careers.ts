import { CareerPath } from '../types';

export const careerPaths: Record<string, CareerPath[]> = {
  // Technology & Engineering
  'Programming': [
    {
      title: 'Software Engineer',
      description: 'Design and develop software applications',
      skills: ['Programming', 'Problem Solving', 'Web Development'],
      growth: 'High',
      education: "Bachelor's in Computer Science",
      salary: '$70,000 - $150,000'
    }
  ],
  
  // Healthcare & Medicine
  'Healthcare': [
    {
      title: 'Physician',
      description: 'Diagnose and treat patients, prescribe medications',
      skills: ['Healthcare', 'Communication', 'Problem Solving'],
      growth: 'High',
      education: 'Medical Degree (MD/DO)',
      salary: '$200,000 - $400,000'
    },
    {
      title: 'Nurse Practitioner',
      description: 'Provide advanced nursing care and treatment',
      skills: ['Healthcare', 'Communication', 'Critical Thinking'],
      growth: 'Very High',
      education: "Master's in Nursing",
      salary: '$90,000 - $130,000'
    }
  ],

  // Business & Finance
  'Finance': [
    {
      title: 'Investment Banker',
      description: 'Assist organizations with capital raising and financial transactions',
      skills: ['Finance', 'Analysis', 'Communication'],
      growth: 'Medium',
      education: "Bachelor's in Finance/Economics",
      salary: '$100,000 - $200,000'
    },
    {
      title: 'Financial Advisor',
      description: 'Help individuals and businesses manage their investments',
      skills: ['Finance', 'Communication', 'Problem Solving'],
      growth: 'High',
      education: "Bachelor's in Finance",
      salary: '$60,000 - $150,000'
    }
  ],

  // Creative & Arts
  'Design': [
    {
      title: 'UX/UI Designer',
      description: 'Create intuitive and beautiful digital experiences',
      skills: ['Design', 'Communication', 'Problem Solving'],
      growth: 'High',
      education: "Bachelor's in Design or HCI",
      salary: '$60,000 - $130,000'
    },
    {
      title: 'Art Director',
      description: 'Lead visual style and creative direction of projects',
      skills: ['Design', 'Leadership', 'Creativity'],
      growth: 'Medium',
      education: "Bachelor's in Fine Arts",
      salary: '$70,000 - $140,000'
    }
  ],

  // Education & Teaching
  'Education': [
    {
      title: 'Teacher',
      description: 'Educate students and develop curriculum',
      skills: ['Education', 'Communication', 'Leadership'],
      growth: 'Stable',
      education: "Bachelor's in Education",
      salary: '$45,000 - $85,000'
    },
    {
      title: 'Educational Administrator',
      description: 'Manage school operations and programs',
      skills: ['Education', 'Leadership', 'Management'],
      growth: 'Medium',
      education: "Master's in Education Administration",
      salary: '$70,000 - $120,000'
    }
  ],

  // Law & Legal
  'Legal': [
    {
      title: 'Lawyer',
      description: 'Provide legal counsel and representation',
      skills: ['Legal Knowledge', 'Communication', 'Analysis'],
      growth: 'Medium',
      education: 'Juris Doctor (JD)',
      salary: '$80,000 - $180,000'
    },
    {
      title: 'Paralegal',
      description: 'Assist lawyers with legal work and research',
      skills: ['Legal Knowledge', 'Organization', 'Research'],
      growth: 'High',
      education: "Associate's in Paralegal Studies",
      salary: '$45,000 - $75,000'
    }
  ],

  // Science & Research
  'Research': [
    {
      title: 'Research Scientist',
      description: 'Conduct scientific research and experiments',
      skills: ['Research', 'Analysis', 'Critical Thinking'],
      growth: 'High',
      education: 'Ph.D. in Related Field',
      salary: '$70,000 - $150,000'
    },
    {
      title: 'Data Scientist',
      description: 'Analyze complex data sets to solve problems',
      skills: ['Data Analysis', 'Programming', 'Statistics'],
      growth: 'Very High',
      education: "Master's in Data Science",
      salary: '$85,000 - $165,000'
    }
  ],

  // Marketing & Communications
  'Marketing': [
    {
      title: 'Marketing Manager',
      description: 'Develop and implement marketing strategies',
      skills: ['Marketing', 'Communication', 'Strategy'],
      growth: 'High',
      education: "Bachelor's in Marketing",
      salary: '$65,000 - $140,000'
    },
    {
      title: 'Public Relations Specialist',
      description: 'Manage public image and communications',
      skills: ['Communication', 'Writing', 'Strategy'],
      growth: 'Medium',
      education: "Bachelor's in PR/Communications",
      salary: '$50,000 - $100,000'
    }
  ],

  // Hospitality & Tourism
  'Hospitality': [
    {
      title: 'Hotel Manager',
      description: 'Oversee hotel operations and staff',
      skills: ['Management', 'Customer Service', 'Leadership'],
      growth: 'Medium',
      education: "Bachelor's in Hospitality Management",
      salary: '$50,000 - $110,000'
    },
    {
      title: 'Event Planner',
      description: 'Organize and coordinate events and conferences',
      skills: ['Organization', 'Communication', 'Detail-Oriented'],
      growth: 'High',
      education: "Bachelor's in Event Management",
      salary: '$45,000 - $85,000'
    }
  ]
};