let clicks = 0, multiplier = 1, canClick = true
if (localStorage.getItem(`clicks`)) clicks = Number(localStorage.getItem(`clicks`))
if (localStorage.getItem(`multiplier`)) multiplier = Number(localStorage.getItem(`multiplier`))
function clickup() {
    clicks += multiplier, updateText(), canClick = false
    setTimeout(() => {canClick = true}, 75)
} function upgrade(clickAmount, cost) {
  if (multiplier >= clickAmount) return alert(`You already bought this.`)
  if (clicks >= cost) {
    clicks -= cost, updateText()
    multiplier = clickAmount, localStorage.setItem(`multiplier`, multiplier)
  } else alert(`You can't buy this.`)
} function updateText() {
  document.getElementById(`clicks`).textContent = clicks
  localStorage.setItem(`clicks`, clicks)
}
