import { useState, useEffect } from 'react';
import Web3 from 'web3';

export const useWeb3 = () => {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);

    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                try {
                    // Request account access
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    
                    const web3Instance = new Web3(window.ethereum);
                    setWeb3(web3Instance);

                    // Get accounts
                    const accounts = await web3Instance.eth.getAccounts();
                    setAccount(accounts[0]);

                    // Load contract
                    const contractABI = []; // Your contract ABI
                    const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
                    
                    const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
                    setContract(contractInstance);

                    // Listen for account changes
                    window.ethereum.on('accountsChanged', (newAccounts) => {
                        setAccount(newAccounts[0]);
                    });

                } catch (error) {
                    console.error('Error initializing Web3:', error);
                }
            } else {
                console.log('Please install MetaMask!');
            }
        };

        initWeb3();
    }, []);

    return { web3, account, contract };
};