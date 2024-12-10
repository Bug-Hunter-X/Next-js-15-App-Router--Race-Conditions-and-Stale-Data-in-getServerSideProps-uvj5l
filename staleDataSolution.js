// staleDataSolution.js
import { Suspense, useState, useEffect } from 'react';

export default function Page() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/slow-data'); // Simulate API Call
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Data from getServerSideProps:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// api/slow-data.js

export default async function handler(req, res) {
  await new Promise(resolve => setTimeout(resolve, 2000)); //Simulate slow response
  res.status(200).json({ message: 'Data from slow API' });
} 