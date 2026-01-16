let count = 0;
let tasbih = 0;
let goal = 0;

function increaseCount() {
    count++;

    if (count === 100) {
        tasbih++;
        count = 0;

        if (tasbih === 10) {
            goal++;
            tasbih = 0;
            alert(" One Spiritual Goal Achieved!");
        }
    }

    updateUI();
}

function resetAll() {
    count = 0;
    tasbih = 0;
    goal = 0;
    updateUI();
}

function updateUI() {
    document.getElementById("count").innerText = count;
    document.getElementById("tasbih").innerText = tasbih;
    document.getElementById("goal").innerText = goal;
}
