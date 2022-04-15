export const businessTaxNZ = 0.28;

export const employeeTaxNZBracketShiftValue1 = 14000;
export const employeeTaxNZBracketShiftValue2 = 48000;
export const employeeTaxNZBracketShiftValue3 = 70000;
export const employeeTaxNZBracketShiftValue4 = 180000;

export const employeeTaxNZ1 = 0.105;
export const employeeTaxNZ2 = 0.175;
export const employeeTaxNZ3 = 0.3;
export const employeeTaxNZ4 = 0.33;
export const employeeTaxNZ5 = 0.39;

export const taxNZLimitBracket1 = employeeTaxNZBracketShiftValue1 * employeeTaxNZ1;
export const taxNZLimitBracket2 = (employeeTaxNZBracketShiftValue2 - employeeTaxNZBracketShiftValue1) * employeeTaxNZ2;
export const taxNZLimitBracket3 = (employeeTaxNZBracketShiftValue3 - employeeTaxNZBracketShiftValue2) * employeeTaxNZ3;
export const taxNZLimitBracket4 = (employeeTaxNZBracketShiftValue4 - employeeTaxNZBracketShiftValue3) * employeeTaxNZ4;