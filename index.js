// Your code here
class Polygon {
    constructor(intArray) {
        this.intArray = intArray;
    }
    get countSides() {
        return this.intArray.length;
    }
    get perimeter() {
        const sum = this.intArray.reduce((accum, current) => {
            return accum + current;
        },0)
        return sum;
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.intArray.length === 3) {
            const maxValue = Math.max(...this.intArray);
            const allEqual = this.intArray.every(element => element === this.intArray[0]);
            if (allEqual) {
                return true;
            }
            else {
                const filteredArray = this.intArray.filter((element) => element !== maxValue);
                const sumOfTwoSides = filteredArray[0] + filteredArray[1];
                if (sumOfTwoSides > maxValue) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            return "Not a triangle!";
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.intArray.length === 4) {
            const refValue = this.intArray[0];
            const filteredArray = this.intArray.filter((element) => element === refValue);
            if (filteredArray.length === 4) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return "Not a square!";
        }
    }
    get area() {
        const refValue = this.intArray[0];
        return refValue * refValue;       
    }
}

const tmp = new Triangle([5, 5, 5]);
console.log(tmp.isValid);
