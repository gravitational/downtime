"use strict";
exports.__esModule = true;
exports.sortByDate = void 0;
function sortByDate(arr) {
    return arr.sort(function (a, b) {
        return +new Date(b.fields.date) - +new Date(a.fields.date);
    });
}
exports.sortByDate = sortByDate;
