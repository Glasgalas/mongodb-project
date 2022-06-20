// const isLeapYear = require("./isLeapYear");
import { isLeapYear } from "./isLeapYear.js";

describe("test isLeapYear function", () => {
  test("2008 - true", () => {
    const result = isLeapYear(2008);
    expect(result).toBe(true);
  });

  test("2003 - false", () => {
    expect(isLeapYear(2003)).toBe(false);
  });

  test("2000 - true", () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  test("1900 - true", () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  test("2003 - true", () => {
    expect(isLeapYear(2003)).toBe(false);
  });

  test("41 - error 'Year must be more of 42 or more'", () => {
    expect(() => isLeapYear(41)).toThrow("Year must be 42 or more");
  });

  test("2008.4 - error 'Year must be integer'", () => {
    expect(() => isLeapYear(2008.4)).toThrow("Year must be integer");
  });

  test("() - error 'Year must be exist'", () => {
    expect(() => isLeapYear()).toThrow("Year must be exist");
  });

  test("'2008' - error 'Year must be number'", () => {
    expect(() => isLeapYear("2008")).toThrow("Year must be number");
  });

  test("'2008' - error 'Year must be number'", () => {
    expect(() => isLeapYear("2008")).toThrow("Year must be number");
  });

  test("null- error 'Year must be number'", () => {
    expect(() => isLeapYear(null)).toThrow("Year must be number");
  });

  test("true - error 'Year must be number'", () => {
    expect(() => isLeapYear(true)).toThrow("Year must be number");
  });

  test("false - error 'Year must be number'", () => {
    expect(() => isLeapYear(false)).toThrow("Year must be number");
  });

  test("()=>{} - error 'Year must be number'", () => {
    expect(() => isLeapYear(() => {})).toThrow("Year must be number");
  });

  test("{} - error 'Year must be number'", () => {
    expect(() => isLeapYear({})).toThrow("Year must be number");
  });

  test("[] - error 'Year must be number'", () => {
    expect(() => isLeapYear([])).toThrow("Year must be number");
  });
});
