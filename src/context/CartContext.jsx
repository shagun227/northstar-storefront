import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [lines, setLines] = useState([]);

  const api = useMemo(() => {
    function add(product) {
      if (product.available < 1) {
        return;
      }
      setLines((current) => {
        const existing = current.find((line) => line.sku === product.sku);
        if (!existing) {
          return [...current, { ...product, quantity: 1 }];
        }
        return current.map((line) =>
          line.sku === product.sku && line.quantity < product.available
            ? { ...line, quantity: line.quantity + 1 }
            : line
        );
      });
    }

    function setQuantity(sku, quantity) {
      setLines((current) =>
        current
          .map((line) => (line.sku === sku ? { ...line, quantity } : line))
          .filter((line) => line.quantity > 0)
      );
    }

    function clear() {
      setLines([]);
    }

    const count = lines.reduce((sum, line) => sum + line.quantity, 0);
    const totalCents = lines.reduce((sum, line) => sum + line.priceCents * line.quantity, 0);

    return { lines, add, setQuantity, clear, count, totalCents };
  }, [lines]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return value;
}
