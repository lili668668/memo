const program = require('commander')
const commands = require('./commands')

module.exports = (argv) => {
  program
    .version('1.0.0')
    .usage('[command] [options]')

  program
    .command('show [memo_name]')
    .alias('s')
    .description('show all memo')
    .action((name) => commands.show(name))

  program
    .command('*')
    .action((env) => {
      console.log(`There are no ${env} command, please check -h.`)
    })

  program.parse(argv)
}

