import { Link } from "react-router-dom";
import { formatMoney } from "../data/products.js";

export function ProductCard({ product }) {
  return (
    <article className="card">
      <p className="eyebrow">{product.category}</p>
      <h2>
        <Link to={`/products/${product.sku}`}>{product.name}</Link>
      </h2>
      <p>{product.summary}</p>
      <p className="price">
        {formatMoney(product.priceCents, product.currency)}
        <span>{product.available > 0 ? `${product.available} in stock` : "Out of stock"}</span>
      </p>
    </article>
  );
}
