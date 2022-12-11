function toggleLightSwitch() {
    if (lightOff===0) {
        document.getElementById("lightOff").src="./IMG/lightOff.png";
        lightOn = 1;
    }
    else if (lightOn===1) { document.getElementById("myImage").src="./IMG/lightOn.png";
        lightOff = 0;
    }
}