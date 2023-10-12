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
function article(name,price,images){
    return{
        name:name,
        price:price,   
        images:images,
        id:id()
    }
}

function articles(gym){
    return{
        gym:gym,
        list:[],
        add:add,
        sortByPrice:sortByPrice,
        DisplayInformation:DisplayInformation
    }
}
var add=function(gym){
    return this.list.push(gym)
}
var sortByPrice=function(price){
    this.list.sort(function(a,b){
        return a.price-b.price
    })
}
function display(arr){
      
    $("#mouhib1").append(`
    <img src=${arr.images}>
    <h4>${arr.name}</h4>
    <p>${arr.price}</p>
   
    `)
}
var gyms=articles("name");
each(gyms.list,function(element,i){
    display(element)
})
