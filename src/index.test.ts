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

    it("should handle new line and comma between numbers", () => {
        const result = strCalc.add("1\n2,3");
        expect(result).toEqual(6);
        const result1 = strCalc.add("4\n5,6\n7,8\n9\n10");
        expect(result1).toEqual(49);
    });

    it("should handle different delimiters between numbers", () => {
        const result1 = strCalc.add("//;\n1;2;3");
        expect(result1).toEqual(6);
        const result2 = strCalc.add("//*\n4*5*6*7");
        expect(result2).toEqual(22);
        const result3 = strCalc.add("//{\n8{9{0{11{10");
        expect(result3).toEqual(38);
    });

    it("should throw error for negative numbers", () => {
        expect(() => strCalc.add("1,2,-3,-4,5,-6")).toThrow("negative numbers not allowed -3,-4,-6");
        expect(() => strCalc.add("//*\n4*-5*6*-7")).toThrow("negative numbers not allowed -5,-7");
        expect(() => strCalc.add("-4\n5,6\n7,8\n9\n-10")).toThrow("negative numbers not allowed -4,-10");
    });

    
    it("should ignore numbers greater than 1000", () => {
        const result1 = strCalc.add("1000,2,3");
        expect(result1).toEqual(1005);
        const result2 = strCalc.add("//*\n1001*5*6");
        expect(result2).toEqual(11);
    });
});