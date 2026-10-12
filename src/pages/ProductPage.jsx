import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { findProduct, formatMoney } from "../data/products.js";

export function ProductPage() {
  const { sku } = useParams();
  const product = findProduct(sku);
  const { add } = useCart();

  if (!product) {
    return (
      <section>
        <h1>Product not found</h1>
        <Link to="/">Back to the catalog</Link>
      </section>
    );
  }

  return (
    <section className="detail">
      <p className="eyebrow">{product.sku}</p>
      <h1>{product.name}</h1>
      <p>{product.summary}</p>
      <p className="price">{formatMoney(product.priceCents, product.currency)}</p>
      <p>{product.available > 0 ? `${product.available} available` : "Out of stock"}</p>
      <button type="button" disabled={product.available < 1} onClick={() => add(product)}>
        Add to cart
      </button>
    </section>
  );
}
