// This script dynamically fixes asset paths based on hostname
(function() {
  // Check if we're on the GitHub Pages domain
  if (window.location.hostname === 'souhailned.github.io') {
    // Add base path to all asset requests
    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
      if (typeof url === 'string' && url.startsWith('/') && !url.startsWith('/sb1-bu2alq5e/')) {
        url = '/sb1-bu2alq5e' + url;
      }
      return originalFetch.call(this, url, options);
    };
    
    // Fix existing resource links
    document.querySelectorAll('link[href^="/"]').forEach(link => {
      if (!link.href.includes('/sb1-bu2alq5e/')) {
        link.href = '/sb1-bu2alq5e' + link.getAttribute('href');
      }
    });
    
    document.querySelectorAll('script[src^="/"]').forEach(script => {
      if (!script.src.includes('/sb1-bu2alq5e/')) {
        script.src = '/sb1-bu2alq5e' + script.getAttribute('src');
      }
    });
    
    document.querySelectorAll('img[src^="/"]').forEach(img => {
      if (!img.src.includes('/sb1-bu2alq5e/')) {
        img.src = '/sb1-bu2alq5e' + img.getAttribute('src');
      }
    });
  }
})(); 