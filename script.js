// Product data
const products = [
  // Fast Food Section - Burgers 🍔
  {
    id: 'cheeseburger',
    name: 'Cheeseburger',
    price: 180,
    unit: 'piece',
    category: 'Fast Food',
    subcategory: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop'
  },
  {
    id: 'chicken-burger',
    name: 'Chicken Burger',
    price: 220,
    unit: 'piece',
    category: 'Fast Food',
    subcategory: 'Burgers',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop'
  },
  {
    id: 'veggie-burger',
    name: 'Veggie Burger',
    price: 160,
    unit: 'piece',
    category: 'Fast Food',
    subcategory: 'Burgers',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop'
  },
  {
    id: 'double-patty-burger',
    name: 'Double Patty Burger',
    price: 280,
    unit: 'piece',
    category: 'Fast Food',
    subcategory: 'Burgers',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop'
  },

  // Fast Food Section - Pizzas 🍕
  {
    id: 'margherita',
    name: 'Margherita Pizza',
    price: 350,
    unit: 'medium',
    category: 'Fast Food',
    subcategory: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop'
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni Pizza',
    price: 420,
    unit: 'medium',
    category: 'Fast Food',
    subcategory: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop'
  },
  {
    id: 'farmhouse-veggie',
    name: 'Farmhouse Veggie Pizza',
    price: 380,
    unit: 'medium',
    category: 'Fast Food',
    subcategory: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop'
  },
  {
    id: 'bbq-chicken',
    name: 'BBQ Chicken Pizza',
    price: 450,
    unit: 'medium',
    category: 'Fast Food',
    subcategory: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop'
  },

  // Fast Food Section - Hot Dogs 🌭
  {
    id: 'classic-hot-dog',
    name: 'Classic Hot Dog',
    price: 120,
    unit: 'piece',
    category: 'Fast Food',
    subcategory: 'Hot Dogs',
    image: 'https://images.unsplash.com/photo-1612392062129-4c660c81a3e9?w=400&h=300&fit=crop'
  },
  {
    id: 'chili-cheese-dog',
    name: 'Chili Cheese Dog',
    price: 150,
    unit: 'piece',
    category: 'Fast Food',
    subcategory: 'Hot Dogs',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop'
  },
  {
    id: 'veggie-dog',
    name: 'Veggie Dog',
    price: 100,
    unit: 'piece',
    category: 'Fast Food',
    subcategory: 'Hot Dogs',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop'
  },

  // Fast Food Section - Sides 🍟
  {
    id: 'french-fries',
    name: 'French Fries',
    price: 80,
    unit: 'medium',
    category: 'Fast Food',
    subcategory: 'Sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop'
  },
  {
    id: 'onion-rings',
    name: 'Onion Rings',
    price: 90,
    unit: 'medium',
    category: 'Fast Food',
    subcategory: 'Sides',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop'
  },
  {
    id: 'mozzarella-sticks',
    name: 'Mozzarella Sticks',
    price: 120,
    unit: '6 pieces',
    category: 'Fast Food',
    subcategory: 'Sides',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop'
  },
  {
    id: 'nuggets',
    name: 'Nuggets (Chicken/Veg)',
    price: 100,
    unit: '6 pieces',
    category: 'Fast Food',
    subcategory: 'Sides',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop'
  },

  // Fast Food Section - Mexican-Inspired 🌮
  {
    id: 'tacos',
    name: 'Tacos (Soft/Hard Shell)',
    price: 140,
    unit: '2 pieces',
    category: 'Fast Food',
    subcategory: 'Mexican-Inspired',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop'
  },
  {
    id: 'burritos',
    name: 'Burritos',
    price: 180,
    unit: 'piece',
    category: 'Fast Food',
    subcategory: 'Mexican-Inspired',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop'
  },
  {
    id: 'nachos',
    name: 'Nachos with Cheese',
    price: 160,
    unit: 'medium',
    category: 'Fast Food',
    subcategory: 'Mexican-Inspired',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop'
  },
  {
    id: 'quesadillas',
    name: 'Quesadillas',
    price: 200,
    unit: 'piece',
    category: 'Fast Food',
    subcategory: 'Mexican-Inspired',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop'
  },

  // Fast Food Section - Pasta 🍝
  {
    id: 'mac-cheese',
    name: 'Mac & Cheese',
    price: 220,
    unit: 'plate',
    category: 'Fast Food',
    subcategory: 'Pasta',
    image: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400&h=300&fit=crop'
  },
  {
    id: 'alfredo-pasta',
    name: 'Alfredo Pasta',
    price: 280,
    unit: 'plate',
    category: 'Fast Food',
    subcategory: 'Pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop'
  },
  {
    id: 'arrabbiata',
    name: 'Arrabbiata Pasta',
    price: 260,
    unit: 'plate',
    category: 'Fast Food',
    subcategory: 'Pasta',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop'
  },

  // Fast Food Section - Drinks 🥤
  {
    id: 'coke-pepsi',
    name: 'Coke / Pepsi',
    price: 60,
    unit: 'bottle',
    category: 'Fast Food',
    subcategory: 'Drinks',
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=300&fit=crop'
  },
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    price: 50,
    unit: 'glass',
    category: 'Fast Food',
    subcategory: 'Drinks',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop'
  },
  {
    id: 'milkshakes',
    name: 'Milkshakes (Chocolate/Vanilla/Strawberry)',
    price: 120,
    unit: 'glass',
    category: 'Fast Food',
    subcategory: 'Drinks',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    price: 100,
    unit: 'glass',
    category: 'Fast Food',
    subcategory: 'Drinks',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
  },

  // Fast Food Section - Desserts 🍨
  {
    id: 'soft-serve',
    name: 'Soft Serve Ice Cream',
    price: 80,
    unit: 'cone',
    category: 'Fast Food',
    subcategory: 'Desserts',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop'
  },
  {
    id: 'sundaes',
    name: 'Sundaes',
    price: 150,
    unit: 'piece',
    category: 'Fast Food',
    subcategory: 'Desserts',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop'
  },
  {
    id: 'donuts',
    name: 'Donuts',
    price: 60,
    unit: 'piece',
    category: 'Fast Food',
    subcategory: 'Desserts',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
  },
  {
    id: 'churros',
    name: 'Churros',
    price: 80,
    unit: '4 pieces',
    category: 'Fast Food',
    subcategory: 'Desserts',
    image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400&h=300&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'rasgulla',
    name: 'Rasgulla',
    price: 600,
    pricePerPiece: 15,
    unit: 'kg',
    category: 'Sweets-Wet',
    subcategory: 'Syrup Sweets',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'rasmalai',
    name: 'Rasmalai',
    price: 900,
    pricePerPiece: 25,
    unit: 'kg',
    category: 'Sweets-Wet',
    subcategory: 'Milk Sweets',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'jalebi',
    name: 'Jalebi',
    price: 400,
    pricePerPiece: 10,
    unit: 'kg',
    category: 'Sweets-Wet',
    subcategory: 'Fried Sweets',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'gulab-jamun-mix',
    name: 'Gulab Jamun Mix',
    price: 750,
    pricePerPiece: 18,
    unit: 'kg',
    category: 'Sweets-Wet',
    subcategory: 'Syrup Sweets',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'cham-cham',
    name: 'Cham Cham',
    price: 700,
    pricePerPiece: 17,
    unit: 'kg',
    category: 'Sweets-Wet',
    subcategory: 'Syrup Sweets',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'rabri',
    name: 'Rabri',
    price: 850,
    pricePerPiece: 22,
    unit: 'kg',
    category: 'Sweets-Wet',
    subcategory: 'Milk Sweets',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'imarti',
    name: 'Imarti',
    price: 350,
    pricePerPiece: 8,
    unit: 'kg',
    category: 'Sweets-Wet',
    subcategory: 'Fried Sweets',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'barfi',
    name: 'Barfi',
    price: 900,
    pricePerPiece: 22,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Traditional Sweets',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'laddu',
    name: 'Laddu',
    price: 700,
    pricePerPiece: 18,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Traditional Sweets',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'peda',
    name: 'Peda',
    price: 800,
    pricePerPiece: 20,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Milk Sweets',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'almonds',
    name: 'Almonds',
    price: 1200,
    pricePerPiece: 30,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Dry Fruits',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'cashews',
    name: 'Cashews',
    price: 1000,
    pricePerPiece: 25,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Dry Fruits',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'pista-badam',
    name: 'Pista Badam Mix',
    price: 1100,
    pricePerPiece: 28,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Dry Fruits',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'walnuts',
    name: 'Walnuts',
    price: 950,
    pricePerPiece: 24,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Dry Fruits',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'besan-laddu',
    name: 'Besan Laddu',
    price: 650,
    pricePerPiece: 16,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Traditional Sweets',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'coconut-barfi',
    name: 'Coconut Barfi',
    price: 750,
    pricePerPiece: 19,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Traditional Sweets',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'milk-peda',
    name: 'Milk Peda',
    price: 850,
    pricePerPiece: 21,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Milk Sweets',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 'kalakand',
    name: 'Kalakand',
    price: 950,
    pricePerPiece: 24,
    unit: 'kg',
    category: 'Sweets-Dry',
    subcategory: 'Premium Sweets',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  }
];

// App state
let cart = {};
let selectedCategory = 'Fast Food';
let discount = 0;

// DOM elements
const productList = document.getElementById('productList');
const cartItems = document.getElementById('cartItems');
const cartSummary = document.getElementById('cartSummary');
const cartSection = document.getElementById('cartSection');
const mobileCartToggle = document.getElementById('mobileCartToggle');
const mobileCartOverlay = document.getElementById('mobileCartOverlay');
const mobileCartCount = document.getElementById('mobileCartCount');
const receiptModal = document.getElementById('receiptModal');

// Mobile state
let isMobile = false;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  checkMobileView();
  renderProducts();
  setupEventListeners();
  setupMobileEventListeners();
  
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
  // Close modal when clicking outside
  receiptModal.addEventListener('click', (e) => {
    if (e.target === receiptModal) {
      closeReceipt();
    }
  });
  
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

  // Group products by subcategory for Fast Food and Sweets
  if (selectedCategory === 'Fast Food' || selectedCategory === 'Sweets-Wet' || selectedCategory === 'Sweets-Dry') {
    const groupedProducts = {};
    filteredProducts.forEach(product => {
      const subcategory = product.subcategory || 'Other';
      if (!groupedProducts[subcategory]) {
        groupedProducts[subcategory] = [];
      }
      groupedProducts[subcategory].push(product);
    });

    let html = '';
    Object.keys(groupedProducts).forEach(subcategory => {
      const emoji = getSubcategoryEmoji(subcategory);
      html += `<div class="subcategory-section">
        <h2 class="subcategory-header">${emoji} ${subcategory}</h2>
        <div class="subcategory-products">
          ${groupedProducts[subcategory].map(product => {
            const isInCart = cart[product.id];
            const isSweet = product.category === 'Sweets-Wet' || product.category === 'Sweets-Dry';
            
            return `
              <div class="product-card">
                <div class="product-category-badge">${subcategory}</div>
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
          }).join('')}
        </div>
      </div>`;
    });
    productList.innerHTML = html;
  } else {
    // For other categories, render normally
    productList.innerHTML = filteredProducts.map(product => {
      const isInCart = cart[product.id];
      const categoryLabel = product.category === 'Sweets-Wet' ? 'Wet Sweet' : 
                           product.category === 'Sweets-Dry' ? 'Dry Sweet' : 
                           product.category;
      
      return `
        <div class="product-card">
          <div class="product-category-badge">${categoryLabel}</div>
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
        let minValue, stepValue, displayQty, unit, price;
        
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
              <input type="number" min="${minValue}" step="${stepValue}" value="${displayQty}" 
                     onchange="updateQuantity('${product.id}', this.value)" 
                     class="qty-input">
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

// Clear cart
function clearCart() {
  cart = {};
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

// Open receipt modal
function openReceipt() {
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

  // Generate order number and date
  const orderNumber = 'ORD' + Date.now().toString().slice(-6);
  const dateTime = new Date().toLocaleString('en-IN', { hour12: true });

  // Update receipt content
  document.getElementById('orderNumber').textContent = orderNumber;
  document.getElementById('dateTime').textContent = dateTime;
  document.getElementById('receiptSubtotal').textContent = `Subtotal: ₹${subtotal.toFixed(2)}`;
  document.getElementById('receiptGst').textContent = `GST (5%): ₹${gst.toFixed(2)}`;
  document.getElementById('receiptTotal').textContent = `Total: ₹${grandTotal.toFixed(2)}`;

  if (discount > 0) {
    document.getElementById('receiptDiscount').textContent = `Discount: -₹${discount.toFixed(2)}`;
    document.getElementById('receiptDiscount').style.display = 'block';
  } else {
    document.getElementById('receiptDiscount').style.display = 'none';
  }

  // Render receipt items
  document.getElementById('receiptItems').innerHTML = cartItemsArray.map((item) => {
    const { product, qty, qtyType, displayUnit } = item;
    let itemPrice;
    
    // Calculate price based on quantity type for sweets
    if (qtyType === 'piece') {
      itemPrice = product.pricePerPiece * qty;
    } else if (qtyType === 'grams') {
      itemPrice = product.price * qty / 1000; // Convert grams to kg
    } else if (qtyType === 'kg') {
      itemPrice = product.price * qty;
    } else {
      itemPrice = product.price * qty;
    }
    
    const displayText = displayUnit ? `${product.name} x ${qty}${displayUnit}` : `${product.name} x ${qty}`;
    
    return `
      <div class="receipt-item">
        <span>${displayText}</span>
        <span>₹${itemPrice.toFixed(2)}</span>
      </div>
    `;
  }).join('');

  receiptModal.style.display = 'flex';
}

// Close receipt modal
function closeReceipt() {
  receiptModal.style.display = 'none';
}

// Handle print
function handlePrint() {
  window.print();
}

// Filter products function
function filterProducts(category) {
  selectedCategory = category;
  
  // Update active button
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