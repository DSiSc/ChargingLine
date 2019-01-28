/*
let Web3 = require("web3")
let fs = require("fs")
let web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:47768'));
let lineAddress = "0xec0e71ad0a90ffe1909d27dac207f7680abba42d"
let lineAbi = JSON.parse(fs.readFileSync("./solidity/line.abi").toString("utf8"))
let lineContract = web3.eth.contract(lineAbi);
let lineContractInstance = lineContract.at(lineAddress);

let scanAddress = "0x42b7441e55c42cf6e3f580be89aacba22b27e7bf"
let scanAbi = JSON.parse(fs.readFileSync("./solidity/scan.abi").toString("utf8"))
let scanContract = web3.eth.contract(scanAbi);
let scanContractInstance = scanContract.at(scanAddress);

// add line with id and macAddr
function addLine(lineId, macAddr) {
    let coinbase = "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b";
    let result = lineContractInstance.AddLine(lineId, macAddr, {from: coinbase, gas: 1000000});
    console.log("txHash:");
    console.log(result);
    var receipt = web3.eth.getTransactionReceipt(result)
    console.log(receipt);
    let myEvent = contractInstance.AddLineEvent();
    myEvent.watch(function (err,result) {
        if(err){
            console.log("Add  line error:");
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
        console.log("shared line:");
        console.log(lineInfo);
    }else{
        console.log("not exist.");
    }
}

// add scan record
function addScanRelation(id, scanTime, lineId, adId, siteId){
    let coinbase = "0x8e854896c278abfaa6038f8fe99f31a21998e337";
    let result = scanContractInstance.AddScanRelation(id, scanTime, lineId, adId, siteId, {from: coinbase, gas: 1000000});
    console.log("txHash:");
    console.log(result);

    let myEvent = scanContractInstance.AddScanRelationEvent();
    myEvent.watch(function (err,result) {
        if(err){
            console.log("Add  scan error:");
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

// addLine(13, "www")
// getLineInfo(12)
addScanRelation(1, "2019-1-28", 2, 3, 4)
*/