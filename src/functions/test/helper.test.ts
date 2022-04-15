import { sum1dArray } from "../helper";

test('Sum values in a 1-D array of numbers', () => {
    const testArray = [1, 10, 100];
    expect(sum1dArray(testArray)).toEqual(111);
})