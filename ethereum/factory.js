import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xA26334f21bE8bAb909808b7aD8cd3269dD827A20'  
);

export default instance;
