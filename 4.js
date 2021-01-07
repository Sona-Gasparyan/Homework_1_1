function splitString(string) {
    let words = "";
    let newArr = [];
    let max = -Infinity;
    let word;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "." || string[i] === "," || string[i] === "-")
            continue
        if (string[i] !== " ") {
            words += string[i]

        } else {
            newArr.push(words)
            words = "";
        }
    }
    newArr.push(words)
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].length >= max) {
            max = newArr[i].length
            word = newArr[i]
        }
    } return word
}