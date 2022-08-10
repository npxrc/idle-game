let clicks = 0, multiplier = 1, canClick = true, socket = io.connect('https://ayosussy.herokuapp.com')
if (!localStorage.getItem(`id`)) localStorage.setItem(`id`, socket.id)
socket.emit(`connected`, localStorage.getItem(`id`))
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
    socket.emit(`upgraded`, clicks, multiplier)
  } else alert(`You can't buy this.`)
} function updateText() {
  document.getElementById(`clicks`).textContent = clicks
  localStorage.setItem(`clicks`, clicks)
}
