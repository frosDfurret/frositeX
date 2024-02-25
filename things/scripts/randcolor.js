const colors = ["#faf1f3","#f9f2fc","#fff8f2","#f6f4eb","#f2f2fc","#fef5f3","#f1f3f5","#f1f7fb","#fff4ec"]
function refreshColors() {
  chosen = Math.floor(Math.random() * colors.length)
  console.log(chosen)
  document.getElementById('main-content').style.backgroundColor = colors[chosen]
}
refreshColors()