const currentPage = location.pathname
const MenuItem = document.querySelectorAll("header .links a")


for (item of MenuItem) {
  if (currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active")
  }
}
