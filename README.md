# Northstar Storefront

Portfolio project by Shagun Sharma. A React catalog with search, product pages, and a cart. The product list is local sample data so the app runs without a backend. Original sample code, not a client storefront.

## Stack

React 18, React Router 6, Vite.

## Run

```bash
npm install
npm run dev
```

Open the URL Vite prints, usually `http://127.0.0.1:5173`.

```bash
npm run build
```

writes the production bundle to `dist/`.

## What you can do

- Search by name or SKU and filter by category
- Open a product and add it only while stock remains
- Change quantities in the cart up to the available count
- Place a demo order, which clears the cart and does not take payment

## Layout

```
src/data/products.js          catalog and currency formatting
src/context/CartContext.jsx   cart state
src/pages/CatalogPage.jsx     search and filters
src/pages/ProductPage.jsx     one product
src/pages/CartPage.jsx        quantities and demo checkout
```

Prices are integers of paise (`priceCents`) and formatted with `Intl.NumberFormat`.
