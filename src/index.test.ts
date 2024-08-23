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
});