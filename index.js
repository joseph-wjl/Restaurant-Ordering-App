import { menuArray } from "./data.js"

const header = document.getElementById("header")
const foodList = document.getElementById("food-list")
const addBtn = document.getElementById("add-btn")

function renderMenuItems() {
    let menuItems = ``
    for (let item of menuArray) {
        menuItems += `
            <div class="food-items">
                <img src="${item.img}">
                <h2>${item.name}</h2>
                <p>${item.ingredients}</p>
                <h2>$${item.price}</h2>
                <button class="add-btn" id="add-btn">+</button>
            </div>
        `
    }
    foodList.innerHTML = menuItems
}

renderMenuItems()

addBtn.addEventListener("click", function () {
    header.innerHTML = `button clicked`
})