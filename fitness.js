
function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
  }
  
  function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
  }
  
  function filter(array, predicate) {
  var acc = [];
  each(array, function (element, index) {

   if (predicate(element, index)) {
   
     acc.push(element);
   }
  });
  return acc;
  }
  
  function reduce(array, f, acc) {
  if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
  }
  each(array, function (element, i) {
   acc = f(acc, element, i);
  });
  return acc;
  }
  function generateId(){
    count=0;
   return function (){
      return  count++;
      
    }
}
var id=generateId();
function articlenatation(name,price,images){
    return{
        name:name,
        price:price,   
        images:images,
        id:id()
    }
}

function articlesnatation(gym){
    return{
        gym:gym,
        listnatation:[],
        addnatation:addnatation,
        sortByPrice:sortByPrice,
       
    }
}
var addnatation=function(gym){
    return this.listnatation.push(gym)
}
var sortByPrice=function(price){
    this.listnatation.sort(function(a,b){
        return a.price-b.price
    })
}

function articlefoot(name,price,images){
    return{
        name:name,
        price:price,   
        images:images,
        id:id()
    }
}

function articlesfoot(gym){
    return{
        gym:gym,
        listfoot:[],
        addfoot:addfoot,
        sortByPrice:sortByPrice,
        
    }
}
var addfoot=function(gym){
    return this.listfoot.push(gym)
}
var sortByPrice=function(price){
    this.listfoot.sort(function(a,b){
        return a.price-b.price
    })
}
function articlebasket(name,price,images){
    return{
        name:name,
        price:price,   
        images:images,
        id:id()
    }
}

function articlesbasket(gym){
    return{
        gym:gym,
        listbasket:[],
        addbasket:addbasket,
        sortByPrice:sortByPrice,
        
    }
}
var addbasket=function(gym){
    return this.listbasket.push(gym)
}
var sortByPrice=function(price){
    this.listbasket.sort(function(a,b){
        return a.price-b.price
    })
}
function articletennis(name,price,images){
    return{
        name:name,
        price:price,   
        images:images,
        id:id()
    }
}

function articlestennis(gym){
    return{
        gym:gym,
        listtennis:[],
        addtennis:addtennis,
        sortByPrice:sortByPrice,
       
    }
}
var addtennis=function(gym){
    return this.listtennis.push(gym)
}
var sortByPrice=function(price){
    this.listtennis.sort(function(a,b){
        return a.price-b.price
    })
}
function articlegym(name,price,images){
    return{
        name:name,
        price:price,   
        images:images,
        id:id()
    }
}

function articlesgym(gym){
    return{
        gym:gym,
        listgym:[],
        addgym:addgym,
        sortByPrice:sortByPrice,
       
    }
}
var addgym=function(gym){
    return this.listgym.push(gym)
}
var sortByPrice=function(price){
    this.listgym.sort(function(a,b){
        return a.price-b.price
    })
}
function articleballey(name,price,images){
    return{
        name:name,
        price:price,   
        images:images,
        id:id()
    }
}

function articlesballey(gym){
    return{
        gym:gym,
        listballey:[],
        addballey:addballey,
        sortByPrice:sortByPrice,
       
    }
}
var addballey=function(gym){
    return this.listballey.push(gym)
}
var sortByPrice=function(price){
    this.listballey.sort(function(a,b){
        return a.price-b.price
    })
}
function displayNatation(arr){
    each(gymsnatation.listnatation,function(element,i){
        
   
    $("#natation").append(`
    <img src=${arr.images}>
    <h4>${arr.name}</h4>
    <p>${arr.price}DT</p>
    <button class="addbtn" id=${index}>Add to Cart</button>
    `)}
    var addBtn = product.querySelector(".addbtn");
      addBtn.addEventListener("click", function(){ addCart(index)});
    }

function displayfoot(arr){
      
    $("#foot").append(`
    <img src=${arr.images}>
    <h4>${arr.name}</h4>
    <p>${arr.price}DT</p>
    <button class="addbtn" id=${index}>Add to Cart</button>
    `)
    var addBtn = product.querySelector(".addbtn");
      addBtn.addEventListener("click", function(){ addCart(index)});
      
}
function displaybasket(arr){
      
    $("#basket").append(`
    <img src=${arr.images}>
    <h4>${arr.name}</h4>
    <p>${arr.price}DT</p>
    <button class="addbtn" id=${index}>Add to Cart</button>
    `)
    var addBtn = product.querySelector(".addbtn");
      addBtn.addEventListener("click", function(){ addCart(index)});
      
}
function displaytennis(arr){
      
    $("#tennis").append(`
    <img src=${arr.images}>
    <h4>${arr.name}</h4>
    <p>${arr.price}DT</p>
    <button class="addbtn" id=${index}>Add to Cart</button>
    `)
    var addBtn = product.querySelector(".addbtn");
      addBtn.addEventListener("click", function(){ addCart(index)});
      
}
function displaygym(arr){
      
    $("#gym").append(`
    <img src=${arr.images}>
    <h4>${arr.name}</h4>
    <p>${arr.price}DT</p>
    <button class="addbtn" id=${index}>Add to Cart</button>
    `)
    var addBtn = product.querySelector(".addbtn");
      addBtn.addEventListener("click", function(){ addCart(index)});
      
}
function displayballey(arr){


   
    $("#balley").append(`
    <img src=${arr[i].images}>
    <h4>${arr[i].name}</h4>
    <p>${arr[i].price}DT</p>
    <button class="addbtn" id=${index}>Add to Cart</button>
    `)
    var addBtn = product.querySelector(".addbtn");
      addBtn.addEventListener("click", function(){ addCart(index)});
      
}




var balley1 = articleballey("Ballet Stander", 69.9, "images/balley stander.jpg")
var balley2 = articleballey("Ballet Shoes", 69.9, "images/balley11")
var balley3 = articleballey("Ballet women Dress", 95, "images/balley13.jpg")
var balley4 = articleballey("Balley Men clothes", 100, "images/balley14.jpg")
var basket1 = articlebasket("BasketBall", 60, "images/basket11.jpg")
var basket2 = articlebasket("BasketBall's basket", 70, "images/basket12.jpg")
var basket3 = articlebasket("BasketBall's bag", 95, "images/basket13.jpg")
var basket4 = articlebasket("BasketBall's shoes", 100, "images/basket14.jpg")
var basket5 = articlebasket("BasketBall's men clothes", 100, "images/foot15.jpg")
var football1 = articlefoot("footBall's men clothes", 100, "images/foot11.jpg")
var football2 = articlefoot("footBall's woman clothes", 100, "images/foot12.jpg")
var football3 = articlefoot("football Ball", 70, "images/football13.jpg")
var football4 = articlefoot("football 's Shoes", 95, "images/football15.jpg")
var football5 = articlefoot("Bootball Rebunder", 100, "images/bootball rebunder.jpg")
var gym1 = articlegym("Gym weigths", 100, "images/gym11.jpg")
var gym2 = articlegym("Gym Rollant Carpet", 50, "images/gym13.jpg")
var gym3 = articlegym("Gym Conveyor Bell", 1000, "images/gym14.jpg")
var gym4 = articlegym("Gym bycicle", 1500, "images/gym15.jpg")
var gym5 = articlegym("Gym box Equipments", 100, "images/gym16.jpg")
var natation1 = articlenatation("Fashionable Bags", 90, "images/natation11.jpg")
var natation2 = articlenatation("Swimming Glasses", 60, "images/natation12.jpg")
var natation3 = articlenatation("Women Swimming 2 Peaces", 100, "images/natation14.jpg")
var natation4 = articlenatation("Men Swimming clothes", 30, "images/natation15.jpg")
var natation5 = articlenatation("Diving suit", 250, "images/natation16.jpg")
var natation6 = articlenatation("Swimming Pad", 30, "images/natation13.jpg")
var tennis1 = articletennis("Tennis Women clothes", 90, "images/picine12.jpg")
var tennis2 = articletennis("Tennis Men clothes", 85, "images/picine13.jpg")
var tennis3 = articletennis("Tennis small rakets", 50, "images/picine14.jpg")
var tennis4 = articletennis("Tennis Rackets", 65, "images/picine15.jpg")
var tennis5 = articletennis("Tennis Ball", 25, "images/picine16.jpg")
var tennis6 = articletennis("Tennis Pack", 200, "images/untitled.jpg")
var gymsnatation=articlesnatation("name");
var gymsfoot=articlesfoot("name");
var gymsbasket=articlesbasket("name");
var gymstennis=articlestennis("name");
var gymsgym=articlesgym("name");
var gymsballey=articlesballey("name");
console.log(articlesballey,"arr")
gymstennis.addtennis(tennis1)
gymstennis.addtennis(tennis2)
gymstennis.addtennis(tennis3)
gymstennis.addtennis(tennis4)
gymstennis.addtennis(tennis5)
gymstennis.addtennis(tennis6)
gymsnatation.addnatation(natation1)
gymsnatation.addnatation(natation2)
gymsnatation.addnatation(natation3)
gymsnatation.addnatation(natation4)
gymsnatation.addnatation(natation5)
gymsnatation.addnatation(natation6)
gymsgym.addgym(gym1)
gymsgym.addgym(gym2)
gymsgym.addgym(gym3)
gymsgym.addgym(gym4)
gymsgym.addgym(gym5)
gymsfoot.addfoot(football1)
gymsfoot.addfoot(football2)
gymsfoot.addfoot(football3)
gymsfoot.addfoot(football4)
gymsfoot.addfoot(football5)
gymsbasket.addbasket(basket1)
gymsbasket.addbasket(basket2)
gymsbasket.addbasket(basket3)
gymsbasket.addbasket(basket4)
gymsbasket.addbasket(basket5)
gymsballey.addballey(balley1)
gymsballey.addballey(balley2)
gymsballey.addballey(balley3)
gymsballey.addballey(balley4)

each(gymsnatation.listnatation,function(element,i){
    displaynatation(element)
})
each(gymsfoot.listfoot,function(element,i){
    displayfoot(element);
    });
  each(gymsbasket.listsBasketball,function(element , i ){
    displaybasket(element);
        });
  each(gymstennis.listtennis,function(element,i){
         displaytennis(element);} );
   each(gymsgym.listgym,function(element,i){
                displaygym(element);});
 each(gymsballey.listballey,function(element,i){displayballey(element);});

    

console.log(this.listnatation,"list natation")

$('#natation').append("<button id='btn'>sort by price</button>")
$("#btn").on('click',function(){
  gymsnatation.sortByPrice();
  $("#natation").empty()
  each(gymsnatation.listnatation,function(e,i){
    return  displaynatation(e)})
});
$('#foot').append("<button id='btn'>sort by price</button>")
$("#btn").on('click',function(){
  gymsfoot.sortByPrice();
  $("#foot").empty()
  each(gymsfoot.listfoot,function(e,i){
    return  displayfoot(e)})
});
$('#basket').append("<button id='btn'>sort by price</button>")
$("#btn").on('click',function(){
  gymsbasket.sortByPrice();
  $("#basket").empty()
  each(gymsbasket.listbasket,function(e,i){
    return  displaybasket(e)})
});
$('#tennis').append("<button id='btn'>sort by price</button>")
$("#btn").on('click',function(){
  gymstennis.sortByPrice();
  $("#tennis").empty()
  each(gymstennis.listtennis,function(e,i){
    return  displaytennis(e)})
});
$('#gym').append("<button id='btn'>sort by price</button>")
$("#btn").on('click',function(){
  gymsgym.sortByPrice();
  $("#gym").empty()
  each(gymsgym.listgym,function(e,i){
    return  displaygym(e)})
});
$('#balley').append("<button id='btn'>sort by price</button>")
$("#btn").on('click',function(){
  gymsgym.sortByPrice();
  $("#balley").empty()
  each(gymsballey.listballey,function(e,i){
    return  displayballey(e)})
});

var cart = [];
var cartTotal = 0;
function addCart(i) {
    var a = gymsnatation[i];
        cart.push(a);
       cartTotal += a.price;
        var cartItemsList = document.getElementById("items");
        var cartItem = document.createElement("ul");
         cartItem.innerHTML = `
            <span>${a.name}</span>
            <span>${a.price}DT</span>     
        `;
        cartItemsList.appendChild(cartItem);
     var cartTotalElement = document.getElementById("total");
        cartTotalElement.textContent = cartTotal.toFixed(2);
    }
    var cart = [];
    var cartTotal = 0;
    function addCart(i) {
        var a = gymsfoot[i];
            cart.push(a);
           cartTotal += a.price;
            var cartItemsList = document.getElementById("items");
            var cartItem = document.createElement("ul");
             cartItem.innerHTML = `
                <span>${a.name}</span>
                <span>${a.price}DT</span>     
            `;
            cartItemsList.appendChild(cartItem);
         var cartTotalElement = document.getElementById("total");
            cartTotalElement.textContent = cartTotal.toFixed(2);
        }
        var cart = [];
        var cartTotal = 0;
        function addCart(i) {
            var a = gymsbasket[i];
                cart.push(a);
               cartTotal += a.price;
                var cartItemsList = document.getElementById("items");
                var cartItem = document.createElement("ul");
                 cartItem.innerHTML = `
                    <span>${a.name}</span>
                    <span>${a.price}DT</span>     
                `;
                cartItemsList.appendChild(cartItem);
             var cartTotalElement = document.getElementById("total");
                cartTotalElement.textContent = cartTotal.toFixed(2);
            }
            var cart = [];
            var cartTotal = 0;
 function addCart(i) {
               var a = gymstennis[i];
           cart.push(a);
                   cartTotal += a.price;
       var cartItemsList = document.getElementById("items");
                    var cartItem = document.createElement("ul");
             cartItem.innerHTML = `
                        <span>${a.name}</span>
                  <span>${a.price}DT</span>     
                    `;
            cartItemsList.appendChild(cartItem);
                 var cartTotalElement = document.getElementById("total");
                    cartTotalElement.textContent = cartTotal.toFixed(2);
          }
          var cart = [];
          var cartTotal = 0;  
          function addCart(i) {
            var a = gymsgym[i];
                cart.push(a);
               cartTotal += a.price;
                var cartItemsList = document.getElementById("items");
                var cartItem = document.createElement("ul");
                 cartItem.innerHTML = `
                    <span>${a.name}</span>
                    <span>${a.price}DT</span>     
                `;
                cartItemsList.appendChild(cartItem);
             var cartTotalElement = document.getElementById("total");
                cartTotalElement.textContent = cartTotal.toFixed(2);
            }
            var cart = [];
            var cartTotal = 0;

            function addCart(i) {
                var a = gymsballey[i];
                    cart.push(a);
                   cartTotal += a.price;
                    var cartItemsList = document.getElementById("items");
                    var cartItem = document.createElement("ul");
                     cartItem.innerHTML = `
                        <span>${a.name}</span>
                        <span>${a.price}DT</span>     
                    `;
                    cartItemsList.appendChild(cartItem);
                 var cartTotalElement = document.getElementById("total");
                    cartTotalElement.textContent = cartTotal.toFixed(2);
                }
                

function checkout() {
    alert("Thank you for visiting our site");
    clearCart();
}

function clearCart() {
    cart.length = 0;
    cartTotal = 0;
    var cI = document.getElementById("items");
    cI.innerHTML = "";
    var cT = document.getElementById("total");
    cT.textContent = "0";
}

displayNatation();
displayballey();
displaybasket();
displayfoot();
displaygym();
displaytennis();
var checBtn = document.getElementById("btn1");
checBtn.addEventListener("click", checkout);