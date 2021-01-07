function arrInarr(arr) {
    let max = -Infinity;
    let min = 0;
    let product = 1
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            return `Invalid argument`
        }
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max && arr[i][j] < min) {
                max = arr[i][j]
            }
        }
        if (max === -Infinity) continue
        product *= max
        max = -Infinity
    }
    if (product === 1) {
        return `No negatives!!!`
    }
    return product
}


arrInarr([[-5, 4, 3, -8], [-7, 8, 9], [5, 4, 3, 100]])
