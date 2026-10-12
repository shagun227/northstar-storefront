import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { CartPage } from "./pages/CartPage.jsx";
import { CatalogPage } from "./pages/CatalogPage.jsx";
import { ProductPage } from "./pages/ProductPage.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/products/:sku" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </>
  );
}
