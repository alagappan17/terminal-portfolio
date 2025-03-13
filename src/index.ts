#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';

// Display welcome message
console.log(
  chalk.green(
    figlet.textSync("Hey! I'm Alagappan.", {
      horizontalLayout: 'full',
      font: 'Small',
    })
  )
);

// Add bio and instructions
console.log(
  chalk.cyan(
    '\nSoftware Engineer passionate about building innovative solutions and creating impactful applications.'
  )
);
console.log(chalk.cyan('Currently working as a SDE1 at Procedure.\n'));

console.log(chalk.white('Use commands to explore more information about me.'));
console.log(chalk.blue("Type 'help' to see all available commands.\n"));

// Start interactive mode
const startInteractiveMode = async () => {
  let running = true;

  while (running) {
    const { command } = await inquirer.prompt([
      {
        type: 'input',
        name: 'command',
        message: 'Enter a command:',
      },
    ]);

    switch (command.trim().toLowerCase()) {
      case 'help':
        help();
        break;
      case 'profile':
        profile();
        break;
      case 'projects':
        projects();
        break;
      case 'about':
        about();
        break;
      case 'art':
        art();
        break;
      case 'social':
        social();
        break;
      case 'exit':
        running = false;
        exit();
        break;
      case '':
        // Do nothing for empty input
        break;
      default:
        console.log(chalk.yellow(`Unknown command: ${command}`));
        console.log(chalk.blue("Type 'help' to see available commands"));
    }
  }
};

const help = () => {
  console.log(`
    ${chalk.yellow('Available Commands:')}
    - about     ${chalk.gray('Learn more about me')}
    - profile   ${chalk.gray('View profile info')}
    - projects  ${chalk.gray('View a list of projects')}
    - art       ${chalk.gray('View my art profiles')}
    - social    ${chalk.gray('View my social media profiles')}
    - exit      ${chalk.gray('Exit the CLI')}
  `);
};

const exit = () => {
  console.log(
    chalk.red(`
    Goodbye! Thank you for using my CLI!`)
  );
  social();
};

const profile = () => {
  console.log(`
    ${chalk.cyan('My Profile')}
    Name: Alagappan N
    Role: Software Engineer
    Location: Hyderabad, Telangana, India
    Email: alagappaforwork@gmail.com
  `);
};

const projects = async () => {
  console.log(`${chalk.cyan('Projects')}`);

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'project',
      message: 'Select a project to view details:',
      choices: [
        'Bloom',
        'HierBridge',
        'WorkHero',
        'Procedure',
        'Terminal Portfolio',
      ],
    },
  ]);

  projectDetails(answers.project);
};

const projectDetails = (project: string) => {
  console.log(`
      ${chalk.cyan.bold(project)}`);
  switch (project) {
    case 'HierBridge':
      console.log(`
      I am leading the development of a Voice of Employee platform designed to enhance hierarchical transparency and improve workplace decision-making.
      The platform leverages AI strategies like Retrieval-Augmented Generation (RAG) and AI Agents to provide data-driven insights. Through customer discovery interviews,
      I have identified key market challenges to shape the product effectively.
      Backed by CMU's Project Olympus and other esteemed professors, we're in pre-development, laser-focused on building a product that actually moves the needle.

      ${chalk.yellow('Website:')} https://hierbridge.com/
      ${chalk.blue('LinkedIn:')} https://www.linkedin.com/company/hierbridge
      ${chalk.magenta('Tech Stack (Planned):')} Nx, Node.js, Koa, Next.js, Mongo
      `);
      break;
    case 'Bloom':
      console.log(`
      I'm part of the team building Bloom, an edtech platform designed to make reading engaging for young learners—because reading should be more fun than frustrating.
      I've worked on crafting complex, dynamic lessons that adapt to different inputs, ensuring an interactive experience that keeps kids hooked. I also built the admin portal for
      content creation and data management, making life easier for educators. On the backend, I set up CI pipelines for testing and optimised and standardised the codebase for
      smoother development and long-term scalability.

      ${chalk.magenta('Tech Stack:')} Nx, Node.js, Koa, React, Mongo
      `);
      break;
    case 'WorkHero':
      console.log(`
      WorkHero pairs a fractional office manager with an LLM-powered platform, ensuring smooth workforce management, customer relations, and administrative operations.
      I built an automated agent testing framework from scratch, designed to evaluate multiple AI agents operating across different LLMs (Claude, Grok, Llama, GPT, etc.).
      These agents handled everything from customer interactions to task management, making rigorous testing essential. The framework introduced a modular design,
      allowing new test executors for evolving tasks. I also developed an AI Test Agent that verified actions, assessed accuracy, and maintained a scoring rubric to track performance.

      ${chalk.yellow('Website:')} https://www.workhero.pro/
      ${chalk.magenta('Tech Stack:')} Nx, Node.js, Koa, React, Mongo
      `);
      break;
    case 'Procedure':
      console.log(`
      I worked on a range of internal apps. One of these was Ragnarok, an employee appreciation Slack bot that let colleagues give shoutouts and reward points.
      Built on Frappe, it extended ERPNext, our HR platform. I also helped redesign of the Procedure website, rebuilding it from the ground up with Next.js and Tailwind CSS.
      The new design introduced modern UI elements, improved structure, ensuring a sleek and engaging user experience.

      ${chalk.yellow('Website:')} (To be Hosted Soon)
      `);
      break;
    case 'Terminal Portfolio':
      console.log(`
      I created an interactive terminal-based portfolio. It allows users to navigate through my professional experiences, projects, and skills directly from the command line.
      The portfolio is designed to be both functional and engaging, providing a novel way to showcase my work.
      
      This was an experiment to see how well I can leverage AI code editors to their full potential.
      
      ${chalk.magenta('Tech Stack:')} Node.js, Inquirer, Chalk
      `);
      break;
    default:
      console.log(chalk.yellow(`Unknown project: ${project}`));
  }
};

const about = () => {
  console.log(`
    ${chalk.cyan('About Me')}
    Howdy! I'm Alagappan, a ${chalk.green(
      'full-stack engineer'
    )} with a passion for design, development and digital art. 
    Back in school, I eagerly looked forward to my computer lab sessions, only to rush off to art class right after.
    These interest have strongly shaped my career as I found programming to be the right blend of my creative and logical personas.

    Beyond building applications, I'm also a ${chalk.magenta(
      '3D digital artist'
    )}—a passion that started as a hobby during the pandemic 
    and has grown into a dedicated craft. In the art community, I go by ${chalk.blue(
      'skidrrow'
    )}. Use the command ${chalk.yellow('art')} to view my art portfolio.
    `);
};

const art = () => {
  console.log(`
    ${chalk.cyan('Art Profiles')} ${chalk.gray('(@skidrrow)')}
    ${chalk.gray('Feel free to follow and reach out for collaborations!')}
    
    ${chalk.magenta('Instagram:')} https://instagram.com/skidrrow
    ${chalk.blue('Behance:')}   https://behance.net/alagappann
    ${chalk.yellow('ArtGrab:')}  https://artgrab.co/art/skidrow
    ${chalk.red(
      'YouTube:'
    )}  https://www.youtube.com/channel/UCajdq0CHzumeh7QQi-d0l4w
    ${chalk.cyan('Email:')} skidrrowforwork@gmail.com
    `);
};

const social = () => {
  console.log(`
    ${chalk.cyan('Connect with me')}
    ${chalk.gray("Let's stay in touch!")}
    
    ${chalk.green('GitHub:')} https://github.com/alagappan17
    ${chalk.blue('LinkedIn:')} https://linkedin.com/in/alagappan-n
    ${chalk.gray('Twitter (X):')}  https://x.com/alagappantwt
    ${chalk.cyan('Email:')}    alagappaforwork@gmail.com
    `);
};

// Start the interactive mode immediately
startInteractiveMode();
