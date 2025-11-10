(function(){
  if (typeof document === 'undefined') return;

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Subtle hover scaling on images (in addition to CSS) to ensure consistent behavior across browsers
  var imgs = document.querySelectorAll('.hero-images .img, .hero-images .img-center-small, .badge, .img-center-main');
  imgs.forEach(function(img){
    img.style.pointerEvents = 'auto';
    // Keyboard focus support
    img.setAttribute('tabindex', '0');
    if (!prefersReduced) {
      img.addEventListener('mouseenter', function(){ img.classList.add('hovering'); });
      img.addEventListener('mouseleave', function(){ img.classList.remove('hovering'); });
    }
    img.addEventListener('focus', function(){ img.classList.add('hovering'); });
    img.addEventListener('blur', function(){ img.classList.remove('hovering'); });
  });

  // Inject lightweight style for JS-controlled state
  var style = document.createElement('style');
  style.textContent = '.hovering{ transform: scale(1.04) !important; -webkit-transform: scale(1.04) !important }';
  document.head.appendChild(style);

  // Enhance CTA focus/keyboard activation for accessibility
  var cta = document.querySelector('.btn-cta');
  if (cta){
    cta.addEventListener('keydown', function(e){
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        cta.click();
      }
    });
  }

  // Add keyboard semantics to nav circles
  ['.nav-circle-left','.nav-circle-right'].forEach(function(sel){
    var el = document.querySelector(sel);
    if (!el) return;
    el.setAttribute('tabindex','0');
    el.setAttribute('role','button');
    el.addEventListener('keydown', function(e){
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  });
})();
