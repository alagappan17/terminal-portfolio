import chalk from 'chalk';
import inquirer from 'inquirer';
import client from '../axios.js';

const validateEmail = (email: string): boolean => {
  if (!email) return true; // Empty email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const message = async () => {
  // Ask for name first
  const { name } = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter your name (optional, press Enter to skip):',
    },
  ]);

  // Then ask for email
  let email = '';
  let isValidEmail = false;

  while (!isValidEmail) {
    const { input } = await inquirer.prompt([
      {
        type: 'input',
        name: 'input',
        message: 'Enter your email (optional, press Enter to skip):',
      },
    ]);

    if (input.toLowerCase() === 'quit') {
      console.log(chalk.yellow('\n  Message command cancelled.\n'));
      return;
    }

    if (validateEmail(input)) {
      email = input;
      isValidEmail = true;
    } else {
      console.log(
        chalk.red(
          '\n  Please enter a valid email address or press Enter to skip.\n'
        )
      );
    }
  }

  // Finally ask for message
  let message = '';
  let isValidMessage = false;

  while (!isValidMessage) {
    const { input } = await inquirer.prompt([
      {
        type: 'input',
        name: 'input',
        message: 'Enter your message (type "quit" to cancel):',
      },
    ]);

    const trimmedInput = input.trim();

    if (trimmedInput.toLowerCase() === 'quit') {
      console.log(chalk.yellow('\n  Message command cancelled.\n'));
      return;
    }

    if (trimmedInput !== '') {
      message = trimmedInput;
      isValidMessage = true;
    } else {
      console.log(
        chalk.red('\n  Please enter a message or type "quit" to cancel.\n')
      );
    }
  }

  try {
    await client.post('/message', {
      name: name.trim() || undefined,
      email: email || undefined,
      message,
    });
    console.log(chalk.green('\n  Message sent successfully!\n'));
  } catch (error) {
    console.log(
      chalk.red('\n  Failed to send message. Please try again later.\n')
    );
  }
};
