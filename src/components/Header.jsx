import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

function Header(){
    return(
        <AppBar position="relative">
        <Toolbar>
            <Grid container>
                <Grid item xs={4}>
                    <Typography variant="h3">BRP</Typography>
                </Grid>
                <Grid item xs={4} textAlign={'center'}>
                    <p>LOGO BRP</p>
                </Grid>
                <Grid item xs={4} textAlign={'end'}>
                    <Typography variant="h6">Construindo vidas</Typography>
                </Grid>
            </Grid>
        </Toolbar>
        </AppBar>
    )
}

export default Header