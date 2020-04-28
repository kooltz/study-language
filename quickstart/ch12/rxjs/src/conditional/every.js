"use strict";
exports.__esModule = true;
var Rx = require("@reactivex/rxjs");
var source = Rx.Observable.of(1, 10, 20, 30, 40);
var $every = source.every(function (val) { return val % 2 === 0; });
$every.subscribe(function (val) { return console.log(val); });
