import { businessTaxNZ, employeeTaxNZ1, employeeTaxNZ2, employeeTaxNZ3, employeeTaxNZ4, employeeTaxNZ5, employeeTaxNZBracketShiftValue1, employeeTaxNZBracketShiftValue2, employeeTaxNZBracketShiftValue3, employeeTaxNZBracketShiftValue4, taxNZLimitBracket1, taxNZLimitBracket2, taxNZLimitBracket3, taxNZLimitBracket4 } from "./taxValuesNZ";

export const targetIncomeAsNZBusiness = (moneyWanted: number) => {
    return parseFloat((moneyWanted / (1 - businessTaxNZ)).toFixed(2));
}

export const targetIncomeAsNZEmployee = (moneyWanted: number) => {
    if (+moneyWanted + +taxNZLimitBracket1 <= employeeTaxNZBracketShiftValue1) {
        return parseFloat((+moneyWanted/(1-+employeeTaxNZ1)).toFixed(2));
    } else if (+moneyWanted + +taxNZLimitBracket2 + +taxNZLimitBracket1 <= employeeTaxNZBracketShiftValue2) {
        return parseFloat((((+moneyWanted + +taxNZLimitBracket1) - +employeeTaxNZBracketShiftValue1)/(1-+employeeTaxNZ2) + +employeeTaxNZBracketShiftValue1).toFixed(2));
    } else if (+moneyWanted + +taxNZLimitBracket3 + +taxNZLimitBracket2 + +taxNZLimitBracket1 <= +employeeTaxNZBracketShiftValue3) {
        return parseFloat(((((+moneyWanted + +taxNZLimitBracket2 + +taxNZLimitBracket1) - +employeeTaxNZBracketShiftValue2)/(1-+employeeTaxNZ3)) + +employeeTaxNZBracketShiftValue2).toFixed(2));
    } else if (+moneyWanted + +taxNZLimitBracket4 + +taxNZLimitBracket3 + taxNZLimitBracket2 + taxNZLimitBracket1 <= employeeTaxNZBracketShiftValue4) {
        return parseFloat((((+moneyWanted + +taxNZLimitBracket3 + +taxNZLimitBracket2 + +taxNZLimitBracket1) - +employeeTaxNZBracketShiftValue3)/(1-+employeeTaxNZ4) + +employeeTaxNZBracketShiftValue3).toFixed(2));
    } else {
        return parseFloat((((+moneyWanted + +taxNZLimitBracket4 + +taxNZLimitBracket3 + +taxNZLimitBracket2 + +taxNZLimitBracket1) - +employeeTaxNZBracketShiftValue4)/(1-+employeeTaxNZ5) + +employeeTaxNZBracketShiftValue4).toFixed(2));
    }
}