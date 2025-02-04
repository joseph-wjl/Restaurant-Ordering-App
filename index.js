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
                <div class="food-all-info">
                    <img src="${item.img}" class="food-images">
                    <div class="food-details">
                            <h2>${item.name}</h2>
                            <p>${item.ingredients}</p>
                            <h2>$${item.price}</h2>
                    </div>
                </div>
                <button class="add-btn" data-id="${item.id}">+</button>
            </div>
            <br>
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
        summary += `<div class="ordered-items">
                        <div>
                            <span>${item.name}</span>
                            <span id="remove-btn">remove</span>
                        </div>
                        <span>$${item.price}</span>
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
    document.getElementById("remove-btn").addEventListener("click", function () {
        orderedItemsArray.pop()
    })
    renderModal()
}

function renderModal() {
    document.getElementById("order-btn").addEventListener("click", function () {
        modal.style.display = 'flex'
    })
    document.getElementById("close-btn").addEventListener("click", function () {
        modal.style.display = 'none'
    })
    document.getElementById("pay-form").addEventListener("submit", function (e) {
        e.preventDefault()
        modal.style.display = 'none'
        orderSummary.innerHTML = `
            <h2 id="paid-msg">Thanks! Your order is on its way!</h2>`
    })
}
