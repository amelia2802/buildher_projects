require("@nomicfoundation/hardhat-toolbox");

// Configure env variables
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

/** @type import('hardhat/config').HardhatUserConfig */
const config = {
  solidity: "0.8.21",
  networks: {
    hardhat: {
      loggingEnabled: false
    },
    polygonZkevm: {
      chainId: 1101,
      url: "https://rpc.ankr.com/polygon_zkevm",
      forking: {
        url: "https://rpc.ankr.com/polygon_zkevm"
      },
      accounts: [process.env.PRIVATE_KEY_DEPLOYER]
    },
    polygonZkevmTestnet: {
      chainId: 2442,
      url: "https://rpc.cardona.zkevm-rpc.com",
      forking: {
        url: "https://rpc.cardona.zkevm-rpc.com"
      },
      accounts: [process.env.PRIVATE_KEY_DEPLOYER]
    }
  }
};

module.exports = config;
