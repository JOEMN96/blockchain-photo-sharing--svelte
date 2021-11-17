const Migrations = artifacts.require('photoSharing');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
