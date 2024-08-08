function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.

    button.addEventListener("click", function() {
        paragraph.innerHTML = "Houston, we have liftoff!";
    });

    missionAbort.addEventListener("mouseover", event => {
        missionAbort.style.backgroundColor = "red"; //? why does it change the border radius and type?
    });
    
    missionAbort.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = ""; //? is it better to use event with event.target? maybe for code resuseability?
    });

    missionAbort.addEventListener("click", event => {
        let confirmed = window.confirm("Are you sure you want to abort the mission?");
        if (confirmed) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
        }
    });
}

window.addEventListener("load", init);
