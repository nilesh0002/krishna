// Product data
const products = [
  // Fast Food Section (using actual image filenames)
  {
    id: 'petties',
    name: 'Petties',
    price: 25,
    unit: 'piece',
    category: 'Fast Food',
    subcategory: 'Snacks',
    image: 'images/petties.jpg'
  },
  {
    id: 'samosa',
    name: 'Samosa',
    price: 20,
    unit: 'piece',
    category: 'Fast Food',
    subcategory: 'Snacks',
    image: 'images/samos.jpg'
  },
  {
    id: 'spring-roll',
    name: 'Spring Roll',
    price: 30,
    unit: 'piece',
    category: 'Fast Food',
    subcategory: 'Snacks',
    image: 'images/spring.jpg'
  },
  {
    id: 'chowmein',
    name: 'Chowmein',
    price: 50,
    unit: 'plate',
    category: 'Fast Food',
    subcategory: 'Chinese',
    image: 'images/chawmin.jpg'
  },
  {
    id: 'dosa',
    name: 'Dosa',
    price: 60,
    unit: 'piece',
    category: 'Fast Food',
    subcategory: 'South Indian',
    image: 'images/dosa.jpg'
  },
  {
    id: 'chaat',
    name: 'Chaat',
    price: 40,
    unit: 'plate',
    category: 'Fast Food',
    subcategory: 'Snacks',
    image: 'images/chaat.jpg'
  },

  // Sweets - Wet Section 🍯
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    price: 800,
    pricePerPiece: 20,
    unit: 'kg',
    category: 'Sweets-Wet',
    subcategory: 'Syrup Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Gulab_jamun_%28Gibraltar%2C_November_2021%29.jpg'
  },
  {
    id: 'rasgulla',
    name: 'Rasgulla',
    price: 600,
    pricePerPiece: 15,
    unit: 'kg',
    category: 'Sweets-Wet',
    subcategory: 'Syrup Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Rasgulla.jpg'
  },
  {
    id: 'rasmalai',
    name: 'Rasmalai',
    price: 900,
    pricePerPiece: 25,
    unit: 'kg',
    category: 'Sweets-Wet',
    subcategory: 'Milk Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Rasmalai_-_Kolkata_2011-07-30_3987.JPG'
  },
  {
    id: 'malpua',
    name: 'Malpua',
    price: 700,
    pricePerPiece: 18,
    unit: 'kg',
    category: 'Sweets-Wet',
    subcategory: 'Fried Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Malpua_with_rabri.jpg'
  },
  {
    id: 'jalebi',
    name: 'Jalebi',
    price: 400,
    pricePerPiece: 10,
    unit: 'kg',
    category: 'Sweets-Wet',
    subcategory: 'Fried Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Jalebi%2C_sweet_from_India.jpg'
  },
  {
    id: 'imarti',
    name: 'Imarti',
    price: 350,
    pricePerPiece: 8,
    unit: 'kg',
    category: 'Sweets-Wet',
    subcategory: 'Fried Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Imarti_sweet.jpg'
  },
  {
    id: 'chhena-poda',
    name: 'Chhena Poda',
    price: 850,
    pricePerPiece: 22,
    unit: 'kg',
    category: 'Sweets-Wet',
    subcategory: 'Milk Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Chhena_Poda.jpg'
  },
  {
    id: 'rabri',
    name: 'Rabri',
    price: 850,
    pricePerPiece: 22,
    unit: 'kg',
    category: 'Sweets-Wet',
    subcategory: 'Milk Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Rabri_%28North_Indian_dessert%29.jpg'
  },
  
  // Sweets - Dry Section 🍪
  {
    id: 'kaju-katli',
    name: 'Kaju Katli',
    price: 1200,
    pricePerPiece: 30,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Premium Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Kaju_katli%2C_an_Indian_sweet.jpg'
  },
  {
    id: 'barfi',
    name: 'Barfi',
    price: 900,
    pricePerPiece: 22,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Traditional Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Barfi_%28Indian_sweet%29.jpg'
  },
  {
    id: 'laddu',
    name: 'Laddu',
    price: 700,
    pricePerPiece: 18,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Traditional Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Laddu.jpg'
  },
  {
    id: 'peda',
    name: 'Peda',
    price: 800,
    pricePerPiece: 20,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Milk Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Peda.jpg'
  },
  {
    id: 'almonds',
    name: 'Almonds',
    price: 1200,
    pricePerPiece: 30,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Dry Fruits',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Almonds_in_shell_and_shelled.jpg'
  },
  {
    id: 'cashews',
    name: 'Cashews',
    price: 1000,
    pricePerPiece: 25,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Dry Fruits',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Cashew_nuts%2C_shelled%2C_raw.jpg'
  },
  {
    id: 'pista-badam',
    name: 'Pista Badam Mix',
    price: 1100,
    pricePerPiece: 28,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Dry Fruits',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Pistachio_and_almond.jpg'
  },
  {
    id: 'walnuts',
    name: 'Walnuts',
    price: 950,
    pricePerPiece: 24,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Dry Fruits',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Walnuts_-_whole_and_split.jpg'
  },
  {
    id: 'besan-laddu',
    name: 'Besan Laddu',
    price: 650,
    pricePerPiece: 16,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Traditional Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Besan_laddu.jpg'
  },
  {
    id: 'coconut-barfi',
    name: 'Coconut Barfi',
    price: 750,
    pricePerPiece: 19,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Traditional Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Coconut_Barfi.jpg'
  },
  {
    id: 'milk-peda',
    name: 'Milk Peda',
    price: 850,
    pricePerPiece: 21,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Milk Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Peda.jpg'
  },
  {
    id: 'kalakand',
    name: 'Kalakand',
    price: 950,
    pricePerPiece: 24,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Premium Sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Kalakand_Burfi.jpg'
  }
];

let cart = {};

// Load cart from localStorage on page load
if (localStorage.getItem('cart')) {
  try {
    cart = JSON.parse(localStorage.getItem('cart')) || {};
  } catch (e) {
    cart = {};
  }
}

// App state
let selectedCategory = 'Fast Food';
let discount = 0;

// DOM elements
const productList = document.getElementById('productList');
const cartItems = document.getElementById('cartItems');
const cartSummary = document.getElementById('cartSummary');

// Mobile state
let isMobile = false;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  if (typeof productList !== 'undefined' && productList) {
    renderProducts();
  }
  var cartSection = document.getElementById('cartSection');
  if (cartSection) {
    updateCart();
  }
  if (typeof setupEventListeners === 'function') {
    setupEventListeners();
  }
  checkMobileView();
  // Listen for window resize
  window.addEventListener('resize', checkMobileView);
});

// Check if we're in mobile view
function checkMobileView() {
  isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    mobileCartToggle.style.display = 'none'; // Hide mobile cart toggle since cart is always visible
    searchContainer.classList.remove('mobile-visible');
    // Cart is always visible at bottom on mobile
  } else {
    mobileCartToggle.style.display = 'none';
    searchContainer.classList.remove('mobile-visible');
    // Cart is always visible at bottom on desktop too
  }
}

// Mobile-specific event listeners
function setupMobileEventListeners() {
  // Mobile search toggle
  mobileSearchToggle.addEventListener('click', toggleMobileSearch);
}

// Mobile cart functions removed since cart is always visible at bottom

// Toggle mobile search
function toggleMobileSearch() {
  if (!isMobile) return;
  
  const isVisible = searchContainer.classList.contains('mobile-visible');
  
  if (isVisible) {
    searchContainer.classList.remove('mobile-visible');
    searchInput.blur();
  } else {
    searchContainer.classList.add('mobile-visible');
    searchInput.focus();
  }
}

// Event listeners
function setupEventListeners() {
  // Handle search on mobile
  searchInput.addEventListener('blur', () => {
    if (isMobile && searchInput.value === '') {
      setTimeout(() => {
        searchContainer.classList.remove('mobile-visible');
      }, 200);
    }
  });
}

// Render products
function renderProducts() {
  const filteredProducts = products.filter(product => 
    product.category === selectedCategory
  );

  // Mobile check
  const isMobile = window.innerWidth <= 768;

  // For Fast Food, show all products in a single section, not grouped by subcategory
  if (selectedCategory === 'Fast Food') {
    let html = '<div class="subcategory-section"><div class="subcategory-products">';
    html += filteredProducts.map(product => {
      const isInCart = cart[product.id];
      return `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <div class="product-info">
            <h3>${product.name}</h3>
            <p>₹${product.price} / ${product.unit}</p>
            ${isInCart ? 
              `<button class="remove-from-cart" onclick="removeFromCart('${product.id}')">Remove</button>` :
              `<button onclick="addToCart('${product.id}')" class="add-sweet-btn">Add to Cart</button>`
            }
          </div>
        </div>
      `;
    }).join('');
    html += '</div></div>';
    productList.innerHTML = html;
    return;
  }

  // For Sweets-Wet and Sweets-Dry, show all products in a single section, not grouped by subcategory
  if (selectedCategory === 'Sweets-Wet' || selectedCategory === 'Sweets-Dry') {
    let html = '<div class="subcategory-section"><div class="subcategory-products">';
    html += filteredProducts.map(product => {
      const isInCart = cart[product.id];
      const isSweet = product.category === 'Sweets-Wet' || product.category === 'Sweets-Dry';
      return `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <div class="product-info">
            <h3>${product.name}</h3>
            ${isSweet ? `
              <div class="sweet-pricing">
                <p class="price-kg">₹${product.price} / kg</p>
                <p class="price-piece">₹${product.pricePerPiece} / piece</p>
              </div>
              <div class="sweet-quantity-controls">
                <div class="quantity-toggle">
                  <label class="toggle-label">
                    <input type="radio" name="qty-type-${product.id}" value="grams" checked 
                           onchange="toggleQuantityType('${product.id}', 'grams')">
                    <span>By Grams</span>
                  </label>
                  <label class="toggle-label">
                    <input type="radio" name="qty-type-${product.id}" value="kg" 
                           onchange="toggleQuantityType('${product.id}', 'kg')">
                    <span>By Kg</span>
                  </label>
                  <label class="toggle-label">
                    <input type="radio" name="qty-type-${product.id}" value="piece" 
                           onchange="toggleQuantityType('${product.id}', 'piece')">
                    <span>By Piece</span>
                  </label>
                </div>
                <div class="quantity-input-group">
                  <label id="qty-label-${product.id}">Weight (grams):</label>
                  <input type="number" min="50" step="10" class="sweet-qty-input" 
                         id="qty-input-${product.id}" placeholder="Enter grams (100, 200, 150...)" 
                         onchange="updateSweetQuantity('${product.id}', this.value)">
                  <button onclick="addSweetToCart('${product.id}')" class="add-sweet-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            ` : `
              <p>₹${product.price} / ${product.unit}</p>
              ${isInCart ? 
                `<button class="remove-from-cart" onclick="removeFromCart('${product.id}')">Remove</button>` :
                `<button onclick="addToCart('${product.id}')" class="add-sweet-btn">Add to Cart</button>`
              }
            `}
          </div>
        </div>
      `;
    }).join('');
    html += '</div></div>';
    productList.innerHTML = html;
    return;
  }

  // For other categories, render normally, but never render subcategory headers/badges on mobile
  productList.innerHTML = filteredProducts.map(product => {
    const isInCart = cart[product.id];
    const categoryLabel = product.category === 'Sweets-Wet' ? 'Wet Sweet' : 
                         product.category === 'Sweets-Dry' ? 'Dry Sweet' : 
                         product.category;
    
    return `
      <div class="product-card">
        ${!isMobile ? `<div class="product-category-badge">${categoryLabel}</div>` : ''}
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>₹${product.price} / ${product.unit}</p>
          ${isInCart ? 
            `<button class="remove-from-cart" onclick="removeFromCart('${product.id}')">Remove</button>` :
            `<button onclick="addToCart('${product.id}')" class="add-sweet-btn">Add to Cart</button>`
          }
        </div>
      </div>
    `;
  }).join('');
}

// Helper function to get emoji for subcategories
function getSubcategoryEmoji(subcategory) {
  const emojiMap = {
    // Fast Food
    'Burgers': '🍔',
    'Pizzas': '🍕',
    'Hot Dogs': '🌭',
    'Sides': '🍟',
    'Mexican-Inspired': '🌮',
    'Pasta': '🍝',
    'Drinks': '🥤',
    'Desserts': '🍨',
    // Sweets - Wet
    'Syrup Sweets': '🍯',
    'Milk Sweets': '🥛',
    'Fried Sweets': '🔥',
    // Sweets - Dry
    'Premium Sweets': '💎',
    'Traditional Sweets': '🏺',
    'Dry Fruits': '🥜',
    'Milk Sweets': '🥛'
  };
  return emojiMap[subcategory] || '🍽️';
}

// Add to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  if (cart[productId]) {
    cart[productId].qty += 1;
  } else {
    cart[productId] = { product, qty: 1 };
  }

  localStorage.setItem('cart', JSON.stringify(cart)); // Always save cart
  updateCart();
  updateDiscount();
  renderProducts(); // Re-render to update button states
}

// Add sweet to cart with quantity
function addSweetToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const qtyInput = document.getElementById(`qty-input-${productId}`);
  const quantity = parseFloat(qtyInput.value);
  const qtyType = document.querySelector(`input[name="qty-type-${productId}"]:checked`).value;

  if (quantity <= 0) {
    alert('Please enter a valid quantity');
    return;
  }

  // Calculate final quantity and price based on type
  let finalQty, pricePerUnit, displayUnit, weightInKg;
  
  if (qtyType === 'piece') {
    finalQty = quantity;
    pricePerUnit = product.pricePerPiece;
    displayUnit = 'piece';
    weightInKg = 0; // Not applicable for pieces
  } else if (qtyType === 'grams') {
    weightInKg = quantity / 1000;
    finalQty = quantity;
    pricePerUnit = product.price; // Price per kg
    displayUnit = 'g';
  } else if (qtyType === 'kg') {
    weightInKg = quantity;
    finalQty = quantity;
    pricePerUnit = product.price; // Price per kg
    displayUnit = 'kg';
  }

  if (cart[productId]) {
    cart[productId].qty += finalQty;
    cart[productId].pricePerUnit = pricePerUnit;
    cart[productId].qtyType = qtyType;
    cart[productId].displayUnit = displayUnit;
    cart[productId].weightInKg = weightInKg;
  } else {
    cart[productId] = { 
      product, 
      qty: finalQty, 
      pricePerUnit: pricePerUnit,
      qtyType: qtyType,
      displayUnit: displayUnit,
      weightInKg: weightInKg
    };
  }

  localStorage.setItem('cart', JSON.stringify(cart)); // Always save cart
  updateCart();
  updateDiscount();
  renderProducts(); // Re-render to update button states
}

// Toggle quantity type (kg/piece)
function toggleQuantityType(productId, type) {
  const qtyInput = document.getElementById(`qty-input-${productId}`);
  const qtyLabel = document.getElementById(`qty-label-${productId}`);
  
  if (type === 'piece') {
    qtyLabel.textContent = 'Quantity (pieces):';
    qtyInput.min = '1';
    qtyInput.step = '1';
    qtyInput.value = '';
    qtyInput.placeholder = 'Enter pieces (1, 2, 3...)';
  } else if (type === 'grams') {
    qtyLabel.textContent = 'Weight (grams):';
    qtyInput.min = '50';
    qtyInput.step = '10';
    qtyInput.value = '';
    qtyInput.placeholder = 'Enter grams (100, 200, 150...)';
  } else if (type === 'kg') {
    qtyLabel.textContent = 'Weight (kg):';
    qtyInput.min = '0.1';
    qtyInput.step = '0.1';
    qtyInput.value = '';
    qtyInput.placeholder = 'Enter kg (0.5, 1.0, 1.5...)';
  }
}

// Update sweet quantity (for display purposes)
function updateSweetQuantity(productId, value) {
  const qtyType = document.querySelector(`input[name="qty-type-${productId}"]:checked`).value;
  const qtyInput = document.getElementById(`qty-input-${productId}`);
  
  if (qtyType === 'piece') {
    const quantity = parseInt(value) || 1;
    if (quantity < 1) {
      qtyInput.value = 1;
    }
  } else if (qtyType === 'grams') {
    const quantity = parseInt(value) || 500;
    if (quantity < 50) {
      qtyInput.value = 50;
    }
  } else if (qtyType === 'kg') {
    const quantity = parseFloat(value) || 0.5;
    if (quantity < 0.1) {
      qtyInput.value = 0.1;
    }
  }
}

// Update cart display
function updateCart() {
  if (!cartItems || !cartSummary) return;
  const cartItemsArray = Object.values(cart);
  const itemCount = cartItemsArray.length;
  
  // Update cart count
  document.getElementById('cartCount').textContent = itemCount;
  
  // Update mobile cart count
  if (mobileCartCount) {
    mobileCartCount.textContent = itemCount;
  }
  
  if (itemCount === 0) {
    cartItems.innerHTML = '<p style="text-align: center; color: #666; font-style: italic;">Your cart is empty.</p>';
    cartSummary.style.display = 'none';
    return;
  }

  cartItems.innerHTML = cartItemsArray.map(({ product, qty, pricePerUnit, qtyType, displayUnit, weightInKg }) => {
    const isSweet = product.category === 'Sweets-Wet' || product.category === 'Sweets-Dry';
    let minValue, stepValue, displayQty, unit, price, totalPrice;
    
    if (isSweet && qtyType === 'piece') {
      minValue = 1;
      stepValue = 1;
      displayQty = qty;
      unit = 'piece';
      price = pricePerUnit;
      totalPrice = price * qty;
    } else if (isSweet && qtyType === 'grams') {
      minValue = 50;
      stepValue = 10;
      displayQty = qty;
      unit = 'g';
      price = pricePerUnit; // Price per kg
      totalPrice = (price * qty) / 1000; // Convert grams to kg for calculation
    } else if (isSweet && qtyType === 'kg') {
      minValue = 0.1;
      stepValue = 0.1;
      displayQty = qty;
      unit = 'kg';
      price = pricePerUnit; // Price per kg
      totalPrice = price * qty;
    } else {
      minValue = 1;
      stepValue = 1;
      displayQty = qty;
      unit = product.unit;
      price = pricePerUnit || product.price;
      totalPrice = price * qty;
    }
    return `
      <li class="cart-item">
        <div class="cart-item-info">
          <span class="cart-item-name">${product.name}</span>
          <span class="cart-item-price">₹${price.toFixed(2)} / ${unit === 'g' ? 'kg' : unit}</span>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeCartQty('${product.id}', -${stepValue})">–</button>
          <input type="number" min="${minValue}" step="${stepValue}" value="${displayQty}" 
                 onchange="updateQuantity('${product.id}', this.value)" 
                 class="qty-input">
          <button class="qty-btn" onclick="changeCartQty('${product.id}', ${stepValue})">+</button>
        </div>
        <span class="cart-item-total">₹${totalPrice.toFixed(2)}</span>
        <button class="remove-btn" onclick="removeFromCart('${product.id}')" title="Remove from cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="#ff4d4d"/>
          </svg>
        </button>
      </li>
    `;
  }).join('');

  updateCartSummary();
  // Save cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Update quantity
function updateQuantity(productId, value) {
  const product = products.find(p => p.id === productId);
  const isSweet = product && (product.category === 'Sweets-Wet' || product.category === 'Sweets-Dry');
  
  let qty, minQty;
  if (isSweet && cart[productId] && cart[productId].qtyType === 'piece') {
    qty = parseInt(value) || 1;
    minQty = 1;
  } else if (isSweet && cart[productId] && cart[productId].qtyType === 'grams') {
    qty = parseInt(value) || 50;
    minQty = 50;
  } else if (isSweet && cart[productId] && cart[productId].qtyType === 'kg') {
    qty = parseFloat(value) || 0.1;
    minQty = 0.1;
  } else if (isSweet) {
    qty = parseInt(value) || 50;
    minQty = 50;
  } else {
    qty = parseInt(value) || 1;
    minQty = 1;
  }
  
  if (qty < minQty) {
    removeFromCart(productId);
    return;
  }
  
  if (cart[productId]) {
    cart[productId].qty = qty;
    
    // Recalculate weight for sweets
    if (isSweet && cart[productId].qtyType === 'grams') {
      cart[productId].weightInKg = qty / 1000;
    } else if (isSweet && cart[productId].qtyType === 'kg') {
      cart[productId].weightInKg = qty;
    }
    
    updateCart();
    updateDiscount();
  }
}

// Remove from cart
function removeFromCart(productId) {
  delete cart[productId];
  updateCart();
  updateDiscount();
  renderProducts(); // Re-render to update button states
}

// Update cart summary
function updateCartSummary() {
  const cartItemsArray = Object.values(cart);
  const subtotal = cartItemsArray.reduce((sum, item) => {
    const { product, qty, qtyType } = item;
    
    // Calculate price based on quantity type for sweets
    if (qtyType === 'piece') {
      return sum + (product.pricePerPiece * qty);
    } else if (qtyType === 'grams') {
      return sum + (product.price * qty / 1000); // Convert grams to kg
    } else if (qtyType === 'kg') {
      return sum + (product.price * qty);
    } else {
      return sum + (product.price * qty);
    }
  }, 0);
  const gst = subtotal * 0.05;
  const grandTotal = subtotal + gst - discount;

  document.getElementById('subtotal').textContent = `Subtotal: ₹${subtotal.toFixed(2)}`;
  document.getElementById('gst').textContent = `GST (5%): ₹${gst.toFixed(2)}`;
  document.getElementById('grandTotal').textContent = `Total: ₹${grandTotal.toFixed(2)}`;

  if (discount > 0) {
    document.getElementById('discount').textContent = `Discount: -₹${discount.toFixed(2)}`;
    document.getElementById('discount').style.display = 'block';
  } else {
    document.getElementById('discount').style.display = 'none';
  }

  cartSummary.style.display = 'block';
}

// Update discount
function updateDiscount() {
  const cartItemsArray = Object.values(cart);
  const subtotal = cartItemsArray.reduce((sum, item) => {
    const { product, qty, qtyType } = item;
    
    // Calculate price based on quantity type for sweets
    if (qtyType === 'piece') {
      return sum + (product.pricePerPiece * qty);
    } else if (qtyType === 'grams') {
      return sum + (product.price * qty / 1000); // Convert grams to kg
    } else if (qtyType === 'kg') {
      return sum + (product.price * qty);
    } else {
      return sum + (product.price * qty);
    }
  }, 0);
  const totalQty = cartItemsArray.reduce((sum, { qty }) => sum + qty, 0);

  if (subtotal >= 1000 || totalQty >= 10) {
    discount = subtotal * 0.1;
  } else {
    discount = 0;
  }

  updateCartSummary();
}

// Filter products function
function filterProducts(event, category) {
  selectedCategory = category;
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  renderProducts();
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
  updateCart();
  setupEventListeners();
});

function clearCart() {
  cart = {};
  updateCart();
  updateDiscount();
  renderProducts && renderProducts();
  localStorage.setItem('cart', JSON.stringify(cart));
}

// --- Receipt Modal Functions for Cart Page ---
function openReceipt() {
  // Generate receipt content from cart
  const cartItemsArray = Object.values(cart);
  if (cartItemsArray.length === 0) return;
  document.getElementById('receiptModal').style.display = 'block';
  // Set order number and date
  document.getElementById('orderNumber').textContent = Math.floor(Math.random() * 90000) + 10000;
  document.getElementById('dateTime').textContent = new Date().toLocaleString();
  // Render receipt items
  const receiptItems = document.getElementById('receiptItems');
  receiptItems.innerHTML = cartItemsArray.map(({ product, qty, pricePerUnit, qtyType, displayUnit, weightInKg }) => {
    let price, total;
    if (qtyType === 'piece') {
      price = product.pricePerPiece;
      total = price * qty;
    } else if (qtyType === 'grams') {
      price = product.price;
      total = (price * qty) / 1000;
    } else if (qtyType === 'kg') {
      price = product.price;
      total = price * qty;
    } else {
      price = product.price;
      total = price * qty;
    }
    return `<div class='receipt-item'>${product.name} x ${qty} (${displayUnit || product.unit}) - ₹${total.toFixed(2)}</div>`;
  }).join('');
  // Subtotal, GST, Discount, Total
  const subtotal = cartItemsArray.reduce((sum, item) => {
    if (item.qtyType === 'piece') return sum + (item.product.pricePerPiece * item.qty);
    if (item.qtyType === 'grams') return sum + (item.product.price * item.qty / 1000);
    if (item.qtyType === 'kg') return sum + (item.product.price * item.qty);
    return sum + (item.product.price * item.qty);
  }, 0);
  const gst = subtotal * 0.05;
  const grandTotal = subtotal + gst - discount;
  document.getElementById('receiptSubtotal').textContent = `Subtotal: ₹${subtotal.toFixed(2)}`;
  document.getElementById('receiptGst').textContent = `GST (5%): ₹${gst.toFixed(2)}`;
  document.getElementById('receiptTotal').textContent = `Total: ₹${grandTotal.toFixed(2)}`;
  if (discount > 0) {
    document.getElementById('receiptDiscount').textContent = `Discount: -₹${discount.toFixed(2)}`;
    document.getElementById('receiptDiscount').style.display = 'block';
  } else {
    document.getElementById('receiptDiscount').style.display = 'none';
  }
}

function closeReceipt() {
  document.getElementById('receiptModal').style.display = 'none';
}

function handlePrint() {
  window.print();
}

// Add this function after updateCart
function changeCartQty(productId, delta) {
  if (!cart[productId]) return;
  let newQty = (parseFloat(cart[productId].qty) || 0) + delta;
  // Get min value based on type
  const product = cart[productId].product;
  const isSweet = product.category === 'Sweets-Wet' || product.category === 'Sweets-Dry';
  let minQty = 1;
  if (isSweet && cart[productId].qtyType === 'grams') minQty = 50;
  if (isSweet && cart[productId].qtyType === 'kg') minQty = 0.1;
  if (newQty < minQty) {
    removeFromCart(productId);
    return;
  }
  cart[productId].qty = newQty;
  // Recalculate weight for sweets
  if (isSweet && cart[productId].qtyType === 'grams') {
    cart[productId].weightInKg = newQty / 1000;
  } else if (isSweet && cart[productId].qtyType === 'kg') {
    cart[productId].weightInKg = newQty;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
  updateDiscount();
} 