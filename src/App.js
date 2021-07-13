import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">FotoCueva</Typography>
          <Typography>⛰️</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Fotos únicas
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              align="center"
              paragraph
            >
              Hola como están?, bievenidos a mi albúm de fotos, las fotografías
              que nos regala el mundo de la web no hay que perderlas, hay que
              recolectarlas y sumarlas a nuestro repositorio de vida.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Mis fotos
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="https://franciscofunes.netlify.app" target="_blank" variant="outlined" color="primary">
                    Porfolio
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Fuerza citizina
                    </Typography>
                    <Typography>
                      En esta imagen vemos la fuerza de la luz desnuda
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Ver
                    </Button>
                    <Button size="small" color="primary">
                      Editar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
                
                <Typography variant="h6" align="center" gutterBottom>
                    Todos los derechos reservados
                </Typography> 
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    FotoCueva    
                </Typography> 
      </footer>
    </>
  );
};

export default App;
