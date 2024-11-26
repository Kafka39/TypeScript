const arr: number[] = [55,66,77]

function tsMap(arr: number[], callback: (num: number, index: number, array: number[]) => number): number[]{
    if(!Array.isArray(arr) || !arr.length || typeof callback !== 'function') return []

    let result: number[] = [];

    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }

    return result;
}

console.log(tsMap(arr, (e, i) => e * 2))
