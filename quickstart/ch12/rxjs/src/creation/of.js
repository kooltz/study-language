"use strict";
exports.__esModule = true;
var Rx = require("@reactivex/rxjs");
Rx.Observable.of(1, 2, 3).subscribe(function (val) { return console.log(val); });
Rx.Observable.of("a", "b", "c").subscribe(function (val) { return console.log(val); });
Rx.Observable.of(["a", "b"], ["c", "d"]).subscribe(function (val) { return console.log(val); });
