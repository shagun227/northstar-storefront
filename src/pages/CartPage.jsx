import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { formatMoney } from "../data/products.js";

export function CartPage() {
  const { lines, setQuantity, totalCents, clear } = useCart();
  const [placed, setPlaced] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function placeOrder(event) {
    event.preventDefault();
    if (!email.includes("@")) {
      setError("Enter an email so the receipt has a destination.");
      return;
    }
    setError("");
    setPlaced(true);
    clear();
  }

  if (placed) {
    return (
      <section>
        <h1>Order noted</h1>
        <p>This demo does not charge a card. A receipt would go to {email}.</p>
        <Link to="/">Continue browsing</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Cart</h1>
      {lines.length === 0 ? (
        <p>
          The cart is empty. <Link to="/">Browse the catalog</Link>.
        </p>
      ) : (
        <>
          <ul className="cart">
            {lines.map((line) => (
              <li key={line.sku}>
                <div>
                  <strong>{line.name}</strong>
                  <span>{line.sku}</span>
                </div>
                <input
                  type="number"
                  min="0"
                  max={line.available}
                  value={line.quantity}
                  aria-label={`Quantity for ${line.name}`}
                  onChange={(event) => setQuantity(line.sku, Number(event.target.value))}
                />
                <span>{formatMoney(line.priceCents * line.quantity, line.currency)}</span>
              </li>
            ))}
          </ul>
          <p className="price">Total {formatMoney(totalCents)}</p>
          <form className="panel" onSubmit={placeOrder}>
            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            {error ? <p className="error">{error}</p> : null}
            <button type="submit">Place demo order</button>
          </form>
        </>
      )}
    </section>
  );
}
