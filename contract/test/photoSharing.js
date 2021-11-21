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

  it('Add new Image', async () => {
    let r = await contract.uploadImg('OXHASH', 'ADDING NEW IMAGE');
    let res = await contract.images(1);
    assert(res.description == 'ADDING NEW IMAGE');
  });

  it('it should fail (Passing empty data to hash)', async () => {
    try {
      await contract.uploadImg('', 'ADDING NEW IMAGE');
      assert.fail('Error Thrown');
    } catch (err) {
      assert.include(err.reason, 'Image Hash is required');
    }
  });

  it('it should fail (Passing empty data to desc)', async () => {
    try {
      await contract.uploadImg('0X', '');
      assert.fail('Failed');
    } catch (error) {
      assert.include(error.reason, 'Description is Required');
    }
  });
});
