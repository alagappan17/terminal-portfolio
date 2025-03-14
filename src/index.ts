#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';

import { art, experience, projects, connect, about } from './commands';

// Display welcome message
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
  chalk.yellow('\nUse commands to explore more information about me.')
);
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

// Start the interactive mode immediately
startInteractiveMode();
