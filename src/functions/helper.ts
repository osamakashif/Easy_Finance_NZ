export const sum1dArray = (arr: number[]) => {
    return (arr.reduce((partialSum, a) => partialSum + a, 0));
}