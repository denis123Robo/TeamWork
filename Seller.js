let userInfo = $("#userInfo")
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id)
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/denis123Robo/TeamWork';
xhr.open('GET', url + '/users/'+id);
xhr.responseType = 'json';
xhr.onload = function(){
    let user = xhr.response
    console.log(user)
    let html = `
    <div class="sellerprofile">
        <h1 class="name">${user.name} ${user.surname}</h1>
        <img class="seller" src="${user.photo_url}">
        <p>I am very black nigger</p>
        <p class="b">balance: ${user.balance}$</p>
    </div>
    <h1 id="SPText">Seller products</h1>
    <div class="items">
        
    </div>` 
userInfo.html(html);
console.log("sdfds");
}
xhr.send();
let productsRequest = new XMLHttpRequest();
productsRequest.open('GET', url + '/products?author_id='+id)
productsRequest.responseType = 'json';
productsRequest.onload = function(){
    let products = productsRequest.response
    let html = `
    <div class="sellersprod">
            <h1>Babijohn</h1>
            <img class="pfp" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12137/production/_105793047_34cephaswilliamsfinalimagesmaller.jpg">
            <p>Price: 2$</p>
            <p>Description: works good</p>
        </div>`
}
xhr.send();