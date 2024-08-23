/**
 * Test cases for string calculator
 * 
 */

import { StringCalculator } from ".";


describe("String Calculator", () => {
    let strCalc: StringCalculator;

    beforeEach(() => {
        strCalc = new StringCalculator();
    })

    it("should return 0 for empty string", () => {
        const result = strCalc.add("");
        expect(result).toEqual(0);
    });

    it("should return number for single number given in string", () => {
        const result = strCalc.add("1");
        expect(result).toEqual(1);
    });

    it("should return sum of two numbers seperated by comma(,)", () => {
        const result = strCalc.add("1,2");
        expect(result).toEqual(3);
    });

    it("should return sum of multiple numbers seperated by comma(,)", () => {
        const result = strCalc.add("1,2,3,4,5,6,7,8,9,10");
        expect(result).toEqual(55);
    });

    it("should handle new line between numbers", () => {
        const result = strCalc.add("1\n2,3");
        expect(result).toEqual(6);
    });
});