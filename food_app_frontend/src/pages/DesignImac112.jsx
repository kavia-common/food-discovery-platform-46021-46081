import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * DesignImac112
 * This page renders the static Figma-derived screen (iMac - 1) within the app.
 * - It scopes all styles by adding a top-level wrapper class to reduce conflicts.
 * - It injects the existing CSS and JS from /assets paths at mount and removes them at unmount.
 * - It reconstructs the static HTML structure from assets/imac-1-1-2.html using React.
 * Assets:
 *   - CSS: /assets/imac-1-1-2.css
 *   - JS:  /assets/imac-1-1-2.js (enhances hover/focus behaviors; guarded for browser only)
 *   - Images: /assets/figmaimages/*
 */
function DesignImac112() {
  useEffect(() => {
    // Inject stylesheet from public /assets path to avoid bundler scope and keep original CSS intact
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = '/assets/imac-1-1-2.css';
    cssLink.setAttribute('data-design-imac112', 'true');
    document.head.appendChild(cssLink);

    // Inject JS safely (runs only in browser, guarded by the script itself)
    const script = document.createElement('script');
    script.src = '/assets/imac-1-1-2.js';
    script.defer = true;
    script.setAttribute('data-design-imac112', 'true');
    document.body.appendChild(script);

    return () => {
      // Cleanup to avoid leaking into other pages
      if (cssLink && cssLink.parentNode) cssLink.parentNode.removeChild(cssLink);
      if (script && script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  // Note: We wrap entire content in a namespacing container to reduce global CSS impact.
  return (
    <div className="design-imac112-wrapper" style={{ background: '#fff', minHeight: '100vh' }}>
      <div className="screen screen-1280x720" role="document">
        {/* Hero circular background layers */}
        <div className="hero-circles" aria-hidden="true">
          <div className="circle circle-large" />
          <div className="circle circle-inner" />
        </div>

        {/* Navigation */}
        <header className="nav-bar" role="banner">
          <a className="nav-left logo" href="#" aria-label="Food Hunt home">
            <img
              className="logo-icon"
              src="/assets/figmaimages/figma_image_1_12.svg"
              alt="Food Hunt logo emblem"
              width="24"
              height="15"
              loading="eager"
              decoding="sync"
            />
            <span className="logo-text" aria-hidden="false">Food Hunt</span>
          </a>
          <nav className="nav-center" aria-label="Primary">
            <a href="#" className="nav-item">Breakfast</a>
            <a href="#" className="nav-item">Lunch</a>
            <a href="#" className="nav-item">Dinner</a>
          </nav>
          <div className="nav-right lock" role="img" aria-label="Secure account">
            <img
              className="lock-body"
              src="/assets/figmaimages/figma_image_1_10.svg"
              alt=""
              width="18"
              height="11"
              aria-hidden="true"
            />
            <img
              className="lock-shackle"
              src="/assets/figmaimages/figma_image_1_11.svg"
              alt=""
              width="10"
              height="9"
              aria-hidden="true"
            />
          </div>
        </header>

        {/* Left content */}
        <main className="content" role="main">
          <h1 className="title-1">Delicious</h1>
          <h2 className="title-2">The Hunger Games</h2>
          <p className="copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor justo, enim eu aliquam. Eget et pharetra
            pharetra, amet tortor sagittis senectus. Dictum ultrices
          </p>
          <a href="#" className="btn btn-cta" aria-label="Hunt Now" role="button">
            Hunt Now
            <span className="btn-underline" aria-hidden="true" />
          </a>
        </main>

        {/* Right hero images cluster */}
        <section className="hero-images" aria-label="Featured dishes">
          {/* central big dish */}
          <img
            className="img-center-main"
            src="/assets/figmaimages/figma_image_3_6.png"
            srcSet="/assets/figmaimages/figma_image_3_6.png 1x"
            alt="Featured entrée with vegetables and rice"
            width="255"
            height="287"
            loading="eager"
            decoding="async"
          />
          {/* small circular items along arc */}
          <img className="img img-1" src="/assets/figmaimages/figma_image_3_43.png" alt="Dish 1" width="101" height="100" loading="lazy" decoding="async" />
          <img className="img img-2" src="/assets/figmaimages/figma_image_3_44.png" alt="Dish 6" width="101" height="100" loading="lazy" decoding="async" />
          <img className="img img-3" src="/assets/figmaimages/figma_image_6_7.png" alt="Dish 8" width="101" height="100" loading="lazy" decoding="async" />
          <img className="img img-4" src="/assets/figmaimages/figma_image_6_6.png" alt="Dish 7" width="101" height="100" loading="lazy" decoding="async" />
          <img className="img img-5" src="/assets/figmaimages/figma_image_3_5.png" alt="Dish 3" width="101" height="100" loading="lazy" decoding="async" />
          <img className="img img-6" src="/assets/figmaimages/figma_image_6_8.png" alt="Dish 9" width="101" height="100" loading="lazy" decoding="async" />
          <img className="img img-7" src="/assets/figmaimages/figma_image_3_4.png" alt="Dish 2" width="101" height="100" loading="lazy" decoding="async" />
          <img className="img img-8" src="/assets/figmaimages/figma_image_6_9.png" alt="Dish 10" width="101" height="100" loading="lazy" decoding="async" />
          {/* small center badge */}
          <img className="badge" src="/assets/figmaimages/figma_image_6_24.png" alt="Center badge" width="42" height="42" loading="lazy" decoding="async" />
          {/* small top center image from group listing */}
          <img className="img img-center-small" src="/assets/figmaimages/figma_image_3_42.png" alt="Center small" width="100" height="100" loading="lazy" decoding="async" />
        </section>

        {/* Bottom navigation circles */}
        <div className="nav-circle nav-circle-left" role="img" aria-label="Navigate left">
          <img src="/assets/figmaimages/figma_image_3_56.svg" alt="" width="46" height="46" aria-hidden="true" />
        </div>
        <div className="nav-circle nav-circle-right" role="img" aria-label="Navigate right" />
      </div>
    </div>
  );
}

export default DesignImac112;
