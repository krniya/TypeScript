const apples: number = 5;

let speed: string = 'fast'

let hasName: boolean = true

// Build in objects
let now: Date = new Date()

// array
let colors: string[] = ['red', 'blue', 'green']
let myNumbers: number[] = [1,2,3,4,5,6]
let truths: boolean[] = [true, true, false]

// Class
class Car {

}

let car: Car = new Car()

// Object leterals
let point: {x:number; y:number} = {
    x:10,
    y:10
}

// Function
let logNumber: (i:number) => void = (i: number) => {
    console.log(i)
}