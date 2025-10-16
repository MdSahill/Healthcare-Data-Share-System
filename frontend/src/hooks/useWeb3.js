// Placeholder hook for connecting to web3 wallets
import { useState } from 'react';

export default function useWeb3() {
  const [connected, setConnected] = useState(false);
  return { connected, connect: () => setConnected(true) };
}
