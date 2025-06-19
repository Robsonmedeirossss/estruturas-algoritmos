const arr = [1, 2, 3, 4, 5, 6, 7];

function binarySearch(arr, number){
    let menor = 0;
    let maior = arr.length - 1;
    let meio = 0;

    while(menor <= maior){
        meio = ((maior + menor) / 2)
        if(arr[meio] === number){
            return meio;
        }
        if(number < arr[meio]){
            maior = meio - 1;
        }else{
            menor = meio + 1;
        }
    }

    return false;
}

console.log(binarySearch(arr, 5));