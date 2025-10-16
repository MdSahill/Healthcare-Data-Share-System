import React from 'react';
import RecordList from './RecordList';
import AccessRequests from './AccessRequests';

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <RecordList />
      <AccessRequests />
    </div>
  );
}
