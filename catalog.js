// Масив кошика
let cart = [];

function updateCart() {
    console.log(cart);
}

const products = [
    {
        name: "Футболка",
        price: "799 грн",
        image: "./molochko.jpeg"
    },
    {
        name: "Худі",
        price: "1488 грн",
        image: "./milk.jpeg"
    },
    {
        name: "Куртка",
        price: "2499 грн",
        image: "./nike milk.webp"
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

    grid.appendChild(card);
});