// Sample product data
const products = [
    { id: 1, name: "Laptop", price: 750, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Smartphone", price: 500, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Headphones", price: 100, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Watch", price: 200, image: "https://via.placeholder.com/150" }
  ];
  
  let cart = [];
  
  // Display products
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
  
  // Add to Cart function
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
  }
  
  // Update Cart UI
  function updateCart() {
    document.getElementById("cart-count").innerText = cart.length;
    
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;
    
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(li);
      total += item.price;
    });
    
    document.getElementById("cart-total").innerText = total.toFixed(2);
  }
  
  // Toggle cart section
  document.getElementById("cart-link").addEventListener("click", () => {
    document.getElementById("cart-section").classList.toggle("hidden");
  });
  
  // Checkout function
  function checkout() {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
    document.getElementById("cart-section").classList.add("hidden");
  }
  