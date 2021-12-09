const targetMoney = 1675.2
const end_date = new Date('12/19/2021 11:00 PM').getTime()

class Supporter {
  constructor(name, anonimous, value, msg, date) {
    this.name = name
    this.anonimous = anonimous
    this.value = value
    this.msg = msg
    this.date = date
  }
}

function getPercentageValue(value) {
  let percentage = (value / targetMoney) * 100.0
  return Math.round(percentage)
}

function updateProgressBar(progressBarTag, value) {
  percentage = getPercentageValue(value)
  if (percentage > 100) {
    progressBarTag.style.width = `100%`
    return
  }
  progressBarTag.style.width = `${percentage}%`
}

function updateRealValue(realValueTag, value) {
  value = Math.round(value)
  realValueTag.textContent = `R$ ${value},00`
}

function updatePercentageValue(percentageValueTag, value) {
  percentage = getPercentageValue(value)
  percentageValueTag.textContent = ` ${percentage}% `
}

function updateSupportersNumber(suporttersNumberTag, value) {
  suporttersNumberTag.textContent = `apoiado por ${value} pessoas`
}

function getSupportersData(supporters) {
  let value = 0
  for (const person in supporters) {
    value += supporters[person].value
  }

  return value
}

function updapteRemainTime(remainTimeTag) {
  let now = new Date().getTime()

  let x = setInterval(function () {
    let now = new Date().getTime()

    let distance = end_date - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    remainTimeTag.textContent = `${days} dias restantes`
  }, 1000)
}

function updateSupporterCards(supporterContainerTag, supporters) {
  for (const person in supporters) {
    const card = document.createElement('div')
    const quotation_simbol = document.createElement('div')
    quotation_simbol.classList.add('quotation')
    quotation_simbol.textContent = ' “ '
    card.classList.add('supporter_card')
    const card_name = document.createElement('span')
    card_name.classList.add('card_name')
    const card_msg = document.createElement('p')
    const em_tag = document.createElement('em')
    card_msg.append(em_tag)
    const card_info = document.createElement('div')
    card_info.classList.add('card_info')
    const card_value = document.createElement('span')
    card_value.classList.add('card_value')
    const card_date = document.createElement('span')
    card_date.classList.add('card_date')

    if (supporters[person].anonimous === true) {
      card_name.textContent = `Anônimo`
    } else {
      card_name.textContent = `${supporters[person].name}`
    }
    card_date.textContent = `${supporters[person].date}`
    em_tag.textContent = `${supporters[person].msg}`
    card_value.textContent = `R$ ${supporters[person].value},00`

    card.append(quotation_simbol, card_msg, card_name, card_info)
    card_info.append(card_value, card_date)
    supporterContainerTag.append(card)
  }
}

let colaborationArray = []

// let person1 = new Supporter(
//   'Pedro Xavier',
//   false,
//   100,
//   'Uma iniciativa dessa não poderia deixar de apoiar!',
//   '07/12/21'
// )
// colaborationArray.push(person1)

// let person2 = new Supporter('Vivia Paim', false, 20, 'Parabéns', '05/12/21')
// colaborationArray.push(person2)

// let person3 = new Supporter('Jorge', true, 00, '', '13/12/21')
// colaborationArray.push(person3)

// let person4 = new Supporter('Clara', false, 10, '', '03/12/21')
// colaborationArray.push(person4)

const progressBarTag = document.querySelector('#progress_fill')
const realValueTag = document.querySelector('#real_value')
const percentageValueTag = document.querySelector('#percentage_value')
const supporterNumberTag = document.querySelector('#suportters_number')
const remainTimerTag = document.querySelector('#remain_time')
const cardContainer = document.querySelector('.supporters_container')

let value = getSupportersData(colaborationArray)
updateProgressBar(progressBarTag, value)
updateRealValue(realValueTag, value)
updatePercentageValue(percentageValueTag, value)
updateSupportersNumber(supporterNumberTag, colaborationArray.length)
updapteRemainTime(remainTimerTag)
updateSupporterCards(cardContainer, colaborationArray)
