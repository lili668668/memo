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
    console.log(chalk[constants.chalkSet.titleColor](data))
    console.log(chalk[constants.chalkSet.textColor](boxen(memo.text, { padding: constants.boxenSet.padding, borderStyle: constants.boxenSet.style })))
  })
}
