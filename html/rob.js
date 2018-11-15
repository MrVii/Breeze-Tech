var food = 0;
var water = 0;
var supply = 0;

hunt () {
  food += 1;
  var element = document.getElementById("foodDisplay");
  element.innerHTML = food;
}
