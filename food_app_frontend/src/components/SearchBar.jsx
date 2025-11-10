import React from "react";
import styles from "../styles/theme.css"; // ensure bundler includes CSS

// PUBLIC_INTERFACE
export default function SearchBar({ value, onChange, onClear, id = "food-search" }) {
  /** Accessible search input with clear button */
  return (
    <div className="searchWrap">
      <span className="searchIcon" aria-hidden="true">🔎</span>
      <input
        id={id}
        type="search"
        className="searchInput"
        placeholder="Search dishes by name or description…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search dishes"
        autoComplete="off"
      />
      {value?.length ? (
        <button
          type="button"
          className="clearBtn"
          onClick={onClear}
          aria-label="Clear search"
        >
          ✕
        </button>
      ) : null}
    </div>
  );
}
