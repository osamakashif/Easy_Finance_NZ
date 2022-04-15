import { targetIncomeAsNZBusiness, targetIncomeAsNZEmployee} from "../targeting";

//NZ Tax reverse caculation for businesses

test('Calculate total NZ business income, based on target taxed income', () => {
    expect(targetIncomeAsNZBusiness(72)).toEqual(100);
})

//NZ Tax reverse caculation for employees

test('Calculate total NZ employee income, based on target taxed income - edge case', () => {
    expect(targetIncomeAsNZEmployee(12530)).toEqual(14000);
})

test('Calculate total NZ employee income, based on target taxed income - edge case', () => {
    expect(targetIncomeAsNZEmployee(40580)).toEqual(48000);
})

test('Calculate total NZ employee income, based on target taxed income - edge case', () => {
    expect(targetIncomeAsNZEmployee(55980)).toEqual(70000);
})

test('Calculate total NZ employee income, based on target taxed income - edge case', () => {
    expect(targetIncomeAsNZEmployee(129680)).toEqual(180000);
})

test('Calculate total NZ employee income, based on target taxed income - edge case', () => {
    expect(targetIncomeAsNZEmployee(0)).toEqual(0);
})

test('Calculate total NZ employee income, based on target taxed income', () => {
    expect(targetIncomeAsNZEmployee(8950)).toEqual(10000);
})

test('Calculate total NZ employee income, based on target taxed income', () => {
    expect(targetIncomeAsNZEmployee(20780)).toEqual(24000);
})

test('Calculate total NZ employee income, based on target taxed income', () => {
    expect(targetIncomeAsNZEmployee(41980)).toEqual(50000);
})

test('Calculate total NZ employee income, based on target taxed income', () => {
    expect(targetIncomeAsNZEmployee(62680)).toEqual(80000);
})

test('Calculate total NZ employee income, based on target taxed income', () => {
    expect(targetIncomeAsNZEmployee(100000)).toEqual(135701.49);
})

test('Calculate total NZ employee income, based on target taxed income', () => {
    expect(targetIncomeAsNZEmployee(141880)).toEqual(200000);
})