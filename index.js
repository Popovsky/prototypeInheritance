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
};

MyArray.prototype = myArrayProto;

const arr = new MyArray();
arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(arr);
