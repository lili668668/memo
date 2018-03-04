const boxen = require('boxen')
const figlet = require('figlet')
const chalk = require('chalk')
const { style } = require('../constants')

module.exports = (memo) => {
  const memoContant = `${chalk[style.chalkSet.titleColor].bold(memo.title)} \n ${chalk[style.chalkSet.contentColor](memo.content)}`
  console.log(boxen(memoContant, { 
    padding: style.boxenSet.padding, 
    borderStyle: style.boxenSet.style, 
    borderColor: style.boxenSet.color, 
    align: style.boxenSet.align,
    float: style.boxenSet.float,
  }))
}
