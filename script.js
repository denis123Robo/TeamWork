/* <div class="ProductCard">
        <h1>LED Display</h1>
        <img class="productPhoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhI1AsBQIZUhqUOsKil_3Ejul5gMGigh-QA&usqp=CAU">
        <p>Price: 92$</p>
        <p> Description: Can Display 2-lines</p>
        <a href="#">seller profile</a>
        <div class="buyButton">Buy</div> 
    </div> */
    let productsArray = [];
    let xhr = new HMLHttpRequest();
    let url = 'https://my-json-server.typicode.com/denis123Robo/TeamWork';
    xhr.open('GET', url + 'products');
    xhr.responseType = 'json';
    xhr.onload = function(){
        let products = xhr.response;
        console.log(products)
    }