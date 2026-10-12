import { useMemo, useState } from "react";
import { ProductCard } from "../components/ProductCard.jsx";
import { categories, products } from "../data/products.js";

export function CatalogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesQuery =
        needle === "" ||
        product.name.toLowerCase().includes(needle) ||
        product.sku.toLowerCase().includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section>
      <h1>Catalog</h1>
      <p className="lede">Frames, lenses, and care. Prices are shown in rupees.</p>
      <div className="filters">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search name or SKU"
          aria-label="Search products"
        />
        <div className="chips">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={item === category ? "chip active" : "chip"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {visible.length === 0 ? (
        <p>No products match that search.</p>
      ) : (
        <div className="grid">
          {visible.map((product) => (
            <ProductCard key={product.sku} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
