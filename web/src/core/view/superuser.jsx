import React, { useEffect, useState } from 'react';
import { UserAuthCheck } from "../../core/auth/components/UserAuthCheck"

/**
 * Superuser Panel
 */
const SuperUser = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await UserAuthCheck('/superuser');
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Superuser Page</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        data ? (
          <div>
            <h2>Protected Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ) : (
          <p>Loading data...</p>
        )
      )}
    </div>
  );
}

export default SuperUser