var imageSources = ["images/basket.gif.gif", "images/football.gif", "images/gym.gif", "images/tennis.gif", "images/natation.gif", "images/ballet.gif.gif"]


// $("#imgs").append(`<div><img src=${firstImg[0]}><div>`)

function add() {

    for (var i = 1; i < firstImg.length; i++) {
        if (i === firstImg.length - 1) {
            i = 0;
        }
        $("#imgs").attr("src", firstImg[i])

    }


}
setInterval(add, 2000);






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

gymstennis.add(tennis1)
gymstennis.add(tennis2)
gymstennis.add(tennis3)
gymstennis.add(tennis4)
gymstennis.add(tennis5)
gymstennis.add(tennis6)
gymsnatation.add(natation1)
gymsnatation.add(natation2)
gymsnatation.add(natation3)
gymsnatation.add(natation4)
gymsnatation.add(natation5)
gymsnatation.add(natation6)
gymsgym.add(gym1)
gymsgym.add(gym2)
gymsgym.add(gym3)
gymsgym.add(gym4)
gymsgym.add(gym5)
gymsfoot.add(football1)
gymsfoot.add(football2)
gymsfoot.add(football3)
gymsfoot.add(football4)
gymsfoot.add(football5)
gymsbasket.add(basket1)
gymsbasket.add(basket2)
gymsbasket.add(basket3)
gymsbasket.add(basket4)
gymsbasket.add(basket5)
gymsballey.add(balley1)
gymsballey.add(balley2)
gymsballey.add(balley3)
gymsballey.add(balley4)


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