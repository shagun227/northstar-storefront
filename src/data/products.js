export const products = [
  {
    sku: "FRAME-100",
    name: "Round acetate frame",
    category: "Frames",
    priceCents: 890000,
    currency: "INR",
    available: 24,
    summary: "Lightweight round frame with a keyhole bridge.",
  },
  {
    sku: "FRAME-140",
    name: "Square metal frame",
    category: "Frames",
    priceCents: 760000,
    currency: "INR",
    available: 11,
    summary: "Thin metal square with adjustable nose pads.",
  },
  {
    sku: "LENS-200",
    name: "Clear daily lenses",
    category: "Lenses",
    priceCents: 149000,
    currency: "INR",
    available: 80,
    summary: "Thirty-pack of daily disposable lenses.",
  },
  {
    sku: "LENS-240",
    name: "Blue-filter readers",
    category: "Lenses",
    priceCents: 210000,
    currency: "INR",
    available: 0,
    summary: "Ready readers with a light blue filter. Currently out of stock.",
  },
  {
    sku: "CASE-010",
    name: "Hard shell case",
    category: "Care",
    priceCents: 49000,
    currency: "INR",
    available: 40,
    summary: "Hinged case lined for acetate frames.",
  },
  {
    sku: "CLOTH-011",
    name: "Lens cloth",
    category: "Care",
    priceCents: 15000,
    currency: "INR",
    available: 120,
    summary: "Soft cloth for coated lenses.",
  },
];

export const categories = ["All", ...new Set(products.map((item) => item.category))];

export function findProduct(sku) {
  return products.find((item) => item.sku === sku);
}

export function formatMoney(cents, currency = "INR") {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(cents / 100);
}
