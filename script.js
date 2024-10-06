let cart = [];
let total = 0;
let userBalance = 0;
let isRegistered = false;


function addToCart(itemName, price) {
    cart.push({ name: itemName, price });
    total += price;
    updateCart();
}


function removeFromCart(index) {
    total -= cart[index].price; 
    cart.splice(index, 1); 
    updateCart(); 
}


function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; 

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - KES ${item.price}`;

        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index); 
        removeButton.style.marginLeft = '10px'; 

        div.appendChild(removeButton); 
        cartItems.appendChild(div); 
    });

    document.getElementById('cart-total').textContent = total; 
}


function checkout() {
    if (!isRegistered) {
        alert('Please register before checking out.');
        return;
    }

    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    if (total > userBalance) {
        alert('Insufficient balance. Please top up your account.');
    } else {
        userBalance -= total; 
        alert(`Checkout successful! Remaining balance: KES ${userBalance}`);
        
        
        cart = [];
        total = 0;
        updateCart(); 
    }
}


document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;
    
    if (fname && lname && phone && email && password) {
        
        userBalance = Math.floor(Math.random() * 80001) + 20000;

        isRegistered = true; 
        alert(`Registration successful! Your M-Pesa balance is: KES ${userBalance}`);
    } else {
        alert('Please fill out all the fields.');
    }
});



