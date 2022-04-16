import { FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { useState } from "react";
import { calculateNZBusinessTax, calculateNZEmployeeTax } from "../functions/taxes";

export const TaxPage = () => {
    const [businessIncome, setBusinessIncome] = useState<number>(0);
    const [employmentIncome, setEmploymentIncome] = useState<number>(0);
    
    return (
        <>
            <Typography variant="h1" textAlign={"center"} paddingTop={"5%"}>Tax</Typography>
            <Typography variant="h3" textAlign={"center"} paddingTop={"5%"} paddingBottom={"5%"}>Business Tax NZ</Typography>
            <Grid container spacing={4} justifyContent="space-around">
                <Grid item xs={12} sm={4} display="flex">
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="business-income">Business Income</InputLabel>
                        <OutlinedInput
                            id="business-income"
                            type='number'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setBusinessIncome(event.target.value as unknown as number) }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="BusinessIncome"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={10} sm={4}>
                    <Typography variant="h5">Business Income: ${businessIncome}</Typography>
                    <Typography variant="h5">Tax to pay: ${calculateNZBusinessTax(businessIncome)}</Typography>
                </Grid>
            </Grid>
            <Typography variant="h3" textAlign={"center"} paddingTop={"5%"} paddingBottom={"5%"}>Employment Tax NZ</Typography>
            <Grid container spacing={4} justifyContent="space-around">
                <Grid item xs={12} sm={4} display="flex">
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="employment-income">Employment Income</InputLabel>
                        <OutlinedInput
                            id="employment-income"
                            type='number'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setEmploymentIncome(event.target.value as unknown as number) }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="EmploymentIncome"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={10} sm={4}>
                    <Typography variant="h5">Employment Income: ${employmentIncome}</Typography>
                    <Typography variant="h5">Tax to pay: ${calculateNZEmployeeTax(employmentIncome)}</Typography>
                </Grid>
            </Grid>
        </>
    );
}