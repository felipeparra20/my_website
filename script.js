function refreshCryptoTable() {
    // Fetch cryptocurrency data from CryptoCompare API
    fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,SOL&tsyms=USD")
        .then(response => response.json())

    .then(data => {
    console.log(data)

    // Update Bitcoin data
    document.getElementById("btcPrice").innerText = data.RAW.BTC.USD.PRICE.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById("btcChangeDollar").innerText = data.RAW.BTC.USD.CHANGE24HOUR.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById("btcChangePercent").innerText = new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 2 }).format(data.RAW.BTC.USD.CHANGEPCT24HOUR / 100);
   
    if (data.RAW.BTC.USD.CHANGE24HOUR < 0) {
        let tempVar = document.getElementById("btcChangeDollar");
        tempVar.classList.add("negative");
    }
    else {
        let tempVar = document.getElementById("btcChangeDollar");
        tempVar.classList.add("positive");
    }
    if (data.RAW.BTC.USD.CHANGEPCT24HOUR < 0) {
        let tempVar = document.getElementById("btcChangePercent");
        tempVar.classList.add("negative");
    }
    else {
        let tempVar = document.getElementById("btcChangePercent");
        tempVar.classList.add("positive");
    }

    // Update Ethereum data
    document.getElementById("ethPrice").innerText = data.RAW.ETH.USD.PRICE.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById("ethChangeDollar").innerText = data.RAW.ETH.USD.CHANGE24HOUR.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById("ethChangePercent").innerText = new Intl.NumberFormat('en-US', { style: 'percent',minimumFractionDigits: 2 }).format(data.RAW.ETH.USD.CHANGEPCT24HOUR / 100);
    
    if (data.RAW.ETH.USD.CHANGE24HOUR < 0) {
        let tempVar = document.getElementById("ethChangeDollar");
        tempVar.classList.add("negative");
    }
    else {
        let tempVar = document.getElementById("ethChangeDollar");
        tempVar.classList.add("positive");
    }
    if (data.RAW.ETH.USD.CHANGEPCT24HOUR < 0) {
        let tempVar = document.getElementById("ethChangePercent");
        tempVar.classList.add("negative");
    }
    else {
        let tempVar = document.getElementById("ethChangePercent");
        tempVar.classList.add("positive");
    }

    // Update Solana data
    document.getElementById("solPrice").innerText = data.RAW.SOL.USD.PRICE.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById("solChangeDollar").innerText = data.RAW.SOL.USD.CHANGE24HOUR.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById("solChangePercent").innerText = new Intl.NumberFormat('en-US', { style: 'percent',minimumFractionDigits: 2 }).format(data.RAW.SOL.USD.CHANGEPCT24HOUR / 100);

    if (data.RAW.SOL.USD.CHANGE24HOUR < 0) {
        let tempVar = document.getElementById("solChangeDollar");
        tempVar.classList.add("negative");
    }
    else {
        let tempVar = document.getElementById("solChangeDollar");
        tempVar.classList.add("positive");
    }
    if (data.RAW.SOL.USD.CHANGEPCT24HOUR < 0) {
        let tempVar = document.getElementById("solChangePercent");
        tempVar.classList.add("negative");
    }
    else {
        let tempVar = document.getElementById("solChangePercent");
        tempVar.classList.add("positive");
    }

    // Update XRP data
    document.getElementById("xrpPrice").innerText = data.RAW.XRP.USD.PRICE.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById("xrpChangeDollar").innerText = data.RAW.XRP.USD.CHANGE24HOUR.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById("xrpChangePercent").innerText = new Intl.NumberFormat('en-US', { style: 'percent',minimumFractionDigits: 2 }).format(data.RAW.XRP.USD.CHANGEPCT24HOUR / 100);

    if (data.RAW.XRP.USD.CHANGE24HOUR < 0) {
        let tempVar = document.getElementById("xrpChangeDollar");
        tempVar.classList.add("negative");
    }
    else {
        let tempVar = document.getElementById("xrpChangeDollar");
        tempVar.classList.add("positive");
    }
    if (data.RAW.XRP.USD.CHANGEPCT24HOUR < 0) {
        let tempVar = document.getElementById("xrpChangePercent");
        tempVar.classList.add("negative");
    }
    else {
        let tempVar = document.getElementById("xrpChangePercent");
        tempVar.classList.add("positive");
    }
})

.catch(error => console.error('Error fetching data:', error));
}

function onclickParameters() {
    refreshCryptoTable();
    clearInterval(cryptoIntervalID);
    cryptoIntervalID = setInterval(refreshCryptoTable, 900000); 
}

cryptoIntervalID = setInterval(refreshCryptoTable, 900000);

document.addEventListener("DOMContentLoaded", function() {
    refreshCryptoTable();
});
