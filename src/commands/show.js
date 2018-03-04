const jfs = require('jfs')
const fs = require('fs')
const { show, constants } = require('../lib')

module.exports = (name) => {
  if (!fs.existsSync(constants.memoStoreFile)) return 
  const store = new jfs(constants.memoStoreFile)
  const memos = store.getSync('memos')
  if (name.length === 0) {
    memos.forEach(memo => show(memo))
  } else {
    name.forEach((n) => {
      const sm = memos.find(memo => memo.name === n)
      if (sm) show(sm)
      else console.log(`No ${n} memo.`)
    })
  }
}
