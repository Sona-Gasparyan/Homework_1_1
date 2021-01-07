function freq(arr) {
    let count = 1;
    let tmp = arr.length;
    let obj = {}
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }

        }
        obj[arr[i]] = count / tmp
        arr.splice(i, count, -1)
        count = 0
    } return obj
}