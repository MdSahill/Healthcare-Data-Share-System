// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Healthcare {
    struct Record {
        uint256 id;
        address owner;
        string ipfsHash;
        uint256 timestamp;
    }

    mapping(uint256 => Record) public records;
    uint256 public nextId;

    event RecordAdded(uint256 id, address owner, string ipfsHash);

    function addRecord(string calldata ipfsHash) external returns (uint256) {
        uint256 id = nextId++;
        records[id] = Record(id, msg.sender, ipfsHash, block.timestamp);
        emit RecordAdded(id, msg.sender, ipfsHash);
        return id;
    }

    function getRecord(uint256 id) external view returns (Record memory) {
        return records[id];
    }
}
