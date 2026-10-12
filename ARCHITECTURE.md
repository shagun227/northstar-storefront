# Architecture

The storefront is a single React tree. `main.jsx` wraps the router in `CartProvider`, so every page reads the same cart.

Catalog data lives in `src/data/products.js`. Pages do not fetch a network API. Replacing that module with a client for Harbor Catalog API is the intended next step: the SKUs and `priceCents` fields match that service.

`CartProvider` refuses to add an out-of-stock product and will not raise a line quantity above `available`. Checkout only checks that an email contains `@`, then clears the cart. There is no payment call.
