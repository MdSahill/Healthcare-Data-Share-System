// Minimal IPFS helper - integrate ipfs-http-client in real app
module.exports = {
  async upload(data) {
    // return ipfsHash
    return 'QmFakeIpfsHash';
  },
  async download(ipfsHash) {
    return Buffer.from('mock data');
  }
};
