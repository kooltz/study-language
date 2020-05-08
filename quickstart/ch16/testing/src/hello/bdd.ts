import * as mocha from "mocha";
import hello from "./hello";

var assert = require("assert");

describe('동일한 숫자인지를 테스트', function() {
    before(function() {

    });
    after(function() {

    });
    beforeEach(function() {
        
    });
    afterEach(function() {

    });

    describe('hello()', function() {
        it('1과 동일한지', function() {
            assert.equal(1, hello(1));
        });
        it('2와 동일한지', function() {
            assert.equal(2, hello(2));
        });
        it('3과 동일한지', function() {
            assert.equal(3, hello(3));
        });
    });
});