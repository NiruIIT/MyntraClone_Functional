let bagItems = [];
onLoad();

function onLoad(){
    let bagItemStr = localStorage.getItem("bagItems");
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayItemsHome();
    displayBagIcon();
}


function add_to_bag(itemID){
    bagItems.push(itemID);
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector(".bagItemCount");
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = "visible";
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = "hidden";
    }
    
}

function displayItemsHome(){
    let itemsContainerElement = document.querySelector(".items_container");
    if (!itemsContainerElement) return;
    // let item = {
    //     item_image: "images/1.jpg",
    //     rating: {
    //         stars: "4.5⭐",
    //         reviews: "1.4k"
    //     },
    //     company_name: "Carlton-London",
    //     item_name: "Rhodium plated cz floral studs",
    //     current_price: "606",
    //     original_price: "1045",
    //     discount: "42"
    // }

    let innerHTML = ``;
    items.forEach(item => {
        innerHTML += `
                <div class="item_container">
                    <img class="item_image" src="${item.item_image}" alt="item image">
                    <div class="rating">
                        ${item.rating.stars}⭐ | ${item.rating.reviews}
                    </div>
                    <div class="company_name">${item.company_name}</div>
                    <div class="item_name">${item.item_name}</div>
                    <div class="price">
                        <span class="current_price">₹${item.current_price}</span>
                        <span class="original_price">₹${item.original_price}</span>
                        <span class="discount">(${item.discount}% OFF)</span>
                    </div>
                    <button class="add_to_bag" onclick="add_to_bag('${item.id}')">Add to Bag</button>
                </div>`
    })

    itemsContainerElement.innerHTML = innerHTML;
}
