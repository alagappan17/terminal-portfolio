import chalk from 'chalk';

export const about = () => {
  console.log(`
    ${chalk.cyan.bold('About Me')}
    Howdy! I'm Alagappan, a ${chalk.green(
      'Full Stack Engineer'
    )}, based out of ${chalk.yellow(
    'Hyderabad'
  )} with a passion for ${chalk.magenta('design')}, ${chalk.magenta(
    'development'
  )} and ${chalk.magenta('digital art')}. 
    Back in school, I eagerly looked forward to my computer lab sessions, only to rush off to art class right after.
    These interests have strongly shaped my career as I found programming to be the right blend of my creative and logical personas.
  
    Beyond building applications, I'm also a ${chalk.magenta(
      '3D Digital Artist'
    )}—a passion that started as a hobby during the pandemic 
    and has grown into a dedicated craft. In the art community, I go by ${chalk.cyan(
      'skidrrow'
    )}. Use the command ${chalk.yellow('art')} to view my art portfolio.
    `);
};
