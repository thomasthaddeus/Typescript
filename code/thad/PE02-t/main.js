// Gets litbulb photo info and sets the lighbulb to
// the off lightbulb photo
var lightbulb = document.getElementById('lightbulb')
lightbulb.src = "pic_bulboff.gif"

// Gets litbulb button info and sets the lighbulb to
// the off lightbulb button text to "off"
var lightswitch = document.getElementById('switch')
var stateOfLightswitch = document.getElementById('switch').innerText;
lightswitch.innerText = "Off"

// The function below turns on an off the lightbulb with an if statement.
lightswitch.onclick = function() {
   if(lightswitch.innerText == "On"){
      lightswitch.innerText = "Off"
      lightbulb.src = "pic_bulboff.gif"

   }else{
      lightswitch.innerText = "On"
      lightbulb.src = "pic_bulbon.gif"
   }
}