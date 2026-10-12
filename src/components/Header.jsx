import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export function Header() {
  const { count } = useCart();

  return (
    <header className="top">
      <Link className="brand" to="/">
        Northstar
      </Link>
      <nav>
        <Link to="/">Catalog</Link>
        <Link to="/cart">Cart ({count})</Link>
      </nav>
    </header>
  );
}
