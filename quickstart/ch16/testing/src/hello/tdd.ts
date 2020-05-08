import * as mocha from "mocha";
import hello from "./hello";

var assert = require("assert");
suite('동일한 숫자인지를 테스트', function() {
    setup(function() {

    });

    suite('hello()', function() {
        test('1과 동일한지', function() {
            assert.equal(1, hello(1));
        });

        test('2와 동일한지', function() {
            assert.equal(2, hello(2));
        });

        test('3과 동일한지', function() {
            assert.equal(3, hello(3));
        });
    });
});
