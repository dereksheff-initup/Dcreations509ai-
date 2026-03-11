// storefront.js

// e-commerce functionality

// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 29.99, category: 'Category 1' },
    { id: 2, name: 'Product 2', price: 49.99, category: 'Category 2' },
    { id: 3, name: 'Product 3', price: 19.99, category: 'Category 1' }
];

// Shopping cart management
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
}

function getCartItems() {
    return cart;
}

function clearCart() {
    cart = [];
}

// Product filtering
function filterProducts(category) {
    return products.filter(p => p.category === category);
}

// Search products by name
function searchProducts(searchTerm) {
    return products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

// Checkout functionality
function checkout() {
    if (cart.length === 0) {
        console.log('Cart is empty!');
        return;
    }
    console.log('Proceeding to checkout with the following items:');
    cart.forEach(item => console.log(`${item.name}: $${item.price}`));
    clearCart(); // Clear cart after checkout
}

// Export functions for use in other modules
export { addToCart, removeFromCart, getCartItems, filterProducts, searchProducts, checkout };