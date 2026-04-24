// Масив для кошика
let cart = [];

// Оновлення кількості товарів у кошику
function updateCart() {
    console.log("Кошик:", cart);
}

// Кнопка "Купити зараз"
const buyBtn = document.querySelector(".hero button");

if (buyBtn) {
    buyBtn.addEventListener("click", () => {
        alert("Переходимо до покупок 🛍");
    });
}

// Кнопки "В кошик"
const buttons = document.querySelectorAll(".card button");

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const productName = document.querySelectorAll(".card p")[index].innerText;
        const productPrice = document.querySelectorAll(".card span")[index].innerText;

        // Додаємо товар у кошик
        cart.push({
            name: productName,
            price: productPrice
        });

        updateCart();
        alert(productName + " додано в кошик 🛒");
    });
});

// Відкрити кошик (простий варіант через alert)
const cartIcon = document.querySelector(".logo");

if (cartIcon) {
    cartIcon.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Кошик порожній");
        } else {
            let message = "Ваш кошик:\n";
            cart.forEach(item => {
                message += item.name + " - " + item.price + "\n";
            });
            alert(message);
        }
    });
}