let phase = "running";

function change() {
    
    if (phase === "running") {
        phase = "paused";
        setTimeout(change, 9999);
    } else if (phase == "paused") {
        phase = "running";
        setTimeout(change, 1300);
    } else { throw null; }

    const style = document.documentElement.style;
    style.setProperty(
        "--marquee_play_state",
        phase
    );
}

setTimeout(change, 2222);