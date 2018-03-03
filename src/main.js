const program = require('commander')
const commands = require('./commands')

module.exports = (argv) => {
  program
    .version('1.0.0')
    .usage('[command] [options]')

  program
    .command('show [memo name]')
    .description('show all memo')
    .action((name) => commands.show(name))

  program.parse(argv)
}

