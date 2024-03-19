// Lista de platos en el carrito
let cartItems = [];

// Función para agregar un plato al carrito
function addToCart() {
    const select = document.getElementById('select-menu');
    const selectedItem = select.options[select.selectedIndex].text;
    cartItems.push(selectedItem);
    updateCart();
}

// Función para eliminar un plato del carrito
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

// Función para listar platos agregados al carro
function listCartItems() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}
