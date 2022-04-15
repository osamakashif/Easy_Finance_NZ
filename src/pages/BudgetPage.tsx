import { FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { useState } from "react";
import { point2, point3, point5 } from "../functions/budgeting";

export const BudgetPage = () => {
    const [income, setIncome] = useState<number>(0);

    return (
        <>
            <Typography variant="h1" textAlign={"center"} paddingTop={"2%"} paddingBottom={"2%"}>Budget</Typography>
            <Grid container spacing={2} justifyContent="space-around">
                <Grid item xs={12} sm={4} display="flex">
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="budgetable-income">Income To Budget</InputLabel>
                        <OutlinedInput
                            id="budgetable-income"
                            type='number'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setIncome(event.target.value as unknown as number) }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="IncomeToBudget"
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Typography variant="h3" textAlign={"center"} paddingTop={"2%"} paddingBottom={"2%"}>50-30-20 Split</Typography>
            <Grid container spacing={2} justifyContent="space-around">
                <Grid item xs={12} sm={3}>
                    <Typography variant="h5">Expenses: 50%</Typography>
                    <Typography variant="h5">Value set aside for expenses: $ {point5(income)}</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h5">Wants: 30%</Typography>
                    <Typography variant="h5">Value set aside for wants: $ {point3(income)}</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h5">Savings: 20%</Typography>
                    <Typography variant="h5">Value set aside for savings: $ {point2(income)}</Typography>
                </Grid>
            </Grid>
        </>
    );
}