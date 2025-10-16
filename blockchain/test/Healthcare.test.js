const Healthcare = artifacts.require("Healthcare");

contract("Healthcare", accounts => {
  it("should add and retrieve a record", async () => {
    const instance = await Healthcare.deployed();
    const tx = await instance.addRecord("QmFakeIpfsHash", { from: accounts[0] });
    const id = tx.logs[0].args.id.toNumber();
    const rec = await instance.getRecord(id);
    assert.equal(rec.owner, accounts[0]);
    assert.equal(rec.ipfsHash, "QmFakeIpfsHash");
  });
});
