import { menuArray } from "./data.js"

const header = document.getElementById("header")
const foodList = document.getElementById("food-list")
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
                <button class="add-btn" id="add-btn" data-id="${item.price}">+</button>
            </div>
        `
    }
    foodList.innerHTML = menuItems
    addEventListenerToButtons()
}

renderMenuItems()

function addEventListenerToButtons() {
    const addBtn = document.querySelectorAll(".add-btn")
    addBtn.forEach(button => {
        button.addEventListener("click", function (e) {
            console.log(e.target.getAttribute('data-id'))
            renderOrderSummary()
        })
    })
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

// function getMatchingItem() {

// }

// function addToOrder() {
//     let orderedItemsArray = []
// }

