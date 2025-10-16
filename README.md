# Healthcare Data Sharing System (JavaScript Stack)

A secure, blockchain-based healthcare records system built with JavaScript technologies.

## Features

- 🔐 Encrypted patient records on IPFS
- 🔗 Ethereum smart contracts for access control
- 👨‍⚕️ Role-based permissions
- 📱 React frontend
- 🚀 Node.js/Express backend

## Quick Start

1. **Install dependencies**
```bash
cd backend && npm install
cd ../frontend && npm install
```
2. **Start local blockchain**
   ```bash
   npx hardhat node
   ```
3. **Deploy contract**
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```
4. **Start services**
   ```bash
   # Backend
   cd backend && npm run dev

   # Frontend  
   cd frontend && npm start
## Technology Stack
- **Blockchain**: Ethereum, Hardhat, Web3.js

-**Storage**: IPFS

--**Backend**: Node.js, Express, MongoDB

--**Frontend**: React, Web3.js

--**Encryption**: CryptoJS
