import chalk from 'chalk';
import client from '../axios.js';

export const ask = async (question: string) => {
  if (!question) {
    console.log(
      chalk.yellow('Please provide a question after the ask command.')
    );
    console.log(chalk.gray('Example: ask What is your name?'));
    return;
  }

  try {
    console.log(
      chalk.blue(
        '\nNote: Tess is still experimental and might not always give the right answers.'
      )
    );

    console.log(chalk.cyan('\nYou:'), chalk.white(question));
    console.log(chalk.green('Tess:'), chalk.gray('thinking...'));
    const response = await client.post('/query', {
      query: question,
    });
    // Clear the previous line
    process.stdout.moveCursor(0, -1);
    process.stdout.clearLine(1);
    console.log(chalk.green('Tess:'), chalk.white(response.data.message));
  } catch (error) {
    console.log(
      chalk.red(
        'Error - Unable to connect to the server. Please try again later.'
      )
    );
  }
};
