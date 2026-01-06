import { useEffect, useState } from "react";

const products = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: ["Electronics", "Clothing", "Food", "Books"][i % 4],
  price: (Math.random() * 100 + 10).toFixed(2),
}));

export default function LiveSearch() {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(true);

    const timer = setTimeout(() => {
      const result = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredProducts(result);
      setIsSearching(false);
    }, 300);

    // ✅ Cleanup (important for debounce)
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Live Product Search</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {isSearching && <p>Searching...</p>}

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            {p.name} | {p.category} | ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
