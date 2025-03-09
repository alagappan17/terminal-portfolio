#!/usr/bin/env node

import chalk from 'chalk'
import inquirer from 'inquirer'
import figlet from 'figlet'

// Display welcome message
console.log(
  chalk.green(
    figlet.textSync("Hey! I'm Alagappan.", {
      horizontalLayout: 'full',
      font: 'Small',
    })
  )
)

// Add bio and instructions
console.log(
  chalk.cyan(
    '\nSoftware Engineer passionate about building innovative solutions and creating impactful applications.'
  )
)
console.log(
  chalk.cyan(
    'Currently working in Hyderabad, specializing in full-stack development.\n'
  )
)

console.log(chalk.white('Use commands to explore more information about me.'))
console.log(chalk.blue("Type 'help' to see all available commands.\n"))

// Start interactive mode
const startInteractiveMode = async () => {
  let running = true

  while (running) {
    const { command } = await inquirer.prompt([
      {
        type: 'input',
        name: 'command',
        message: 'Enter a command:',
      },
    ])

    switch (command.trim().toLowerCase()) {
      case 'help':
        console.log(`
    ${chalk.yellow('Available Commands:')}
    - profile   ${chalk.gray('View profile info')}
    - projects  ${chalk.gray('View a list of projects')}
    - exit      ${chalk.gray('Exit the CLI')}
  `)
        break
      case 'profile':
        console.log(`
    ${chalk.cyan('Your Profile')}
    Name: Alagappan N
    Role: Software Engineer
    Location: Hyderabad, Telangana, India
    GitHub: https://github.com/alagappan1703
  `)
        break
      case 'projects':
        const answers = await inquirer.prompt([
          {
            type: 'list',
            name: 'project',
            message: 'Select a project to view details:',
            choices: ['Project A', 'Project B', 'Project C'],
          },
        ])

        console.log(chalk.magenta(`\nYou selected: ${answers.project}\n`))
        break
      case 'exit':
        running = false
        console.log(chalk.red('Goodbye!'))
        break
      case '':
        // Do nothing for empty input
        break
      default:
        console.log(chalk.yellow(`Unknown command: ${command}`))
        console.log(chalk.blue("Type 'help' to see available commands"))
    }
  }
}

// Start the interactive mode immediately
startInteractiveMode()
