let photoSharing = artifacts.require('photoSharing');

contract('photoSharing', () => {
  let contract = null;
  before(async () => {
    contract = await photoSharing.deployed();
  });

  it('Should Deploy', async () => {
    console.log(contract);
    assert(contract.address != '');
  });

  it('Should return name', async () => {
    let res = await contract.name();
    assert(res === 'Share Photos');
  });
});
