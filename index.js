import { menuArray } from "./data.js"

const header = document.getElementById("header")
const foodList = document.getElementById("food-list")
const orderSummary = document.getElementById("order-summary")
const modal = document.getElementById("modal")
const modalInner = document.getElementById("modal-inner")
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
                <button class="add-btn" data-id="${item.id}">+</button>
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
            const selectedFood = menuArray.find(function (item) {
                return item.id == itemId
            })
            if (selectedFood) {
                orderedItemsArray.push(selectedFood)
                renderOrderSummary()
            }
        })
    })
}

function renderOrderSummary() {
    let summary = `<h2 id="your-order">Your order</h2>`
    orderedItemsArray.forEach(function (item) {
        summary += `<div>
                    <span>${item.name}</span><span>$${item.price}</span>
                    </div>`
    })
    const totalPrice = orderedItemsArray.reduce(function (total, currentItem) {
        return total + currentItem.price
    }, 0)
    summary += `
        <h2>Total price: $${totalPrice}</h2>
        <button id="order-btn">Complete order</button>
    `
    orderSummary.innerHTML = summary
    renderModal()
}

function renderModal() {
    const orderBtn = document.getElementById("order-btn")
    orderBtn.addEventListener("click", function () {
        modalInner.innerHTML = `
                <button id="close-btn">X</button>
                <h1>Enter card details</h1>
                <form>
                    <input type="text" id="name" class="modal-input" placeholder="Enter your name">
                    <input type="text" id="card" class="modal-input" placeholder="Enter card number">
                    <input type="text" id="cvv" class="modal-input" placeholder="Enter CVV">
                </form>
                <button id="pay-btn">Pay</button>
        `
        modal.style.display = 'flex'
    })
}