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

// Función para eliminar un plato del carrito
function deleteFromCart() {
    const select = document.getElementById('cartToDelete');
    const selectedIndex = select.selectedIndex;
    if (selectedIndex !== -1) {
        cartItems.splice(selectedIndex, 1);
        updateCart();
    }
}

// Función para actualizar la lista de platos en el carrito
function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Eliminar';
        removeBtn.onclick = () => removeFromCart(index);
        li.appendChild(removeBtn);
        cartList.appendChild(li);
    });

    const cartToDelete = document.getElementById('cartToDelete');
    cartToDelete.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartToDelete.appendChild(li);
    });
}
