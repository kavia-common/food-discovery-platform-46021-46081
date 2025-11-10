import React from "react";

// PUBLIC_INTERFACE
export default function CategoryChips({ categories, active, onToggle }) {
  /**
   * Renders filter chips for categories.
   * active: string | null
   * onToggle: (cat|null) -> void
   */
  return (
    <div className="chips" role="toolbar" aria-label="Filter by category">
      {categories.map((cat) => {
        const pressed = active === cat;
        return (
          <button
            key={cat}
            type="button"
            className="chip"
            aria-pressed={pressed ? "true" : "false"}
            onClick={() => onToggle(pressed ? null : cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
