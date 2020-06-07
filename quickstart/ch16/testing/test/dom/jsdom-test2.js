"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom = require("jsdom");
jsdom.env("https://en.wikipedia.org/wiki/korea", ["http://code.jquery.com/jquery.js"], function (err, window) {
    var $ = window.$;
    $('a').each(function () {
        console.log($(this).text());
    });
});
