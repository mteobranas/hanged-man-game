document.getElementById("random").addEventListener("click", () => {
    const URL = "https://random-word-api.herokuapp.com/word";
    fetch(URL)
        .then((res) => res.json())
        .then(
            (word) =>
                (document.getElementById("pvp_input").value = word.join(""))
        );
});

function getRandomWord(lang, length) {
    const URL = `https://random-word-api.herokuapp.com/word?lang=${lang}&length=${length}`;
    fetch(URL)
        .then((res) => res.json())
        .then((word) => console.log(word.join("")));
}

function startPVP(word) {
    let currentWord = [];
    let currentLetter = "";
    let currentLives = 5;

    for (let x = 0; x < word.length; x++) {
        currentWord.push("_");
    }

    document.getElementById("game_input").addEventListener("input", () => {
        currentLetter = document.getElementById("game_input").value;

        if (word.includes(currentLetter)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] == currentLetter) {
                    currentWord[i] = currentLetter;
                }
            }
        } else {
            currentLives--;
        }

        document.getElementById("game_output").textContent =
            currentWord.join("");
        document.getElementById("game_input").value = "";

        if (!currentWord.includes("_")) {
            alert("ganaste pibe");
        }

        if (currentLives < 1) {
            alert("perdiste pibe");
        }
    });
}

document.getElementById("pvp_start").addEventListener("click", () => {
    document
        .getElementsByClassName("game")[0]
        .setAttribute("class", "show game");
    document.getElementById("pvp").setAttribute("class", "hide");
    let word = document.getElementById("pvp_input").value;
    startPVP(word);
});

document.getElementById("pvp_button").addEventListener("click", () => {
    document.getElementsByClassName("hero")[0].setAttribute("class", "hide");
    document.getElementById("pvp").setAttribute("class", "show");
});
