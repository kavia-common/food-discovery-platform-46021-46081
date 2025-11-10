import React, { useEffect, useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryChips from "../components/CategoryChips";
import FoodCard from "../components/FoodCard";
import DetailsModal from "../components/DetailsModal";
import "../styles/theme.css";

// PUBLIC_INTERFACE
export default function Home() {
  /**
   * Home page for browsing dishes with search and category filters
   * Data source:
   *  - Local: ./src/data/foods.json
   *  - Optional future backend via REACT_APP_API_BASE (GET /foods)
   */
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState(null);
  const [selected, setSelected] = useState(null);

  const CATEGORIES = ["Breakfast", "Lunch", "Dinner", "Snacks", "Drinks"];

  useEffect(() => {
    const base = process.env.REACT_APP_API_BASE;
    async function load() {
      try {
        if (base) {
          const resp = await fetch(`${base.replace(/\/$/, "")}/foods`);
          if (!resp.ok) throw new Error("Failed to fetch from API");
          const data = await resp.json();
          setItems(Array.isArray(data) ? data : []);
        } else {
          const local = await import("../data/foods.json");
          setItems(local.default || local);
        }
      } catch (e) {
        // fallback to local on error
        try {
          const local = await import("../data/foods.json");
          setItems(local.default || local);
        } catch {
          setItems([]);
        }
      }
    }
    load();
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter((it) => {
      const matchCat = category ? it.category === category : true;
      const matchQuery = query
        ? (it.name?.toLowerCase().includes(query) || it.description?.toLowerCase().includes(query))
        : true;
      return matchCat && matchQuery;
    });
  }, [items, q, category]);

  return (
    <div>
      <header className="header" role="banner">
        <div className="container headerInner">
          <a href="/" className="brand">
            <span className="brandMark" aria-hidden="true" />
            <span className="brandName">Food Discovery</span>
          </a>
          <SearchBar
            value={q}
            onChange={setQ}
            onClear={() => setQ("")}
          />
          <nav aria-label="Design route">
            <a className="chip" href="/design/imac-1-1-2">Design Preview</a>
          </nav>
        </div>
        <div className="container">
          <CategoryChips
            categories={CATEGORIES}
            active={category}
            onToggle={setCategory}
          />
        </div>
      </header>

      <main className="container" role="main" aria-live="polite">
        <section aria-label="Dishes">
          <div className="grid" style={{ margin: "16px 0 24px" }}>
            {filtered.map((item) => (
              <FoodCard key={item.id} item={item} onOpen={setSelected} />
            ))}
          </div>
          {!filtered.length && (
            <p className="footerNote">No results. Try adjusting your search or filters.</p>
          )}
        </section>
      </main>

      <footer className="footerNote" role="contentinfo">
        Ocean Professional theme • Accessible • Responsive grid
      </footer>

      <DetailsModal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
