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
  let kitsNumer = Math.round(value / 55.84)
  percentageValueTag.textContent = ` ${percentage}% - ${kitsNumer} cestas doadas `
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
    if (supporters[person].anonimous === true) {
      continue
    }
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

    card_name.textContent = `${supporters[person].name}`
    card_date.textContent = `${supporters[person].date}`
    em_tag.textContent = `${supporters[person].msg}`
    card_value.textContent = `R$ ${supporters[person].value},00`

    card.append(quotation_simbol, card_msg, card_name, card_info)
    card_info.append(card_value, card_date)
    supporterContainerTag.append(card)
  }
}

let colaborationArray = []

//  ===== Doações ================
let person1 = new Supporter(
  'Pedro Xavier',
  false,
  100,
  'Uma iniciativa dessa não poderia deixar de apoiar!',
  '09/12/21'
)
colaborationArray.push(person1)

let person2 = new Supporter(
  'José Messias',
  false,
  100,
  'Feliz 15 + 15!',
  '09/12/21'
)
colaborationArray.push(person2)

let person3 = new Supporter(
  'Fátima Sueli',
  false,
  200,
  'Adorei a iniciativa, parabéns!',
  '09/12/21'
)
colaborationArray.push(person3)

let person4 = new Supporter('Amanda Fechine', false, 80, '', '09/12/21')
colaborationArray.push(person4)

let person5 = new Supporter(
  'Samir Fortunato',
  false,
  500,
  'Lindona, que iniciativa massa, parabéns!',
  '09/12/21'
)
colaborationArray.push(person5)

let person6 = new Supporter('Raimundo Alcides', false, 200, '', '09/12/21')
colaborationArray.push(person6)

let person7 = new Supporter(
  'Kevin Oliveira',
  false,
  50,
  'Parabéns!',
  '09/12/21'
)
colaborationArray.push(person7)

let person8 = new Supporter(
  'Humberto e Margareth Alcantara',
  false,
  200,
  '',
  '09/12/21'
)
colaborationArray.push(person8)

let person9 = new Supporter(
  'Lea Lopes',
  false,
  80,
  'Foi através de Thais que fiquei sabendo de sua iniciativa. Achei muito massa e quis colaborar também. Espero que dobre a meta!',
  '09/12/21'
)
colaborationArray.push(person9)

let person10 = new Supporter(
  'Felipe Brayner',
  false,
  80,
  'Parabéns pelo aniversário e iniciativa.',
  '10/12/21'
)
colaborationArray.push(person10)

let person11 = new Supporter(
  'Nilton Rangel',
  false,
  300,
  'Adorei a idéia.',
  '10/12/21'
)
colaborationArray.push(person11)

let person12 = new Supporter(
  'Rafael Saback',
  false,
  200,
  'Feliz aniversário Vivis e parabéns pela boa ação.',
  '11/12/21'
)
colaborationArray.push(person12)

let person13 = new Supporter(
  'David Pires',
  false,
  101,
  'Sempre mais do que Juninho',
  '11/12/21'
)
colaborationArray.push(person13)

let person14 = new Supporter(
  'Luiz Olympio',
  false,
  320,
  'Orgulho do papai',
  '09/12/21'
)
colaborationArray.push(person14)

let person15 = new Supporter(
  'Jonilda Conceição',
  false,
  100,
  'Orgulho da mamãe',
  '09/12/21'
)
colaborationArray.push(person15)

let person16 = new Supporter('', true, 100, '', '09/12/21')
colaborationArray.push(person16)

let person17 = new Supporter('', true, 100, '', '09/12/21')
colaborationArray.push(person17)

// ===================================================

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
