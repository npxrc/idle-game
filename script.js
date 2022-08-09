let clicks = 0, multiplier = 1
function clickup() {
  clicks += multiplier
  document.getElementById(`clicks`).textContent = clicks
} function upgrade(clickAmount, cost) {
  if (clicks >= cost) clicks -= cost, document.getElementById(`clicks`).textContent = clicks, multiplier = clickAmount
  else alert(`You can't buy this!`)
}
