import { Card, CardContent, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const pages = ['Budget', 'Tax', 'Plan'];
export const HomePage = () => {
    return (
        <>
            <Grid container justifyContent={"center"}>
                <NavLink to={'.'} style={{ color: "black", textDecoration: "none" }}>
                    <Typography variant="h1" textAlign={"center"} paddingTop={"10%"}>Easy Finance NZ</Typography>
                </NavLink>
            </Grid>
            <Grid container
                direction="row"
                justifyContent="space-evenly"
                paddingTop={"10%"}
                alignItems="center">
                {pages.map((page) => (
                    <NavLink to={'/' + page} style={{ textDecoration: "none", paddingBottom: "5%" }} key={page}>
                        <Grid item >
                            <Card variant="outlined" style={{ height: "12em", borderRadius: "2em", background: "aliceblue" }}>
                                <CardContent >
                                    <Typography variant="h4" textAlign={"center"} paddingTop={"25%"} width={"8em"}>
                                        {page}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </NavLink>
                ))}
            </Grid>
        </>
    );
}