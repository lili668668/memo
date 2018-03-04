const program = require('commander')
const { show } = require('./lib/commands')
const memo = require('./lib/memo')
const { errorCode } = require('./lib/constants')

program
  .description('show memos, default show all memos')
  .parse(process.argv)

const names = program.args

let memos
try {
  memos = memo.getMemos()
} catch (err) {
  if (err.message === errorCode.NoMemos) process.exit(1)
  else console.log(err)
}

if (names.length === 0) {
  memos.forEach(memo => show(memo))
} else {
  names.forEach((name) => {
    const sm = memos.find(memo => memo.name === name)
    if (sm) show(sm)
    else console.log(`No ${name} memo.`)
  })
}
