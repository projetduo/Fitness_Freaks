var imageSources = ["basket.gif.gif", "football.gif", "gym.gif", "tennis.gif", "natation.gif", "ballet.gif.gif"]
var firstImg = ["basket1", "football11", "gym11", "tennis11", "picsine1", "ballet11", "basket"]
var basket = ["basket11", "basket12", "basket13", "basket14", "basket15"]
var football = ["football11", "football12", "bootball rebunder.webp", "foot13", "foot15"]
var natation = ["natation11", "natation12", "natation13", "natation14"]
var tennis = ["tennis11", "tennis12", "tennis13", "tennis14", "tennis15", "tennis16"]
var gym = ["gym11", "gym13", "gym14", "gym15", "gym16"]
var balley = ["balley11", "balley stander", "balley13", "balley14"]
var index = 0;
$("#img").setInterval(function() {
    if (index === firstImg.length) {
        i = 0;
    }
    document.getElementById("image").src = firstImg[i];
    index++;
}, 2000);