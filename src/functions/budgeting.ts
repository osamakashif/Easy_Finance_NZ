import { sum1dArray } from "./helper";

export const rule_50_30_20 = (value: number) => {
    return ([parseFloat((0.5 * value).toFixed(2)), parseFloat((0.3 * value).toFixed(2)), parseFloat((0.2 * value).toFixed(2))]);
}

export const point5 = (value: number) => {
    return (parseFloat((0.5 * value).toFixed(2)));
}

export const point3 = (value: number) => {
    return (parseFloat((0.3 * value).toFixed(2)));
}

export const point2 = (value: number) => {
    return (parseFloat((0.2 * value).toFixed(2)));
}

export const minIdealIncomeForTotalCosts = (totalCosts: number) => {
    return parseFloat((totalCosts * 2).toFixed(2)); // Ideal income
}

export const minIdealIncomeForCosts = (costs: number[]) => {
    const totalCosts = sum1dArray(costs);
    return parseFloat((totalCosts * 2).toFixed(2)); // Ideal income
}

export const isIncomeEnough = (currentIncome: number, idealIncome: number) => {
    if (currentIncome < idealIncome) {
        return false;
    } else {
        return true;
    }
}