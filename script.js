document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: 'Maggi Noodles', description: 'Instant noodles', image: 'maggi-noodles.jpg' },
        { name: 'Maggi Ketchup', description: 'Tomato ketchup', image: 'maggi-ketchup.jpg' },
        { name: 'Maggi Masala', description: 'Indian spice mix', image: 'maggi-masala.jpg' }
    ];

    const productContainer = document.querySelector('.product-container');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        productItem.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        productContainer.appendChild(productItem);
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });
});
