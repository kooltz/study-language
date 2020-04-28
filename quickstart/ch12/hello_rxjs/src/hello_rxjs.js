"use strict";
exports.__esModule = true;
var Rx = require("@reactivex/rxjs");
Rx.Observable.of("a", "b", "c").subscribe(function (v) { return console.log(v); });
