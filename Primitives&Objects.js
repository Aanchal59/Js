// nn bb ss u

let a = null;
let b = 345;
let c = true;
let d = BigInt("567")+ BigInt("3")
let e = "Harry"
let f = Symbol("I am a nice symbol")
let g = undefined

console.log(a,b,c,d,e,f,g)
console.log(typeof d)


// Objects  -> (key, value) pair


const item = {
	"aanchal": true,
	"sneha": false,
	"ananya": 67,
	"ankita": undefined
}

console.log(item["sdf"]) // gives undefined
console.log(item["aanchal"])