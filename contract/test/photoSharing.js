let photoSharing = artifacts.require('photoSharing');

contract('photoSharing', () => {
  let contract = null;
  before(async () => {
    contract = await photoSharing.deployed();
  });

  it('Should Deploy', async () => {
    assert(contract.address != '');
  });

  it('Should return name', async () => {
    let res = await contract.name();
    assert(res === 'Share Photos');
  });

  it('should return Images', async () => {
    await contract.uploadImg();
    let res = await contract.images(1);
    // assert(res.desctiption == 'TEST');
  });
});
