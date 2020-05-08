"use strict";
exports.__esModule = true;
var hello_1 = require("./hello");
var assert = require("assert");
describe('동일한 숫자인지를 테스트', function () {
    before(function () {
    });
    after(function () {
    });
    beforeEach(function () {
    });
    afterEach(function () {
    });
    describe('hello()', function () {
        it('1과 동일한지', function () {
            assert.equal(1, hello_1["default"](1));
        });
        it('2와 동일한지', function () {
            assert.equal(2, hello_1["default"](2));
        });
        it('3과 동일한지', function () {
            assert.equal(3, hello_1["default"](3));
        });
    });
});
