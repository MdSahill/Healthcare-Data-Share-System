// Simple JS model placeholder for DB object mapping
class Record {
  constructor({ id, owner, ipfsHash, timestamp }) {
    this.id = id;
    this.owner = owner;
    this.ipfsHash = ipfsHash;
    this.timestamp = timestamp;
  }
}

module.exports = Record;
