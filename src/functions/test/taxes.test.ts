import { calculateNZBusinessTax, calculateNZEmployeeTax} from "../taxes";

// NZ Tax calculation for businesses

test('Calculate example NZ business tax', () => {
    expect(calculateNZBusinessTax(123456)).toEqual(34567.68);
})

test('Calculate 0 NZ business tax - edge case', () => {
    expect(calculateNZBusinessTax(0)).toEqual(0);
})

// NZ Tax calculation for employees

test('Calculate NZ employee tax - edge case', () => {
    expect(calculateNZEmployeeTax(14000)).toEqual(1470);
})

test('Calculate NZ employee tax - edge case', () => {
    expect(calculateNZEmployeeTax(48000)).toEqual(7420);
})

test('Calculate NZ employee tax - edge case', () => {
    expect(calculateNZEmployeeTax(70000)).toEqual(14020);
})

test('Calculate NZ employee tax - edge case', () => {
    expect(calculateNZEmployeeTax(180000)).toEqual(50320);
})

test('Calculate 0 NZ employee tax - edge case', () => {
    expect(calculateNZEmployeeTax(0)).toEqual(0);
})

test('Calculate example NZ employee tax', () => {
    expect(calculateNZEmployeeTax(10000)).toEqual(1050);
})

test('Calculate example NZ employee tax', () => {
    expect(calculateNZEmployeeTax(24000)).toEqual(3220);
})

test('Calculate example NZ employee tax', () => {
    expect(calculateNZEmployeeTax(50000)).toEqual(8020);
})

test('Calculate example NZ employee tax', () => {
    expect(calculateNZEmployeeTax(80000)).toEqual(17320);
})

test('Calculate example NZ employee tax', () => {
    expect(calculateNZEmployeeTax(200000)).toEqual(58120);
})