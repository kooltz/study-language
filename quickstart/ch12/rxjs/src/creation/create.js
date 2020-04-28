"use strict";
exports.__esModule = true;
var Rx = require("@reactivex/rxjs");
var hello$ = Rx.Observable.create(function (observer) {
    observer.next("a");
    observer.next("b");
});
var subscribeHello = hello$.map(function (val) { return val + val; }).subscribe(function (val) { return console.log(val); });
