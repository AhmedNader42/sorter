"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() >
            this.data[rightIndex].toLowerCase());
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this.data.split("");
        var temp = this.data[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = temp;
        this.data = characters.join("");
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;