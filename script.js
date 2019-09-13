var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
var soundDiv = document.body.querySelector(".sound");

for(var i = 0; i < animals.length; i++){
  var listItem = document.createElement("div");
  if(animals[i] == "dog"){
    listItem.innerHTML = "Borf Borf"
  }
  
  else if(animals[i] == "cat"){
    listItem.innerHTML = "I am a cat"
  }
  
  else{
    listItem.innerHTML = "I am an animal"
  }
  soundDiv.appendChild(listItem);
}