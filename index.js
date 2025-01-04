import { menuArray } from "./data.js"

const foodList = document.getElementById("food-list")


function renderMenuItems() {
    menuArray.forEach(function (menuItem) {
        foodList.innerHTML = `
            <img src="${menuItem.img}">
            <h2>${menuItem.name}</h2>
            <p>${menuItem.ingredients}</p>
            <h2>$${menuItem.price}</h2>
        `
    })
}

renderMenuItems()
