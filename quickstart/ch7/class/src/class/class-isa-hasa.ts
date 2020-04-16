class Flashlight {
    constructor(public lightIntensity) { }
}

class Bicycle {
    constructor(public numberOfWheel: number) { }

    getNumberOfWheel(): number {
        return this.numberOfWheel;
    }
}

class MountainBike extends Bicycle {
    flashlight: Flashlight;

    constructor(public numberOfWheel: number, public hasBackSaddle: boolean) {
        super(numberOfWheel);

        this.flashlight = new Flashlight(90);
    }

    getHasBackSaddle() {
        return this.hasBackSaddle;
    }

    getNumberOfWheel(): number {
        return this.numberOfWheel;
    }
}

let hasBackSaddle = true;
let numberOfWheel = 2;
let mountainBike = new MountainBike(numberOfWheel, hasBackSaddle);
console.log("자전거 안장 유무 : " + mountainBike.getHasBackSaddle());
console.log("자전거 바퀴 개수 : " + mountainBike.getNumberOfWheel())
