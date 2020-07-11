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
myArrayProto.find = function (callback) {
    let element;
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)){
            element = this[i];
            break;
        }
    }
    return element;
}

MyArray.prototype = myArrayProto;

