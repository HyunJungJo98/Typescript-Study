export class Block {
    public index:number;
    public hash: string;
    public previousHash : string;
    public data : string;
    public timestamp : number;

    static calculate = (
        index:number,
        previousHash:string,
        timestamp:number,
        data:string
    ) : string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    constructor(
        index:number,
        hash:string,
        previousHash:string,
        data:string,
        timestamp:number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock:Block = new Block(0, "11", "", "hello", 123456)

let blockchain : Block[] = [genesisBlock];
blockchain.push(genesisBlock)
// console.log(blockchain);

const getBlockchain = () : Block[] => blockchain;
const getLatestBlock = () : Block => getBlockchain[blockchain.length - 1];
const getNewTimeStamp = () : number => Math.round(new Date().getTime()/1000)