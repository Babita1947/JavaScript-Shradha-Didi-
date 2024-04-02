//class
class ToyotaCar {
    constructor(brand, mileage){
        console.log("Creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

//creating object of this class ToyotaCar
let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);

let lexus = new ToyotaCar("lexus", 12);
console.log(lexus);

let swift = new ToyotaCar();
swift.brand = "swift";
swift.mileage = 9;
console.log(swift);