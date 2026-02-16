'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<{ message: string; status: string } | null>(
    null
  );

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Failed to fetch from engine:', err));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Football Agent</h1>
        <p>Tactical Analysis Platform</p>
      </div>

      <div className="relative flex place-items-center">
        {data ? (
          <div className="p-4 border rounded bg-green-500/10 border-green-500/20 text-center">
             <h2 className="text-xl font-bold mb-2">Engine Status: {data.status}</h2>
             <p>{data.message}</p>
          </div>
        ) : (
          <div className="p-4 animate-pulse">Connecting to Engine... (Check if backend is running on port 8000)</div>
        )}
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
           <h2 className="mb-3 text-2xl font-semibold">Live Analysis</h2>
           <p className="m-0 max-w-[30ch] text-sm opacity-50">Real-time tactical feedback.</p>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
           <h2 className="mb-3 text-2xl font-semibold">Pitch View</h2>
           <p className="m-0 max-w-[30ch] text-sm opacity-50">2D Visualization of player movements.</p>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
           <h2 className="mb-3 text-2xl font-semibold">AI Assistant</h2>
           <p className="m-0 max-w-[30ch] text-sm opacity-50">Ask tactical questions to the LLM agent.</p>
        </div>
      </div>
    </main>
  );
}
