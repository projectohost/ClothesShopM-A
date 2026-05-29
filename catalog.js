const products = [
    {
        name: "Футболка",
        price: "799 грн",
        image: "./molochko.jpeg",
        category: 'kids'
    },
    {
        name: "Худі",
        price: "1488 грн",
        image: "./milk.jpeg",
        category: 'men'
    },
    {
        name: "Куртка",
        price: "2499 грн",
        image: "./nike milk.webp",
        category: 'women'
    }
    ,
    {
        name: "Футболка",
        price: "899 грн",
        image: "./patriot.webp",
        category: 'kids'
    }
    ,
    {
        name: "футболка",
        price: "300 грн",
        image: "./67.webp",
        category: 'kids'
    }
    ,
    {
        name: "футболка",
        price: "1000 грн",
        image: "./52.png",
        category: 'men'
    }
    ,
    {
        name: "футболка",
        price: "999 грн",
        image: "./1.webp",
        category: 'men'
    }
    ,
    {
        name: "футболка",
        price: "1199 грн",
        image: "./women.webp",
        category: 'women'
    }
    
    
    
];
let cart = [];
let currentFilter = "all";

const grid = document.getElementById("productsGrid");
const cartCount = document.getElementById("cartCount");

// CART UI UPDATE
function updateCart() {
    cartCount.innerText = cart.length;
    console.log("Cart:", cart);
}

// MAIN RENDER FUNCTION (FIXED)
function renderProducts(productsList = []) {
    grid.innerHTML = "";

    const filteredList = productsList.filter(p => {
        return currentFilter === "all" || p.category === currentFilter;
    });

    filteredList.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <p>${product.name}</p>
            <span>${product.price}</span>
            <img src="${product.image}" alt="${product.name}">
            <button>У кошик</button>
        `;

        card.querySelector("button").addEventListener("click", () => {
            cart.push(product);
            updateCart();
        });

        grid.appendChild(card);
    });
}

// 🔥 FIXED FILTER (IMPORTANT CHANGE)
function filterProducts(category) {
    currentFilter = category;
    renderProducts(products);
}

// CART ACCESS
function getCart() {
    return cart;
}

renderProducts(products); 