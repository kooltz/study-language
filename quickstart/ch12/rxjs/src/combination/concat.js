"use strict";
exports.__esModule = true;
var Rx = require("@reactivex/rxjs");
var one = Rx.Observable.of(1, 2, 3);
var two = Rx.Observable.of("a", "b", "c");
var sum = one.concat(two);
var subscribe = sum.subscribe(function (val) { return console.log(val); });
