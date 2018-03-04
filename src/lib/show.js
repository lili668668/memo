const boxen = require('boxen')
const figlet = require('figlet')
const chalk = require('chalk')
const constants= require('./constants.json')

module.exports = (memo) => {
  const memoContant = `${chalk[constants.chalkSet.titleColor].bold(memo.title)} \n ${chalk[constants.chalkSet.contentColor](memo.content)}`
  console.log(boxen(memoContant, { 
    padding: constants.boxenSet.padding, 
    borderStyle: constants.boxenSet.style, 
    borderColor: constants.boxenSet.color, 
    align: constants.boxenSet.align,
    float: constants.boxenSet.float,
  }))
}
