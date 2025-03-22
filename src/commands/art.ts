import chalk from 'chalk';

export const art = () => {
  console.log(`
  ${chalk.cyan.bold('Digital Art Portfolio')}
  ${chalk.white(`I'm ${chalk.yellow(
    'skidrrow'
  )}, a passionate 3D artist. I started learning 3D as a hobby during the pandemic,
  and it quickly turned into more than just a hobby. Since then, I've been creating ${chalk.yellow(
    '3D illustrations'
  )} and ${chalk.yellow('animations')}, 
  working with a variety of clients as a side hustle. I particularly enjoy working on ${chalk.green(
    'abstract'
  )} and ${chalk.green('product animations')}.`)}

  ${chalk.magenta.bold(
    `Clientele: ${chalk.gray(
      'OnePlus, Voiceless Tales, StreetJutsu, Cloudy Sharks'
    )}`
  )}

  ${chalk.blue.bold('Connect:')}
  ${chalk.white('Email     :')} ${chalk.cyan('skidrrowforwork@gmail.com')}
  ${chalk.white('Behance   :')} ${chalk.cyan(
    'https://www.behance.net/alagappann'
  )}
  ${chalk.white('Instagram :')} ${chalk.cyan(
    'https://www.instagram.com/skidrrow'
  )}
  ${chalk.white('ArtGrab   :')} ${chalk.cyan('https://artgrab.co/art/skidrow')}
  `);
};
