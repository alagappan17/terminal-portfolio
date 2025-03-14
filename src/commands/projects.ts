import inquirer from 'inquirer';
import chalk from 'chalk';

interface Project {
  name: string;
  content: string;
}

const projectData: Project[] = [
  {
    name: 'HierBridge',
    content: `
    ${chalk.cyan.bold('Overview:')}
    I am involved in the development of a ${chalk.magenta(
      'Voice of Employee'
    )} platform designed to enhance hierarchical transparency and improve social listening at the workplace.
    The platform leverages AI strategies like ${chalk.yellow(
      'Retrieval-Augmented Generation (RAG)'
    )} and ${chalk.yellow(
      'AI Agents'
    )} to provide data-driven insights. Through customer discovery interviews,
    we have identified key market challenges to shape the product effectively.
    Backed by ${chalk.green(
      "CMU's Project Olympus Program"
    )} and other professors, we're in pre-development, laser-focused on building a product that actually moves the needle.
    
    ${chalk.magenta.bold('Tech Stack (Planned):')} ${chalk.gray(
      'Nx, Node.js, Koa, Next.js, Mongo'
    )}
    
    ${chalk.blue.bold('Links:')}
    ${chalk.white('Website:')} ${chalk.cyan('https://hierbridge.com/')}
    ${chalk.white('LinkedIn:')} ${chalk.cyan(
      'https://www.linkedin.com/company/hierbridge'
    )}`,
  },
  {
    name: 'Bloom',
    content: `
    ${chalk.cyan.bold('Overview:')}
    I'm part of the team building Bloom, an edtech platform designed to make reading engaging for young learners—because reading should be more fun than frustrating.
    I've worked on crafting ${chalk.yellow(
      'complex, dynamic lessons'
    )} that adapt to different inputs, ensuring an interactive experience that keeps kids hooked. I also built the ${chalk.yellow(
      'admin portal'
    )} for
    content creation and data management, making life easier for educators. On the backend, I set up ${chalk.green(
      'CI pipelines'
    )} for testing and optimised and standardised the codebase for
    smoother development and long-term scalability.

    ${chalk.magenta.bold('Tech Stack:')} ${chalk.gray(
      'Nx, Node.js, Koa, React, Mongo'
    )}`,
  },
  {
    name: 'WorkHero',
    content: `
    ${chalk.cyan.bold('Overview:')}
    WorkHero pairs a fractional office manager with an LLM-powered platform, ensuring smooth workforce management, customer relations, and administrative operations.
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
    )} that verified actions, assessed accuracy, and maintained a scoring rubric to track performance.

    ${chalk.magenta.bold('Tech Stack:')} ${chalk.gray(
      'Nx, Node.js, Koa, React, Mongo'
    )}
    
    ${chalk.blue.bold('Links:')}
    ${chalk.white('Website:')} ${chalk.cyan('https://www.workhero.pro/')}`,
  },
  {
    name: 'Procedure',
    content: `
    ${chalk.cyan.bold('Overview:')}
    I worked on a range of internal apps. One of these was ${chalk.yellow(
      'Ragnarok'
    )}, an employee appreciation Slack bot that let colleagues give shoutouts and reward points.
    Built on ${chalk.green(
      'Frappe'
    )}, it extended ERPNext, our HR platform. I also helped redesign of the Procedure website, rebuilding it from the ground up with ${chalk.green(
      'Next.js and Tailwind CSS'
    )}.
    The new design introduced modern UI elements, improved structure, ensuring a sleek and engaging user experience.

    ${chalk.blue.bold('Links:')}
    ${chalk.white('Website:')} ${chalk.gray('(To be Hosted Soon)')}`,
  },
  {
    name: 'Terminal Portfolio',
    content: `
    ${chalk.cyan.bold('Overview:')}
    I created an interactive terminal-based portfolio. It allows users to navigate through my professional experiences, projects, and skills directly from the command line.

    ${chalk.magenta.bold('Tech Stack:')} ${chalk.gray(
      'Node.js, Inquirer, Chalk, Figlet'
    )}`,
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
  console.log(`
    ${chalk.cyan.bold('Project:')} ${chalk.yellow.bold(project)}`);

  const selectedProject = projectData.find((p) => p.name === project);
  if (selectedProject) {
    console.log(selectedProject.content + '\n');
  } else {
    console.log(chalk.red(`Unknown project: ${project}`));
  }
};
