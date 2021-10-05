var ShoppingCart = (function($) {
  "use strict";
  
  var productsEl = document.querySelector(".products"),
      cartEl =     document.querySelector(".shopping-cart-list"),
      productQuantityEl = document.querySelector(".product-quantity"),
      emptyCartEl = document.querySelector(".empty-cart-btn"),
      cartCheckoutEl = document.querySelector(".cart-checkout"),
      totalPriceEl = document.querySelector(".total-price");
  
  var products = [
    {
      id: 0,
      name: "Jacket 1",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, doloribus.",
      imageUrl: "images/newjacket2.png",
      price: 599
    },
    {
      id: 1,
      name: "Jacket 2",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quod.",
      imageUrl: "images/newjacket1.png",
      price: 699,
    },
    {
      id: 2,
      name: "Jacket 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eum.",
      imageUrl: "images/newjacket2.png",
      price: 799
    },
    {
      id: 3,
      name: "Jacket 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, recusandae.",
      imageUrl: "images/newjacket1.png",
      price: 899
    },
    {
      id: 4,
      name: "Jacket 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, a.",
      imageUrl: "images/newjacket2.png",
      price: 999
    },
    {
      id: 5,
      name: "Jacket 6",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolores.",
      imageUrl: "images/newjacket1.png",
      price: 1199
    }
  ],
      productsInCart = [];
  
  var generateProductList = function() {
    products.forEach(function(item) {
      var productEl = document.createElement("div");
      productEl.className = "product";
      productEl.innerHTML =  `<div class="product-image">
                              <img src="${item.imageUrl}" alt="${item.name}">
                              </div>
                              <div class="product-name"><span>Product:</span> ${item.name}</div>
                              <div class="product-description"><span>Description:</span> ${item.description}</div>
                              <div class="product-price"><span>Price:</span> ${item.price} $</div>
                              <div class="product-add-to-cart">
                              <a href="#0" class="button see-more">More Details</a>
                              <a href="#0" class="button add-to-cart" data-id=${item.id}>Add to cart</a>
                            </div>
                          </div>
`;
                             
productsEl.appendChild(productEl);
    });
  }

  var generateCartList = function() {
    
    cartEl.innerHTML = "";
    
    productsInCart.forEach(function(item) {
      var li = document.createElement("li");
      li.innerHTML = `${item.quantity} ${item.product.name} - $${item.product.price * item.quantity}`;
      cartEl.appendChild(li);
    });
    
    productQuantityEl.innerHTML = productsInCart.length;
    
    generateCartButtons()
  }
  
  var generateCartButtons = function() {
    if(productsInCart.length > 0) {
      emptyCartEl.style.display = "block";
      cartCheckoutEl.style.display = "block"
      totalPriceEl.innerHTML = "$ " + calculateTotalPrice();
    } else {
      emptyCartEl.style.display = "none";
      cartCheckoutEl.style.display = "none";
    }
  }
  
  var setupListeners = function() {
    productsEl.addEventListener("click", function(event) {
      var el = event.target;
      if(el.classList.contains("add-to-cart")) {
       var elId = el.dataset.id;
       addToCart(elId);
      }
    });
    
    emptyCartEl.addEventListener("click", function(event) {
      if(confirm("Are you sure you want to empty your cart?")) {
        productsInCart = [];
      }
      generateCartList();
    });
  }
  
  var addToCart = function(id) {
    var obj = products[id];
    if(productsInCart.length === 0 || productFound(obj.id) === undefined) {
      productsInCart.push({product: obj, quantity: 1});
    } else {
      productsInCart.forEach(function(item) {
        if(item.product.id === obj.id) {
          item.quantity++;
        }
      });
    }
    generateCartList();
  }
  
  var productFound = function(productId) {
    return productsInCart.find(function(item) {
      return item.product.id === productId;
    });
  }

  var calculateTotalPrice = function() {
    return productsInCart.reduce(function(total, item) {
      return total + (item.product.price *  item.quantity);
    }, 0);
  }
  
  var init = function() {
    generateProductList();
    setupListeners();
  }
  
  return {
    init: init
  };
  
})(jQuery);

ShoppingCart.init();