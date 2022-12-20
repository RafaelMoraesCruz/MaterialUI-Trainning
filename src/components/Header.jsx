import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

function Header(){
    return(
        <AppBar position="relative">
        <Toolbar>
            <Grid container>
                <Grid item xs={4}>
                    <Typography variant="h3">BRP</Typography>
                </Grid>
            </Grid>
        </Toolbar>
        </AppBar>
    )
}

export default Header