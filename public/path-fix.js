// This script dynamically fixes asset paths based on hostname
(function() {
  // Check if we're using hash routing
  const isHashRouting = window.location.hash && window.location.hash.length > 0;
  
  // Fix paths based on the domain
  if (window.location.hostname === 'souhailned.github.io') {
    // Add base path to all asset requests for GitHub Pages
    fixPaths('/sb1-bu2alq5e');
  } else if (isHashRouting) {
    // For custom domain with hash routing, ensure absolute URLs are used
    fixPaths('');
  }
  
  function fixPaths(basePath) {
    // Fix fetch requests
    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
      if (typeof url === 'string' && url.startsWith('/') && !url.startsWith(basePath + '/')) {
        url = basePath + url;
      }
      return originalFetch.call(this, url, options);
    };
    
    // Fix link elements
    document.querySelectorAll('link[href^="/"]').forEach(link => {
      if (!link.href.includes(basePath + '/')) {
        link.href = basePath + link.getAttribute('href');
      }
    });
    
    // Fix script elements
    document.querySelectorAll('script[src^="/"]').forEach(script => {
      if (!script.src.includes(basePath + '/')) {
        script.src = basePath + script.getAttribute('src');
      }
    });
    
    // Fix image elements
    document.querySelectorAll('img[src^="/"]').forEach(img => {
      if (!img.src.includes(basePath + '/')) {
        img.src = basePath + img.getAttribute('src');
      }
    });
    
    // Create a MutationObserver to watch for new elements being added
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1) { // ELEMENT_NODE
              // Check for new elements with src or href attributes
              if (node.hasAttribute && node.hasAttribute('src') && node.getAttribute('src').startsWith('/')) {
                if (!node.src.includes(basePath + '/')) {
                  node.src = basePath + node.getAttribute('src');
                }
              }
              if (node.hasAttribute && node.hasAttribute('href') && node.getAttribute('href').startsWith('/')) {
                if (!node.href.includes(basePath + '/')) {
                  node.href = basePath + node.getAttribute('href');
                }
              }
              
              // Check child elements too
              const childLinks = node.querySelectorAll('link[href^="/"], a[href^="/"]');
              const childScripts = node.querySelectorAll('script[src^="/"]');
              const childImages = node.querySelectorAll('img[src^="/"]');
              
              childLinks.forEach(link => {
                if (!link.href.includes(basePath + '/')) {
                  link.href = basePath + link.getAttribute('href');
                }
              });
              
              childScripts.forEach(script => {
                if (!script.src.includes(basePath + '/')) {
                  script.src = basePath + script.getAttribute('src');
                }
              });
              
              childImages.forEach(img => {
                if (!img.src.includes(basePath + '/')) {
                  img.src = basePath + img.getAttribute('src');
                }
              });
            }
          });
        }
      });
    });
    
    // Start observing changes to the DOM
    observer.observe(document, {
      childList: true,
      subtree: true
    });
  }
})(); 