const cartMenuButton = document.getElementById("cart-menu-button")
const cartMenu = document.getElementById("cart-menu")

const positionMenu = () => {
  const { left, top, height } = cartMenuButton.getBoundingClientRect()

  if (!cartMenu) {
    throw new Error("menu dialog not found!")
  }

  if (window.innerWidth > 640) {
    cartMenu.style.left = `${left}px`
    cartMenu.style.top = `${top + height}px`
    cartMenu.style.transform = `translateX(-90%)`
  } else {
    cartMenu.style.left = `auto`
    cartMenu.style.top = `${top + height + 20}px`
    cartMenu.style.transform = `unset`
  }
}
cartMenuButton.addEventListener("click", () => {
  positionMenu()
  openDialog("menu_dialog", this, null, true)
})

window.addEventListener("resize", debounce(positionMenu))
