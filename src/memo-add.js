const program = require('commander')

program
  .usage('-t <title> -c <content> -n <name>')
  .description('add a memo')
  .option('-t, --title <title>', 'the title of memo, it need to be English')
  .option('-c, --content <content>', 'the content of memo, it can be any language')
  .option('-n, --name <name>', 'the name of memo')
  .parse(process.argv)

console.log(program.title)
console.log(program.content)
console.log(program.name)
console.log(program.args)
