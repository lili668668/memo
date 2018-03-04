const jfs = require('jfs')
const fs = require('fs')
const { path, errorCode } = require('../constants')

module.exports = (memos) => {
  const store = new jfs(path.memoStoreFile, { pretty: true })
  return store.saveSync("memos", memos)
}
