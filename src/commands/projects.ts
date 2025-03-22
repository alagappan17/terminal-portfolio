import inquirer from 'inquirer';
import chalk from 'chalk';

interface Project {
  name: string;
  content: string;
  techStack?: string[];
  links?: {
    name: string;
    url: string;
  }[];
}

const projectData: Project[] = [
  {
    name: 'HierBridge',
    content: `I am involved in the development of a ${chalk.magenta(
      'Voice of Employee'
    )} platform designed to enhance hierarchical transparency and improve social listening at the workplace.
  The platform leverages AI strategies like ${chalk.yellow(
    'Retrieval-Augmented Generation (RAG)'
  )} and ${chalk.yellow(
      'AI Agents'
    )} to provide data-driven insights. Through multiple customer discovery interviews,
  we have identified key market challenges to shape the product effectively.
  Backed by ${chalk.green(
    "Carnegie Mellon University's Project Olympus Program"
  )} and other professors, we're in pre-development, laser-focused on building a product that actually moves the needle.`,
    techStack: ['Nx', 'Node.js', 'Koa', 'Next.js', 'Mongo', 'Firebase'],
    links: [
      {
        name: 'Website',
        url: 'https://hierbridge.com/',
      },
      {
        name: ' LinkedIn',
        url: 'https://www.linkedin.com/company/hierbridge',
      },
    ],
  },
  {
    name: 'Bloom',
    content: `I'm part of the team building Bloom, an edtech platform designed to make reading engaging for young learners—because reading should be more fun than frustrating.
  I've worked on crafting ${chalk.yellow(
    'complex, dynamic lessons'
  )} that adapt to different inputs, ensuring an interactive experience that keeps kids hooked. I also built the ${chalk.yellow(
      'admin portal'
    )} for
  content creation and data management, making life easier for educators. On the backend, I set up ${chalk.green(
    'CI pipelines'
  )} for testing and optimised and standardised the codebase for
  smoother development and long-term scalability.`,
    techStack: ['Nx', 'Node.js', 'Koa', 'React', 'Mongo', 'Clever'],
  },
  {
    name: 'WorkHero',
    content: `WorkHero pairs a fractional office manager with an LLM-powered platform, ensuring smooth workforce management, customer relations, and administrative operations.
  I built an ${chalk.yellow(
    'automated agent testing framework'
  )} from scratch, designed to evaluate multiple AI agents operating across different LLMs (${chalk.green(
      'Claude, Grok, Llama, GPT'
    )}).
  These agents handled everything from customer interactions to task management, making rigorous testing essential. The framework introduced a ${chalk.yellow(
    'modular design'
  )},
  allowing new test executors for evolving tasks. I also developed an ${chalk.yellow(
    'AI Test Agent'
  )} that verified actions, assessed accuracy, and maintained a scoring rubric to track performance.`,
    techStack: ['Nx', 'Node.js', 'Koa', 'React', 'Mongo'],
    links: [
      {
        name: 'Website',
        url: 'https://www.workhero.pro/',
      },
    ],
  },
  {
    name: 'Procedure (Internal)',
    content: `I worked on a range of internal apps. One of these was ${chalk.yellow(
      'Ragnarok'
    )}, an employee appreciation Slack bot that let colleagues give shoutouts and reward points.
  Built on ${chalk.green(
    'Frappe'
  )}, it extended ERPNext, our HR platform. I also helped redesign of the Procedure website, rebuilding it from the ground up with ${chalk.green(
      'Next.js and Tailwind CSS'
    )}.
  The new design introduced modern UI elements, improved structure, ensuring a sleek and engaging user experience.`,

    techStack: ['Next.js', 'Tailwind CSS', 'Frappe', 'ERPNext'],
    links: [
      {
        name: 'Website',
        url: '(Yet to be launched)',
      },
    ],
  },
  {
    name: 'Terminal Portfolio',
    content: `I created an interactive terminal-based portfolio. It allows users to navigate through my professional experiences, projects, and skills directly from the command line.
  The portfolio also features an AI-powered assistant named Tess, who responds to user queries and provides additional information. Use the command 'ask <query>' to interact with her.

  The goal of this project was to maximise utilisation of AI for development and related tasks.`,
    techStack: [
      'Bun',
      'Elysia',
      'Gemini',
      'Langchain',
      'Mongo',
      'Inquirer',
      'npm',
    ],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/alagappan17/terminal-portfolio',
      },
    ],
  },
];

export const projects = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'project',
      message: 'Select a project to view details:',
      choices: projectData.map((p) => p.name),
    },
  ]);

  projectDetails(answers.project);
};

const projectDetails = async (project: string) => {
  const selectedProject = projectData.find((p) => p.name === project);
  if (!selectedProject) {
    console.log(chalk.red(`Unknown project: ${project}`));
    return;
  }

  console.log(`
  ${chalk.cyan.bold('Project:')} ${chalk.yellow.bold(project)}`);

  console.log(`
  ${chalk.cyan.bold('Overview:')}`);
  console.log(`  ${selectedProject.content}`);

  if (selectedProject.techStack && selectedProject.techStack.length > 0) {
    console.log(`
  ${chalk.cyan.bold('Tech Stack:')}`);
    console.log(
      `  ${selectedProject.techStack
        .map((tech) => chalk.green(tech))
        .join(', ')}`
    );
  }

  if (selectedProject.links && selectedProject.links.length > 0) {
    console.log(`
  ${chalk.cyan.bold('Links:')}`);
    console.log(
      selectedProject.links
        .map(
          (link) =>
            `  ${chalk.blue(link.name.trim())}: ${chalk.underline(link.url)}`
        )
        .join('\n')
    );
  }

  console.log('');
};
