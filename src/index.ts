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
  message,
} from './commands/index.js';

import { initialize } from './axios.js';
import { config } from './config.js';

// Initialize with config that was built at build time
initialize(config);

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
  chalk.blue(
    ` Type ${chalk.yellow.bold('help')} to see all available commands.\n`
  )
);

console.log(
  chalk.magenta(
    ` Use ${chalk.yellow.bold(
      'ask'
    )} to query Tess (my AI assistant) anything about me, my Spotify activity, GitHub statistics, or even send me a message.\n` +
      ' Examples:\n' +
      "   ask what's playing on Spotify now?\n" +
      '   ask What are your top coding languages?\n' +
      '   ask Where does he want to travel next?\n' +
      '   ask Send a message - Who thought it was a good idea to put my stapler in Jello? – Dwight Schrute – dwight@dundermifflin.com\n' +
      '   ask Give me a dad joke\n'
  )
);

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
      case 'message':
        await message();
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
  ${chalk.blue(
    'Use one of the following commands to interact with the console'
  )}
  ${chalk.yellow('Available Commands:')}
  - about       ${chalk.gray('Learn more about me')}
  - projects    ${chalk.gray('View my projects')}
  - exp         ${chalk.gray('View my work and education history')}
  - art         ${chalk.gray('View my art profiles')}
  - connect     ${chalk.gray('Connect with me')}
  - ask <query> ${chalk.gray('Ask a question about me to Tess')}
  - message     ${chalk.gray('Send me a message')}
  - exit        ${chalk.gray('Exit the CLI')}
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
