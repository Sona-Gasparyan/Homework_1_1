function slice(str) {
    let slicedStr = []
    let word = ""
    for (let i = 0; i < str.length; i += 3) {
        let tmp = str.slice(i, i + 3)
        slicedStr.push(tmp)
        tmp = ""
    }
    for (let i = 0; i < slicedStr.length; i++) {
        if (slicedStr[i].length === 3) {
            word += slicedStr[i][1] + slicedStr[i][2] + slicedStr[i][0]
        } else {
            word += slicedStr[slicedStr.length - 1]
        }
    }

    return word
}

console.log(slice("1234567"))