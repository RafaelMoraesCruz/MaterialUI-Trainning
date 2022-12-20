import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import Groups2Icon from '@mui/icons-material/Groups2';
import FoundationIcon from '@mui/icons-material/Foundation';

export default function Adjectives() {
  return (
    <Grid container backgroundColor='#1976d2' spacing={1} padding={'5% 7%'} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item textAlign={'center'} xs={3} >
        <Card sx={{backgroundColor: 'white',opacity: 0.85}}>
          <CardActionArea>
            <AccessAlarmIcon/>
            <CardContent>
              <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                Construções Rápidas
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Focados na agilidade, nossos profissionais garantem a execução rápida dos projetos.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item textAlign={'center'} xs={3} >
        <Card sx={{ backgroundColor: 'white',opacity: 0.85}}>
          <CardActionArea>
            <Groups2Icon />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Equipes Qualificadas
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Contamos com equipe treinada com larga experiência nos processos construtivos e com uma rede de parceiros.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
       <Grid item textAlign={'center'} xs={3} >
        <Card sx={{ backgroundColor: 'white',opacity: 0.85}}>
          <CardActionArea>
            <FoundationIcon />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Construções Rápidas
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Focados na agilidade, nossos profissionais garantem a execução rápida dos projetos.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
       <Grid item textAlign={'center'} xs={3} >
        <Card sx={{ backgroundColor: 'white',opacity: 0.85}}>
          <CardActionArea>
            <UpgradeIcon />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Tecnologia
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Alinhados com as inovações do mercado, nosso departamento de engenharia está em constante aprimoramento.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
