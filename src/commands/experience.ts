import inquirer from 'inquirer';
import chalk from 'chalk';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location?: string;
  type?: string;
  points: string[];
}

const workExperience: ExperienceItem[] = [
  {
    company: 'Procedure',
    role: 'SDE 1',
    duration: 'Nov 2023 - Present',
    location: 'Remote',
    points: [
      'Building an early literacy app, based on the science of reading. Focused on making a measurable difference in the classroom.',
    ],
  },
  {
    company: 'Procedure',
    role: 'Software Engineering Trainee (Rubber Duck)',
    duration: 'Aug 2023 - Oct 2023',
    location: 'Mumbai, Maharashtra',
    points: [
      'Completed 10-week intensive software engineering boot camp',
      'Learned various aspects of development like best practices, deployment, estimation, working with teams, influence and networking.',
      'Gained hands-on experience with multiple mini projects',
    ],
  },
  {
    company: 'TANSAM Center of Excellence',
    role: 'Virtual Reality Development Intern',
    duration: 'Feb 2023',
    location: 'Chennai, Tamil Nadu',
    points: [
      'Developed VR solutions to visualize and solve identified industrial problems using Unity and Unreal Engine 5.',
      'Created scripts to define asset movements and interactions with multiple input sources.',
    ],
  },
];

const educationExperience: ExperienceItem[] = [
  {
    company: 'Sri Venkateswara College of Engineering',
    location: 'Chennai, Tamil Nadu',
    role: 'Bachelor of Technology - Information Technology',
    duration: '2019 - 2023',
    points: [],
  },
];

const otherExperience: ExperienceItem[] = [
  {
    company: 'OnePlus Community Creator',
    role: 'Creator Crew',
    duration: 'Oct 2023 - Present',
    points: [
      'Contributing engaging threads on technology and art',
      'Creating content for the OnePlus Community',
    ],
  },
  {
    company: 'Digital Artist',
    role: 'Freelance',
    duration: 'Nov 2022 - Jun 2024',
    points: [
      'Producing digital art illustrations and animations for brands and artists',
      'Clientele: OnePlus, Voiceless Tales, StreetJutsu, Cloudy Sharks',
      'Proficient in Product Animations with Blender and DaVinci Resolve',
    ],
  },
  {
    company: 'OnePlus Student Ambassador',
    role: 'Content and Community Team',
    duration: 'Nov 2021 - Jun 2022',
    points: [
      'Reached 425k+ organic social media audience through campaigns',
      'Ideated marketing campaigns for OnePlus India and OnePlus SAP',
      'Collaborated with college students to produce digital art content',
      'Built and managed pan-India student community',
    ],
  },
];

export const experience = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'category',
      message: 'Select a category to view details:',
      choices: ['Work', 'Education', 'Other'],
    },
  ]);

  experienceDetails(answers.category);
};

const experienceDetails = (category: string) => {
  switch (category) {
    case 'Work':
      console.log(workExperience.map(displayExperienceBlock).join('\n'));
      break;
    case 'Education':
      console.log(educationExperience.map(displayExperienceBlock).join('\n'));
      break;
    case 'Other':
      console.log(otherExperience.map(displayExperienceBlock).join('\n'));
      break;
    default:
      console.log(chalk.yellow(`Unknown category: ${category}`));
  }
};

const displayExperienceBlock = (exp: ExperienceItem) => {
  const roleInfo = exp.role ? `\n    ${chalk.gray(exp.role)}` : '';
  const locationInfo = exp.location
    ? ` ${chalk.blue(`(${exp.location})`)}`
    : '';
  const typeInfo = exp.type ? `\n    ${chalk.blue(`(${exp.type})`)}` : '';

  return `
    ${chalk.yellow(exp.company)} (${
    exp.duration
  })${roleInfo}${locationInfo}${typeInfo}
    ${exp.points
      .map((point, index) => (index === 0 ? `• ${point}` : `    • ${point}`))
      .join('\n')}
`;
};
