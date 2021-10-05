const baseUrl = "https://wordpress.relouding.eu/wp-json/wc/store/products"
const productContainer = document.querySelector(".product-container-new")


async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();

    products.forEach(function(product){
        productContainer.innerHTML += `

        <div class="product-new">
        <img src="${product.images[0].src}" alt"${product.name}">
        <div class="nam-new">${product.name}</div>
        <div class="des-new">Description: ${product.short_description}</div>
        <div class="pri-new">Price: ${product.prices.price} $</div>
        <a href="jacketinfo.html?id=${product.id}" class="see-more-new">More Details</a>
        <a href="#0" class="add-to-cart-new" data-id=${product.id}>Add to cart</a>
        </div>

        `
    })
}

getProducts(baseUrl);
