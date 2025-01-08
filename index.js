import { menuArray } from "./data.js"

const header = document.getElementById("header")
const foodList = document.getElementById("food-list")
const orderSummary = document.getElementById("order-summary")
let orderedItemsArray = []

function renderMenuItems() {
    let menuItems = ``
    for (let item of menuArray) {
        menuItems += `
            <div class="food-items">
                <img src="${item.img}" class="food-images">
                <h2>${item.name}</h2>
                <p>${item.ingredients}</p>
                <h2>$${item.price}</h2>
                <button class="add-btn" data-id="${item.price}">+</button>
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
            const itemId = e.target.getAttribute('data-id')
            const selectedFood = menuArray.find(item => item.id = itemId)
            if (selectedFood) {
                orderedItemsArray.push(selectedFood)
                console.log(selectedFood)
                renderOrderSummary()
            }
        })
    })
}

function renderOrderSummary() {
    let summary = `<h2 id="your-order">Your order</h2>`
    orderedItemsArray.forEach(function (item) {
        `<div>
            <span>${item.name}</span><span>${item.price}</span>
        </div>`
    })
    summary += `
            <div class>
                
                
                <h2>Total price: </h2>
                <button id="order-btn">Complete order</button>
            </div>
        `
    orderSummary.innerHTML = summary
}

// function addToOrder() {
//     let orderedItemsArray = []

// }

// function getMatchingItem() {

// }