'use client';

import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/ml', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputText: input })
    });

    const data = await res.json();
    setResults(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans p-4">
      <main className="gap-3 w-full items-start max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Silahkan cari skripsi yg mirip"
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Cari
          </button>
        </form>

        <div className="space-y-4">
          {results.map((r, i) => (
            <div key={i} className="p-4 bg-white shadow rounded">
              <p className="text-gray-600"><strong>Skor:</strong> {r.score}</p>
              <p className="text-gray-600">{r.doc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
