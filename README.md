# Krishna & Krishna Sweet Shop Billing System

A modern, mobile-friendly billing system for sweet shops and restaurants.

## 🚀 Quick Start

### Option 1: Using Python (Recommended)
```bash
npm start
# or
npm run dev
# or
npm run serve
```

### Option 2: Using Node.js (if Python not available)
```bash
npm run serve:node
```

### Option 3: Manual Start
```bash
cd sweet-shop-billing
python -m http.server 8000
```

Then open: http://localhost:8000

## 📱 Mobile Features

- **Responsive Design**: Works perfectly on phones and tablets
- **Touch-Friendly**: Optimized for touch interactions
- **Mobile Cart**: Slide-up cart panel with swipe gestures
- **Collapsible Search**: Toggle search bar on mobile
- **Floating Cart Button**: Easy access to cart with item count

## 🛠️ Why It Wasn't Working Before

The original `package.json` was configured for a React project, but this is a vanilla HTML/CSS/JS application. The issues were:

1. **Wrong Dependencies**: React dependencies in package.json
2. **Missing Scripts**: No scripts to run the HTML application
3. **Project Structure**: Git repo was set up for React but contains HTML app

## 📁 Project Structure

```
krishna/
├── sweet-shop-billing/     # Main application
│   ├── index.html         # Main HTML file
│   ├── style.css          # Styles with mobile optimizations
│   ├── script.js          # JavaScript with mobile features
│   └── kk.jpg            # Logo image
├── package.json           # Project configuration
└── README.md             # This file
```

## 🌟 Features

- **Product Management**: Fast food, wet sweets, dry sweets
- **Cart System**: Add/remove items with quantity controls
- **Receipt Generation**: Print-ready receipts with order details
- **Search Functionality**: Find products quickly
- **Mobile Optimized**: Perfect for tablets and phones
- **Touch Gestures**: Swipe to close cart, tap feedback
- **Responsive Design**: Adapts to all screen sizes

## 🔧 Development

To modify the application:

1. Edit files in `sweet-shop-billing/`
2. Refresh browser to see changes
3. Test on mobile devices for responsive design

## 📱 Mobile Testing

1. Open browser dev tools (F12)
2. Click device toggle (📱 icon)
3. Select mobile device
4. Test touch interactions and responsive design

## 🚀 Deployment

Simply upload the `sweet-shop-billing/` folder to any web server. No build process required! 