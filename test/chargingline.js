/*
let Web3 = require("web3")
let fs = require("fs")
let web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:47768'));
let address = "0xec0e71ad0a90ffe1909d27dac207f7680abba42d"
let abi = JSON.parse(fs.readFileSync("./solidity/line.abi").toString("utf8"))
let MyContract = web3.eth.contract(abi);
let contractInstance = MyContract.at(address);

// add line with id and macAddr
function addLine(lineId, macAddr) {
    let coinbase = "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b";
    let txHash = contractInstance.AddLine(lineId, macAddr, {from: coinbase, gas: 1000000});
    console.log("txHash:");
    console.log(result);
    var receipt = web3.eth.getTransactionReceipt(txHash)
    console.log(receipt);
    
    let myEvent = contractInstance.AddLineEvent();
    myEvent.watch(function (err,result) {
        if(err){
            console.log("Add  Error:");
            console.log(err);
            myEvent.stopWatching();
            return err
        }else{
           console.log(result);
           myEvent.stopWatching();
           return result
        }
    })
}

// get line by id
function getLineInfo(lineId){
    let result = contractInstance.GetSharedLine(lineId)
    let exist = result[0]
    if (exist){
        let lineInfo = {lineId: result[1].c[0], macAddr: result[2]}
        console.log("shared line: ");
        console.log(lineInfo);
    }else{
        console.log("not exist. ");
    }
}
addLine(18, "www")
getLineInfo(18)
*/