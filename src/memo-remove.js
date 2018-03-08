const program = require('commander')
const { remove } = require('./lib/commands')
const memo = require('./lib/memo')
const { errorCode } = require('./lib/constants')

program
  .description('remove memos')
  .parse(process.argv)

const names = program.args

if (names.length === 0) {
  console.log('No memo name to delete.')
  process.exit(1)
}

let memos
try {
  memos = memo.getMemos()
} catch (err) {
  if (err.message === errorCode.NoMemos) {
    console.log('No memos to delete.')
    process.exit(1)
  }
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
