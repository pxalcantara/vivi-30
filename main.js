const targetMoney = 50

class Supporter {
  constructor(name, anonimous, value) {
    this.name = name
    this.anonimous = anonimous
    this.value = value
  }
}

function getPercentageValue(value) {
  let percentage = (value / targetMoney) * 100.0
  return percentage
}

function updateProgressBar(progressBarTag, value) {
  percentage = getPercentageValue(value)
  progressBarTag.style.width = `${percentage}%`
}

function updateRealValue(realValueTag, value) {
  value = Math.round(value)
  realValueTag.textContent = `R$ ${value},00`
}

function updatePercentageValue(percentageValueTag, value) {
  percentage = getPercentageValue(value)
  percentageValueTag.textContent = `(${percentage}% alcançado)`
}

function updateSupportersNumber(suporttersNumberTag, value) {
  suporttersNumberTag.textContent = `${value} apoiadores`
}

function getSupportersData(supporters) {
  let value = 0
  for (const person in supporters) {
    value += supporters[person].value
  }

  console.log(value)
  return value
}

let colaborationArray = []

let person1 = new Supporter('Carlos Jr', false, 25)
colaborationArray.push(person1)

let person2 = new Supporter('Juan X', false, 0)
colaborationArray.push(person2)

let person3 = new Supporter('Jorge', false, 20)
colaborationArray.push(person3)

const progressBarTag = document.querySelector('#progress_fill')
const realValueTag = document.querySelector('#real_value')
const percentageValueTag = document.querySelector('#percentage_value')
const supporterNumberTag = document.querySelector('#suportters_number')

let value = getSupportersData(colaborationArray)
updateProgressBar(progressBarTag, 25)
updateRealValue(realValueTag, value)
updatePercentageValue(percentageValueTag, value)
updateSupportersNumber(supporterNumberTag, colaborationArray.length)
