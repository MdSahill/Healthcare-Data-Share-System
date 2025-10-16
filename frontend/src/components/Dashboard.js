import React, { useState, useEffect } from 'react';
import { useWeb3 } from '../hooks/useWeb3';
import { createRecord, getPatientRecords } from '../services/api';

const Dashboard = () => {
    const { account } = useWeb3();
    const [records, setRecords] = useState([]);
    const [newRecord, setNewRecord] = useState({
        recordType: '',
        data: ''
    });

    useEffect(() => {
        if (account) {
            loadRecords();
        }
    }, [account]);

    const loadRecords = async () => {
        try {
            const response = await getPatientRecords();
            setRecords(response.data.records);
        } catch (error) {
            console.error('Error loading records:', error);
        }
    };

    const handleCreateRecord = async (e) => {
        e.preventDefault();
        try {
            await createRecord({
                patientId: account,
                recordData: JSON.parse(newRecord.data),
                recordType: newRecord.recordType
            });
            
            setNewRecord({ recordType: '', data: '' });
            loadRecords();
            alert('Record created successfully!');
        } catch (error) {
            console.error('Error creating record:', error);
            alert('Error creating record');
        }
    };

    return (
        <div className="dashboard">
            <h1>Healthcare Records Dashboard</h1>
            
            <div className="create-record">
                <h2>Create New Record</h2>
                <form onSubmit={handleCreateRecord}>
                    <select 
                        value={newRecord.recordType}
                        onChange={(e) => setNewRecord({...newRecord, recordType: e.target.value})}
                        required
                    >
                        <option value="">Select Record Type</option>
                        <option value="LAB_RESULT">Lab Result</option>
                        <option value="PRESCRIPTION">Prescription</option>
                        <option value="DIAGNOSIS">Diagnosis</option>
                        <option value="TREATMENT_PLAN">Treatment Plan</option>
                    </select>
                    
                    <textarea
                        placeholder="Record data (JSON format)"
                        value={newRecord.data}
                        onChange={(e) => setNewRecord({...newRecord, data: e.target.value})}
                        required
                        rows="6"
                    />
                    
                    <button type="submit">Create Record</button>
                </form>
            </div>

            <div className="records-list">
                <h2>Your Medical Records</h2>
                {records.map(record => (
                    <div key={record.recordId} className="record-card">
                        <h3>{record.recordType}</h3>
                        <p>Date: {new Date(parseInt(record.timestamp) * 1000).toLocaleDateString()}</p>
                        <p>IPFS Hash: {record.ipfsHash}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;