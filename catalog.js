// Масив кошика
let cart = [];

function updateCart() {
    console.log(cart);
}

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
        category: 'man'
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
        price: "2499 грн",
        image: ".",
        category: 'women'
    }
    
    
    
];

const grid = document.getElementById("productsGrid");

products.forEach(product => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <p>${product.name}</p>
        <span>${product.price}</span>
        <img src="${product.image}" alt="${product.name}">
        <button>У кошик</button>
    `;

    const button = card.querySelector("button");

    button.addEventListener("click", () => {

        cart.push({
            name: product.name,
            price: product.price
        });

        updateCart();

        alert(product.name + " додано в кошик 🛒");
    });

    grid.append(card);
});