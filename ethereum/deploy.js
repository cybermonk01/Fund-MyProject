const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const provider = new HDWalletProvider(
  "mechanic raise bench glow gas follow body machine cook exercise spirit fringe",
  "https://rinkeby.infura.io/v3/322930c7a4e349deae34341c4f7dec88"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({
      data: compiledFactory.bytecode,
      arguments: ["HI there!"],
    })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("contract deployed to", result.options.address);
};

deploy();
