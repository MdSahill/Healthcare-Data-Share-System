// Placeholder hook to fetch records from backend
import { useState, useEffect } from 'react';

export default function useRecords() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    // fetch('/api/records')...
  }, []);
  return records;
}
