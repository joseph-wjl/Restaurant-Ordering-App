import { menuArray } from "./data.js"

const header = document.getElementById("header")
const foodList = document.getElementById("food-list")
const addBtn = document.getElementById("add-btn")
const orderSummary = document.getElementById("order-summary")

function renderMenuItems() {
    let menuItems = ``
    for (let item of menuArray) {
        menuItems += `
            <div class="food-items">
                <img src="${item.img}" class="food-images">
                <h2>${item.name}</h2>
                <p>${item.ingredients}</p>
                <h2>$${item.price}</h2>
                <button class="add-btn" id="add-btn" data-id="${item.id}">+</button>
            </div>
        `
    }
    foodList.innerHTML = menuItems
}

renderMenuItems()

function getMatchingItem() {

}

addBtn.addEventListener("click", function (e) {
    console.log(e.target.id)
})

function addToOrder() {
    let orderedItemsArray = []
}

function renderOrderSummary() {
    let summary = ``
    summary += `
        <div class>
            <h2>Your order</h2>
            <h2></h2>
            <h2>Total price: </h2>
            <button id="order-btn">Complete order</button>
        </div>
    `
    orderSummary.innerHTML = summary
}

