
import Cof from "../src/abi/Coffee.json";
import { ethers } from "ethers";
import Web3 from "web3";



const isBrowser = () => typeof window !== "undefined";

const { ethereum } = isBrowser();

if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}
const COFFEE_CONTRACT = "0x09e6b4c35678A3ca634CC8Cd38f600132CAA1060";

export const getData =async () => {
    try {
        // const provider = new ethers.providers.JsonRpcProvider(
        //     "https://sepolia.infura.io/v3/290819ba5ca344eea8990cb5ccaa8e6a"
        // );
        const provider =
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();
          console.log("provider",provider);
    
      const signer = provider.getSigner();
      console.log(signer);
        const Role = new ethers.Contract(COFFEE_CONTRACT, Cof, signer);
        console.log("role",Role);
        const answer = await Role.getmemo();
        console.log(answer)
        return answer;
        if (Array.isArray(answer)) {
            const formattedEntries = answer.map(entry => ({
                name: entry[0],
                message: entry[1],
                date: entry[2].toString(),
                hexvalue: entry[3]
            }));
            return formattedEntries;
        } else {
            console.error('Invalid answer format:', answer);
        }
    } catch (error) {
        console.error('Error fetching memo:', error);
    }
}