$.getJSON("https://financialmodelingprep.com/api/v3/company/stock/list",function(data){
    let i;
    let text = "";
    for (i = 0; i < 23; i++) {
    text += data.symbolsList[i].symbol+`<br/>`;
}
$('#stockSymbolsList').append(text);
})

function searchStock(searchTerm) {
    fetch (`https://financialmodelingprep.com/api/v3/company/profile/${searchTerm}`).then(data =>{
        return data.json();
    }).then (data =>{
        console.log(data);
        init(data);
    })
    fetch(`https://financialmodelingprep.com/api/v3/company/rating/${searchTerm}`).then(data =>{
        return data.json();
    }).then(data =>{
       rating(data);
   })
}

function rating(resultFromServer){
    let score=document.getElementById('score');
    score.innerHTML='Score '+ resultFromServer.rating.score;
}
function init(resultFromServer){
    let stockName=document.getElementById('stockName');
    stockName.innerHTML=resultFromServer.profile.exchange + ": "+ resultFromServer.symbol;
    let price=document.getElementById('price');
    price.innerHTML='Price: USD '+ resultFromServer.profile.price + " "+ resultFromServer.profile.changesPercentage;
    let companyName=document.getElementById('companyName');
    companyName.innerHTML=resultFromServer.profile.companyName;
    let companyDescription =document.getElementById('companyDescription');
    companyDescription.innerHTML=resultFromServer.profile.description;
    $('#icon').attr('src',resultFromServer.profile.image);
}
document.getElementById('searchButton').addEventListener('click',()=>{
let searchTerm = document.getElementById('searchInput').value;
if(searchTerm)
searchStock(searchTerm);
})
