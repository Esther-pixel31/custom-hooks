import { useState, useEffect } from 'react';

// Custom hook to fetch (get) data from an API
const useFetch = (url) => {
  const [data, setData] = useState(null);      // Store fetched data
  const [loading, setLoading] = useState(true); // Track loading state
  // const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json); // Save the data
      } catch (error) {
        console.error("Fetch error:", error);
        // setError(error)
      } finally {
        setTimeout(() => setLoading(false), 3000); // Stop loading
        // setLoading(false)
      }
    };

    // fetch(url)
    // .then(res => res.json())
    // .then(json => setData(json))
    // .catch(error => console.log(error))

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
