let score = 0;
let clickValue = 1;
let autoClickers = 0;
let superAutoClickers = 0;

let AutoClickerAmount = 0;
let doubleClickAmount = 0;
let superClickerAmount = 0;

let autoClickerCost = 10;
let doubleClickCost = 20;
let superClickerCost = 50;

document.getElementById("cookie").addEventListener("click", function () {
    score += clickValue;
    updateScore();
});

function updateScore() {
    document.getElementById("score").innerText = "Cookies collected: " + score;
}

function updateUpgradeCounts() {
    document.getElementById("autoClickerAmount").innerText = "Owned: " + AutoClickerAmount;
    document.getElementById("doubleClickAmount").innerText = "Owned: " + doubleClickAmount;
    document.getElementById("superClickerAmount").innerText = "Owned: " + superClickerAmount;
}

function playSound(soundId) {
    const soundSrc = document.getElementById(soundId).src;  // Get the source URL of the audio
    const sound = new Audio(soundSrc);  // Create a new Audio object with that source
    sound.play();  // Play the new audio object instantly
}


function buyAutoClicker() {
    if (score >= autoClickerCost) {
        AutoClickerAmount++;
        score -= autoClickerCost;
        autoClickers++;
        autoClickerCost = Math.floor(autoClickerCost * 1.2);
        document.getElementById("autoClickerCost").innerText = autoClickerCost;
        updateScore();
        updateUpgradeCounts();
        playSound("autoclicker-sound");

        if (autoClickers === 1) {
            setInterval(() => {
                score += autoClickers;
                updateScore();
            }, 1000);
        }
    }
}

function buyDoubleClick() {
    if (score >= doubleClickCost) {
        doubleClickAmount++;
        score -= doubleClickCost;
        clickValue *= 2;
        doubleClickCost = Math.floor(doubleClickCost * 1.3);
        document.getElementById("doubleClickCost").innerText = doubleClickCost;
        updateScore();
        updateUpgradeCounts();
        playSound("doubleclick-sound");
    }
}

function buySuperAutoClicker() {
    if (score >= superClickerCost) {
        superClickerAmount++;
        score -= superClickerCost;
        superAutoClickers++;
        superClickerCost = Math.floor(superClickerCost * 1.5);
        document.getElementById("superClickerCost").innerText = superClickerCost;
        updateScore();
        updateUpgradeCounts();
        playSound("superautoclicker-sound")

        if (superAutoClickers === 1) {
            setInterval(() => {
                score += superAutoClickers * 5;
                updateScore();
            }, 1000);
        }
    }
}