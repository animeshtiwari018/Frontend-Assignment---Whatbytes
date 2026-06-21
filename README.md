# Whatbytes Store - Frontend E-Commerce Catalog

A modern, responsive, and highly interactive frontend e-commerce catalog built using **Next.js 15+ (App Router)**, **React**, **Tailwind CSS**, and **Lucide React**. This project is fully responsive, features a global state management system for the shopping cart, and provides real-time client-side searching and filtering.

## 🔗 Project Links

*   **GitHub Repository:** https://github.com/animeshtiwari018/Frontend-Assignment---Whatbytes
*   **Live Deployment URL:**https://frontend-assignment-whatbytes-two.vercel.app/

---

## 🚀 Key Features

*   **Global Cart State (React Context):** Implemented a unified cart state using `CartProvider` and the custom hook `useCart()`. Cart data is preserved across page refreshes using browser `localStorage` integration.
*   **Dual-Range Price Filtering:** Dynamic, interactive price filters allowing users to filter products in real-time between `$0` and `$1000`.
*   **Multi-Category Selection:** Checkbox filters for categories (Electronics, Clothing, Home, Footwear) that update the product grid instantly.
*   **Real-time Title Search:** A search bar in the header allowing users to filter down items instantly by keywords.
*   **Side-Drawer Cart View:** A slide-out cart listing all items, quantities, subtotal calculations, estimated delivery shipping thresholds (free shipping for orders over $100), and a one-click checkout simulation.
*   **Dynamic Product Details Page:** Custom dynamic routes `product/[id]` with stock badges, alternate thumbnail showcase, review lists, and detailed product breakdown.
*   **Responsive layouts:** Mobile-optimized, touch-friendly UI using CSS Flexbox/Grid, and Tailwind CSS.

---

## 🛠️ Tech Stack

*   **Framework:** Next.js 15+ (App Router)
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide React
*   **State Management:** React Context API
*   **Storage:** HTML5 LocalStorage API

---

## 💻 Setup Instructions

Follow these instructions to run the project locally on your machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.x or higher recommended) and `npm` installed.


### 1. Enter the Next.js app directory
```bash
cd frontend-assignment-whatbytes
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. View in browser
Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

### 5. Build for Production
To generate a production-optimized build:
```bash
npm run build
npm start