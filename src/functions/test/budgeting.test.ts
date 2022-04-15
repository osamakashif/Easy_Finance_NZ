import { rule_50_30_20 } from "../budgeting";

test('Split income into 50%, 30%, 20%', () => {
    expect(rule_50_30_20(100)).toEqual([50, 30, 20]);
})