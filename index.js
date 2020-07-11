function MyArray() {
    this.length = 0;
}

MyArray.isMyArray = function (array) {
    return array instanceof MyArray;
};

