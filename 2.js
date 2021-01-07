function findingTypes (arr){
    let string = 0;
    let number = 0;
    for (let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === "string"){
            string++
            } else {
            number++

            }
            
    } return `Numbers: ${number}, Strings: ${string}`

}

findingTypes([1, "10", "hi", 2, 3])