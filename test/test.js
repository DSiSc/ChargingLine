const ChargingLine = artifacts.require("ChargingLine");

contract('ChargingLine', (accounts) => {
    it('hhhhhhhhhhhhhhhhhhhht', async () => {
        const changeLineInstance = await ChargingLine.deployed();
        const firstAccount = accounts[0]
        const txHash =  await changeLineInstance.AddLine(1, "ttt", {from: firstAccount, gas: 1000000})
        let myEvent = changeLineInstance.AddLineEvent();
        var out;
        myEvent.watch(function (err,result) {
            out = result;
            if(err){
                console.log("Add  Error:");
                console.log(err);
                myEvent.stopWatching();
            } else {
                console.log("Result:");
                console.log(result);
               myEvent.stopWatching();
            }
      });
      // assert.equal(err, "Owner should have 10000 MetaCoin initially");
      assert.equal(out, "Owner should have 10000 MetaCoin initially");
    });
});
