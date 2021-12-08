const smallCups = document.querySelectorAll('.cup-small')
const remained = document.getElementById('remained')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')

smallCups.forEach((cup, inx) => {
  cup.addEventListener('click', () => {
    highlightCup(inx)
  })
})

function highlightCup(inx) {
  if (
    smallCups[inx].classList.contains('full') &&
    !smallCups[inx].nextElementSibling.classList.contains('full')
  ) {
    inx--
  }

  smallCups.forEach((cup, inx2) => {
    if (inx2 <= inx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })
  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(fullCups / totalCups) * 330}px`
    percentage.innerText = `${(fullCups / totalCups) * 100}%`
  }
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`
  }
}
