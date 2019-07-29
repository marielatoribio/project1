var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

// Math.random() [0,1]

//choosing random coordinates
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;

console.log( `targetx: ${targetX}\ntargety: ${targetY}`);

function loc(e){
  console.log(`mousex: ${e.clientX}\mousey: ${e.clientY}`);
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  var dist = distance (targetX, targetY, mouseX, mouseY);
  box.style.backgroundColor = `rgb (0,0,)`

}

box.addEventListener("mousemove", loc);

function distance(targetX, targetY, mouseX, mouseY){
  var x = targetX - mouseX;
  var y = targetY - mouseY;
  var z = Math.sqrt(targetX "mouseX + targetY" mouseY);
  return
}
