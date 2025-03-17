import chalk from 'chalk';
import client from '../axios';

export const ask = async (question: string) => {
  if (!question) {
    console.log(
      chalk.yellow('Please provide a question after the ask command.')
    );
    console.log(chalk.gray('Example: ask What is your name?'));
    return;
  }

  try {
    console.log(chalk.cyan('You:'), chalk.white(question));
    const response = await client.post('/query', {
      query: question,
    });
    console.log(chalk.green('Tess:'), chalk.white(response.data.message));
  } catch (error) {
    console.log(error);
  }
};
