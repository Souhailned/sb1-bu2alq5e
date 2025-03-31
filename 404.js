(function() {
  // Get the current path
  var path = window.location.pathname;
  var host = window.location.hostname;
  var search = window.location.search;
  
  // If we're on the 404 page, redirect to the homepage with the path as a hash
  if (path !== '/' && path !== '/index.html') {
    // Convert the path to a hash route
    var hashPath = path.replace(/^\//, '');
    var newUrl;
    
    if (host === 'souhailned.github.io') {
      // For GitHub Pages
      newUrl = '/sb1-bu2alq5e/#/' + hashPath + search;
    } else {
      // For custom domain
      newUrl = '/#/' + hashPath + search;
    }
    
    // Redirect to the homepage with the hash route
    window.location.replace(newUrl);
  }
})(); 