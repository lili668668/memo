const program = require('commander')

program
  .version('1.0.0')
  .usage('[command] [options]')
  .command('show [memoName...]', 'show memos, default show all memos').alias('s')
  
program.parse(process.argv)

