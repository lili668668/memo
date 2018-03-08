const program = require('commander')

program
  .version('1.0.0')
  .usage('[command] [options]')
  .command('show [memoName...]', 'show memos, default show all memos').alias('s')
  .command('add', 'add a memo').alias('a')
  .command('remove <memoName> [otherMemoName...]', 'remove memos').alias('rm')
  
program.parse(process.argv)

if (program.args.length === 0) {
  program.help()
}

