import { useState, useEffect } from 'react';

// Custom hook to fetch (get) data from an API
const useFetch = (url) => {
  const [data, setData] = useState(null);      // Store fetched data
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json); // Save the data
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
