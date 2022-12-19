import { Typography } from "@mui/material"
import { Container } from "@mui/system"

function About(){
    return (
        <div style={{backgroundColor: 'lightblue'}}>
        <Container maxWidth='md'>
            <Typography variant="h2" align="center" color='GrayText' gutterBottom>
                Photo Album
            </Typography>
            <Typography variant="h5" align="center" color='GrayText' paragraph>
                Hello everyone this is is a photo album, im trying to do this sentence as long as possible, so we can see how this looks
            </Typography>
        </Container>
    </div>
    )
}

export default About