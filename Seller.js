let userInfo = $("#userInfo");
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
    ` 
userInfo.html(html);
console.log("sdfds");
}
xhr.send();
let productsBar = $("#items");
let productsRequest = new XMLHttpRequest();
productsRequest.open('GET', url + '/products?author_id='+id)
productsRequest.responseType = 'json';
productsRequest.onload = function(){
    let products = productsRequest.response
    console.log(products.length)
    for (let i =0; i < products.length; i++) {
    console.log("fsdfsdf")
    let html = `
    <div class="sellersprod">
        <h1>${products[i].name}</h1>
        <img class="pfp" src="${products[i].photo_url}">
        <p>Price: ${products[i].price}$</p>
        <p>Description:${products[i].description}</p>
    </div>`
    productsBar.append(html);
    }
    
}
productsRequest.send();