import Link from 'next/link';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    // Get the current path and convert it to a hash route
    const path = window.location.pathname.replace(/^\//, '');
    
    // Redirect to the homepage with the hash route
    if (path && path !== 'not-found') {
      window.location.href = '/#/' + path + window.location.search;
    } else {
      window.location.href = '/';
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Pagina niet gevonden</h1>
      <p className="mb-6">De pagina die u zoekt bestaat niet. U wordt doorgestuurd naar de homepage.</p>
      <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        Terug naar homepage
      </Link>
    </div>
  );
} 