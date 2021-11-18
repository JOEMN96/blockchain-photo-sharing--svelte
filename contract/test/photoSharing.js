let photoSharing = artifacts.require('photoSharing');

contract('photoSharing', () => {
  let contract;
  before(async () => {
    contract = await contract.deployed();
  });

  it('It should be deployed', () => {
    console.log(contract);
    assert(contract.address != '');
  });
});
