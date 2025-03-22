import chalk from 'chalk';

export const connect = () => {
  console.log(`
  ${chalk.cyan.bold('Connect With Me')}
  ${chalk.white(
    "Let's stay in touch! Feel free to reach out through any of these platforms."
  )}

  ${chalk.blue.bold('Social:')}
  ${chalk.white('LinkedIn  :')} ${chalk.cyan(
    'https://linkedin.com/in/alagappan-n'
  )}
  ${chalk.white('GitHub    :')} ${chalk.cyan('https://github.com/alagappan17')}
  ${chalk.white('X         :')} ${chalk.cyan('https://x.com/alagappantwt')}
  ${chalk.white('Medium    :')} ${chalk.cyan(
    'https://medium.com/@alagappan.dev'
  )}

  ${chalk.magenta.bold('Contact:')}
  ${chalk.white('Email     :')} ${chalk.cyan('alagappanforwork@gmail.com')}
  `);
};
