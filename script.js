//function call all the function when the website onload
function executeFunctions(){
    //function to load the quotes
    getInformation();

    //function to load the elements of title and imgs
    loadTitleLogo();
}

async function getInformation(){
    let argentina = await fetch('https://open.er-api.com/v6/latest/ARS');
    let argentinaData = await argentina.json();

    let usa = await fetch('https://open.er-api.com/v6/latest/USD');
    let usaData = await usa.json();

    let bitcoin = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    let bitcoinData = await bitcoin.json();

    //with the answer i can to give the element the content with append.
    document.getElementById('dolarArg').append(`ARS: ${argentinaData.rates.ARS} to USA: ${argentinaData.rates.USD}`);
    document.getElementById('dolarUsd').append(`USD: ${usaData.rates.ARS} to EUR: ${usaData.rates.USD}`);
    document.getElementById('bitcoin').append(`Bitcoin to USD: ${bitcoinData.bpi.USD.rate}`);

    //when i have the diferrent values i can to hidden the Wait image
    document.getElementById('imgWait').style.visibility = 'hidden';
}

//this is only to load the content of tags.
function loadTitleLogo() {
    document.getElementById('title').textContent = "Quotes";
    document.getElementById('imgLogo').setAttribute("src", "/media/sss.png")
    document.getElementById('imgWait').setAttribute("src", "/media/loading.gif");
    document.getElementById('imgWait').style.visibility = 'visible';
}
