document.querySelectorAll('a[data-cta]').forEach((link) => {
  link.addEventListener('click', () => {
    const position = link.dataset.cta;
    if (window.gtag) window.gtag('event', 'line_click', { cta_position: position });
    if (window.fbq) window.fbq('trackCustom', 'LineClick', { position });
  });
});
