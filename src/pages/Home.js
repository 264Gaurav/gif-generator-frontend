import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  return ( 
    <div>
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-2xl font-semibold">GIF Generator</h1>
      </header>
      <main>
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">GIF Generator</h1>
      <p className="text-lg mb-6">
        Create your own animated GIFs with our easy-to-use generator tool.
      </p>
      <Link to={"/dashboard"}>
      <button className="px-6 py-3 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600">
        Get Started
      </button>
      </Link>
      </div>
      </main>
      <footer className="bg-gray-800 p-4 text-white text-center">
        <p>© {new Date().getFullYear()} GIF Generator. All rights reserved.</p>
      </footer>
    </div>
  )

}
