const { errorCode } = require('../constants')
const { getMemos, setMemos } = require('../memo')

module.exports = (title, content, name) => {
  let memos
  try {
    memos = getMemos()
  } catch (err) {
    if (err.message === errorCode.NoMemos) {
      setMemos([])
      memos = getMemos()
    } else {
      throw err
    }
  }
  if (memos.find(memo => memo.name === name)) throw new Error(errorCode.HaveMemo)
  const newMemo = {
    name,
    title,
    content,
  }
  memos = memos.concat(newMemo)
  setMemos(memos)
}
