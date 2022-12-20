import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

function About() {
  return (
    <Grid container spacing={2}  minHeight={250} padding={'5% 7%'} columns={{ xs: 4, sm: 8, md: 12 }} sx={{backgroundColor: 'lightblue',textAlign:'center'}} >
      <Grid item xs={6} margin='auto'>
        <Typography variant="h2" color="GrayText" gutterBottom>
          Construindo vidas
        </Typography>
      </Grid>
      <Grid item xs={6} margin='auto'>
        <Typography variant="h5" textAlign={'center'} justifyContent='center' color="GrayText" paragraph>
        O tempo sempre foi o bem mais precioso que temos. Seja um investimento, uma etapa do seu projeto de vida ou a liberdade de ter sua casa própria, economizar tempo é fundamental. Ter uma empresa profissional, dedicada e experiente à sua disposição garantirá o sucesso do seu negócio e lhe dará mais tempo para focar no que mais importa: viver bem!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default About;
