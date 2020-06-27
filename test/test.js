var assert = require('assert');


// what we're unit testing in this block is the RGB function
describe('parseRGB', function() {

    it('should return {r,g,b}', function() {
        // arrange
        let fn = require("../index")
        let input = "" // won't matter

        // act
        let actual = fn(input)

        let rDefined = typeof actual.r !== "undefined"
        let gDefined = typeof actual.g !== "undefined"
        let bDefined = typeof actual.b !== "undefined"
        let allDefined = rDefined && gDefined && bDefined

        // assert
        assert.equal(allDefined, true)

    })

    it('should return {255,255,255} when passed #ffffff', function() {
        // arrange
        let fn = require("../index")
        let input = "#ffffff"
        let expected = { r: 255, g: 255, b: 255 }

        // act
        let actual = fn(input)

        // assert
        assert.equal(actual, expected)

    })

});