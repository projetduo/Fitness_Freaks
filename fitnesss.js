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
    each(array, function(element, index) {

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
    each(array, function(element, i) {
        acc = f(acc, element, i);
    });
    return acc;
}

function generateId() {
    count = 0;
    return function() {
        return count++;

    }
}
var id = generateId();

function article(name, price, images, category) {
    return {
        name: name,
        price: price,
        images: images,
        category: category,
        id: id()
    }
}

function articles(gym) {
    return {
        gym: gym,
        list: [],
        add: add,
        sortByPrice: sortByPrice,
        categoryFilter: categoryFilter
    }
}
var add = function(n) {
    return this.list.push(n)
}
var sortByPrice = function(price) {
    this.list.sort(function(a, b) {
        return a.price - b.price
    })
}
var categoryFilter = function(category) {
    return this.list.filter(function(article) {
        return article.category === category;
    });
}

function display(arr) {

    $("#gym").append(`
    <img src=${arr.images}>
    <h4>${arr.name}</h4>
    <p>${arr.price}</p>
    <p>${arr.category}</p>
    `)
}

var balley1 = article("Ballet Stander", 69.9, "images/balley stander.jpg", "balley")
var balley2 = article("Ballet Shoes", 69.9, "images/balley11", "balley")
var balley3 = article("Ballet women Dress", 95, "images/balley13.jpg", "balley")
var balley4 = article("Balley Men clothes", 100, "images/balley14.jpg", "balley")
var basket1 = article("BasketBall", 60, "images/basket11.jpg", "basket")
var basket2 = article("BasketBall's basket", 70, "images/basket12.jpg", "basket")
var basket3 = article("BasketBall's bag", 95, "images/basket13.jpg", "basket")
var basket4 = article("BasketBall's shoes", 100, "images/basket14.jpg", "basket")
var basket5 = article("BasketBall's men clothes", 100, "images/foot15.jpg", "basket")
var football1 = article("footBall's men clothes", 100, "images/foot11.jpg", "football")
var football2 = article("footBall's woman clothes", 100, "images/foot12.jpg", "football")
var football3 = article("football Ball", 70, "images/football13.jpg", "football")
var football4 = article("football 's Shoes", 95, "images/football15.jpg", "football")
var football5 = article("Bootball Rebunder", 100, "images/bootball rebunder.jpg", "football")
var gym1 = article("Gym weigths", 100, "images/gym11.jpg", "gym")
var gym2 = article("Gym Rollant Carpet", 50, "images/gym13.jpg", "gym")
var gym3 = article("Gym Conveyor Bell", 1000, "images/gym14.jpg", "gym")
var gym4 = article("Gym bycicle", 1500, "images/gym15.jpg", "gym")
var gym5 = article("Gym box Equipments", 100, "images/gym16.jpg", "gym")
var natation1 = article("Fashionable Bags", 90, "images/natation11.jpg", "natation")
var natation2 = article("Swimming Glasses", 60, "images/natation12.jpg", "natation")
var natation3 = article("Women Swimming 2 Peaces", 100, "images/natation14.jpg", "natation")
var natation4 = article("Men Swimming clothes", 30, "images/natation15.jpg", "natation")
var natation5 = article("Diving suit", 250, "images/natation16.jpg", "natation")
var natation6 = article("Swimming Pad", 30, "images/natation13.jpg", "natation")
var tennis1 = article("Tennis Women clothes", 90, "images/picine12.jpg", "tennis")
var tennis2 = article("Tennis Men clothes", 85, "images/picine13.jpg", "tennis")
var tennis3 = article("Tennis small rakets", 50, "images/picine14.jpg", "tennis")
var tennis4 = article("Tennis Rackets", 65, "images/picine15.jpg", "tennis")
var tennis5 = article("Tennis Ball", 25, "images/picine16.jpg", "tennis")
var tennis6 = article("Tennis Pack", 200, "images/untitled.jpg", "tennis")
var gym = articles("name");


gym.add(natation1)
gym.add(natation2)
gym.add(natation3)
gym.add(natation4)
gym.add(natation5)
gym.add(natation6)
gym.add(gym1)
gym.add(gym2)
gym.add(gym3)
gym.add(gym4)
gym.add(gym5)
gym.add(tennis1)
gym.add(tennis2)
gym.add(tennis3)
gym.add(tennis4)
gym.add(tennis5)
gym.add(tennis6)
gym.add(football1)
gym.add(football2)
gym.add(football3)
gym.add(football4)
gym.add(football5)
gym.add(basket1)
gym.add(basket2)
gym.add(basket3)
gym.add(basket4)
gym.add(basket5)
gym.add(balley1)
gym.add(balley2)
gym.add(balley3)
gym.add(balley4)

each(gym.list, function(element, i) {
    display(element)
})



$('#gym').append("<button id='btn'>sort by price</button>")
$("#btn").on('click', function() {
    gym.sortByPrice();
    $("#gym").empty()
    each(gym.list, function(e, i) {
        return display(e, i)
    })
});

function searchByCategory() {
    var categoryInput = document.getElementById("categorySearchInput").value;
    var filteredArticles = myArticles.categoryFilter(categoryInput);
}
document.getElementById("searchButton").addEventListener("click", function() {
    searchByCategory();
});


var gyms = [
    { name: "Ballet Stander", price: 69.9 },
    { name: "Ballet Shoes", price: 69.9 },
    { name: "Ballet women Dress", price: 95 },
    { name: "Ballet Men clothes", price: 100 },
    { name: "BasketBall", price: 60 },
    { name: "BasketBall's basket", price: 70 },
    { name: "BasketBall's bag", price: 95 },
    { name: "BasketBall's shoes", price: 100 },
    { name: "BasketBall's men clothes", price: 100 },
    { name: "footBall's men clothes", price: 100 },
    { name: "footBall's woman clothes", price: 100 },
    { name: "footBall's Ball", price: 70 },
    { name: "footBall's men Shoes", price: 95 },
    { name: "footBall's men clothes", price: 100 },
    { name: "footBall's woman clothes", price: 100 },
    { name: "footBall Ball", price: 70 },
    { name: "football's Shoes", price: 95 },
    { name: "football Rebunder", price: 100 },
    { name: "GymRollant Carpet", price: 50 },
    { name: "Gym Conveyor Bell", price: 1000 },
    { name: "gym bycicle", price: 1500 },
    { name: "Fashionable Bags", price: 90 },
    { name: "Swimming Glasses", price: 60 },
    { name: "women Swimming 2 Peaces", price: 100 },
    { name: "Men Swimming Clothes", price: 30 },
    { name: "Diving Suit", price: 250 },
    { name: "Swimming Pad", price: 30 },
    { name: "Tennis Women clothes", price: 90 },
    { name: "Tennis small rakets", price: 50 },
    { name: "Tennis Racket", price: 65 },
    { name: "Tennis Ball", price: 25 },
    { name: "Tennis Pack", price: 200 }
]

var cart = [];
var cartTotal = 0;

function displayProducts() {
    var productList = document.querySelector(".add");

    each(gyms, function(element, index) {
        var product = document.createElement("div");
        product.className = "donnee";
        product.innerHTML = `
              <h3>${element.name}</h3>
                <p>${element.price}DT</p>
       <button class="addbtn" id="${index}">Add to Cart</button>
            `;
        productList.appendChild(product);

        var addBtn = product.querySelector(".addbtn");
        addBtn.addEventListener("click", function() { addCart(index) });
    });
}

function addCart(i) {
    var product = gyms[i];
    cart.push(product);
    cartTotal += product.price;
    var cartItemsList = document.getElementById("items");
    var cartItem = document.createElement("ul");
    cartItem.innerHTML = `
            <span>${product.name}</span>
            <span>${product.price}DT</span>     
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

displayProducts();
var checBtn = document.getElementById("btn1");
checBtn.addEventListener("click", checkout);
$(".homegrid").show();
$(".home").show();
$("#gym").hide();
$(".add").hide();
$(".cart").hide();
$(".Search").hide();
$(".btn6").hide();
$(".btn7").on('click', function() {
    $(".Search").show();
    $(".homegrid").show();
    $(".home").hide();
    $("#gym").show();
    $(".add").hide();
    $(".cart").hide();
    $(".btn6").show();
    $(".btn7").hide();
})
$(".btn6").on('click', function() {
        $(".btn7").hide();
        $(".Search").hide();
        $(".homegrid").show();
        $("#gym").hide();
        $(".add").show();
        $(".home").hide();
        $(".cart").show();
        $(".btn6").hide();
    })
    // sign in
var pass = document.getElementById("pass")
var pass1 = document.getElementById("pass1")
var comment = document.getElementById("comment")
var all = document.getElementById("pass")

var sub = function submition(pass) {
    if (pass = []) {
        return alert("please enter a password")
    }
    if (pass.length < 6) {
        return alert("Your password must be longer than 6 characters")
    }
    if (pass1 !== pass) { return alert('your password is not matching') } else {
        all.display = "none"
        alert("than you for submitting")
    }
}


function showPassword() {
    pass.type = "text"
}

function hidePassword() {
    pass.type = "password"
}