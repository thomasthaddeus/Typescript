function toggleLightSwitch() {
    if (lightOff==0) {
        document.getElementById("lightOff").src="./IMG/PE02/lightOff.png";
        lightOn = 1;
    }
    else if (lightOn==1) { document.getElementById("myImage").src="./IMG/PE02/lightOn.png";
        lightOff = 0;
    }
}