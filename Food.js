// Sample Menu Data with Zambian Kwacha (ZMW) Prices
const menuItems = [
    { id: 1, name: "Burger", price: 120, image: "image/Burger.jpg", description: "A juicy beef burger with fresh veggies." },
    { id: 2, name: "Pizza", price: 150, image: "image/Pizza.jpg", description: "Classic Margherita pizza with mozzarella." },
    { id: 3, name: "Pasta", price: 130, image: "image/Pasta.jpg", description: "Creamy Alfredo pasta with garlic bread." },
    { id: 4, name: "Sushi", price: 180, image: "image/Sushi.jpg", description: "Fresh sushi rolls with soy sauce and wasabi." },
    { id: 5, name: "Tacos", price: 100, image: "image/Taco.jpg", description: "Spicy beef tacos with salsa and guacamole." },
    { id: 6, name: "Steak", price: 220, image: "image/Steak.jpg", description: "Grilled steak with mashed potatoes and veggies." },
    { id: 7, name: "Ice Cream", price: 50, image: "image/Icecream.jpg", description: "Vanilla, chocolate, and strawberry ice cream." },
    { id: 8, name: "Cheesecake", price: 80, image: "image/Cheesecake.jpg", description: "Creamy cheesecake with strawberry topping." },
    { id: 9, name: "Brownie", price: 70, image: "image/Brownie.jpg", description: "Warm chocolate brownie with vanilla ice cream." },
  ];
  
  // Shopping Cart
  let cart = [];
  
  // Display Menu Items
  function displayMenuItems(items) {
    const menuContainer = document.getElementById("menuItems");
    menuContainer.innerHTML = items.map(item => `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h3 class="card-title">${item.name}</h3>
            <p class="card-text">${item.description}</p>
            <p class="card-text"><strong>ZMW ${item.price.toFixed(2)}</strong></p>
            <button class="btn btn-danger add-to-cart" data-id="${item.id}">Add to Cart</button>
          </div>
        </div>
      </div>
    `).join("");
  }
  
  // Add to Cart
  function addToCart(itemId) {
    const item = menuItems.find(menuItem => menuItem.id === itemId);
    cart.push(item);
    updateCart();
  }
  
  // Update Cart
  function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
  
    // Update Cart Items
    cartItems.innerHTML = cart.map(item => `
      <li class="list-group-item">
        ${item.name} - ZMW ${item.price.toFixed(2)}
      </li>
    `).join("");
  
    // Update Cart Count
    cartCount.textContent = cart.length;
  
    // Update Cart Total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toFixed(2);
  }
  
  // Event Delegation for Add to Cart Buttons
  document.getElementById("menuItems").addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const itemId = parseInt(e.target.getAttribute("data-id"));
      addToCart(itemId);
    }
  });
  
  // Initial Load
  displayMenuItems(menuItems);