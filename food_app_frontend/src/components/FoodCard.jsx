import React from "react";

// PUBLIC_INTERFACE
export default function FoodCard({ item, onOpen }) {
  /** Card for grid with CTA and quick details */
  return (
    <article className="card" aria-label={`${item.name} card`}>
      <div className="cardMedia">
        <img src={item.image} alt={item.name} loading="lazy" />
        <div className="badgePrice" aria-label={`Price $${item.price.toFixed(2)}`}>
          ${item.price.toFixed(2)}
        </div>
      </div>
      <div className="cardBody">
        <h3 className="cardTitle">{item.name}</h3>
        <p className="cardDesc">{item.description}</p>
        <div className="meta" aria-label={`Rated ${item.rating} out of 5`}>
          <span aria-hidden="true">⭐ {item.rating.toFixed(1)}</span>
          <span>• {item.category}</span>
        </div>
        <div className="ctaRow">
          <button className="btnPrimary" type="button" onClick={() => onOpen(item)}>
            Add to Cart
          </button>
          <button
            className="cardLink"
            type="button"
            onClick={() => onOpen(item)}
            aria-label={`Open details for ${item.name}`}
          >
            Details →
          </button>
        </div>
      </div>
    </article>
  );
}
