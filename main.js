function updateProgressBar(progressBar, value) {
  value = Math.round(value)
  progressBar.style.width = `${value}%`
}

const valueProgressBar = document.querySelector('.progress_fill')

updateProgressBar(valueProgressBar, 80)
