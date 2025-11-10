import React, { useEffect, useRef } from "react";

// PUBLIC_INTERFACE
export default function DetailsModal({ item, onClose }) {
  /**
   * Accessible modal dialog for viewing dish details.
   * - Closes on ESC
   * - Focus trap simple: initial focus on close button
   * - ARIA roles and labeling
   */
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    // focus close by default
    setTimeout(() => closeRef.current?.focus(), 0);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="modalOverlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      <div className="modalDialog">
        <header className="modalHeader">
          <h2 id="dialog-title" className="modalTitle">{item.name}</h2>
          <button
            ref={closeRef}
            className="modalClose"
            aria-label="Close details"
            onClick={onClose}
          >
            ✕
          </button>
        </header>
        <div className="modalBody">
          <img
            src={item.image}
            alt={item.name}
            className="modalImg"
            loading="eager"
          />
          <section>
            <p style={{ marginTop: 0 }}>{item.fullDescription || item.description}</p>
            <p className="meta" style={{ padding: 0, margin: "8px 0" }}>
              <span aria-hidden="true">⭐ {item.rating.toFixed(1)}</span>
              <span>• {item.category}</span>
              <span>• ${item.price.toFixed(2)}</span>
            </p>
            <h3 style={{ marginBottom: 6 }}>Ingredients</h3>
            <ul className="ingredientList">
              {(item.ingredients || []).map((it, idx) => (
                <li key={idx}>{it}</li>
              ))}
            </ul>
            <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
              <button className="btnPrimary" type="button" onClick={() => alert("Added to cart!")}>
                Add to Cart — ${item.price.toFixed(2)}
              </button>
              <button className="chip" type="button" onClick={onClose}>Close</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
