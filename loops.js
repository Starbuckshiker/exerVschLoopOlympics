var s = "";
for(var i = 0; i < 9; i += 1) {
  s += i + " ";
  console.log(i)
}
var s = "";
for(var i = 10; i > 0; i --) {
  s += i + " ";
  console.log(i)
}

var fruit = ["1", "banana", "orange", "apple", "kiwi"]
var i = 0; 
var text = ""; 
for (;fruit[i];) {
    text += fruit[i]; i < 3; 
    i++;
    console.log(fruit[i]);
}
     // Bronze
 var numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
 for(var i = 0; i < numbers.length; i++){
        console.log(String(numbers))
 }
 var s = "";
 for(var i = 0; i < 101; i += 2) {
   s += i + " ";
   console.log(i)
 }

   
 var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
         for(var i = 0; i < fruit.length; i = i + 2){
              console.log(Array(fruit[i]))
         }
 
         // Silver
 var people = [
    {
    name: "Harrison Ford",
    occupation: "Actor"
    },
    {
    name: "Justin Bieber",
    occupation: "Singer"
    },
    {
    name: "Vladimir Putin",
    occupation: "Politician"
    },
    {
    name: "Oprah",
    occupation: "Entertainer"
    }
  ] 
   
  for(var i = 0; i < people.length; i++){
    console.log(people[i].name)
  }
 

  function nameArr(max){
    var name = [];
    for(var i = 0; i < people.length; i++){
      name[i] = people[i].name;
    }
    return name;
  }
  console.log(nameArr(people.length))

  
  function occupationArr(max){
    var occupation = [];
    for(var i = 0; i < people.length; i++){
      occupation[i] = people[i].occupation;
    }
    return occupation;
  }
  console.log(occupationArr(people.length))

  for(var i = 0; i < nameArr; i = i + 2){
    console.log(String(nameArr(people[i].name)))
  }
  for(var i = 0; i < occupationArr; i = i + 2){
    console.log(String(occupationArr(people[i].occupation)))
  }

  
  /// gold

  
  var numbers = [ "0", "0","0",]
 for(var i = 0; i < numbers.length; i++){
        console.log(Array("[[" + numbers + "],"))
         }

  var number1 = {
           num: "[[0, 0, 0 ],",
           num1: "[1, 1, 1],",
           num2: "[2, 2, 2]]",
           }
         console.log(number1.num)
        console.log(number1.num1)
        console.log(number1.num2)
         
        
         var number2 = {
          num: "[[0, 1, 2],",
          num1: "[0, 1, 2],",
          num2: "[0, 1, 2]]",
          }
       console.log(number2.num)
       console.log(number2.num1)
       console.log(number2.num2)

  var grid = {
    grid1: "[['X', ...],",
    grid2: "['X', ...],",
    grid3: "['X', ...], ...]",
  }     
  console.log(grid.grid1)  
  console.log(grid.grid2)  
  console.log(grid.grid3)        