function MyArray() {
    this.length = 0;
}

MyArray.isMyArray = function (array) {
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

MyArray.prototype = myArrayProto;

const array1 = new MyArray();
array1.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
