const program = require('commander')
const jfs = require('jfs')
const fs = require('fs')
const { show, constants } = require('./lib')

program
  .description('show memos, default show all memos')
  .parse(process.argv)

const names = program.args

if (!fs.existsSync(constants.memoStoreFile)) process.exit(1)
const store = new jfs(constants.memoStoreFile)
const memos = store.getSync('memos')
if (names.length === 0) {
  memos.forEach(memo => show(memo))
} else {
  names.forEach((name) => {
    const sm = memos.find(memo => memo.name === name)
    if (sm) show(sm)
    else console.log(`No ${name} memo.`)
  })
}
