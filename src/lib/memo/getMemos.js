const jfs = require('jfs')
const fs = require('fs')
const { path, errorCode } = require('../constants')

module.exports = () => {
  if (!fs.existsSync(path.memoStoreFile)) throw new Error(errorCode.NoMemos)
  const store = new jfs(path.memoStoreFile)
  return store.getSync('memos')
}
