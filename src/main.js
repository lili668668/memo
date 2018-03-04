const program = require('commander')
const commands = require('./commands')

module.exports = (argv) => {
  program
    .version('1.0.0')
    .usage('[command] [options]')

  program
    .command('show [memoName...]')
    .alias('s')
    .description('show all memo')
    .action((name) => commands.show(name))

  program
    .command('add [memoName]')
    .alias('a')
    .option('-t, --title', 'the title of memo')
    .option('-c, --content', 'the content of memo')
    .description('add new memo')

  program
    .command('*')
    .action((env) => {
      console.log(`There are no ${env} command, please check -h.`)
    })

  program.parse(argv)
}

