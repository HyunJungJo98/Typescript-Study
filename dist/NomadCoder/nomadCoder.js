"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
exports.Block = Block;
Block.calculate = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "11", "", "hello", 123456);
let blockchain = [genesisBlock];
blockchain.push(genesisBlock);
// console.log(blockchain);
const getBlockchain = () => blockchain;
const getLatestBlock = () => getBlockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
//# sourceMappingURL=nomadCoder.js.map