const program = require('commander')

program
  .usage('-t [title] -c [content]')
  .description('add a memo')
  .option('-t, --title', 'the title of memo, it need to be English')
  .option('-c, --content', 'the content of memo, it can be any language')

program.parse(process.argv)

console.log(program.title)
console.log(program.content)
