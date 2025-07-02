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

.catch(error => console.error('Error fetching crypto data:', error));
}

function cryptoButton() {
    refreshCryptoTable();
    clearInterval(cryptoIntervalID);
    cryptoIntervalID = setInterval(refreshCryptoTable, 900000); 
}

function refreshStockTable() {
    // Update VOO
    fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=VOO&apikey=O6XK5IPJCQOKE2L5")
        .then(response => response.json())

        .then(data => {
        console.log(data);
    
    document.getElementById("VOOPrice").innerText = parseFloat(data["Global Quote"]["05. price"]).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById("VOOChange").innerText = parseFloat(data["Global Quote"]["09. change"]).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
   
    if (data["Global Quote"]["09. change"] < 0) {
        let tempVar = document.getElementById("VOOChange");
        tempVar.classList.add("negative");
    }
    else {
        let tempVar = document.getElementById("VOOChange");
        tempVar.classList.add("positive");
    }

    })

    .catch(error => console.error('Error fetching stock data:', error));

    // Update FBGRX
    fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=FBGRX&apikey=O6XK5IPJCQOKE2L5")
        .then(response => response.json())

        .then(data => {
        console.log(data);
    
    document.getElementById("FBGRXPrice").innerText = parseFloat(data["Global Quote"]["05. price"]).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById("FBGRXChange").innerText = parseFloat(data["Global Quote"]["09. change"]).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
   
    if (data["Global Quote"]["09. change"] < 0) {
        let tempVar = document.getElementById("FBGRXChange");
        tempVar.classList.add("negative");
    }
    else {
        let tempVar = document.getElementById("FBGRXChange");
        tempVar.classList.add("positive");
    }

    })

    .catch(error => console.error('Error fetching stock data:', error));

    // Update QQQM
    fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=QQQM&apikey=O6XK5IPJCQOKE2L5")
        .then(response => response.json())

        .then(data => {
        console.log(data);
    
    document.getElementById("QQQMPrice").innerText = parseFloat(data["Global Quote"]["05. price"]).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById("QQQMChange").innerText = parseFloat(data["Global Quote"]["09. change"]).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
   
    if (data["Global Quote"]["09. change"] < 0) {
        let tempVar = document.getElementById("QQQMChange");
        tempVar.classList.add("negative");
    }
    else {
        let tempVar = document.getElementById("QQQMChange");
        tempVar.classList.add("positive");
    }

    })

    .catch(error => console.error('Error fetching stock data:', error));

    // Update SCHW
    fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SCHW&apikey=O6XK5IPJCQOKE2L5")
        .then(response => response.json())

        .then(data => {
        console.log(data);
    
    document.getElementById("SCHWPrice").innerText = parseFloat(data["Global Quote"]["05. price"]).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById("SCHWChange").innerText = parseFloat(data["Global Quote"]["09. change"]).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
   
    if (data["Global Quote"]["09. change"] < 0) {
        let tempVar = document.getElementById("SCHWChange");
        tempVar.classList.add("negative");
    }
    else {
        let tempVar = document.getElementById("SCHWChange");
        tempVar.classList.add("positive");
    }

    })

    .catch(error => console.error('Error fetching stock data:', error));

    // Update SCHD
    fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SCHD&apikey=O6XK5IPJCQOKE2L5")
        .then(response => response.json())

        .then(data => {
        console.log(data);
    
    document.getElementById("SCHDPrice").innerText = parseFloat(data["Global Quote"]["05. price"]).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById("SCHDChange").innerText = parseFloat(data["Global Quote"]["09. change"]).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
   
    if (data["Global Quote"]["09. change"] < 0) {
        let tempVar = document.getElementById("SCHDChange");
        tempVar.classList.add("negative");
    }
    else {
        let tempVar = document.getElementById("SCHDChange");
        tempVar.classList.add("positive");
    }

    })

    .catch(error => console.error('Error fetching stock data:', error));
}   

function stockButton() {
    refreshStockTable();
}

cryptoIntervalID = setInterval(refreshCryptoTable, 900000);

document.addEventListener("DOMContentLoaded", function() {
    refreshCryptoTable();
    refreshStockTable();
});
