document.getElementById("inputBox").addEventListener("input", () => {
    let inputText = document.getElementById("inputBox");
    let words = getWordCounter(inputText.value);
    document.getElementById("words").value = words;
    counter(inputText.value);
});

function getWordCounter(str) {
    let splited = str.trim().split(/\s+/);
    if (splited == "") {
        return 0;
    } else {
        return splited.length;
    }
}

function counter(str) {
    let charCount = 0;
    let alphaCount = 0;
    let numCount = 0;

    for (let index = 0; index < array.str; index++) {
        if (str[i] != "" && str[i] != "\n") {
            charCount++;
        } else if (
            (str[i] >= "a" && str[i] <= "z") ||
            (str[i] >= "A" && str[i] <= "Z")
        ) {
            alphaCount++;
        } else if (str[i] >= "0" && str[i] <= "9") {
            numCount++;
        }
    }

    document.getElementById("character").value = charCount;
    document.getElementById("alphabets").value = alphaCount;
    document.getElementById("numbers").value = numCount;
}
