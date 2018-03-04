const program = require('commander')
const { add } = require('./lib/commands')
const { errorCode } = require('./lib/constants')

program
  .usage('-t <title> -c <content> -n <name>')
  .description('add a memo')
  .option('-t, --title <title>', 'the title of memo')
  .option('-c, --content <content>', 'the content of memo')
  .option('-n, --name <name>', 'the name of memo')
  .parse(process.argv)

try {
  add(program.title, program.content, program.name)
} catch (err) {
  if (err.message === errorCode.HaveMemo) console.log(err.message)
  else console.log(err)
}
