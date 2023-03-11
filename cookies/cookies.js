
document.getElementById('btn').addEventListener('click', function () {
    const inpProduct = document.getElementById('inp-product').value;
    const inpValue = document.getElementById('inp-value').value;

    displayItems(inpProduct, inpValue);
    getStoredData();
    storeData(inpProduct, inpValue);

    document.getElementById('inp-product').value = '';
    document.getElementById('inp-value').value = '';
})

const displayItems = (inpProduct, inpValue) => {
    const container = document.getElementById('ul')
    const li = document.createElement('li');
    li.innerHTML = `${inpProduct} ${': '} ${inpValue}`;
    container.appendChild(li);
}

const getStoredData = () => {
    const cart = {};
    const oldCart = localStorage.getItem('cart');
    if (oldCart) {
        const cart = JSON.parse(oldCart);
        return cart;
    }
    return cart;
}

const storeData = (inpProduct, inpValue) => {
    cart = getStoredData();
    cart[inpProduct] = inpValue;
    const string = JSON.stringify(cart);
    localStorage.setItem('cart', string);
}


const displayItemsFromLocal = () => {
    const localCart = getStoredData()
    for (const product in localCart) {
        displayItems(product, localCart[product]);
    }
}

displayItemsFromLocal()