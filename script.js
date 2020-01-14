/**
 * Нужно описать оставшиеся методы, чтобы они выполянли такую же логику, что и стандартные методы js
 *
 * */

class MyArray {
    constructor() {
        for (let i = 0; i < arguments.length; i++) {
            this[i] = arguments[i];
        };
        this.length = arguments.length;
    }

    push(valueToAdd) {
        this[this.length] = valueToAdd;
        this.length++;
    }

    map(func) {
        const arrMap = new MyArray();

        for (let i = 0; i < this.length; i++) {
            let value = func(this[i]);
            arrMap.push(value);
        }
        return arrMap;
    }

    filter(func) {
        const arrFilter = new MyArray();

        for (let i = 0; i < this.length; i++) {
            if (func(this[i])) {
                arrFilter.push(this[i]);
            }
        };
        return arrFilter;
    }

    reduce(func, sum) {
        let firstValue = 0;

        for (let i = 0; i < this.length; i++) {
            if (i === 0) {
                firstValue = func(sum, this[i]);
                var value = firstValue;
            } else {
                value = func(value, this[i]);
            }
        };
        return value;
    }

    includes(valueToFind) {
        for (let i = 0; i < this.length; i++) {
            if (valueToFind === this[i]) {
                return true;
            }
        }
        return false;
    }
}

const arr1 = new MyArray(1, 2, -3, 4, 5);

arr1.push(100);
console.log(arr1);

const arrFilter = arr1.filter(function (item) {
    return item > 0;
})
console.log(arrFilter);

const arrMap = arr1.map(function (item) {
    return item * 2;
})
console.log(arrMap);

const valueReduce = arr1.reduce(function (sum, current) {
    return sum + current
}, 0);
console.log(valueReduce);

const arrInclude = arr1.includes(2);
console.log(arrInclude);




