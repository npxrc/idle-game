let clicks = 0, multiplier = 1
if (localStorage.getItem(`clicks`)) clicks = Number(localStorage.getItem(`clicks`))
if (localStorage.getItem(`multiplier`)) multiplier = Number(localStorage.getItem(`multiplier`))
function clickup() {
  clicks += multiplier, updateText()
} function upgrade(clickAmount, cost) {
  if (clicks >= cost) {
    if (multiplier >= clickAmount) return alert(`You already bought this.`)
    clicks -= cost, updateText()
    multiplier = clickAmount, localStorage.setItem(`multiplier`, multiplier)
  } else alert(`You can't buy this.`)
} function updateText() {
  document.getElementById(`clicks`).textContent = clicks
  localStorage.setItem(`clicks`, clicks)
}
