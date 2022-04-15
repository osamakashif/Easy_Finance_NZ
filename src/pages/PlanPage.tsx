import { FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { useState } from "react";

export const PlanPage = () => {
    const [targetBusinessIncome, setTargetBusinessIncome] = useState<number>(0);
    const [targetEmploymentIncome, setTargetEmploymentIncome] = useState<number>(0);
    const [costs, setCosts] = useState<number>(0);

    return (
        <>
            <Typography variant="h1" textAlign={"center"} paddingTop={"2%"}>Plan</Typography>
            <Typography variant="h3" textAlign={"center"} paddingTop={"2%"} paddingBottom={"2%"}>Business Target NZ</Typography>
            <Grid container spacing={2} justifyContent="space-around">
                <Grid item xs={12} sm={4} display="flex">
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="target-business-income">Target Business Income</InputLabel>
                        <OutlinedInput
                            id="target-business-income"
                            type='number'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setTargetBusinessIncome(event.target.value as unknown as number) }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="TargetBusinessIncome"
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="space-around">
                <Grid item xs={12} sm={3}>
                    <Typography variant="h5">Amount desired: $ {targetBusinessIncome}</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h5">Total value to earn: $ TOCONNECTWITHFUNCTION</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h5">Tax to pay: $ TOCONNECTWITHFUNCTION</Typography>
                </Grid>
            </Grid>
            <Typography variant="h3" textAlign={"center"} paddingTop={"2%"} paddingBottom={"2%"}>Employmnet Target NZ</Typography>
            <Grid container spacing={2} justifyContent="space-around">
                <Grid item xs={12} sm={4} display="flex">
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="target-employment-income">Target Employment Income</InputLabel>
                        <OutlinedInput
                            id="target-employment-income"
                            type='number'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setTargetEmploymentIncome(event.target.value as unknown as number) }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="TargetEmpoymentIncome"
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="space-around">
                <Grid item xs={12} sm={3}>
                    <Typography variant="h5">Amount desired: $ {targetEmploymentIncome}</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h5">Total value to earn: $ TOCONNECTWITHFUNCTION</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h5">Tax to pay: $ TOCONNECTWITHFUNCTION</Typography>
                </Grid>
            </Grid>
            <Typography variant="h3" textAlign={"center"} paddingTop={"2%"} paddingBottom={"2%"}>Budget target</Typography>
            <Grid container spacing={2} justifyContent="space-around">
                <Grid item xs={12} sm={4} display="flex">
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="costs">Costs</InputLabel>
                        <OutlinedInput
                            id="costs"
                            type='number'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setCosts(event.target.value as unknown as number) }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Costs"
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={4} justifyContent="space-evenly">
                <Grid item xs={12} sm={4}>
                    <Typography variant="h5">Total costs: $ {costs}</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h5">Tax to pay: $ TOCONNECTWITHFUNCTION</Typography>
                </Grid>
            </Grid>
            <Typography variant="h4" textAlign={"center"} paddingTop={"2%"} paddingBottom={"2%"}>50-30-20 Split</Typography>
            <Grid container spacing={2} justifyContent="space-around">
                <Grid item xs={12} sm={3}>
                    <Typography variant="h5">Expenses: 50%</Typography>
                    <Typography variant="h5">Value set aside for expenses: $ {costs}</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h5">Wants: 30%</Typography>
                    <Typography variant="h5">Value set aside for wants: $ TOCONNECTWITHFUNCTION</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h5">Savings: 20%</Typography>
                    <Typography variant="h5">Value set aside for savings: $ TOCONNECTWITHFUNCTION</Typography>
                </Grid>
            </Grid>
        </>
    );
}