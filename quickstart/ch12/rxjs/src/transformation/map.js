"use strict";
exports.__esModule = true;
var Rx = require("@reactivex/rxjs");
var streamData$ = Rx.Observable.from([1, 2, 3, 4, 5]);
var map = streamData$.map(function (val) { return val + 10; });
var mapSubscribe = map.subscribe(function (val) { return console.log(val); });
