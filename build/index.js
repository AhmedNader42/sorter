"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // Type guard
                if (this.collection instanceof Array) {
                    // this.collection.
                    // For sorting numbers
                    if (this.collection[j] > this.collection[j + 1]) {
                        var temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
                // For sorting string
                if (typeof this.collection === "string") {
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([1, 10, -1, 2, 3]);
sorter.sort();
console.log(sorter.collection);