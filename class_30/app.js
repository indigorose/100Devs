//  Class 30 and 31 - OOP but it actually makes sense, Inheritance and polymorphism.

// Espresso Machine
// class EspressoMachine {
//     constructor(beans, water, milk, sugar){
//         this.beans = beans;
//         this.water = water;
//         this.milk = milk;
//         this.sugar = sugar;

//     }
//     grind() {
//         if (this.beans = 'ground'){
//             return 'add to machine'
//         }else {
//             return 'ground them beans first'
//         }
//     }
//     hotWater (){
//         if (this.water = 'hot'){
//             return 'fresh espresso coming up'
//         } else {
//             return 'ooh, you want a cold brew'
//         }
//     }
//     milkSugar(){
//         if(this.milk == 'yes' && this.sugar == 'yes'){
//             return 'add milk and sugar'
//         } else {
//             return 'a purist in our midsts'
//         }
//     }

class EspressoMachine {
    constructor(color, make, model, price){
        this.color = color;
        this.make = make;
        this.model = model;
        this.price = price;

    }
    turnOn() {
        console.log('Good day, I am ready to go')
    }
    steam (){
console.log('I like milk, from cow to oat, I\'ll make it froth');
    }
    brew (){
        console.log('Give me the beans!!!')
    }

}


let gaggia = new EspressoMachine('red', 'gaggia', 'Classic Pro', 500)


function AgencyContractor (hourlyRate, hours, taxRate){
    this.hours = hours;
    this.taxRate = taxRate;
    // let variables are not bound to the object and cannot be called with dot notation. -  hence abstraction!!!
    let rate = hourlyRate;
    let calculateProfit = function(){
        return rate * this.hours * (1 - this.taxRate)
    }
    this.invoiceClient = function() {
        return `Your invoice total is ${rate * this.hours}`
    }
}

let karen = new AgencyContractor (250, 160, .35)
console.log (karen.invoiceClient())