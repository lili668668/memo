const boxen = require('boxen')
const figlet = require('figlet')
const chalk = require('chalk')
const constants= require('./constants.json')

module.exports = (memo) => {
  figlet(memo.title, (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    const memoContant = `${chalk[constants.chalkSet.titleColor](data)} \n ${chalk[constants.chalkSet.textColor](memo.text)}`
    console.log()
    console.log(boxen(memoContant, { 
      padding: constants.boxenSet.padding, 
      borderStyle: constants.boxenSet.style, 
      borderColor: constants.boxenSet.color, 
      align: constants.boxenSet.align,
      float: constants.boxenSet.float,
    }))
  })
}
