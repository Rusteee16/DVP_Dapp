const SHA25 = require('crypto-js/sha256');

class Block{
    constructor(index, timestamp, data, previousHash=''){
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previousHash=previousHash;
        this.hash=this.calculateHash();
    }

    calculateHash(){
        return SHA25(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain=[this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0,"02/05/2022","Genesis block","0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid(){
        for(let i=1; i<this.chain.lenth; i++){
            const currentBlock=this.chain[i];
            const previousBlock = this.chain[i-1];

            if(currentBlock.hash != currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousBlock != previousBlock.hash){
                return false;
            }
        }

        return true;
    }
}

let DVP= new Blockchain();
DVP.addBlock(new Block(1,"03/05/2022",{ name:"Rakshith", age:21, aadhar_no:123456231478, sex:'M', Vaccine_details:{vaccine:"CoviShield",Vaccine_date:"03/05/2022"}}));
DVP.addBlock(new Block(2,"07/05/2022",{ name:"Jennifer", age:31, aadhar_no:789456321452, sex:'F', Vaccine_details:{vaccine:"Covaxin",Vaccine_date:"07/05/2022"}}));

//console.log("Is Blockchain valid?"+DVP.isChainValid());

console.log(JSON.stringify(DVP,null,4))