function MyArray() {
    this.length = 0;
}

MyArray.isMyArray = function (array = new MyArray()) {
    return array instanceof MyArray;
};

const myArrayProto = new MyArray();
myArrayProto.push = function (...item) {
    for (let i = 0; i < item.length; i++) {
        this[this.length++] = item[i];
    }
    return this.length;
}
myArrayProto.find = function (callback) {
    let element;
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            element = this[i];
            break;
        }
    }
    return element;
}
myArrayProto.includes = function (searchElement, fromIndex = 0) {
    if (fromIndex < 0) {
        fromIndex = this.length + fromIndex;
    }
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
            return true;
        }
    }
    return false;
}
myArrayProto.join = function (separator = ',') {
    let string = '';
    for (let i = 0; i < this.length; i++) {
        if (i < this.length - 1) {
            string += this[i] + separator;
        } else string += this[i];
    }
    return string;
}
myArrayProto.filter = function (callback) {
    let array = new MyArray();
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            array.push(this[i]);
        }
    }
    return array;
}
myArrayProto.map = function (callback) {
    let array = new MyArray();
    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this));
    }
    return array;
}
myArrayProto.reduce = function (callback, initialValue) {
    let currentValue;
    let accumulator;
    if (initialValue === undefined) {
        currentValue = 1;
        accumulator = this[0];
    } else {
        currentValue = 0;
        accumulator = initialValue;
    }
    for (let i = currentValue; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}
myArrayProto.pop = function () {
    let lastElement = this[this.length - 1];
    delete this[this.length - 1];
    --this.length;
    return lastElement;
}
myArrayProto.flat = function (depth = 1) {
    let array = new MyArray();
    for (let i = 0; i < this.length; i++) {
        if (MyArray.isMyArray(this[i]) && depth-- > 0) {
            this[i].flat(depth).map(el => array.push(el));
        } else array.push(this[i]);
    }
    return array;
}

MyArray.prototype = myArrayProto;

const array1 = new MyArray();
const array3 = new MyArray();
const array4 = new MyArray();
array4.push(1, 2, 3);
array3.push(1, 2, 3, array4);
array1.push(1, 2, 3, array3, 4, 5, 6, 7, 8, 9);
const array2 = [1, 2, 3, [1, 2, 3], 4, 5, 6, 7, 8, 9];
console.log(array1.flat());
console.log(array2.flat());