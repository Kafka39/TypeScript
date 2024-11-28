interface overloadFunc {
    x: number | undefined
    y: number | undefined
}

interface overloadFunc2 extends overloadFunc {
    default: string
}

function position(): overloadFunc
function position(a: number): overloadFunc2
function position(a: number, b: number): overloadFunc

function position(a?: number, b?:number): overloadFunc | overloadFunc2 {
    if(!a && !b) {
        return {x: undefined, y: undefined}
    }
    if(a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }
    return {x: a, y: b}
}

console.log(position())
console.log(position(1))
console.log(position(1,2))
