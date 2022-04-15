import { businessTaxNZ, employeeTaxNZ1, employeeTaxNZ2, employeeTaxNZ3, employeeTaxNZ4, employeeTaxNZ5, employeeTaxNZBracketShiftValue1, employeeTaxNZBracketShiftValue2, employeeTaxNZBracketShiftValue3, employeeTaxNZBracketShiftValue4, taxNZLimitBracket1, taxNZLimitBracket2, taxNZLimitBracket3, taxNZLimitBracket4 } from "./taxValuesNZ";

export const calculateNZBusinessTax = (income: number) => {
    return parseFloat((income * businessTaxNZ).toFixed(2));
}

export const calculateNZEmployeeTax = (income: number) => {
    if (income <= employeeTaxNZBracketShiftValue1) {
        return parseFloat((income * employeeTaxNZ1).toFixed(2));
    } else if (income <= employeeTaxNZBracketShiftValue2) {
        return parseFloat((((income - employeeTaxNZBracketShiftValue1) * employeeTaxNZ2) + taxNZLimitBracket1).toFixed(2));
    } else if (income <= employeeTaxNZBracketShiftValue3) {
        return parseFloat((((income - employeeTaxNZBracketShiftValue2) * employeeTaxNZ3) + taxNZLimitBracket1 + taxNZLimitBracket2).toFixed(2));
    } else if (income <= employeeTaxNZBracketShiftValue4) {
        return parseFloat((((income - employeeTaxNZBracketShiftValue3) * employeeTaxNZ4) + taxNZLimitBracket1 + taxNZLimitBracket2 + taxNZLimitBracket3).toFixed(2));
    } else {
        return parseFloat((((income - employeeTaxNZBracketShiftValue4) * employeeTaxNZ5) + taxNZLimitBracket1 + taxNZLimitBracket2 + taxNZLimitBracket3 + taxNZLimitBracket4).toFixed(2));
    }
}