class AccessRequest {
  constructor({ id, requester, recordId, status }) {
    this.id = id;
    this.requester = requester;
    this.recordId = recordId;
    this.status = status || 'pending';
  }
}

module.exports = AccessRequest;
