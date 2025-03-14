#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';

import {
  art,
  experience,
  projects,
  connect,
  about,
  ask,
} from './commands/index.js';

import { initialize } from './axios';

initialize({
  api: {
    url: process.env.API_URL || 'http://localhost:3000',
  },
});

console.log(
  chalk.green(
    figlet.textSync("Hey! I'm Alagappan.", {
      horizontalLayout: 'full',
      font: 'Small',
    })
  )
);

console.log(
  chalk.cyan(`
 An engineer who speaks fluent TypeScript, negotiates with AI, and occasionally debugs reality.
 Welcome to my terminal-portfolio because fancy UI is overated.\n`)
);

console.log(
  chalk.magenta(" Use 'ask' to inquire Tess (my AI assistant) about me.")
);
console.log(chalk.blue(" Type 'help' to see all available commands.\n"));

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

    switch (command.trim().toLowerCase().split(' ')[0]) {
      case 'help':
        help();
        break;
      case 'projects':
        await projects();
        break;
      case 'about':
        about();
        break;
      case 'art':
        art();
        break;
      case 'connect':
        connect();
        break;
      case 'exp':
        await experience();
        break;
      case 'ask':
        const question = command.trim().substring(4).trim();
        await ask(question);
        break;
      case 'exit':
        running = false;
        exit();
        break;
      default:
        console.log(chalk.yellow(`    Unknown command: ${command}`));
        console.log(chalk.blue("    Type 'help' to see available commands"));
    }
  }
};

const help = () => {
  console.log(`
    ${chalk.yellow('Available Commands:')}
    - about     ${chalk.gray('Learn more about me')}
    - projects  ${chalk.gray('View my projects')}
    - exp       ${chalk.gray('View my work and education history')}
    - art       ${chalk.gray('View my art profiles')}
    - connect   ${chalk.gray('Connect with me')}
    - ask       ${chalk.gray('Ask a question about me to Tess')}
    - exit      ${chalk.gray('Exit the CLI')}
`);
};

const exit = () => {
  console.log(
    chalk.green(`
    Goodbye! Thank you for using my CLI!`)
  );
  connect();
};

startInteractiveMode();
