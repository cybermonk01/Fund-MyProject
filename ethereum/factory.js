import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json'

const instance= new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xdA6e7a0485D9C8D24E9B561856Fbb453F53eF13D'
);

export default instance;