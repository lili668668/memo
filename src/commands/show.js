const jfs = require('jfs')
const fs = require('fs')
const { show, constants } = require('../lib')

module.exports = (name) => {
  if (!fs.existsSync(constants.memoStoreFile)) return 
  const store = new jfs(constants.memoStoreFile)
  const memos = store.getSync('memos')
  if (!name) memos.forEach(memo => show(memo))
  else show(memos.find(memo => memo.name === name))
}
