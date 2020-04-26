const chalk = require('chalk')
const sleep = require('sleep');
const argv = require('minimist')(process.argv.slice(2))

function randomRGB() {
  const arrayRGB = Array.from({length: '3'}, () => Math.floor(Math.random() * 255))
  return arrayRGB.reduce((acc, cur, index) => (index === 2) ? acc + cur + ')' : acc + cur + ',', '(')
}

const age = argv.age

for(let i = 0; i <= age; i++){
  console.log(chalk`{rgb${ randomRGB() } ${ ' '.repeat(i) }${ (i === 0 || i === 1) ? i + 'an' : i + 'ans'} }`)
  sleep.msleep(Math.floor(1/(i+1)*1000))
}

console.log(chalk`{rgb${ randomRGB()} ${ ' '.repeat(age) } JOYEUX ANNIVERSAIRE ${ argv.name.toUpperCase() }!!!}`)

