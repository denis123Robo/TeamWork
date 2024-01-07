/* <div class="ProductCard">
        <h1>LED Display</h1>
        <img class="productPhoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhI1AsBQIZUhqUOsKil_3Ejul5gMGigh-QA&usqp=CAU">
        <p>Price: 92$</p>
        <p> Description: Can Display 2-lines</p>
        <a href="#">seller profile</a>
        <div class="buyButton">Buy</div> 
    </div> */
    let products = [];
    let productsArray = [];
    let xhr = new XMLHttpRequest();
    let url = 'https://my-json-server.typicode.com/denis123Robo/TeamWork';
    xhr.open('GET', url + '/products');
    xhr.responseType = 'json';
    xhr.onload = function(){
        products = xhr.response;
        console.log(products.length)
        for (let i =0; i < products.length; i++) {
            let html = `
            <div class="ProductCard">
                <h1>${products[i].name}</h1>
                <img class="productPhoto" src="${products[i].photo_url}">
                <p>Price: ${products[i].price}</p>
                <p> Description: ${products[i].description}</p>
                <a href="Seller.html?id=${products[i].author_id}">seller profile</a>
                <div class="buyButton" onclick="addProductToCart(${products[i].id})">Buy</div> 
            </div> `
            $("#Products-grid").append(html);
        }

    }
    xhr.send();
    $("#cart-products").hide()
    function openCart() {
        $("#cart-products").toggle()
    }
    function addProductToCart(id){
        let product = products.find(function(p){
            return p.id = id})
        $("#cart-products").append(product.name);
        console.log(product);
    }