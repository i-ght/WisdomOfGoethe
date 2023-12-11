
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }  

function getRollInterval() {
    return `0s`;
}

function getReadInterval() {
    return `${getRandomArbitrary(1333, 1999)}s`;
}

let phase = "rolling";
/* change(); */

function change() {
    let interval;
    if (phase === "rolling") {
        phase = "reading";
        interval = getReadInterval();
        setTimeout(change, 3333); 
    } else if (phase === "reading") {
        phase = "rolling";
        interval = getRollInterval();
        setTimeout(change, 333); 
    }

    const style = document.documentElement.style;
    style.setProperty("--marquee_duration", interval);
}
