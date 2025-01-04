import { menuArray } from "./data.js"

const foodList = document.getElementById("food-list")


function renderMenuItems(){
    let menuItems = ``
    for (let item of menuArray){
        menuItems += `
            <div class="food-items">
                <img src="${item.img}">
                <h2>${item.name}</h2>
                <p>${item.ingredients}</p>
                <h2>$${item.price}</h2>
                <button class="add-button">+</button>
            </div>
        `
    }
    foodList.innerHTML = menuItems
}

renderMenuItems()

// function renderMenuItems() {
//     menuArray.forEach(function(menuItem) {
//         // Append content to the innerHTML, don't overwrite it
//         foodList.innerHTML += `
//             <div class="food-item">
//                 <img src="${menuItem.img}" alt="${menuItem.name}" class="food-images">
//                 <h2>${menuItem.name}</h2>
//                 <p>${menuItem.ingredients.join(", ")}</p>
//                 <h3>$${menuItem.price}</h3>
//             </div>
//         `
//     })
// }

// renderMenuItems()


// menuArray.forEach(function (menuItem) {
//     const foodListContent = ``
//     foodList.innerHTML = foodListContent + `
    
//     `
// })