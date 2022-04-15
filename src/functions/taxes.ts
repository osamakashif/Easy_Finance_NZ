import { businessTaxNZ, employeeTaxNZ1, employeeTaxNZ2, employeeTaxNZ3, employeeTaxNZ4, employeeTaxNZ5, employeeTaxNZBracketShiftValue1, employeeTaxNZBracketShiftValue2, employeeTaxNZBracketShiftValue3, employeeTaxNZBracketShiftValue4, taxNZLimitBracket1, taxNZLimitBracket2, taxNZLimitBracket3, taxNZLimitBracket4 } from "./taxValuesNZ";

export const calculateNZBusinessTax = (income: number) => {
    return (income * businessTaxNZ);
}

export const calculateNZEmployeeTax = (income: number) => {
    if (income <= employeeTaxNZBracketShiftValue1) {
        return (income * employeeTaxNZ1);
    } else if (income <= employeeTaxNZBracketShiftValue2) {
        return (((income - employeeTaxNZBracketShiftValue1) * employeeTaxNZ2) + taxNZLimitBracket1);
    } else if (income <= employeeTaxNZBracketShiftValue3) {
        return (((income - employeeTaxNZBracketShiftValue2) * employeeTaxNZ3) + taxNZLimitBracket1 + taxNZLimitBracket2);
    } else if (income <= employeeTaxNZBracketShiftValue4) {
        return (((income - employeeTaxNZBracketShiftValue3) * employeeTaxNZ4) + taxNZLimitBracket1 + taxNZLimitBracket2 + taxNZLimitBracket3);
    } else {
        return (((income - employeeTaxNZBracketShiftValue4) * employeeTaxNZ5) + taxNZLimitBracket1 + taxNZLimitBracket2 + taxNZLimitBracket3 + taxNZLimitBracket4);
    }
}