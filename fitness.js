var imageSources = ["images/basket.gif.gif", "images/football.gif", "gym.gif", "tennis.gif", "natation.gif", "ballet.gif.gif"]
var firstImg = ["images/basket1", "images/football11", "gym11", "tennis11", "picsine1", "ballet11", "images/basket"]
var basket = ["images/basket11", "images/basket12", "images/basket13", "images/basket14", "images/basket15"]
var football = ["images/football11", "images/football12", "bootball rebunder.webp", "foot13", "foot15"]
var natation = ["natation11", "natation12", "natation13", "natation14"]
var tennis = ["tennis11", "tennis12", "tennis13", "tennis14", "tennis15", "tennis16"]
var gym = ["gym11", "gym13", "gym14", "gym15", "gym16"]
var balley = ["balley11", "balley stander", "balley13", "balley14"]
var index = 0;
firstImg.setInterval(function() {
    if (index === firstImg.length) {
        i = 0;
    }
    document.getElementById("image").src = firstImg[i];
    index++;
}, 2000);


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