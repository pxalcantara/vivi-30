class Supporter {
  constructor(name, anonimous, value) {
    this.name = name
    this.anonimous = anonimous
    this.value = value
  }
}

function updateProgressBar(progressBar, value) {
  value = Math.round(value)
  progressBar.style.width = `${value}%`
}

function updateRealValue(valueTarget, value) {
  value = Math.round(value)
  valueTarget.textContent = `R$ ${value},00`
}

function getSupportersData(supporters) {
  let value = 0
  for (const person in supporters) {
    value += supporters[person].value
  }

  console.log(value)
  return value
}

let colaboration_array = []

let person1 = new Supporter('Carlos Jr', false, 30)
colaboration_array.push(person1)

let person2 = new Supporter('Juan X', false, 50)
colaboration_array.push(person2)

const valueProgressBar = document.querySelector('#progress_fill')
const realValue = document.querySelector('#real_value')

let value = getSupportersData(colaboration_array)
updateProgressBar(valueProgressBar, value)
updateRealValue(realValue, value)
// for (let x of colaboration_array) {
//   console.log(x.name)
// }
