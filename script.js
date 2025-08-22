// Kids products data
const products = [
    { id: 1, name: "Teddy Bear", price: 25, image: "https://via.placeholder.com/150/ffb6c1/000000?text=Teddy+Bear" },
    { id: 2, name: "Toy Car", price: 15, image: "https://via.placeholder.com/150/add8e6/000000?text=Toy+Car" },
    { id: 3, name: "Doll", price: 20, image: "https://via.placeholder.com/150/dda0dd/000000?text=Doll" },
    { id: 4, name: "Kids T-Shirt", price: 12, image: "https://via.placeholder.com/150/98fb98/000000?text=T-Shirt" },
    { id: 5, name: "Building Blocks", price: 30, image: "https://via.placeholder.com/150/f0e68c/000000?text=Blocks" },
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
  
  // Add to Cart
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
  }
  
  // Update Cart
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
  
  // Toggle Cart Section
  document.getElementById("cart-link").addEventListener("click", () => {
    document.getElementById("cart-section").classList.toggle("hidden");
  });
  
  // Checkout
  function checkout() {
    alert("🎉 Thank you for shopping for your kids!");
    cart = [];
    updateCart();
    document.getElementById("cart-section").classList.add("hidden");
  }
  